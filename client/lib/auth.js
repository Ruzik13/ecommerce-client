import bcrypt from 'bcryptjs';

export async function hashPassword(password) {
  if (!password) {
    throw new Error('Password is required');
  }
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export async function verifyPassword(password, hashedPassword) {
  if (!password || !hashedPassword) {
    return false;
  }
  return await bcrypt.compare(password, hashedPassword);
}