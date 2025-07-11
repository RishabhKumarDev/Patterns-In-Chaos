function main() {
  let prices = [7, 1, 5, 3, 6, 4];
  console.log(bruteMaxProfit(prices));
  console.log(bestMaxProfit(prices));
}

function bruteMaxProfit(prices) {
  // TC O(n^2);
  let profit = 0,
    maxProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      profit = prices[j] - prices[i];

      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}
// why this work?
// think if you had to sell the stock today what previous day would have been the best to purchase it ( the lowest one right so sell at every day and keep track of lowest so far)
function bestMaxProfit(prices) {
  //TC O(n)
  let lowest = Infinity,
    profit = 0,
    maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowest) { // if curent price is lowest update (cuz so far current is the lowest)
      lowest = prices[i]; 
    } else { // no need to check if we found the lowest in the current i as if even if we calculate the current projit it will alway be 0 and less then maxProfit.
      profit = prices[i] - lowest;

      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}
main();
