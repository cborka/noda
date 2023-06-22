import pkg from 'pg';
const { Client } = pkg;

const DB_HOST = "127.0.0.1";
const DB_NAME = "veda";
const DB_USER = "bor";
const DB_PASSWORD = "hello1";

// import {
//   DB_HOST,
//   DB_NAME,
//   DB_USER,
//   DB_PASSWORD
// 	} from '$env/static/private';


console.log('DB_USER = ' + DB_USER);

export const client = new Client({
  host: DB_HOST,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
});

// export const client = new Client({
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
// });

 client
   .connect()
   .then(() => console.log('База данных подключена'))
   .catch((err) => console.error('connection error', err.stack));

// console.log('dbs loading...');

// function get_date() {
//   client.query('SELECT NOW()', (err, res) => {
//     if (err) throw err
//     console.log('Data: ' + res.rowCount)
//   })
// }
 
// function get_name() {
//   client
//   .query('SELECT name FROM test WHERE id = $1', [2])
//   .then((result) => console.log(result.rowCount))
//   .catch((e) => console.error(e.stack))
// }

// function client_end() {
//   client
//   .end()
//   .then(() => console.log('client has disconnected'))
//   .catch((err) => console.error('error during disconnection', err.stack));
// }

// setTimeout(() => {
// client
//   .end()
//   .then(() => console.log('client has disconnected'))
//   .catch((err) => console.error('error during disconnection', err.stack));
// }, 5000
// );