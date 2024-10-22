const App = require("express")()
const Variaveis = require("./Variaveis")


App.get("/Series",(req,res)=>{
    res.send(Variaveis.Series)
})

App.get("/Curiosidades",(req,res)=>{
    res.send(Variaveis.Curiosidades)
})

App.get("/Piadas",(req,res)=>{
    res.send(Variaveis.Piadas)
})

App.get("/Dicas",(req,res)=>{
    res.send(Variaveis.Dicas)
})

App.listen(5000,()=>{
    console.log("Startings!")
})