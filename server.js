const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

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


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });