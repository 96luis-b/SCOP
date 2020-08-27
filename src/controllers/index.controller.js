const { Pool } = require('pg');

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'25342581',
    database:'firstapi',
    port:'5432'
})


const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users')
    res.status(200).json(response.rows)
}

const createUser = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (id, name, email) VALUE ($1, $2, $3)', [1, name, email])
    console.log(response);
    res.send('user created')
}

module.exports = {
    getUsers,
    createUser
}