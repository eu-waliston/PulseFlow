# 🏥 PulseFlow — Sistema Inteligente de Triagem Hospitalar

> Transformando filas em fluxo. Prioridade salva tempo. Tempo salva vidas.

---

## 🚀 Visão

O **PulseFlow** é um sistema completo de triagem hospitalar desenvolvido com stack MERN, projetado para organizar atendimentos em unidades de saúde pública (UPA, hospitais, clínicas).

A aplicação prioriza pacientes com base na gravidade, garantindo que casos críticos sejam atendidos primeiro — de forma rápida, confiável e escalável.

---

## ✨ Funcionalidades

### 🧠 Backend (Node.js + Express + MongoDB)

* Cadastro de pacientes com:

  * Código de prontuário sequencial
  * Nome
  * Nível de gravidade (1–10)
* Fila dinâmica baseada em prioridade (gravidade + tempo)
* Busca rápida por código
* Chamada automática do próximo paciente
* Controle de status:

  * `aguardando`
  * `atendido`
* API REST estruturada
* Testes automatizados com Jest + Supertest
* Banco em memória para testes (MongoMemoryServer)
* Documentação interativa com Swagger

---

### 🎨 Frontend (React Native + Expo)

* Dashboard moderno estilo hospital tech
* Lista de pacientes em tempo (quase) real
* Destaque visual por nível de gravidade:

  * 🔴 Crítico
  * 🟠 Alto
  * 🟡 Moderado
  * 🟢 Baixo
* Botão para chamar próximo paciente
* Interface dark mode (foco e legibilidade)

---

## 🧱 Arquitetura

```
Backend
├── Controllers
├── Services (lógica de fila)
├── Models (MongoDB)
├── Routes
├── Tests
└── Swagger Docs

Frontend
├── Screens
├── Components
├── Services (API)
└── Utils (cores, helpers)
```

---

## ⚙️ Tecnologias

### Backend

* Node.js
* Express
* MongoDB + Mongoose
* Jest
* Supertest
* Swagger

### Frontend

* React Native (Expo)
* Axios

---

## 🔥 Como rodar o projeto

### 📦 Backend

```bash
# instalar dependências
npm install

# rodar servidor
npm run dev

# rodar testes
npm test
```

Acesse:

```
http://localhost:5000/api-docs
```

---

### 📱 Frontend

```bash
npx expo start
```

> ⚠️ Configure o IP da API no arquivo `api.ts`

---

## 📡 Endpoints principais

| Método | Rota                  | Descrição               |
| ------ | --------------------- | ----------------------- |
| POST   | /api/patients         | Cadastrar paciente      |
| GET    | /api/patients/queue   | Listar fila             |
| GET    | /api/patients/:codigo | Buscar paciente         |
| PATCH  | /api/patients/next    | Chamar próximo paciente |

---

## 🧪 Testes

Cobertura inclui:

* Cadastro de paciente
* Busca por código
* Ordenação por prioridade
* Chamada do próximo paciente
* Tratamento de erros

---

## 📘 Documentação

Swagger disponível em:

```
/api-docs
```

Interface interativa para testar todos os endpoints.

---

## 🌟 Diferenciais

* Arquitetura limpa e escalável
* Simulação eficiente de fila de prioridade
* Testes automatizados
* Documentação profissional
* Interface moderna com feedback visual claro
* Pronto para evolução com:

  * WebSockets
  * Autenticação
  * Dashboard analítico

---

## 🚀 Roadmap

* [ ] Tempo real com WebSocket
* [ ] Tela pública (recepção)
* [ ] Sistema de login (médicos)
* [ ] Métricas e analytics
* [ ] Deploy em produção

---

## 🧠 Aprendizados

Esse projeto demonstra:

* Modelagem de sistemas reais
* Estruturas de dados aplicadas (prioridade)
* Boas práticas de backend
* Testes automatizados
* Integração fullstack

---

## 💡 Inspiração

Criado com foco em resolver um problema real:
**organizar atendimentos de forma justa, eficiente e segura.**

---

## 📜 Licença

MIT

---

## 🤝 Contribuição

Sinta-se livre para abrir issues, sugerir melhorias ou evoluir o projeto.

---

## 👨‍💻 Autor

Desenvolvido com visão de produto e mentalidade de startup.

---

> “No fim, não é só código.
> É sobre criar sistemas que ajudam pessoas… nos momentos em que elas mais precisam.”
