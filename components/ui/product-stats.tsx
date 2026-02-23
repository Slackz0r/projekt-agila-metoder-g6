const getStats = async function () {
  const response = await fetch("http://localhost:4000/products");

  const data = await response.json();
  return data;
};

export default async function ProductStats() {
  const data = await getStats();
  const { products, total } = data;
  console.log(data);

  let inStock = 0;
  let lowStock = 0;
  let outOfStock = 0;

  products.forEach((item: any) => {
    if (item.availabilityStatus === "In Stock") {
      inStock++;
    } else if (item.availabilityStatus === "Low Stock") {
      lowStock++;
    } else {
      outOfStock++;
    }
  });

  return (
    <>
      <div>
        <p>Total = {total}</p>
        <p>In stock = {inStock}</p>
        <p>Low stock = {lowStock}</p>
        <p>Out of Stock = {outOfStock}</p>
      </div>
    </>
  );
}
