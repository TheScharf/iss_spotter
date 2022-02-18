// index.js
const {
  fetchMyIP,
  fetchCoordsByIP
} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });
const callback = (error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
};
//fetchMyIP(callback);
//fetchCoordsByIP('174.3.200.118',(callback));