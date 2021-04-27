"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TanksController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tanks = yield database_1.default.query("SELECT * FROM tanks");
            res.json(tanks);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // await pool.query('INSERT into tanks set ?', [req.body])
            res.json({ message: "Tank saved" });
        });
    }
    delete(req, res) {
        res.json({ text: "Deleting juego" });
    }
    update(req, res) {
        res.json({ text: "Updating juego" });
    }
    getTank(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const tank = yield database_1.default.query("SELECT * FROM tanks WHERE id = ?", [
                id,
            ]);
            console.log("getTank");
            if (tank.length > 0) {
                return res.json(tank[0]);
            }
            res.status(404).json({ text: "The tank does not exist" });
        });
    }
    getStartDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const date = yield database_1.default.query("SELECT startDate FROM tanks WHERE id = ?", [
                id,
            ]);
            if (date.length > 0) {
                return res.json(date);
            }
            res.status(404).json({ text: "The tank does not exist" });
        });
    }
    getDeliveryDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const date = yield database_1.default.query("SELECT deliveryDate FROM tanks WHERE id = ?", [
                id,
            ]);
            if (date.length > 0) {
                return res.json(date);
            }
            res.status(404).json({ text: "The tank does not exist" });
        });
    }
}
const tanksController = new TanksController();
exports.default = tanksController;
