import jwt from 'jsonwebtoken';
import db from '@/lib/db';

export default async function handler(req, res) {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ message: 'Not authenticated' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await db.query(
            'SELECT id, name, email FROM users WHERE id = $1', 
            [decoded.id]
        );

        if (user.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ user: user.rows[0] });
    } catch (error) {
        console.error('Token verification failed:', error);
        return res.status(401).json({ message: 'Invalid token' });
    }
}