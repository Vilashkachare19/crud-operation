import express from "express";
import { createUser, getAll, findUserById, updateUser, DeleteUser} from "../controllers/usercontrollers.js";

const router = express.Router();

// Routes
router.post("/create", createUser); // Create a new user
router.get("/getall", getAll); // Get all users
router.get("/finduser/:id", findUserById); // Find user by ID
router.put("/update/:id", updateUser); // Update user by ID
router.delete("/delete/:id", DeleteUser);

export default router;
