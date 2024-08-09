import { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Pagination } from "@mui/material";
import "./RecentOrders.css";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";
import DazelApi from "../../../../api/DazelApi.js";

const RecentOrders = () => {
    const { currentLanguage, getTranslate } = useContext(LanguageContext);
    const [tableRows, setTableRows] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        DazelApi.getRecentOrders().then(response => setTableRows(response));
    }, []);

    const computeTimeAgo = (timestamp) => {
        const timestampSeconds = Math.floor((Date.now() - (timestamp * 1000)) / 1000);
        const intervals = [
            { "label": getTranslate("topbar_menu_notification_time_second"), "divisor": 1 },
            { "label": getTranslate("topbar_menu_notification_time_minute"), "divisor": 60 },
            { "label": getTranslate("topbar_menu_notification_time_hour"), "divisor": 3600 },
            { "label": getTranslate("topbar_menu_notification_time_day"), "divisor": 86400 }
        ];
        for (let idx = intervals.length - 1; idx >= 0; idx--) {
            const { label, divisor } = intervals[idx];
            const interval = Math.floor(timestampSeconds / divisor);
            if (interval > 0)
                return `${interval} ${label} ${getTranslate("topbar_menu_notification_time_ago")}`;
        }
        return getTranslate("topbar_menu_notification_time_just_now");
    }

    const handleCheckboxChange = (orderId) => {
        setSelectedRows(prevSelectedRows => {
            if (prevSelectedRows.includes(orderId))
                return prevSelectedRows.filter(id => id !== orderId);
            else
                return [...prevSelectedRows, orderId];
        });
    };

    const handleSelectAllChange = (event) => {
        const isChecked = event.target.checked;
        setSelectAll(isChecked);
        setSelectedRows(isChecked ? tableRows.map(row => row.orderId) : []);
    };

    const tableColumns = [
        {
            "field": "orderId",
            "width": 100,
            "sortable": false,
            "renderHeader": () => (
                <span className="MuiCustomClass__table-header">
                    <input
                        type="checkbox"
                        className="MuiCustomClass__table-header-checkbox"
                        checked={selectAll}
                        onChange={handleSelectAllChange}
                    />
                    Order ID
                </span>
            ),
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex-row">
                    <input
                        type="checkbox"
                        className="MuiCustomClass__table-header-checkbox"
                        checked={selectedRows.includes(params.row.orderId)}
                        onChange={() => handleCheckboxChange(params.row.orderId)}
                    />
                    <div className="MuiCustomClass__typography">
                        <h1 className="MuiCustomClass__typography-title">{params.row.orderId}</h1>
                    </div>
                </div>
            )
        },
        {
            "field": "image",
            "headerName": "Product",
            "width": 250,
            "sortable": true,
            "renderHeader": () => <span className="MuiCustomClass__table-header">Product</span>,
            "renderCell": (params) => (
                <div className="MuiCustomClass__box">
                    <div className="MuiCustomClass__img-box">
                        <img className="MuiCustomClass__img" src={params.value} alt="product" />
                    </div>
                    <div className="MuiCustomClass__typography">
                        <h1 className="MuiCustomClass__typography-title">{params.row.product_name}</h1>
                        <p className="MuiCustomClass__typography-subtext">{params.row.subtext}</p>
                    </div>
                </div>
            )
        },
        {
            "field": "date",
            "headerName": "Date",
            "width": 100,
            "renderHeader": () => <span className="MuiCustomClass__table-header">Date</span>,
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex">
                    <h1 className="MuiCustomClass__typography-title">{computeTimeAgo(params.row.date)}</h1>
                </div>
            )
        },
        {
            "field": "customer",
            "headerName": "Customer",
            "width": 150,
            "renderHeader": () => <span className="MuiCustomClass__table-header">Customer</span>,
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex">
                    <div className="MuiCustomClass__typography">
                        <h1 className="MuiCustomClass__typography-title">{params.row.customer}</h1>
                        <p className="MuiCustomClass__typography-subtext">{params.row.customer_email}</p>
                    </div>
                </div>
            )
        },
        {
            "field": "total",
            "headerName": "Total",
            "width": 100,
            "renderHeader": () => <span className="MuiCustomClass__table-header">Total</span>,
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex">
                    <h1 className="MuiCustomClass__typography-title">{params.row.total}</h1>
                </div>
            )
        },
        {
            "field": "payment",
            "headerName": "Payment",
            "width": 100,
            "renderHeader": () => <span className="MuiCustomClass__table-header">Payment</span>,
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex">
                    <h1 className="MuiCustomClass__typography-title">{params.row.payment}</h1>
                </div>
            )
        },
        {
            "field": "status",
            "headerName": "Status",
            "width": 120,
            "renderHeader": () => <span className="MuiCustomClass__table-header">Status</span>,
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex">
                    <h1 className="MuiCustomClass__typography-title">
                        <span className={`ro__status ${params?.value?.["en"]?.toLowerCase()?.includes("processing") ? "processing" : params?.value?.["en"]?.toLowerCase()?.includes("shipped") ? "shipped" : params?.value?.["en"]?.toLowerCase()?.includes("delivered") ? "delivered" : "cancelled"}`}>
                            {params.value[currentLanguage]}
                        </span>
                    </h1>
                </div>
            )
        },
        {
            "field": "action",
            "headerName": "Action",
            "width": 100,
            "sortable": false,
            "renderCell": (params) => (
                <div className="MuiCustomClass__flex-row">
                    <button className="MuiCustomClass__btn">
                        <i className="fi fi-sr-eye"></i>
                    </button>
                    <button className="MuiCustomClass__btn" onClick={() => handleDelete(params.id)}>
                        <i className="fi fi-sr-trash"></i>
                    </button>
                </div>
            )
        },
    ];

    const handleDelete = (id) => {
        setTableRows(prevRows => prevRows.filter((row) => row.id !== id));
    };

    const rowsPerPage = 10;
    const totalPages = Math.ceil(tableRows.length / rowsPerPage);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const paginatedRows = tableRows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    return (
        <div className="recent-orders">
            <div className="ro__heading">
                <h1 className="ro__heading-title">
                    Recent Orders
                    <span className="ro__heading-title-badges">+2 Orders</span>
                </h1>
                <div className="ro__filter">
                    <button className="ro__filter-btn ro__filter-filter-btn">
                        <i className="fi fi-sr-settings-sliders"></i>
                        Filters
                    </button>
                    <button className="ro__filter-btn ro__filter-more-btn">See more</button>
                </div>
            </div>
            <div className="ro__data-grid-container">
                <DataGrid
                    rows={paginatedRows}
                    columns={tableColumns}
                    hideFooterSelectedRowCount
                    disableSelectionOnClick
                    hideFooterPagination={true}
                    hideFooter={true}
                    rowHeight={80}
                />
            </div>
            <div className="ro__pagination-block">
                <h1 className="ro__pagination-title">
                    {getTranslate("pagination_showing_text")} {((page - 1) * rowsPerPage) + 1}-{Math.min(page * rowsPerPage, tableRows.length)} {getTranslate("pagination_from_text")} {tableRows.length}
                </h1>
                <Pagination count={totalPages} page={page} onChange={handlePageChange} />
            </div>
        </div>
    );
}

export default RecentOrders;
