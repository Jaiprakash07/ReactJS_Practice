import { useState } from 'react';

function useCount() {
    const [value, setValue] = useState(0);

    function Catchs() {
        setValue(value + 1);
    }

    function Catchs2() {
        setValue(value - 1)
    }
    return [value, Catchs, Catchs2]
}

export default useCount;