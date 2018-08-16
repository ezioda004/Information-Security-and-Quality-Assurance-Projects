const express = require("express");
const helmet = require("helmet");
const app = express();

const PORT = process.env.PORT || 1337;

app.use(helmet({
    hidePoweredBy: {
        setTo: 'PHP 4.2.0'
    }
}));

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/api/test", (req, res) => {
    console.log("we gett ittt");
    res.send("ok");
})

app.all("*", (req, res) => {
    console.log("here");
    res.send("Error");
})

app.listen(PORT, () => console.log(`Server is running on the Port ${PORT}`));


