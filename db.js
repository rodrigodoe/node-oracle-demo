const { ORACLE_USER, ORACLE_PASSWORD, ORACLE_CONNECTSTRING } = require(process
    .env["production"]
    ? "./config/production"
    : "./config/test");
  
  console.log("USING CONNECTION STRING -> " + ORACLE_CONNECTSTRING);
  
  const db = require("knex")({
    dialect: "oracledb",
    client: "oracledb",
    connection: {
      user: ORACLE_USER,
      password: ORACLE_PASSWORD,
      connectString: ORACLE_CONNECTSTRING,
    },
    pool: {
      min: 0,
      max: 5,
    },
    debug: true,
  });
  
  module.exports = { db };
  