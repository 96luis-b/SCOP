const express = require('express');
const app = express();

const { Pool } = require('pg');

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'25342581',
    database:'SCOP',
    port:'5432'
})

    // session
const login = async (req, res) => {
    const { username, password } = req.body;
    const response = await pool.query('SELECT * FROM user_1  WHERE username = $1 AND password = $2', [username, password])
    
    if(response.rows.length != 0){
        res.send(JSON.stringify({
                status:200,
                response: response.rows
            }));        
        
    }else{
        console.log("status 404")
        res.status(404).json({
            status: 404,
            body: [],
            response: "No se encuentra registrado o hay un error"
        })
    }
    
}

    // user
const getUsers = async (req, res) => {
    const { username, password } = req.body;
    const response = await pool.query('SELECT users FROM (username, password) VALUE ($1, $2)', [username, password])
    console.log(response);
    res.status(200).json(response.rows)
}

const createUser = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (id, name, email) VALUE ($1, $2, $3)', [1, name, email])
    console.log(response);
    res.send('user created')
}

    // count
const insertNewValue = async (req, res) => {
    const { quantity, date, time, id_user, name_product, id_oper } = req.body; 
    const resQuest = await pool.query('SELECT id_product FROM product WHERE name_product=$1',[name_product])
    const id_product = resQuest.rows[0].id_product
    await pool.query('INSERT INTO units_count (quantity, date, time, id_user, id_product, id_oper) VALUES ($1, $2, $3, $4, $5, $6)', [quantity, date, time, id_user, id_product, id_oper])
    res.status(200).json({
        status:200,
        response: "ok"
    })
}

module.exports = {
    // session
    login,

    // user
    getUsers,
    createUser,

    // count
    insertNewValue
}
