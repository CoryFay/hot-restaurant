const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const currentCustomers = [
    {
        id: "afhaque89",
        name: "Ahmed",
        email: "ahmed@example.com",
        phone: "000-000-0000"
    }
];

const waitlistCustomers = [
    {
        id: "saimaCool",
        name: "Saima",
        email: "saima@example.com",
        phone: "000-000-0000"
    }
];

// const tables = [
//     currentCustomers,
//     waitlistCustomers
// ];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

// app.get("/add", function (req, res) {
//     res.sendFile(path.join(__dirname, "add.html"));
// });

app.get("/api/tables", function (req, res) {
    return res.json(currentCustomers);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlistCustomers);
});

if (currentCustomers.length <= 5) {
    app.post("/api/tables", function (req, res) {

        var newCustomer = req.body;

        console.log(newCustomer);

        currentCustomers.push(newCustomer);

        res.json(newCustomer);
    });
} else {
    app.post("/api/waitlist", function(req, res) {

        var newCustomer = req.body;
    
        console.log(newCustomer);
      
        waitlistCustomers.push(newCustomer);
      
        res.json(newCustomer);
      });
}


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});