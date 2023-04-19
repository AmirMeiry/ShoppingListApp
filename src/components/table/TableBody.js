import React from "react";
import TableBodyCell from "./TableBodyCell";

const TableBody = ({ data }) => {
  const groupedProducts = data.reduce((acc, product) => {
    const categoryId = product.productCategoryId;
    if (!acc[categoryId]) {
      acc[categoryId] = [];
    }
    acc[categoryId].push(product);
    return acc;
  }, {});

  const maxRows = Object.values(groupedProducts).reduce(
    (max, products) => Math.max(max, products.length),
    0
  );

  const rows = Array.from({ length: maxRows }).map((_, rowIndex) => (
    <tr key={rowIndex}>
      {Object.entries(groupedProducts).map(([categoryId, products]) => {
        const product = products[rowIndex];
        return (
          <React.Fragment key={categoryId}>
            <TableBodyCell
              key={product ? product.productName : categoryId}
              value={
                product
                  ? product.productQuantity > 1
                    ? `${product.productName} (${product.productQuantity})`
                    : product.productName
                  : null
              }
            />
          </React.Fragment>
        );
      })}
    </tr>
  ));

  return <tbody>{rows}</tbody>;
};

export default TableBody;


