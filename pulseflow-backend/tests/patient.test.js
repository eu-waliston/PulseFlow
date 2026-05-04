import request from "supertest";
import app from "../src/app.js";
import { connect, close, clear } from "./setup.js";

beforeAll(async () => await connect());
afterAll(async () => await close());
afterEach(async () => await clear());

describe("API de Pacientes", () => {

  it("deve cadastrar um paciente", async () => {
    const res = await request(app)
      .post("/api/patients")
      .send({
        nome: "João",
        gravidade: 8
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.nome).toBe("João");
    expect(res.body.codigo).toBeDefined();
  });

  it("deve buscar paciente por código", async () => {
    const create = await request(app)
      .post("/api/patients")
      .send({ nome: "Maria", gravidade: 5 });

    const codigo = create.body.codigo;

    const res = await request(app)
      .get(`/api/patients/${codigo}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.nome).toBe("Maria");
  });

  it("deve retornar fila ordenada por gravidade", async () => {
    await request(app).post("/api/patients").send({ nome: "A", gravidade: 3 });
    await request(app).post("/api/patients").send({ nome: "B", gravidade: 9 });
    await request(app).post("/api/patients").send({ nome: "C", gravidade: 6 });

    const res = await request(app).get("/api/patients/queue");

    expect(res.body[0].gravidade).toBe(9);
    expect(res.body[1].gravidade).toBe(6);
    expect(res.body[2].gravidade).toBe(3);
  });

  it("deve chamar o próximo paciente corretamente", async () => {
    await request(app).post("/api/patients").send({ nome: "A", gravidade: 4 });
    await request(app).post("/api/patients").send({ nome: "B", gravidade: 10 });

    const res = await request(app).patch("/api/patients/next");

    expect(res.statusCode).toBe(200);
    expect(res.body.nome).toBe("B"); // maior prioridade
    expect(res.body.status).toBe("atendido");
  });

  it("deve retornar erro ao buscar paciente inexistente", async () => {
    const res = await request(app).get("/api/patients/999");

    expect(res.statusCode).toBe(404);
  });

});