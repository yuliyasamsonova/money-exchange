// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const coinsArrayCost=[50, 25, 10, 5, 1];
    const coinsArray=["H","Q","D","N","P"];
    let result={};
   if (currency<=0){
       result = {};
   }
    if (currency>10000 || currency===10000){
        result = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if (currency>0 && currency<10000){

            for(let i=0; i< coinsArrayCost.length; i++){
                let intermRes=0;
                if (Math.floor(currency/coinsArrayCost[i])==0){
                    continue;
                }
                if (Math.floor(currency/coinsArrayCost[i])!==0 && currency>0){
                    intermRes = Math.floor(currency/coinsArrayCost[i]);
                    currency = currency - (intermRes*coinsArrayCost[i]);
                    let letter = coinsArray[i];
                    result = {...result, [letter]: intermRes};
                }
            }

    }
    return result;
}
