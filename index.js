import express from "express";
import path from "path";
import fs from "fs";

const app = express();
// app.use(express.static("public"));

app.get("/", (req, res) => res.redirect("/1/index.html"));

app.get("/:diretorio/:arquivo", (req, res) => {
    const { diretorio, arquivo } = req.params;
    const filePath = path.join(process.cwd(), "public", diretorio, arquivo);

    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send("Arquivo não encontrado");
    }
});

app.listen(process.env.PORT || 3000, () => console.log("Servidor rodando"));