import db from '../../lib/db';

export default async function handler(req, res) {
  try {
        const result = await db.query('SELECT * from product');
        res.status(200).json({ 
        success: true,
        time: result.rows[0].current_time,
        message: result
    });
  } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ 
        success: false,
        error: error.message 
    });
  }
}