import db from "@/lib/db";

export default async function handler(req, res){
    try{
        const results = await db.query('SELECT * FROM product');
        res.status(200).json(results.rows);
    }catch(error){
        res.status(500).json({error: "Ошибка на стороне сервера"})
    }
}