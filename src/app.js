const express=require("express");
const app=express();
const path=require("path");
const port=8000;
const hbs=require("hbs");
const static_path=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")
console.log(partials_path);
app.set("view engine","hbs");
app.set("views",template_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path)
app.get("",(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/weather",(req,res)=>{
    res.render('weather');
})

app.get("*",(req,res)=>{
    res.render('404error');
})

app.listen(port,()=>{
    console.log(`listening express at port no. ${port}`);
})