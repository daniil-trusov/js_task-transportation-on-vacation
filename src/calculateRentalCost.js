/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortTermDays = 3;
  const shortTermDiscount = 20;

  const longTermDays = 7;
  const longTermDiscount = 50;

  const rentForDay = 40;

  const calculatedRent = rentForDay * days;
  let currentDiscount = 0;

  if (days >= longTermDays) {
    currentDiscount = longTermDiscount;
  } else if (days >= shortTermDays) {
    currentDiscount = shortTermDiscount;
  }

  return calculatedRent - currentDiscount;
}

module.exports = calculateRentalCost;
