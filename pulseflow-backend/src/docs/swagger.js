import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PulseFlow API",
      version: "1.0.0",
      description: "Sistema de triagem hospitalar com prioridade por gravidade"
    },
    servers: [
      {
        url: "http://localhost:5000"
      }
    ]
  },
  apis: ["./src/routes/*.js"], // onde ficam os comentários
};

export const swaggerSpec = swaggerJSDoc(options);