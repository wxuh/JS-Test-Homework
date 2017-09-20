function shoppingCart(){
}

shoppingCart.prototype.checkMember = function(member){
    if(!!member.membership){
        return true; 
    }
    return false;
}
shoppingCart.prototype.checkItemNumber = function(member){
    if(member.membership == 1 && member.itemNumber > 3){
        return 1000; 
    }
    if(member.membership == 2 && member.itemNumber > 0){
        return 500; 
    }
    return false;
}
shoppingCart.prototype.checkPrice = function(member){
    var havePrice = this.checkItemNumber(member);
    if(havePrice){
        member.totalPrice >= havePrice;
        return true;
    }
    return false;
}
shoppingCart.prototype.getDiscount = function(member){
    var haveDiscount = this.checkPrice(member);
    if(haveDiscount){
        return 0.85;
    }
    return 1;
}


module.exports = shoppingCart;