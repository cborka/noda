//var glob = require('./glob.js');
var glob = require('./glob.js');

function log1(req, res, next) {
  //  console.log('class mylogger2============================');
  
    let ip = getIpV4(req.ip); // Вычленяем последний элемент из "::ffff:127.0.0.1"
  
    console.log('dt = ' + toYYYYMMDDHHMMSS(new Date()) + ', ' + ++glob.requestId + ', ' + glob.logLevel +
    ', ip = ' + ip +
    ', url = ' + req.url
    );
    //console.log();
  
    next();
};
  
function log2(msg) {
    console.log('tt = ' + toYYYYMMDDHHMMSS(new Date())+ ', ' + glob.requestId+ ', ' + glob.logLevel + ', ' + msg);

};
  
function log3(req, res, next) {
    console.log('dt = ' + toYYYYMMDDHHMMSS(new Date()) + ', ' + glob.requestId + ', ' + glob.logLevel + '<<<'
    );
 
    next();
};
// class MyContext {
//   id = 2;

//   getId() {
//     return this.id;
//   }

//   setId(n) {
//     this.id = n;
//   }

//   log() {
//     console.log('id = ' + this.id)
//   }
//   log2(req, res, next) {
//     console.log('id22 = ' + this.id)
//   }
// }

//const myLogger = new MyLogger;

  
//
// Вычленяем последний элемент из строки вида "::ffff:127.0.0.1"
//
function getIpV4(ip) {
  // split(':') - разбиваем строку "::ffff:127.0.0.1" на массив строк, 
  // slice(-1) - обрезаем массив до одного последнего элемента и
  // берём этот элемет массива, который теперь первый и единственный 
  return ip.split(':').slice(-1)[0]; 
};

// Возвращает дату-время в виде ГГГГ-ММ-ДД ЧЧ:ММ:СС.МС
function toYYYYMMDDHHMMSS(s)
{
  return s.getFullYear() + '-'+ ("0"+(1+s.getMonth())).slice(-2) + '-' + ("0"+s.getDate()).slice(-2)+" "+
    ("0"+s.getHours()).slice(-2)+":"+("0"+s.getMinutes()).slice(-2)+":"+("0"+s.getSeconds()).slice(-2) +"."+s.getMilliseconds();
}

module.exports = {log1, log2, log3};