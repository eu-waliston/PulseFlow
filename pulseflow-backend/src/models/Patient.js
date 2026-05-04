import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    codigo: {type: Number, unique: true},
    name: {type: String, required: true},
    gravidade: {type: Number, required:true, min:1, max:10},
    status: {type: String, default: "aguardando"}
},{timestamps: true});

patientSchema.index({ codigo: 1})
patientSchema.index({gravidade: -1})

export default mongoose.model("Patient", patientSchema)
