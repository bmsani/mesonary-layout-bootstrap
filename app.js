function minusValue(totalIncome, totalCost){
    leftMoney = totalIncome - totalCost;
    return leftMoney;
}

var onHand = minusValue(30987600, 2598700);

console.log('I have tk:-'+ onHand + '/= on hand in the last of month');

function shoePrice(quartunPrice, shoeQuantity){
    var singleShoePrice =  parseInt(quartunPrice / shoeQuantity);
    return singleShoePrice;
}

var boxPrice = 34000;
var productQuantity = 120;


var oneShoePrice = shoePrice(boxPrice, productQuantity);

console.log('One single shoe price is :-' + oneShoePrice);