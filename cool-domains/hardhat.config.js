/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-14 15:02:33
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-15 11:04:44
 * @FilePath: \cool-domains\hardhat.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/QrKpNBlayed3_0DcwiYlZIXT7y42QLYX",
      accounts: ["4394a9ab9c42f2efccd246ed9ecdcd3127fbe6f07f4eb66874d5e575b686b311"],
      // gasLimit: 500000,
      // gas: 210000,
      // gasPrice: 80000,
    }
  }
};