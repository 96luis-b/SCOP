
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
    res.status(200).json(response.rows)
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
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (id, name, email) VALUE ($1, $2, $3)', [1, name, email])
    console.log(response);
    res.send('user created')
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
