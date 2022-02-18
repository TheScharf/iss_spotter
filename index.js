// index.js
const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes
} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });
// const callback = (error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// };
//fetchMyIP(callback);
//fetchCoordsByIP('174.3.200.118',(callback));
const coords =  { latitude: 53.5222, longitude: -113.4551 }
const callback = (error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , ip);
};
//fetchISSFlyOverTimes({ latitude: 53.5222, longitude: -113.4551 }, callback);