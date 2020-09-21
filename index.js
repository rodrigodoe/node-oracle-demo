var path = require("path");
process.env["PATH"] =
  path.join(__dirname, "/instantclient") + ";" + process.env["PATH"];
process.env["ORACLE_HOME"] = path.join(__dirname, "/instantclient");

const express = require("express");
const app = express();
const PORT = process.env["DEV"] ? 4000 : 5000;
const { db } = require("./db");






const start = async () => {
    try{
        app.listen(PORT, () => {
            console.log("RODANDO NA PORTA: " + PORT);
          }); 
          const query = await db("DUAL");
          console.log(query);
    }catch(err){
        console.log(err.message);
    }

}

start();
