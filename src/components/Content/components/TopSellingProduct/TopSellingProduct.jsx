import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Pagination } from "@mui/material";
import "./TopSellingProduct.css";
import DazelApi from "../../../../api/DazelApi";

const tableColumns = [
    {
        field: "image",
        headerName: "Product",
        width: 200,
        sortable: true,
        renderHeader: () => <span className="MuiTableHeader__title">Product</span>,
        renderCell: (params) => (
            <div className="MuiImageColumn">
                <div className="MuiImageContainer">
                    <img className="MuiImage__img" src={params.value} alt="product" />
                </div>
                <div className="MuiTypography">
                    <h1 className="MuiTypography__title">{params.row.productName}</h1>
                    <p className="MuiTypography__subtext">{params.row.subtext}</p>
                </div>
            </div>
        )
    },
    {
        field: "sales",
        headerName: "Sales",
        flex: 1,
        renderHeader: () => <span className="MuiTableHeader__title">Sales</span>,
        renderCell: (params) => (
            <div className="MuiFlexCenterContainer">
                <h1 className="MuiTypography__title">{params.row.sales}</h1>
            </div>
        )
    },
    {
        field: "amount",
        headerName: "Amount",
        flex: 1,
        renderHeader: () => <span className="MuiTableHeader__title">Amount</span>,
        renderCell: (params) => (
            <div className="MuiFlexCenterContainer">
                <h1 className="MuiTypography__title">{params.row.amount}</h1>
            </div>
        )
    },
    {
        field: "price",
        headerName: "Price",
        flex: 1,
        renderHeader: () => <span className="MuiTableHeader__title">Price</span>,
        renderCell: (params) => (
            <div className="MuiFlexCenterContainer">
                <h1 className="MuiTypography__title">{params.row.price}</h1>
            </div>
        )
    },
    {
        field: "status",
        headerName: "Status",
        flex: 1,
        renderHeader: () => <span className="MuiTableHeader__title">Status</span>,
        renderCell: (params) => (
            {/* <div className="MuiFlexCenterContainer">
                <h1 className="MuiTypography__title">
                    <span className={`tsp__stock-count ${params.value.toLowerCase().includes("low stock") ? "low" : params.value.toLowerCase().includes("in stock") ? "stock" : "out of stock"}`}>
                        {params.value}
                    </span>
                </h1>
            </div> */}
        )
    }
];

const TopSellingProduct = () => {
    const [tableRows, setTableRows] = useState([]);

    useEffect(() => {
        DazelApi.getTopSellingProduct().then(response => setTableRows(response));
    }, []);


/*     const [page, setPage] = useState(1);
    const rowsPerPage = 5;
    const totalPages = Math.ceil(tableRows.length / rowsPerPage);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const paginatedRows = tableRows.slice((page - 1) * rowsPerPage, page * rowsPerPage); */

    /*     console.log("Page:", page);
        console.log("Paginated rows:", paginatedRows);
        console.log("Total rows:", rows.length); */

    return (
        <div className="top-selling-product">
            <div className="tsp-heading">
                <h1 className="tsp-title">Top Selling Product
                    <span className="tsp-badges">Badge</span>
                </h1>
                <div className="tsp-filter">
                    <button className="btn tsp-date-btn">
                        <i className="fi fi-sr-calendar"></i>
                        Select Date
                    </button>
                    <button className="btn tsp-filter-btn">
                        <i className="fi fi-sr-settings-sliders"></i>
                        Filter
                    </button>
                    <button className="btn tsp-more-btn">See more</button>
                </div>
            </div>
            <div className="data-grid-container">
                {/* <DataGrid
                    rows={paginatedRows}
                    columns={tableColumns}
                    disableColumnMenu
                    hideFooterSelectedRowCount
                    disableSelectionOnClick
                    hideFooterPagination={true}
                    hideFooter={true}
                    disableColumnResize={true}
                /> */}
            </div>
            <div className="pagination-block">
                <h1 className="pagination-left">
                    {/* Showing {((page - 1) * rowsPerPage) + 1}-{Math.min(page * rowsPerPage, tableRows.length)} from {tableRows.length} */}
                </h1>
{/*                 <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                /> */}
            </div>
        </div>
    );
}

export default TopSellingProduct;
