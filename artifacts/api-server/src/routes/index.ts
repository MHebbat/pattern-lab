import { Router, type IRouter } from "express";
import healthRouter from "./health";
import generatePatternRouter from "./generatePattern";

const router: IRouter = Router();

router.use(healthRouter);
router.use(generatePatternRouter);

export default router;
