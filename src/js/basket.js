export default function calculateTotal(purchases, applyDiscount) {
  const result = purchases.reduce(
    (res, purchase) => res + purchase.price * purchase.count, 0,
  );

  if (applyDiscount) {
    return result * 0.939; // bad practice
  }

  return result;
}
