// const mongoose = require("mongoose");

// process.env.NODE_ENV = "test";

// function clearDatebase ( ){
//     return new Promise(resolve => {
//         var count = 0;
//         var max = Object.keys(mongoose.connection.collections).length;
//         for(const i in mongoose.connection.collections){
//             mongoose.connection.collection[i].remove(function ()) {
//                 count++;
//                 if(count >= max){
//                     resolve();
//                 }
//             }
//         }
//     })
// }

// module.exports = async function setupTest(){
//     await clearDatebase();
// }