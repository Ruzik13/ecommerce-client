import jwt from 'jsonwebtoken';
import db from '@/lib/db';
import { responseCookiesToRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

export default async function handler(req,res){
    const { token } = req.cookies;

    if (!token){
        return res.status(401).json({message: 'Пользователь не аутенфицирован'});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await db.query('SELECT id, name, email FROM users WHERE id = $1', [decoded.userId]);

        if (user.rows.length === 0){
            return res.status(404).json({message: "Пользователь не найден"});
        }

        return res.status(200).json({user: user.rows[0]});
    }catch(error){
        return res.status(401).json({message: 'Неверный токен'});
    }
}