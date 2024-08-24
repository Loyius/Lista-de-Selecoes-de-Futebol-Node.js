import app from "./app.js"

//geralmente é utilizado a porta 3000
const PORT = process.env.port || 3000

app.listen(PORT,()=>{
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})