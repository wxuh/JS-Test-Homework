function shoppingCart(){
}

shoppingCart.prototype.checkMember = function(member){
    if(!!member.membership){
        return true; 
    }
    return false;
}



module.exports = shoppingCart;