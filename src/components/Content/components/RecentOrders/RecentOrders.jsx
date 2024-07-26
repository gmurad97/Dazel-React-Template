import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Avatar, Typography } from '@mui/material';
import './RecentOrders.css';

const columns = [
    {
        field: 'orderId',
        headerName: 'Order ID',
        width: 100,
        renderHeader: () => <span>Order ID</span>,
    },
    {
        field: 'image',
        headerName: 'Product',
        width: 300,
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
        field: 'date',
        headerName: 'Date',
        width: 100,
        renderHeader: () => <span>Date</span>,
    },
    {
        field: 'customer',
        headerName: 'Customer',
        width: 150,
        renderHeader: () => <span>Customer</span>,
    },
    {
        field: 'total',
        headerName: 'Total',
        width: 100,
        renderHeader: () => <span>Total</span>,
    },
    {
        field: 'payment',
        headerName: 'Payment',
        width: 100,
        renderHeader: () => <span>Payment</span>,
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
                    color: params.value === 'Cancelled' ? 'red' : 'green',
                    fontWeight: 'bold',
                }}
            >
                {params.value}
            </Box>
        ),
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 100,
        sortable: false,
        renderCell: (params) => (
            <Box display="flex" alignItems="center">
                <span className='fi fi-rr-eye'></span>
                <span className='fi fi-rr-trash'></span>
            </Box>
        )
    },
];

const rows = [
    {
        id: 1,
        orderId: '#302012',
        image: 'https://via.placeholder.com/40',
        productName: 'Handmade Pouch',
        sku: '302012',
        date: '1 min ago',
        customer: 'John Bushmill',
        total: '$121.00',
        payment: 'Mastercard',
        status: 'Processing',
    },
    {
        id: 2,
        orderId: '#302011',
        image: 'https://via.placeholder.com/40',
        productName: 'Smartwatch E2',
        sku: '302012',
        date: '1 min ago',
        customer: 'Ilham Budi A',
        total: '$590.00',
        payment: 'Visa',
        status: 'Processing',
    },
    {
        id: 3,
        orderId: '#302002',
        image: 'https://via.placeholder.com/40',
        productName: 'Smartwatch E1',
        sku: '302012',
        date: '5 hour ago',
        customer: 'Mohammad Karim',
        total: '$125.00',
        payment: 'Transfer',
        status: 'Shipped',
    },
    {
        id: 4,
        orderId: '#301901',
        image: 'https://via.placeholder.com/40',
        productName: 'Headphone G1 Pro',
        sku: '302012',
        date: '1 day ago',
        customer: 'Linda Blair',
        total: '$348.00',
        payment: 'Paypal',
        status: 'Shipped',
    },
    {
        id: 5,
        orderId: '#301900',
        image: 'https://via.placeholder.com/40',
        productName: 'Iphone X',
        sku: '302012',
        date: '2 day ago',
        customer: 'Josh Adam',
        total: '$607.00',
        payment: 'Visa',
        status: 'Delivered',
    },
    {
        id: 6,
        orderId: '#301881',
        image: 'https://via.placeholder.com/40',
        productName: 'Puma Shoes',
        sku: '302012',
        date: '5 Jan 2023',
        customer: 'Sin Tae',
        total: '$234.00',
        payment: 'Visa',
        status: 'Cancelled',
    },
    {
        id: 7,
        orderId: '#301643',
        image: 'https://via.placeholder.com/40',
        productName: 'Imac 2021',
        sku: '302012',
        date: '1 Jan 2023',
        customer: 'Rajesh Masvidal',
        total: '$760.00',
        payment: 'Transfer',
        status: 'Shipped',
    },
    {
        id: 8,
        orderId: '#301600',
        image: 'https://via.placeholder.com/40',
        productName: 'Nike Shoes',
        sku: '302012',
        date: '24 Dec 2022',
        customer: 'Fajar Surya',
        total: '$400.00',
        payment: 'Mastercard',
        status: 'Delivered',
    },
    {
        id: 9,
        orderId: '#301555',
        image: 'https://via.placeholder.com/40',
        productName: 'Lego Car',
        sku: '302012',
        date: '2 Dec 2022',
        customer: 'Francis Greg',
        total: '$812.00',
        payment: 'Paypal',
        status: 'Delivered',
    },
    {
        id: 10,
        orderId: '#301002',
        image: 'https://via.placeholder.com/40',
        productName: 'Skincare Alia 1',
        sku: '302012',
        date: '2 Dec 2022',
        customer: 'Linda Blair',
        total: '$123.00',
        payment: 'Paypal',
        status: 'Delivered',
    },
];

const RecentOrders = () => {
    return (
        <>
            <div className="top-selling-product-via" style={{ width: '100%' }}>
                <div className="tsp-heading">
                    <h1 className='tsp-title'>Top Selling Product
                        <span className='tsp-badges'>Badge</span>
                    </h1>
                    <div className="tsp-filter">
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
                />
                <div className="pagination-block">
                    <h1 className='pagination-left'>Showing 1-5 from 15</h1>
                    <div className="pagination-right">
                        <button className='pagination-btn'><i className='fi fi-rr-caret-left'></i></button>
                        <button className='pagination-btn active'>1</button>
                        <button className='pagination-btn'>2</button>
                        <button className='pagination-btn'>3</button>
                        <button className='pagination-btn'>4</button>
                        <button className='pagination-btn'>5</button>
                        <button className='pagination-btn'>...</button>
                        <button className='pagination-btn'><i className='fi fi-rr-caret-right'></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecentOrders;