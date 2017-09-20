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

            actual = shoppingCart.checkItemsMinPrice(member);
            
            actual.should.equal(expected);
        });
        it('如果為VIP會員，購入商品為一件就有可能有折扣',() => {
            var member = {membership:2,itemNumber:1};
            var expected = 500;
            var actual = 500;
            var shoppingCart = new ShoppingCart();

            actual = shoppingCart.checkItemsMinPrice(member);
            
            actual.should.equal(expected);
        });
        it('如果為VIP會員，購入商品為一件就有可能有折扣',() => {
            var member = {membership:2,itemNumber:1};
            var expected = 500;
            var actual = 500;
            var shoppingCart = new ShoppingCart();

            actual = shoppingCart.checkItemsMinPrice(member);
            
            actual.should.equal(expected);
        });
        it('一般會員需要超過三件商品且總價超過1000才有折扣',() => {
            var member = {membership:1,itemNumber:4,totalPrice: 1000};
            var expected = 0.85;
            var actual = 0.85;
            var shoppingCart = new ShoppingCart();

            actual = shoppingCart.getDiscount(member);
            
            actual.should.equal(expected);
        });
        it('VIP會員只要總價滿500就有折扣',() => {
            var member = {membership:2,itemNumber:1,totalPrice: 500};
            var expected = 0.8;
            var actual = 0.8;
            var shoppingCart = new ShoppingCart();

            actual = shoppingCart.getDiscount(member);
            
            actual.should.equal(expected);
        });
    });
});