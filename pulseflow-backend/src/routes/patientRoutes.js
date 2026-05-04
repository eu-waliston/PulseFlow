import express from "express";
import {
  createPatient,
  findByCode,
  getQueueList,
  callNext
} from "../controllers/patientController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Patients
 *   description: Gerenciamento de pacientes
 */

/**
 * @swagger
 * /api/patients:
 *   post:
 *     summary: Cadastrar paciente
 *     tags: [Patients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               gravidade:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 10
 *     responses:
 *       201:
 *         description: Paciente criado
 */
router.post("/", createPatient);

/**
 * @swagger
 * /api/patients/{codigo}:
 *   get:
 *     summary: Buscar paciente por código
 *     tags: [Patients]
 *     parameters:
 *       - in: path
 *         name: codigo
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Paciente encontrado
 *       404:
 *         description: Não encontrado
 */
router.get("/:codigo", findByCode);

/**
 * @swagger
 * /api/patients/queue:
 *   get:
 *     summary: Listar fila de atendimento
 *     tags: [Patients]
 *     responses:
 *       200:
 *         description: Lista de pacientes ordenada
 */
router.get("/queue", getQueueList);


/**
 * @swagger
 * /api/patients/next:
 *   patch:
 *     summary: Chamar próximo paciente
 *     tags: [Patients]
 *     responses:
 *       200:
 *         description: Paciente atendido
 *       404:
 *         description: Fila vazia
 */
router.patch("/next", callNext);

export default router;