import Patient from "../models/Patient.js";

export const getNextPatient = async () => {
    return await Patient.findOneAndUpdate(
        { status: "aguardando"},
        { status: "atendido"},
        {
            sort: {gravidade: -1, createAt: 1},
            new: true
        },
    )
}

export const getQueue = async () => {
    return await Patient.find({ status: "aguardando"}).sort({gravidade: -1, createAt: 1})
}

