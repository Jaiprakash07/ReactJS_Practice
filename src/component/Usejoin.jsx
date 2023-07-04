import { useState } from "react";

function useJoin() {
    const [empty, setEmpty] = useState(null);
    function cre1(name, age) {
        this.name = name;
        this.age = age;
    }

    function cre2(mname, lname) {
        this.mname = mname;
        this.lname = lname;
    }

    const fam1 = new cre1('jai', 23);
    const fam2 = new cre2('prakash', 'nagar')

    // console.log(fam1);
    // console.log(fam2);

    function one() {
        return fam1.name + ' ' + fam2.mname;
    }

    function two() {
        return fam2.lname + ' ' + fam1.age;
    }
    // console.log(one());
    // console.log(two());

    function join1() {
        setEmpty(one() + ' ' + two() + ' year old');
    }

    return [empty, join1]
}

export default useJoin;