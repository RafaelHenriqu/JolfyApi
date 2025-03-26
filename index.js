const App = require("express")()
const Texts = require("./Json/Texts.json")


App.get("/Series",(req,res)=>{
    res.send(Texts.Series)
})

App.get("/Curiosidades",(req,res)=>{
    res.send(Texts.Curiosidades)
})

App.get("/Piadas",(req,res)=>{
    res.send(Texts.Piadas)
})

App.get("/Dicas",(req,res)=>{
    res.send(Texts.Dicas)
})

App.get("/",(req,res)=>{
    res.send(Texts)
})

App.listen(5000,()=>{
    console.log("Startings!")
})