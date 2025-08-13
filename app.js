import express from 'express';

const app = express();

const PORT = 3002;

app.get("/", (req, res)=>{
    res.send("Ola Mundo");
});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando ${PORT}`);
});
