const BankingApp = artifacts.require("BankingApp");

contract("Should test the banking app", async accounts => {
    it("Should get the balance of the account", async () => {
        let instance = await BankingApp.deployed();
        let balance = await instance.getBalance();

        assert.equal(balance.valueOf(), 20000);
    });
    it("Should withdraw an amount from the address", async () => {
        let instance = await BankingApp.deployed();
        let amount = 200;
        let balanceBefore = await instance.getBalanceFromAddress(accounts[0]);
        // Cannot use the returned value because it is wrapped in some weird object that i don't understand
        let succeeded = await instance.withdraw(accounts[0], amount);
        let balanceAfter = await instance.getBalanceFromAddress(accounts[0]);

        assert.equal(balanceBefore.valueOf(), 20000);
        // assert.equal(succeeded.valueOf(), true);
        assert.equal(balanceAfter.valueOf(), 19800);
    });
    it("Should deposit an amount to an account", async () => {
        let instance = await BankingApp.deployed();
        let amount = 200;
        let balanceBefore = await instance.getBalanceFromAddress(accounts[1]);
        // Cannot use the returned value because it is wrapped in some weird object that i don't understand
        let succeeded = await instance.deposit(accounts[1], amount);
        let balanceAfter = await instance.getBalanceFromAddress(accounts[1]);

        assert.equal((balanceAfter.valueOf() - balanceBefore.valueOf()), 200);
    });
});