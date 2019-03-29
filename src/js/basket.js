export default function calculateTotal(purchases) {
  let result = 0;
  for (let i = 0; i < purchases.length; i += 1) {
    const purchase = purchases[i];
    result += purchase.price * purchase.count;
  }
  return result;
}
