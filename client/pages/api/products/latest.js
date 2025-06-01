import db from "@/lib/db";

export default async function handler(req, res) {
  try {
    const results = await db.query(
      'SELECT * FROM product ORDER BY title ASC LIMIT 5'
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
}