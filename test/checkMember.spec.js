var mocha = require('mocha');
var chai = require('chai');

chai.should();

var ShoppingCart = require('../src/checkMember')

describe('shoppingCart',() => {
    describe('#checkMember()',() => {
        it('如果不是會員，則沒有優惠', () => {
            // 非會員為0,一般會員為1,VIP會員為2
            var membership = 0;
            var expected = false;
            var actual = false;
            var shoppingCart = new ShoppingCart();

            actual = shoppingCart.checkMember(membership);

            actual.should.equal(expected);
        });
    });
});