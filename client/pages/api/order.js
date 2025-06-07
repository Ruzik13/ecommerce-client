import db from "@/lib/db";

export default async function handler(req, res){
    if (req.method != 'POST'){
        return res.status(405).json({message: 'Метод не разрешен'})
    }

    const {product_ids, client_id, address, total_amount} = req.body;

    try{
        const response = await db.query('INSERT INTO orders (client_id, address, total_amount) VALUES ($1, $2,$3)', [client_id, address, total_amount]);
        res.status(200).json()
    }catch(error){

    }
}