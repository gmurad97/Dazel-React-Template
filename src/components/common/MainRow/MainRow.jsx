import classes from "./MainRow.module.css";

const MainRow = ({ children }) => {
    return (
        <main className={classes.main}>
            {children}
        </main>
    );
}

export default MainRow;