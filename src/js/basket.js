export default function calculateTotal(purchases) {
  return purchases.reduce(
    (result, purchase) => result + purchase.price * purchase.count, 0,
  );
}
