import mysql from "mysql"

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "toko_buah"
})

export default db