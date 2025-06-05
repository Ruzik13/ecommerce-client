import db from "@/lib/db";

export default async function handler(req, res){
    if (req.method === 'POST'){
        const {id} = req.body;
        try{
            const response = await db.query('SELECT * FROM product WHERE id=$1', [id]);
            res.status(200).json(response.rows[0])
        }catch(error){
            res.status(500).json({error:"Ошибка на стороне сервера"});
        }
    }else{
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Метод ${req.method} не разрешен`);
    }
}