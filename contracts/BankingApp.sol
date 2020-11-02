// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract BankingApp {
	mapping (address => uint) balances;

	event Transfer(address indexed _from, address indexed _to, uint256 _value);


	constructor() public {
		balances[tx.origin] = 20000;
	}

	function withdraw(address add, uint amount) public returns(bool sufficient) {
		if (balances[add] < amount) return false;
		balances[add] -= amount;
		return true;
	}

	function deposit(address add, uint amount) public returns(bool sufficient) {
		balances[add] += amount;
		return true;
	}

    function getBalance() public view returns(uint) {
		return balances[msg.sender];
	}
	
	function getBalanceFromAddress(address add) public view returns(uint) {
		return balances[add];
	}
}