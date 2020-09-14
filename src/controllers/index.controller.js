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

const getOper = async (req, res) => {
    const { date, oper } =  req.body;

    // console.log(date)
    // console.log(oper)
//     console.log(oper)
//     console.log(`${oper}`)
//     console.log(oper.length)
//     console.log(`${oper}`.length > 0)
//     console.log(parseInt(`${oper}`).valueOf()==Number)
//     // let resGetOper;
//    // let resCount = await pool.query('SELECT id_oper, id_product, SUM(quantity) FROM units_count WHERE date = $1 AND id_oper = $2 GROUP BY id_oper, id_product', [date, id_oper])
//    if(oper==Number){
//         if(oper.length > 6){
//             //busqueda de operario por cedula de identidad
//             console.log("ic")
//             resGetOper = await pool.query('SELECT * FROM oper_produc WHERE ic = $1', [oper])
//         }else{
//             // busqueda de operario por codigo de identificacion
//             console.log("id")
//             resGetOper = await pool.query('SELECT * FROM oper_produc WHERE id_oper = $1', [oper])
//         }
//    }else{   
//        // busqueda de operario por nombre(s) y apellido(s)
//         console.log("name")
//         resGetOper = await pool.query('SELECT * FROM oper_produc WHERE name_oper = $1', [oper])
//     }
  // let resGetOper = await pool.query('SELECT * FROM oper_produc WHERE id_oper = $1', [oper])
  let resGetOper = await pool.query('SELECT * FROM oper_produc INNER JOIN workstation ON oper_produc.id_workstation = workstation.id_workstation WHERE oper_produc.id_oper = $1', [oper])
//   console.log(resGetOper.rows)
  if(resGetOper.rows.length==0){
    res.status(404).json({
        status:404,
        body:"No se encuentra"
    })
    return
  }
  let resCount = await pool.query('SELECT id_oper, units_count.id_product, name_product, SUM(quantity) FROM units_count INNER JOIN product ON product.id_product = units_count.id_product WHERE date = $1 AND id_oper = $2 GROUP BY id_oper, units_count.id_product, name_product', [date, oper])
    
    res.status(200).json({
        status:200,
        body:{
            resCount: resCount.rows,
            resGetOper:resGetOper.rows
        }
    })
}
module.exports = {
    // session
    login,
    getOper,

    // user
    getUsers,
    createUser,

    // count
    insertNewValue
}
