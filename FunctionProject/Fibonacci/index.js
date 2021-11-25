var bigInt = require("big-integer");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    function Fibonacci(num){
        

    
    let nth_1 = bigInt.one;
    let nth_2 = bigInt.zero;
    let answer = bigInt.zero;


    if (nth < 0)
        throw 'must be greater than 0'
    else if (nth === 0)
        answer = nth_2
    else if (nth === 1)
        answer = nth_1
    else {
        for (var i = 0; i < nth - 1; i++) {
            answer = nth_2.add(nth_1)
            nth_2 = nth_1
            nth_1 = answer
        }
    }
    
    
    }


    function memoizeFabonaci(index, cache = []) {
        console.log('index :', index, '   cache:', cache)

      
         if (cache[index]) {
            return cache[index] 
         }
         else {
            if (index < 3) return 1
            else {
               cache[index] = memoizeFabonaci(index - 1, cache) + memoizeFabonaci(index - 2, cache)
            }
         }
         return cache[index];
      
      }
      let nth = req.body.nth
      let answer = bigInt.zero;
      answer = memoizeFabonaci(nth)
      context.log(answer.toString())
      context.res = {
        body: JSON.stringify(answer.toString())
    };

}