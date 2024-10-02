import { useState } from 'react';
import { Menu } from "../component/Menu";
import '../style/pages/home.css';

export const Home = () => {
    const [exp, setExp] = useState(false);
    const [isFin, setIsFin] = useState(false);
    const check = (e) => setIsFin(e.target.checked)

    const submit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            surname: e.target.surname.value,
            birthday: e.target.birthday.value,
            city: e.target.city.value,
            workExperience: e.target.radio.value,
            companyName: exp ? e.target.company.value : '',
            startDate: exp ? e.target.start.value : '',
            endDate: exp && !isFin ? e.target.end.value : '',
            finished: isFin,
        };

        localStorage.setItem('userData', JSON.stringify(data));
        e.target.reset();
        setExp(false);
        setIsFin(false);
    };

    const display = (e) => {
        const value = e.target.value;
        setExp(value === 'yes');
        if (value === 'no') setIsFin(false);
    };

    const ignore = (e) => {
        const value = e.target.value;
        let result = '';

        for (let i of value) {
            if ((i >= 'A' && i <= 'Z') || (i >= 'a' && i <= 'z')) {
                result += i;
            }
        }

        e.target.value = result;
    };

    const today = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString();
        const day = date.getDate().toString();
        let value = '';

        const mm = month.length < 2 ? '0' + month : month;
        const dd = day.length < 2 ? '0' + day : day;
        value = `${year}-${mm}-${dd}`;
        return value
    }

    return (
        <section>
            <section></section>
            <Menu />
            <form id="homeForm" onSubmit={submit}>
                <div className="inputDiv">
                    <label htmlFor="name"> Name : </label>
                    <input type="text" name="name" id="name" required onChange={ignore} />
                </div>

                <div className="inputDiv">
                    <label htmlFor="surname"> Surname : </label>
                    <input type="text" name="surname" id="surname" required onChange={ignore} />
                </div>

                <div className="inputDiv">
                    <label htmlFor="birthday"> Birthday : </label>
                    <input type="date" name="birthday" id="birthday" />
                </div>

                <div className="inputDiv">
                    <label htmlFor="city"> City </label>
                    <input type="text" name="city" id="city" required onChange={ignore} />
                </div>

                <div id="radioDiv">
                    <label htmlFor="radio"> Work Experience : </label>
                    <div onChange={display}>
                        <label htmlFor="yes"> yes </label>
                        <input type="radio" name="radio" id="yes" value='yes' />
                        <label htmlFor="no"> no </label>
                        <input type="radio" name="radio" id="no" value='no' />
                    </div>
                </div>

                {exp && (
                    <>
                        <div className="inputDiv">
                            <label htmlFor="company"> Name of Company : </label>
                            <input type="text" name="company" id="company" required />
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="start"> Start date : </label>
                            <input type="date" name="start" id="start" required />
                        </div>

                        {!isFin && (
                            <div className="inputDiv">
                                <label htmlFor="end"> End date : </label>
                                <input type="date" name="end" id="end" required max={today()} />
                            </div>
                        )}

                        <div id="lastDiv">
                            <label htmlFor="check"> Not finished yet </label>
                            <input type="checkbox" name="check" id="check" checked={isFin} onChange={check} />
                        </div>
                    </>
                )}

                <button type="submit"> Submit </button>
            </form>
        </section>
    );
}