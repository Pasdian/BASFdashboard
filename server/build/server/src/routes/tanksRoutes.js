"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tanksController_1 = __importDefault(require("../controllers/tanksController"));
class TanksRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", tanksController_1.default.list);
        this.router.get("/:id", tanksController_1.default.getTank);
        this.router.get("/startDate/:id", tanksController_1.default.getStartDate);
        this.router.get("/deliveryDate/:id", tanksController_1.default.getDeliveryDate);
        this.router.post("/", tanksController_1.default.create);
        this.router.delete("/:id", tanksController_1.default.delete);
        this.router.put("/:id", tanksController_1.default.update);
    }
}
const tanks = new TanksRoutes();
exports.default = tanks.router;
