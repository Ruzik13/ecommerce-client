import db from '@/lib/db';
import { hashPassword } from '@/lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, password } = req.body;

  // Валидация входных данных
  if (!name || !email || !password) {
    return res.status(400).json({ 
      message: 'Name, email and password are required' 
    });
  }

  try {
    // Проверяем существование пользователя
    const userExists = await db.query(
      'SELECT * FROM users WHERE email = $1', 
      [email]
    );
    
    if (userExists.rows.length > 0) {
      return res.status(409).json({ 
        message: 'User already exists' 
      });
    }

    // Хешируем пароль
    const hashedPassword = await hashPassword(password);

    // Создаем пользователя
    const newUser = await db.query(
      `INSERT INTO users (name, email, password) 
       VALUES ($1, $2, $3) 
       RETURNING *`,
      [name, email, hashedPassword]
    );

    return res.status(201).json({ 
      user: newUser.rows[0] 
    });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error.message // Отладочная информация
    });
  }
}