import "./MainRow.css";

const MainRow = ({ children }) => {
    return (
        <main className="main__row">
            {children}
        </main>
    );
}

export default MainRow;