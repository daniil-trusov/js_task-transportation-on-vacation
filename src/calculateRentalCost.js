/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM_DAYS = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;

  const RENT_FOR_DAY = 40;

  const CALCULATED_RENT = RENT_FOR_DAY * days;
  let currentDiscount = 0;

  if (days >= LONG_TERM_DAYS) {
    currentDiscount = LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM_DAYS) {
    currentDiscount = SHORT_TERM_DISCOUNT;
  }

  return CALCULATED_RENT - currentDiscount;
}

module.exports = calculateRentalCost;
