import React, { useState } from 'react';

function Todo() {
    const [input, setInput] = useState();
    const [item, setItem] = useState([]);

    const handleInput = () => {
        setItem((olditem) => {
            return [...olditem, input];
        })
        setInput('');
    }

    const call = (e) => {
        setInput(e.target.value);
    }
    // console.log(item)
    return (
        <>
            <div>
                <div>
                    <h2>Todo List</h2>
                </div>
                <div>
                    <input type='text' onChange={call} value={input} />
                    <button style={{ width: '50px' }} onClick={handleInput}> + </button>
                </div>
                <div>
                    <ol>
                        {item.map((evalu, index) => {
                            return <Tod key={evalu + index} text={evalu} /> 
                        }
                        )}
                    </ol>
                </div>
            </div>
        </>
    )
}

function Tod(props) {
    let text = props.text;
    return (<li>{text}</li>);
}

export { Todo };