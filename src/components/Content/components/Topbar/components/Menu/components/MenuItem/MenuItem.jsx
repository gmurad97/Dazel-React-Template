import { useContext } from "react";
import "./MenuItem.css";
import { LanguageContext } from "../../../../../../../../context/LanguageContext";
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
    const { getTranslate } = useContext(LanguageContext);

    return (
        <div className="topbar__menu-item topbar__menu-item-envelope">
            <i className="fi fi-sr-envelope"></i>
            {badgeCount > 0 && <span className="topbar__menu-badge">{badgeCount}</span>}
            <div className="topbar__menu-dropdown-envelope">
                <div className="topbar__menu-envelope">
                    <ul className="topbar__me-list">
                        <li className="topbar__me-item">
                            <span className="topbar__me-item-title">{getTranslate("topbar_menu_chat")}</span>
                            <span className="topbar__me-item-badge">99+</span>
                        </li>
                        <li className="topbar__me-item">
                            <span className="topbar__me-item-title">{getTranslate("topbar_menu_discussion")}</span>
                            <span className="topbar__me-item-badge">99+</span>
                        </li>
                        <li className="topbar__me-item">
                            <span className="topbar__me-item-title">{getTranslate("topbar_menu_reviews")}</span>
                            <span className="topbar__me-item-badge">0</span>
                        </li>
                        <li className="topbar__me-item">
                            <span className="topbar__me-item-title">{getTranslate("topbar_menu_support")}</span>
                            <span className="topbar__me-item-badge">0</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

const BellItem = ({ badgeCount }) => {
    const { getTranslate } = useContext(LanguageContext);

    const notification_list = [
        {
            "type": "Stock",
            "title": "New Order #30854",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus vestibulum hendrerit. Nulla est diam, efficitur eu ullamcorper quis, ultrices nec nisl.",
            "is_readed": false,
            "timestamp": Math.floor(Date.now() / 1000) - 32,
        },
        {
            "type": "Orders",
            "title": "New Order #30853",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus vestibulum hendrerit. Nulla est diam, efficitur eu ullamcorper quis, ultrices nec nisl.",
            "is_readed": true,
            "timestamp": Math.floor(Date.now() / 1000) - 256,
        },
        {
            "type": "Orders",
            "title": "New Order #30852",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus vestibulum hendrerit. Nulla est diam, efficitur eu ullamcorper quis, ultrices nec nisl.",
            "is_readed": false,
            "timestamp": Math.floor(Date.now() / 1000) - 25600,
        },
        {
            "type": "Stock",
            "title": "New Order #30854",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus vestibulum hendrerit. Nulla est diam, efficitur eu ullamcorper quis, ultrices nec nisl.",
            "is_readed": false,
            "timestamp": Math.floor(Date.now() / 1000) - 256000,
        },
    ];

    function timeAgo(timestamp) {
        const now = new Date();
        const past = new Date(timestamp * 1000);
        const diffInSeconds = Math.floor((now - past) / 1000);
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);

        if (diffInSeconds < 60) {
            return `${diffInSeconds} second${diffInSeconds !== 1 ? 's' : ''} ago`;
        } else if (diffInMinutes < 60) {
            return `${diffInMinutes} min${diffInMinutes !== 1 ? 's' : ''} ago`;
        } else if (diffInHours < 24) {
            return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
        } else {
            return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
        }
    }

    return (
        <div className="topbar__menu-item topbar__menu-item-bell">
            <i className="fi fi-sr-bell"></i>
            {badgeCount > 0 && <span className="topbar__menu-badge">{badgeCount}</span>}
            <div className="topbar__menu-dropdown-bell">
                <div className="topbar__menu-bell">
                    <div className="topbar__menu-bell-header">
                        <h1 className="topbar__mbh-title">{getTranslate("topbar_menu_notification")}</h1>
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
                                                {getTranslate("topbar_menu_stock")}
                                            </>
                                        ) : (
                                            <>
                                                <i className="fi fi-sr-shopping-cart"></i>
                                                {getTranslate("topbar_menu_orders")}
                                            </>
                                        )}
                                    </span>
                                    <span className="topbar__mbb-clock-icon">
                                        <i className="fi fi-sr-clock"></i>
                                        {timeAgo(item.timestamp)}
                                    </span>
                                </div>
                                <div className="topbar__mbb-body">
                                    <h1 className="topbar__mbb-title">{item.title}</h1>
                                    <p className="topbar__mbb-description">{item.description}</p>
                                </div>
                                {!item.is_readed && (
                                    <div className="topbar__mbb-footer">
                                        <span className="topbar__mbb-check-icon">
                                            <i className="fi fi-sr-check"></i>
                                            <span className="topbar__mbb-check-icon-text">
                                                {getTranslate("topbar_menu_mark_as_read")}
                                            </span>
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="topbar__menu-bell-footer">
                        <span className="topbar__mbf-check-icon">
                            <i className="fi fi-rr-list-check"></i>
                            <span className="topbar__mbf-check-icon-text">
                                {getTranslate("topbar_menu_mark_all_as_read")}
                            </span>
                        </span>
                        <span className="topbar__mbf-ar-icon">
                            <span className="topbar__mbf-ar-icon-text">
                                {getTranslate("topbar_menu_see_more")}
                            </span>
                            <i className="fi fi-rr-arrow-right"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { CalendarItem, EnvelopeItem, BellItem };