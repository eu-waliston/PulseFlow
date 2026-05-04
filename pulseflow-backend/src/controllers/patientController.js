import Patient from "../models/Patient.js";
import { getNextPatient, getQueue } from "../services/queueService.js";

const createPatient = async (req, res) => {
    try {
        const { nome, gravidade } = req.body;

        const last = await Patient.findOne().sort({ codigo: -1 });
        const codigo = last ? last.codigo + 1 : 1;

        const patient = new Patient({ codigo, nome, gravidade })
        await patient.save();

        res.status(201).json(patient);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const findByCode = async () => {
    try {
        const patient = await patient.findOne({ codigo: req.params.codigo });

        if (!patient) return res.status(404).json({ error: "Não encontrado" });

        res.json(patient);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getQueueList = async (req, res) => {
    const queue = await getQueue();
    res.json(queue)
}

const callNext = async (req, res) => {
    const patient = await getNextPatient();

    if (!patient) return res.status(404).json({ error: "Fila vazia" });

    res.json(patient);
}

export {
    createPatient,
    findByCode,
    getQueueList,
    callNext,
};