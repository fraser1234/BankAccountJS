const Bank = function(){
  this.accounts = [];
}

Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
};

Bank.prototype.findByName = function(name){
  for (var i = 0; i < this.accounts.length; i++) {
    if(name === this.accounts[i].name){
      return this.accounts[i];
    }
  }
}

Bank.prototype.findLargest = function() {
  var accountValues = [];
  for (var i = 0; i < this.accounts.length; i++) {
    accountValues.push(this.accounts[i].value);
  }
  var largestValue = Math.max(...accountValues);
  for (var i = 0; i < this.accounts.length; i++) {
    if(largestValue === this.accounts[i].value){
      var result = this.accounts[i];
    }
  }
  return result;
};

Bank.prototype.totalValue = function(){
  var counter = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    counter += this.accounts[i].value
  }
  return counter;
};

Bank.prototype.averageValue = function(){
  var totalAmount = this.totalValue();
  return totalAmount/this.accounts.length;
};

Bank.prototype.findByType = function(type){
  var counter = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    if(type === this.accounts[i].type){
      counter += this.accounts[i].value;
    }
  }
  return counter;
}

module.exports = Bank
