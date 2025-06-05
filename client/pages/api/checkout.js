import db from "@/lib/db";

export default function handler(req, res){
    if (req.method !== "POST"){
        res.json('Разрешены только GET запросы');
        return;
    }
    const {name, email, city, postal, address, products} = req.body;
    const productsIds = products.split(',');
    const uniqueIds = [...new Set(productsId)];



}