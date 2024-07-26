import { DataGrid } from '@mui/x-data-grid';
import { Box, Avatar, Typography } from '@mui/material';
import "./TopSellingProduct.css";

const columns = [
    {
        field: 'image',
        headerName: 'Product',
        width: 200,
        sortable: false,
        renderCell: (params) => (
            <Box display="flex" alignItems="center" height="100%">
                <Avatar src={params.value} alt="product" style={{ marginRight: 8, width: 40, height: 40 }} />
                <Box display="flex" flexDirection="column" justifyContent="center">
                    <Typography variant="body2" style={{ marginBottom: 4 }}>
                        {params.row.productName}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                        SKU: {params.row.sku}
                    </Typography>
                </Box>
            </Box>
        ),
    },
    {
        field: 'sales',
        headerName: 'Sales',
        width: 100,
        renderHeader: () => <span>Sales</span>,
    },
    {
        field: 'amount',
        headerName: 'Amount',
        width: 120,
        renderHeader: () => <span>Amount</span>,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 100,
        renderHeader: () => <span>Price</span>,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 120,
        renderHeader: () => <span>Status</span>,
        renderCell: (params) => (
            <Box
                component="span"
                sx={{
                    color: params.value === 'Low Stock' ? 'red' : 'green',
                    fontWeight: 'bold',
                }}
            >
                {params.value}
            </Box>
        ),
    },
];

const rows = [
    {
        id: 1,
        image: 'https://via.placeholder.com/40',
        productName: 'Handmade Pouch',
        sku: '302012',
        sales: 401,
        amount: '$84,611',
        price: '$121.00',
        status: 'Low Stock',
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/40',
        productName: 'Smartwatch E2',
        sku: '302012',
        sales: 301,
        amount: '$177,000',
        price: '$590.00',
        status: 'Published',
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/40',
        productName: 'Smartwatch E1',
        sku: '302012',
        sales: 300,
        amount: '$37,500',
        price: '$125.00',
        status: 'Low Stock',
    },
    {
        id: 4,
        image: 'https://via.placeholder.com/40',
        productName: 'Headphone G1 Pro',
        sku: '302012',
        sales: 298,
        amount: '$103,704',
        price: '$348.00',
        status: 'Published',
    },
    {
        id: 5,
        image: 'https://via.placeholder.com/40',
        productName: 'Iphone X',
        sku: '302012',
        sales: 256,
        amount: '$150,000',
        price: '$607.00',
        status: 'Published',
    },
];

const TopSellingProduct = () => {
    return (
        <>
            <div className="top-selling-product" style={{ width: '100%' }}>
                <div className="tsp-heading">
                    <h1 className='tsp-title'>Top Selling Product
                        <span className='tsp-badges'>Badge</span>
                    </h1>
                    <div className="tsp-filter">
                        <button className='btn tsp-date-btn'>
                            <i className='fi fi-sr-calendar'></i>
                            Select Date</button>
                        <button className='btn tsp-filter-btn'>
                            <i class="fi fi-rs-settings-sliders"></i>Filter</button>
                        <button className='btn tsp-more-btn'>See more</button>
                    </div>
                </div>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    disableColumnMenu
                    hideFooterSelectedRowCount
                    autoHeight
                    disableSelectionOnClick
                    hideFooterPagination={true}
                    hideFooter={true}
                    disableColumnResize={true}
                />
                <div className="pagination-block">
                    <h1 className='pagination-left'>Showing 1-5 from 15</h1>
                    <div className="pagination-right">
                        <button className='pagination-btn'><i className='fi fi-rr-caret-left'></i></button>
                        <button className='pagination-btn active'>1</button>
                        <button className='pagination-btn'>2</button>
                        <button className='pagination-btn'>3</button>
                        <button className='pagination-btn'><i className='fi fi-rr-caret-right'></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopSellingProduct;