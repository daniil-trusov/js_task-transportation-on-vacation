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

  if (days >= longTermDays) {
    return calculatedRent - longTermDiscount;
  }

  if (days >= shortTermDays) {
    return calculatedRent - shortTermDiscount;
  }

  return calculatedRent;
}

module.exports = calculateRentalCost;
