const {userInfo} = require('./information.js');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${userInfo.name} and I work in ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));