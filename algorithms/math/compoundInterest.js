// Formula for compound interest : Final Amount - Principal
//  Final Amount = Principal amount * (1 + (interest rate / n) ) ^ ( n * number of years)
//                 where n = no of times interest is compounded per year

const getCompoundInterest = (
  principal,
  rate,
  numberOfTimesCompounded,
  duration
) => {
  let amount =
    principal *
    Math.pow(
      1 + rate / numberOfTimesCompounded,
      numberOfTimesCompounded * duration
    );

  return {
    finalAmount: Number(amount).toFixed(2),
    interest: Number(amount - principal).toFixed(2),
  };
};

console.log(getCompoundInterest(1000, 0.05, 4, 3));
