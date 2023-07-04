import express from "express";
const router = express.Router();

import {
  createUser,
  getUser,
  getId,
  deleteUser,
  updateUser,
} from "../controllers/users.js";



router.get("/", getUser);

router.post("/", createUser);

router.get("/:id", getId);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
