import express from "express";

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => res.redirect("/1/index.html"));

app.listen(process.env.PORT || 3000, () => console.log("Servidor rodando"));