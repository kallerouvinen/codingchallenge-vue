// Generate price depending on the item title just to make the project look more like real ecommerce site
export function generatePrice(str) {
  if (!str) {
    return 0;
  }
  const array = str.split(" ").slice(0, 1);
  return 3 * array[0].length + 0.9;
}
