const express = require("express");
const helmet = require("helmet");
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
        if (input % input != 0) return {input: "invalid value"};
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

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/api/convert", (req, res) => {
    console.log(req.query);
    let x = convert(req.query.input, req.query.unit);
    console.log(x);
    res.send(x);
})

app.all("*", (req, res) => {
    console.log("here");
    res.send("Error");
})

app.listen(PORT, () => console.log(`Server is running on the Port ${PORT}`));