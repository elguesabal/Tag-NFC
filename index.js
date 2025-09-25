import express from "express";
import path from "path";
import fs from "fs";

const app = express();

app.get("/", (req, res) => res.redirect("/2/index.html"));

app.get("/:diretorio/:arquivo", (req, res) => {
    const { diretorio, arquivo } = req.params;
    const filePath = path.join(process.cwd(), "public", diretorio, arquivo);

    if (fs.existsSync(filePath)) return (res.sendFile(filePath));
    res.status(404).send("Arquivo não encontrado");
});

app.get("/:diretorio/public/:arquivo", (req, res) => {
    const { diretorio, arquivo } = req.params;
    const filePath = path.join(process.cwd(), "public", diretorio, "public", arquivo);

    if (fs.existsSync(filePath)) return (res.sendFile(filePath));
    res.status(404).send("Arquivo não encontrado");
});

app.listen(process.env.PORT || 3000, () => console.log("Servidor rodando"));