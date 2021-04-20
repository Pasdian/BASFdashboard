import { Request, Response } from "express";

import pool from "../database";

class TanksController {
  public async list(req: Request, res: Response) {
    const tanks = await pool.query("SELECT * FROM tanks");
    res.json(tanks);
  }

  public async create(req: Request, res: Response): Promise<void> {
    // await pool.query('INSERT into tanks set ?', [req.body])
    res.json({ message: "Tank saved" });
  }

  public delete(req: Request, res: Response) {
    res.json({ text: "Deleting juego" });
  }

  public update(req: Request, res: Response) {
    res.json({ text: "Updating juego" });
  }

  public async getTank(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const tank = await pool.query("SELECT * FROM tanks WHERE id = ?", [id]);
    if (tank.length > 0){
      return res.json(tank[0])

    } 
    res.status(404).json({text: "The tank does not exist"})
    }
}

const tanksController = new TanksController();
export default tanksController;
