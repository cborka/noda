//var ip = require('ip');

module.exports = function(req, res, next) {
  console.log('mylogger2=====================================================');

  let ip = getIpV4(req.ip); // Вычленяем последний элемент из "::ffff:127.0.0.1"

  //console.log('ip =' + ip);
  console.log('dt =' + dateTime());

  next();
};

//
// Вычленяем последний элемент из строки вида "::ffff:127.0.0.1"
//
function getIpV4(ip) {
  // split(':') - разбиваем строку "::ffff:127.0.0.1" на массив строк, 
  // slice(-1) - обрезаем массив до одного последнего элемента и
  // берём этот элемет массива, который теперь первый и единственный 
  return ip.split(':').slice(-1)[0]; 
};


//
// Вычленяем последний элемент из строки вида "::ffff:127.0.0.1"
//
function dateTime() {
  // let dn = Date.now(); 
  // let dt = new Date(); 
  return toYYYYMMDDHHMMSS(new Date())
};

// Возвращает дату-время в виде ГГГГ-ММ-ДД ЧЧ:ММ:СС.МС
function toYYYYMMDDHHMMSS(s)
{
  return s.getFullYear() + '-'+ ("0"+(1+s.getMonth())).slice(-2) + '-' + ("0"+s.getDate()).slice(-2)+" "+
    ("0"+s.getHours()).slice(-2)+":"+("0"+s.getMinutes()).slice(-2)+":"+("0"+s.getSeconds()).slice(-2) +"."+s.getMilliseconds();
}

// var mylogger = function(req, res, next) {
//   console.log('mylogger');
//   next();
// };

// module.exports = mylogger;