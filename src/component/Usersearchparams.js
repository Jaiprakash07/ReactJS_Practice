import { useSearchParams } from "react-router-dom";

function Usersearchparams() {
    const [search, setSearch] = useSearchParams({});
    let fname = search.get('fname')
    // const city = search.get('city');
    // console.log(fname);
    // console.log(city);

    function called(e) {
        setSearch(fname = e.target.value)
    }

    function hann() {

    }

    return (
        <>
            <div>
                <h3>My name is {fname}.</h3>
                {/* <h3>I live in {city}.</h3> */}
                <form onSubmit={hann}>
                    <input type='text' name='fname' onChange={called} />
                    {/* <input type='text' name='city' onChange={called}/> */}
                </form>
            </div>
        </>
    )
}

export { Usersearchparams };