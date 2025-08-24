import { Router } from "express";
import * as rh from "./requestHandler.js";

const router = Router();

router.route("/test").get(rh.SampleFunction);
router.route("/createuser").post(rh.createUser);
router.route("/getdata").get(rh.GetData);
router.route("/updateuser/:id").put(rh.updateUser);
router.route("/deleteuser/:id").delete(rh.deleteUser);

export default router;
