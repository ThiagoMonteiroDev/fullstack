require("dotenv").config(); 
const express = require("express");
const mongoose = require("mongoose");
const presencaRoutes = require("./routes/presencaRoutes");
const cors = require("cors")
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
mongoose.connect(process.env.DATABASE)
    .then(() => console.log("Conectado ao Banco de Dados"))
    .catch(err => console.log("Erro ao Conectar ao Banco de dados", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/presenca", presencaRoutes);


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
