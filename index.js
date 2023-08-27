import express from "express";

const app = express();
const port = 3000;

app.get("/", function (req, res) {
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "Mango", "Banana"],
        htmlContent: "<i>This is some italic tags</i>"
    };
    res.render("index.ejs", data);
})

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});