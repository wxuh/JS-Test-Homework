var mocha = require('mocha');
var chai = require('chai');

chai.should();

var ShoppingCart = require('../src/checkMember')

describe('shoppingCart',() => {
    describe('#checkMember(membership)',() => {
        it('如果不是會員，則沒有優惠', () => {
            // 非會員為0,一般會員為1,VIP會員為2
            var member = {membership:0};
            var expected = false;
            var actual = false;
            var shoppingCart = new ShoppingCart();

            actual = shoppingCart.checkMember(member);

            actual.should.equal(expected);
        });
        it('如果為一般會員，購入商品是否超過三件',() => {
            var member = {membership:1,itemNumber:4};
            var expected = 1000;
            var actual = 1000;
            var shoppingCart = new ShoppingCart();

            actual = shoppingCart.checkItemNumber(member);
            
            actual.should.equal(expected);
        });
    });
});