const web3 = require("web3")
const init_holders = [
  {
     address: "0x37B8516a0F88E65D677229b402ec6C1e0E333004",
     balance: web3.utils.toBN("500000000000000000000").toString("hex") // 500e18
  },
  {
     address: "0x6c468CF8c9879006E22EC4029696E005C2319C9D",
     balance: web3.utils.toBN("500000000000000000000").toString("hex") // 500e18
  },
  
  {
     address: "a",
     balance: web3.utils.toBN("500000000000000000000000000").toString("hex") // 500000000e18
  }, 
  
];

exports = module.exports = init_holders
