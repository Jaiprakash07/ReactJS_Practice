import React from 'react';
import './componentcss/Fetch.css';

function Fetch() {

    let count = 0;
    //GET method for read data
    const get = () => {
        let url = 'https://fakestoreapi.com/products';
        fetch(url).then((respone) => {
            // console.log(respone.text());
            // console.log(respone.json());
            return respone.json();
        }).then((data) => {
            console.log(data);
            // console.log(data[0].image);
            const img = document.querySelector('.img');
            const imgname = document.querySelector('.imgname');
            img.src = data[count].image;
            imgname.innerHTML = data[count].title;
            count += 1;
        })
    }

    //POST method for create data
    const post = () => {
        // const post = async () => {
        let url = 'https://fakestoreapi.com/products';
        // let url = await fetch('https://fakestoreapi.com/products');
        // let x = await url.json()
        // console.log(x);
        let options = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                // title: "tedfst product",
                // price: 13.5,
                // description: "lorem ipsum set",
                // image: "https://i.pravatar.cc",
                // category: "electronic",
                title: 'handbag',
                description: 'carry veggies',
                price: 488
            })
            // body: JSON.stringify({value1:[{title: 'hi', price: 55},{title: 'hello', price: 85}]})
        }
        fetch(url, options).then(respone => {
            return respone.json();
        }).then(data => {
            console.log(data);
        })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            <h2>Fetch API</h2>
            <img className='img' src='' alt='fakeapi image'></img>
            <h4 className='imgname'>{null}</h4>
            <div>
                <button onClick={get}>GET method</button>
                <button onClick={post}>POST method</button>
            </div>
        </>
    )
}

export { Fetch };