import React from 'react';

//create object through class based in function component
export const  Funclass = () => {
    class Ajay {
        constructor(name,lname,age) {
            this.name = name;
            this.lname = lname;
            this.age = age;
        }

        Make() {
            return this.name +' ' + this.lname + ' is a superstar';
        }
    }

    let a1 = new Ajay('tom','cruise',48)
    // console.log(a1.Make());
    return (
        <>
        {/* <p>{a1}</p>                          'doesn't work' */}
        <p>{a1.name} {a1.lname} is {a1.age} year old</p>
        <p><i class="fa-brands fa-facebook"></i>{a1.Make()}</p>
        </>
    )
}