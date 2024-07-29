import "./MenuItem.css";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const CalendarItem = ({ badgeCount }) => {
    return (
        <div className="topbar__menu-item topbar__menu-item-calendar">
            <i className="fi fi-sr-calendar"></i>
            {badgeCount > 0 && <span className="topbar__menu-badge">{badgeCount}</span>}
            <div className="topbar__menu-dropdown-calendar">
                <div className="topbar__menu-calendar">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar
                            value={dayjs()}
                            views={["year", "month", "day"]}
                        />
                    </LocalizationProvider>
                </div>
            </div>
        </div>
    );
}

const EnvelopeItem = ({ badgeCount }) => {
    return (
        <div className="topbar__menu-item topbar__menu-item-envelope">
            <i className="fi fi-sr-envelope"></i>
            {badgeCount > 0 && <span className="topbar__menu-badge">{badgeCount}</span>}
            <div className="topbar__menu-dropdown-envelope">
                <div className="topbar__menu-envelope">
                    <ul className="topbar__me-list">
                        <li className="topbar__me-item">
                            <span className="topbar__me-item-title">Chat</span>
                            <span className="topbar__me-item-badge">99+</span>
                        </li>
                        <li className="topbar__me-item">
                            <span className="topbar__me-item-title">Discussion</span>
                            <span className="topbar__me-item-badge">99+</span>
                        </li>
                        <li className="topbar__me-item">
                            <span className="topbar__me-item-title">Reviews</span>
                            <span className="topbar__me-item-badge">0</span>
                        </li>
                        <li className="topbar__me-item">
                            <span className="topbar__me-item-title">Support</span>
                            <span className="topbar__me-item-badge">0</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}








const BellItem = ({ badgeCount }) => {

    const notification_list = [
        {
            "type": "Stock",
            "title": "New Order #30854",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus vestibulum hendrerit. Nulla est diam, efficitur eu ullamcorper quis, ultrices nec nisl.",
            "is_readed": false,
            "timestamp": 1722279766,
        },
        {
            "type": "Orders",
            "title": "New Order #30853",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus vestibulum hendrerit. Nulla est diam, efficitur eu ullamcorper quis, ultrices nec nisl.",
            "is_readed": true,
            "timestamp": 1722271766,
        },
        {
            "type": "Orders",
            "title": "New Order #30852",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus vestibulum hendrerit. Nulla est diam, efficitur eu ullamcorper quis, ultrices nec nisl.",
            "is_readed": false,
            "timestamp": 1722272766,
        },
        {
            "type": "Stock",
            "title": "New Order #30854",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus vestibulum hendrerit. Nulla est diam, efficitur eu ullamcorper quis, ultrices nec nisl.",
            "is_readed": false,
            "timestamp": 1722260766,
        },
    ]

    return (
        <div className="topbar__menu-item topbar__menu-item-bell">
            <i className="fi fi-sr-bell"></i>
            {badgeCount > 0 && <span className="topbar__menu-badge">{badgeCount}</span>}
            <div className="topbar__menu-dropdown-bell">
                <div className="topbar__menu-bell">
                    <div className="topbar__menu-bell-header">
                        <h1 className="topbar__mbh-title">Notification</h1>
                        <span className="topbar__mbh-settings">
                            <i className="fi fi-sr-settings"></i>
                        </span>
                    </div>
                    <div className="topbar__menu-bell-body">
                        {notification_list.map((item, idx) => (
                            <div className={`topbar__menu-bell-item ${!item.is_readed && "unread"}`} key={idx}>
                                <div className="topbar__mbb-header">
                                    <span className="topbar__mbb-cart-icon">
                                        {item.type === "Stock" ? (
                                            <>
                                                <i className="fi fi-sr-box"></i>
                                                Stock
                                            </>
                                        ) : (
                                            <>
                                                <i className="fi fi-sr-shopping-cart"></i>
                                                Orders
                                            </>
                                        )}
                                    </span>
                                    <span className="topbar__mbb-clock-icon">
                                        <i className="fi fi-sr-clock"></i>
                                        {Math.round((new Date() - new Date(item.timestamp * 1000)) / (1000 * 60))} min ago
                                    </span>
                                </div>
                                <div className="topbar__mbb-body">
                                    <h1 className="topbar__mbb-title">{item.title}</h1>
                                    <p className="topbar__mbb-description">{item.description}</p>
                                </div>
                                {!item.is_readed && (
                                    <div className="topbar__mbb-footer">
                                        <span className="topbar__mbb-check-icon">
                                            <i class="fi fi-sr-check"></i>
                                            <span className="topbar__mbb-check-icon-text">Mark as Read</span>
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="topbar__menu-bell-footer">
                        <span className="topbar__mbf-check-icon">
                            <i class="fi fi-rr-list-check"></i>
                            <span className="topbar__mbf-check-icon-text">Mark All as Read</span>
                        </span>
                        <span className="topbar__mbf-ar-icon">
                            <span className="topbar__mbf-ar-icon-text">See More</span>
                            <i class="fi fi-rr-arrow-right"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { CalendarItem, EnvelopeItem, BellItem };