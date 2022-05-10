const calculator = {
    add: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    multi: function(a,b){
        return a*b;
    },
    div: function(a,b){
        return a/b;
    },
    power: function(a,b){
        return a**b;
    }
};

AddResult = calculator.add(10,10);
MinusResult = calculator.minus(AddResult,5);
MultiResult = calculator.multi(MinusResult,2);
DivResult = calculator.div(MultiResult,3);
PowerResult = calculator.power(DivResult,10);

console.log(AddResult);
console.log(MinusResult);
console.log(MultiResult);
console.log(DivResult);
console.log(PowerResult);