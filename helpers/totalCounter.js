export const totalCounter = (data) => {
  if (data === undefined) {
    return 0;
  } else {
    const totalShopping = data.reduce(
      (total, producto) => total + producto.itemCar * producto.precio,
      0
    );
    return totalShopping;
  }
};
