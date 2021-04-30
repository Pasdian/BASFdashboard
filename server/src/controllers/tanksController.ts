import { Request, Response } from "express";
import { Tank } from "../../../client/src/app/tank";

import pool from "../database";

class TanksController {
  public async list(req: Request, res: Response) {
    const tanks: Tank[] = await pool.query("SELECT * FROM tanks");
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
    const tank = await pool.query("SELECT * FROM tanks WHERE id = ?", [
      id,
    ]);
    console.log("getTank")
    if (tank.length > 0) {
      return res.json(tank[0]);
    }
    res.status(404).json({ text: "The tank does not exist" });
  }

  public async getStartDate(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const date: string[] = await pool.query("SELECT startDate FROM tanks WHERE id = ?", [
      id,
    ]);
    if (date.length > 0) {
      return res.json(date[0]);
    }
    res.status(404).json({ text: "The tank does not exist" });
  }

  public async getDeliveryDate(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const date: string[] = await pool.query("SELECT deliveryDate FROM tanks WHERE id = ?", [
      id,
    ]);
    if (date.length > 0) {
      return res.json(date[0]);
    }
    res.status(404).json({ text: "The tank does not exist" });
  }

}

const tanksController = new TanksController();
export default tanksController;
