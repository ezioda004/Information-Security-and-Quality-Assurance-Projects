const express = require("express");
const helmet = require("helmet");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 1337;

//logic

const convert = (input, unit) => {
    const obj = {
        gal: 3.78541,
        lbs: 0.453592,
        mi: 1.60934,
        L: 1 / 3.78541,
        kg: 1 / 0.453592,
        km: 1 / 1.60934
    }
    if (unit in obj) {
        if (input % input != 0) return {initNum: input, initUnit: unit, returnNum: "Invalid value"};
        const keys = Object.keys(obj);
        let rUnit = keys.indexOf(unit) >= (keys.length / 2) ? keys[keys.indexOf(unit) - 3] : keys[keys.indexOf(unit) + 3];
        let returnNum =  (obj[unit] * input).toFixed(5);
        return {
            initNum: input,
            initUnit: unit,
            returnNum: returnNum,
            returnUnit: rUnit,
            string: `${input} ${unit} converts to ${returnNum} ${rUnit}`
        }
    }
}

app.use(helmet({
    hidePoweredBy: {
        setTo: 'PHP 4.2.0'
    }
}));

app.use(express.static(path.join(__dirname, "../views", "build")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views", "build", "index.html"));
});

app.get("/api/convert", (req, res) => {
    console.log("here", req.query)
    let query = {input: req.query.input, unit: req.query.unit};
    if (!("unit" in req.query)){
        const tmp = req.query.input.match(/[0-9]+|[a-z]+/gi);
        query.input = tmp[0] || 1;
        query.unit = tmp[1] || "gal";
    }
    console.log(query)
    let x = convert(query.input, query.unit);
    console.log(x);
    res.send(x);
})

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views", "build", "index.html"));
})



app.listen(PORT, () => console.log(`Server is running on the Port ${PORT}`));