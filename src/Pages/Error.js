import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Error Page</h1>
            <h2>Oops!..... </h2>
            <h3>Error</h3>
            <p>Status : {err.status}</p>
            <p>StatusText : {err.statusText}</p>
            <p>Data : {err.data}</p>
        </div>
    )
}
export default Error;