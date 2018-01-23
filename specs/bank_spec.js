const assert = require('assert');
const Bank = require('../bank');
const Account = require('../account');

describe('Bank', function(){

  let bank;
  let account;
  let account1;
  let account2;
  let account3;

  beforeEach(function(){
    bank = new Bank();
    account = new Account('Fraser', 100, 'savings');
    account1 = new Account('Alex', 150, 'ISA');
    account2 =  new Account('Keith', 50, 'platinum');
    account3 =  new Account('Keith', 50, 'platinum');
  })

  it('account is empty', function(){
    assert.strictEqual(bank.accounts.length, 0);
  })

  it('can add account', function(){
    bank.addAccount(account);
    assert.strictEqual(bank.accounts.length, 1)
  })

  it('can find account by name', function(){
    bank.addAccount(account);
    var result = bank.findByName("Fraser");
    assert.strictEqual(result, account);
  })

  it('can find largest account', function(){
    bank.addAccount(account);
    bank.addAccount(account1);
    bank.addAccount(account2);
    var result = bank.findLargest();
    assert.strictEqual(result, account1);
  })

  it('can get total value', function(){
    bank.addAccount(account);
    bank.addAccount(account1);
    bank.addAccount(account2);
    var result = bank.totalValue()
    assert.strictEqual(result, 300);
  })

  it('can get average', function(){
    bank.addAccount(account);
    bank.addAccount(account1);
    bank.addAccount(account2);
    var result = bank.averageValue()
    assert.strictEqual(result, 100);
  })

  it('can return value by type', function(){
    bank.addAccount(account);
    bank.addAccount(account1);
    bank.addAccount(account2);
    bank.addAccount(account3);
    var result = bank.findByType('platinum')
    assert.strictEqual(result, 100);
  })

})
