import bcrypt from 'bcryptjs';

export async function hashPassword(password) {
  if (!password || typeof password !== 'string') {
    throw new Error('Неверно введен пароль');
  }
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export async function verifyPassword(password, hashedPassword) {
  if (!password || !hashedPassword || 
      typeof password !== 'string' || 
      typeof hashedPassword !== 'string') {
    return false;
  }
  return await bcrypt.compare(password, hashedPassword);
}