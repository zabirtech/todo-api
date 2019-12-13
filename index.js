let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static("public"));


let task = ["stuuff", "item"];

let update = ["finish jquery"];




app.post("/addtask", function(req, res) {
    let newTask = req.body.newtask;

    task.push(newTask);
    res.redirect("/");
});


app.post("/updatetask", function(req, res) {

    let updatetask = req.body.updatetask;

    update.push(updatetask);
    res.redirect("/");

});



app.post("/removetask", function(req, res) {
    let updatedTask = req.body.check;

    if (typeof updatedTask === "string") {
        update.push(updatedTask);

        task.splice(task.indexOf(updatedTask), 1);
    } else if (typeof updatedTask === "object") {
        for (let i = 0; i < updatedTask.length; i++) {
            update.push(updatedTask[i]);
            task.splice(task.indexOf(updatedTask[i]), 1);
        }
    }
    res.redirect("/");
});



app.get("/", function(req, res) {
    res.render("index", { task: task, update: update });
});


app.listen(3000, function() {
    console.log("node js är igång! ");
});