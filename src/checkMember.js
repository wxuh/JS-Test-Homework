function shoppingCart(){
}

shoppingCart.prototype.checkMember = function(member){
    if(!!member.membership){
        return true; 
    }
    return false;
}
shoppingCart.prototype.checkItemsMinPrice = function(member){
    if(member.membership == 1 && member.itemNumber > 3){
        return 1000; 
    }
    if(member.membership == 2 && member.itemNumber > 0){
        return 500; 
    }
    return false;
}
shoppingCart.prototype.checkPrice = function(member){
    var havePrice = this.checkItemsMinPrice(member);
    if(havePrice){
        member.totalPrice >= havePrice;
        return true;
    }
    return false;
}
shoppingCart.prototype.getDiscount = function(member){
    var $this = this;
    var haveDiscount = $this.checkPrice(member);
    if(haveDiscount){
        var checkItemsMinPrice = $this.checkItemsMinPrice(member);
        var checkGetDiscount = member.totalPrice >= checkItemsMinPrice;
        if(checkGetDiscount){
            if(member.membership == 1){
                return 0.85;
            }else if(member.membership == 2 ){
                return 0.8;
            }
        }
    }
    return 1;
}


module.exports = shoppingCart;