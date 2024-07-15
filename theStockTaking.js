// Introduction
// We are running a store and have hired some people to sort the products depending on the boxes
// that are available. Each person writes down the quantity of products, boxes and how much is
// remaining, and we need to be sure that these numbers are correct.
// All the boxes have the same capacity, and all the boxes are filled up to this capacity.
// Input
// - First line the quantity of products, greater than 0.
// - Second line the quantity of boxes, greater than 0.
// - Third line the quantity of what was left.
// Output
// The output will indicate either “CORRECT” (with the capacity of each box) or “INCORRECT.”
// Example 1
// Input
// 4528
// 4
// 0
// Output
// CORRECT, the capacity of each box is 1132
// Example 2
// Input
// 1233
// 7
// 0
// Output
// INCORRECT

function theStockTaking(productsQuantity, quantityBoxes, quantityLeft) {
  if (productsQuantity % quantityBoxes == quantityLeft) {
    return console.log(
      "CORRECT, the capacity each box is " + productsQuantity / quantityBoxes
    );
  } else return console.log("INCORRECT");
  Math.cos;
}

theStockTaking(4528, 4, 0);
theStockTaking(1233, 7, 0);
