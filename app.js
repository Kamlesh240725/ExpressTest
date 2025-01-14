import express from "express"
import path from "path"
import userModel from "./models/usermodel.models.js"
const __dirname = import.meta.dirname
const app = express()
const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


app.get("/register",(req,res)=>{
    res.render("index");
})
app.get("/read", async(req,res)=>{
    let allUsers = await userModel.find();
    res.render("read", {allUsers});
})
app.post("/registeruser", async (req,res)=>{
    let {name, email, password, img_URL} = req.body;
    await userModel.create({
        name: name,
        email: email,
        password: password,
        img_URL: img_URL
    })
    res.redirect("/read");
})
app.post("/updateuser/:username", async (req,res)=>{
    let {name, email, password, img_URL} = req.body;
    await userModel.findOneAndUpdate({name: req.params.username}, {
        name: name,
        email: email,
        password: password,
        img_URL: img_URL
    })
    res.redirect("/read");
})
app.get("/deleteuser/:username",async (req,res)=>{
    let username = req.params.username;
    await userModel.findOneAndDelete({name: username});
    res.redirect("/read");   
})
app.get("/edituser/:username", async(req,res)=>{
    let username = req.params.username;
    let user = await userModel.findOne({name: username});
    res.render("edituser",{user});
})

app.listen(PORT);