import { useParams } from "react-router-dom";

function Userparams(match) {
    // const param = useParams();
    const { name, lname } = useParams();
    // console.log(useParams());

    // console.log(useOutlet())
    return (
        <>
            <h3>this is [ {name} {lname}], using useParams hook for dynamic routing and nesting routing.</h3>
        </>
    )
}

export { Userparams };