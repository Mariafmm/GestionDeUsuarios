import { Router } from "express";
import { getUsers, getUserById, deleteUser, createUser, updateUser } from "../controllers/users.controllers.js";

const router = Router();

//obtener todos los usuarios
router.get("/users", getUsers); 
//obtener usuario por id
router.get("/users/:id", getUserById);
//crear usuario
router.post("/users", createUser);
//modificar usuario
router.put("/users/:id", updateUser);
//eliminar usuario
router.delete("/users/:id", deleteUser);

export default router;