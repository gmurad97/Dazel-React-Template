import { useState } from "react";
import "./TopSellingProduct.css";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Avatar, Typography, Pagination } from "@mui/material";

const columns = [
    {
        field: "image",
        headerName: "Product",
        width: 200,
        sortable: true,
        renderCell: (params) => (
            <Box className="tsp__cell-avatar">
                <Avatar src={params.value} alt="product" />
                <Box className="tsp__cell-typograpghy">
                    <Typography>
                        {params.row.productName}
                    </Typography>
                    <Typography>
                        SKU: {params.row.sku}
                    </Typography>
                </Box>
            </Box>
        ),
    },
    {
        field: "sales",
        headerName: "Sales",
        flex: 1,
        renderHeader: () => <span>Sales</span>,
    },
    {
        field: "amount",
        headerName: "Amount",
        flex: 1,
        renderHeader: () => <span>Amount</span>,
    },
    {
        field: "price",
        headerName: "Price",
        flex: 1,
        renderHeader: () => <span>Price</span>,
    },
    {
        field: "status",
        headerName: "Status",
        flex: 1,
        renderHeader: () => <span>Status</span>,
        renderCell: (params) => (
            <Box>
                <span className={`tsp__stock-count 
                    ${params.value.toLowerCase().includes("low")
                        ? "low"
                        : "published"}`}
                >
                    {params.value}
                </span>
            </Box>
        ),
    },
];

const rows = [
    {
        id: 1,
        image: "https://via.placeholder.com/40",
        productName: "Handmade Pouch",
        sku: "302012",
        sales: 401,
        amount: "$84,611",
        price: "$121.00",
        status: "Low Stock",
    },
    {
        id: 6571,
        image: "https://via.placeholder.com/40",
        productName: "Handmade Pouch",
        sku: "302012",
        sales: 401,
        amount: "$84,611",
        price: "$121.00",
        status: "Low Stock",
    },
    {
        id: 898431,
        image: "https://via.placeholder.com/40",
        productName: "Handmade Pouch",
        sku: "302012",
        sales: 401,
        amount: "$84,611",
        price: "$121.00",
        status: "Low Stock",
    },
    {
        id: 76571,
        image: "https://via.placeholder.com/40",
        productName: "Handmade Pouch",
        sku: "302012",
        sales: 401,
        amount: "$84,611",
        price: "$121.00",
        status: "Low Stock",
    },
    {
        id: 6571,
        image: "https://via.placeholder.com/40",
        productName: "Handmade Pouch",
        sku: "302012",
        sales: 401,
        amount: "$84,611",
        price: "$121.00",
        status: "Low Stock",
    },
    {
        id: 5461,
        image: "https://via.placeholder.com/40",
        productName: "Handmade Pouch",
        sku: "302012",
        sales: 401,
        amount: "$84,611",
        price: "$121.00",
        status: "Low Stock",
    },
    {
        id: 531,
        image: "https://via.placeholder.com/40",
        productName: "Handmade Pouch",
        sku: "302012",
        sales: 401,
        amount: "$84,611",
        price: "$121.00",
        status: "Low Stock",
    },
    {
        id: 3134,
        image: "https://via.placeholder.com/40",
        productName: "Handmade Pouch",
        sku: "302012",
        sales: 401,
        amount: "$84,611",
        price: "$121.00",
        status: "Low Stock",
    },
    {
        id: 2121,
        image: "https://via.placeholder.com/40",
        productName: "Handmade Pouch",
        sku: "302012",
        sales: 401,
        amount: "$84,611",
        price: "$121.00",
        status: "Low Stock",
    },
    {
        id: 1122,
        image: "https://via.placeholder.com/40",
        productName: "Handmade Pouch",
        sku: "302012",
        sales: 401,
        amount: "$84,611",
        price: "$121.00",
        status: "Low Stock",
    },
    {
        id: 111,
        image: "https://via.placeholder.com/40",
        productName: "Handmade Pouch",
        sku: "302012",
        sales: 401,
        amount: "$84,611",
        price: "$121.00",
        status: "Low Stock",
    },
    {
        id: 112,
        image: "https://via.placeholder.com/40",
        productName: "Smartwatch E2",
        sku: "302012",
        sales: 301,
        amount: "$177,000",
        price: "$590.00",
        status: "Published",
    },
    {
        id: 9,
        image: "https://via.placeholder.com/40",
        productName: "Smartwatch E1",
        sku: "302012",
        sales: 300,
        amount: "$37,500",
        price: "$125.00",
        status: "Low Stock",
    },
    {
        id: 123213,
        image: "https://via.placeholder.com/40",
        productName: "Headphone G1 Pro",
        sku: "302012",
        sales: 298,
        amount: "$103,704",
        price: "$348.00",
        status: "Published",
    },
    {
        id: 12132213,
        image: "https://via.placeholder.com/40",
        productName: "Iphone X",
        sku: "302012",
        sales: 256,
        amount: "$150,000",
        price: "$607.00",
        status: "Published",
    }
];



const TopSellingProduct = () => {
    const [page, setPage] = useState(1);
    const rowsPerPage = 3;
    const totalPages = Math.ceil(rows.length / rowsPerPage);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const paginatedRows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    console.log("Page:", page);
    console.log("Paginated rows:", paginatedRows);
    console.log("Total rows:", rows.length);

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
                        <i class="fi fi-sr-settings-sliders"></i>
                        Filter
                    </button>
                    <button className="btn tsp-more-btn">See more</button>
                </div>
            </div>
            <div className="data-grid-container">
                <DataGrid
                    rows={paginatedRows}
                    columns={columns}
                    disableColumnMenu
                    hideFooterSelectedRowCount
                    disableSelectionOnClick
                    hideFooterPagination={true}
                    hideFooter={true}
                    disableColumnResize={true}
                />
            </div>
            <div className="pagination-block">
                <h1 className="pagination-left">
                    Showing {((page - 1) * rowsPerPage) + 1}-{Math.min(page * rowsPerPage, rows.length)} from {rows.length}
                </h1>
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default TopSellingProduct;
