import React from "react";
import TableHeaderCell from "./TableHeaderCell";
import eCategories from "../../enums.ts";

const TableHeader = ({ data }) => {
    const distinctProducts = Object.values(
      data.reduce((acc, cur) => {
        if (!acc[cur.productCategoryId]) {
          acc[cur.productCategoryId] = cur;
        }
        return acc;
      }, {})
    );

  const headerCells = distinctProducts.map((row) => {
      return (
        <TableHeaderCell
          key={eCategories[row.productCategoryId]}
          categoryName={eCategories[row.productCategoryId]}
        />
      );
  });

  return (
    <thead>
      <tr>{headerCells}</tr>
    </thead>
  );
};

export default TableHeader;
