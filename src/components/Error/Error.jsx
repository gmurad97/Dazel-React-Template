import "./Error.css";

const Error = ({ errorCode, children }) => {
    if (errorCode === 404) {
        return (404)
    }
    else{
        return("Неизвестная ошибка!")
    }
}

export default Error;