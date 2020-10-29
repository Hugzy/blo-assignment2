const Migrations = artifacts.require("Migrations");
const BankingApp = artifacts.require("BankingApp")


module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(BankingApp);
};
