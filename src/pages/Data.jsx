import { Menu } from "../component/Menu"
import { useState, useEffect } from 'react';
import '../style/pages/data.css'

export const Data = () => {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData')) || {};
        const userFeed = JSON.parse(localStorage.getItem('userFeed')) || {};
        const data = { ...userData, ...userFeed };
        setArr(Object.entries(data));
    }, []);

    const remove = () => setArr([])
    const clear = () => {
        localStorage.clear()
        setArr([])
    }

    return (
        <section>
            <Menu />
            <section id="dataSec">
                <div>
                    {arr.length > 0 && <h1> User information </h1>}
                    <div id="innerDiv">{arr.map((item, index) => <p key={index}> {item[0]} : {item[1]} </p>)}</div>
                    {arr.length > 0 && <div id="buttonDiv">
                        <button onClick={() => remove()}> Remove </button>
                        <button onClick={() => clear()}> Clear </button>
                    </div>}
                </div>
            </section>
        </section>
    )
}