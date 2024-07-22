import "./PageHeader.css";

const PageHeader = () => {
    return (
        <div className="page-header">
            <div className="page-header__welcome">
                <h1 className="page-header__welcome-title">Welcome Back John</h1>
                <p className="page-header__welcome-description">Lorem ipsum dolor si amet welcome back johny</p>
            </div>
            <div className="page-header__filter-container">
                <div className="page-header__filter">
                    <button className="page-header__filter-btn page-header__filter-btn--active">All Date</button>
                    <button className="page-header__filter-btn">12 Months</button>
                    <button className="page-header__filter-btn">30 Days</button>
                    <button className="page-header__filter-btn">7 Days</button>
                    <button className="page-header__filter-btn">24 Hour</button>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;