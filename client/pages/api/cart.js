import db from "@/lib/db";

export default  async function handler(req, res){
    if (req.method === 'POST'){
        const {ids} = req.body;
        try{
            const {rows} = await db.query('SELECT * from product WHERE id= ANY($1::int[])', [ids]);
            res.status(200).json(rows);
        }catch(error){
            res.status(500).json({error: 'Database: error'});
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Данный метод не разрешен')
    }
}