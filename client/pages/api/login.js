import db from '@/lib/db';
import { verifyPassword } from '@/lib/auth';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.setHeader('Allow', ['POST'])
             .status(405)
             .json({ message: 'Метод не разрешен' });
  }

  try {
    const { email, password } = req.body;

    // Жесткая валидация входных данных
    if (!email || !password || 
        typeof email !== 'string' || 
        typeof password !== 'string') {
      return res.status(400).json({ 
        message: 'Необходимо ввести email и пароль' 
      });
    }

    // Ищем пользователя
    const userResult = await db.query(
      `SELECT id, name, email, password 
       FROM users 
       WHERE email = $1`, 
      [email.trim().toLowerCase()]
    );

    const user = userResult.rows[0];

    // Унифицированное сообщение об ошибке для безопасности
    if (!user) {
      return res.status(401).json({ 
        message: 'Неверный email или пароль' 
      });
    }

    // Проверяем пароль с дополнительной валидацией
    const isPasswordValid = await verifyPassword(
      password.trim(),
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ 
        message: 'Неверный email или пароль' 
      });
    }

    // Генерируем JWT токен
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name
      },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Устанавливаем безопасные куки
    res.setHeader('Set-Cookie', [
      `token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400${
        process.env.NODE_ENV === 'production' ? '; Secure' : ''
      }`
    ]);

    // Возвращаем данные пользователя без пароля
    return res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ 
      message: 'Internal server error' 
    });
  }
}