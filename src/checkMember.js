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


module.exports = shoppingCart;