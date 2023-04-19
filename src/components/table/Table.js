import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { getProduct } from "../../store/products/productsActions";

function Table({ getProduct, dataChanged, setTotalItems }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProduct().then((data) => {
        let totalItems = 0;
        data.forEach((item) => {
          totalItems += item.productQuantity;
        });
        setTotalItems(totalItems);
        setTableData(data);
      });
    }
    fetchData();
  }, [dataChanged]);

  return (
    <table class="table" style={{ margin: "0 auto" }}>
      <TableHeader data={tableData} />
      <TableBody data={tableData} />
    </table>
  );
}

const mapStateToProps = (state) => {
  return {
    tableData: state.product && state.product.data ? state.product.data : [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: () => dispatch(getProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);