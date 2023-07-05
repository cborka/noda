//import {logLevel} from './lib/logger';
var express = require('express');
var glob = require('../lib/glob.js');
var db = require('../db.js');
//var myLogger = require('../lib/logger');
var {logLevel, log2} = require('../lib/logger');
var router = express.Router();
require('dotenv').config();


const z = (req, res) => {
  res.send('z function');
}
router.get('/z', z);

const t = async function(req, res, next) {
  const { rows } = await db.query('SELECT NOW()')
  let dt =  Date(rows[0].now);
  
  res.send('Время ' + typeof(dt));
}
router.get('/t', t);


/* GET home page. */
router.get('/', function(req, res, next) {
  
  console.log(process.env.DB_NAME);

  //console.log(myLogger.getId());
  logLevel += 10;
  log2('glob.logLevel = ' + logLevel);
  // console.log(glob.requestId);
  // console.log(glob.logLevel);
   
  res.render('index', { title: 'Express' });
});
//  console.log('Cookies: ',  JSON.stringify(req.cookies))
//  console.log('Signed Cookies: ', JSON.stringify(req.signedCookies))});

router.get('/x', async function(req, res, next) {
  // res.writeHead(200, {
  //   'Content-Type': 'text/plain'
  // });

  const { rows } = await db.query('SELECT NOW()')
  res.json(rows)
  // console.log(JSON.stringify(rows));
  // db.query('SELECT NOW()', (err, res2) => {
  //   if (err) throw err
  //   console.log('Data: ' + JSON.stringify(res2.rows, null, 2));
  //   res.json(res2.rows)
  //   //res.send(res2.rows)
  // })

  //res.send('<h2>index</h2>xxxindex');
});



module.exports = router;
