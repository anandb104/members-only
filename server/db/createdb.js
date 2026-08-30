const {Client}=require("pg");
require("dotenv").config();
const sql=`
CREATE TABLE IF NOT EXISTS users(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
username VARCHAR(100) UNIQUE NOT NULL,
password VARCHAR(100) NOT NULL,
is_member BOOL DEFAULT FALSE,
is_admin BOOL DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS message(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
title VARCHAR(100) NOT NULL,
text TEXT NOT NULL,
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
user_id INTEGER references users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS session(
sid VARCHAR PRIMARY KEY,
sess JSON NOT NULL,
expire TIMESTAMP NOT NULL
);
CREATE INDEX expired_session
ON session(expire);
`
async function main()
{
    console.log("seeding");
    const client=new Client({
        connectionString:process.env.DATABASE_URL,
        ssl: process.env.DB_SSL === "true"
        ? { rejectUnauthorized: false }
        : false
    }
    )
   await client.connect();
   await client.query(sql);
   await client.end();
    console.log("done");
}
main();