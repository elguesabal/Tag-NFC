import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Te amo");
});

app.listen(process.env.PORT || 3000, () => console.log("Servidor rodando"));