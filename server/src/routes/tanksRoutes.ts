import { Router } from "express";

import tanksController from "../controllers/tanksController";

class TanksRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", tanksController.list);
    this.router.get("/:id", tanksController.getTank);
    this.router.get("/startDate/:id", tanksController.getStartDate);
    this.router.get("/deliveryDate/:id", tanksController.getDeliveryDate);
    this.router.post("/", tanksController.create);
    this.router.delete("/:id", tanksController.delete);
    this.router.put("/:id", tanksController.update);

  }
}
const tanks = new TanksRoutes();
export default tanks.router;
