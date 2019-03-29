export function calculateTotal(purchases) {
  let result = 0;
  for (let i = 0; i < purchases.length; i++) {
    let purchase = purchases[i];
    result += purchase.price * purchase.count;
  }
  return result;
}
