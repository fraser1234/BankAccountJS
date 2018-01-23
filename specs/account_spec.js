const assert = require('assert');
const Account = require('../account');

describe('Account', function(){

  let account;

  beforeEach(function(){
    account = new Account('Fraser', 100, 'Savings');
  })

  it('get name of account', function(){
    assert.strictEqual(account.name, 'Fraser');
  })

  it('get account value', function(){
    assert.strictEqual(account.value, 100);
  })

})
