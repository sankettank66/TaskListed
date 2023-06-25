import React, { useState } from 'react';
import TwoLinesChart from './TwoLinesChart';

const ThirdDiv = () => {
    const [selectedMonth, setSelectedMonth] = useState('1');

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    return (
        <div className="third-div">
            <div className="row">
                <div className="div">
                    <p className="activities">Activities</p>
                    <div>
                        <select name="select" id="select" value={selectedMonth} onChange={handleMonthChange}>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                        </select>
                    </div>
                </div>
                <div className="ri">
                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5.52881" cy="5" r="5" fill="#E9A0A0" />
                    </svg>
                    &nbsp;Guest
                    &nbsp;
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5" fill="#9BDD7C" />
                    </svg>
                    &nbsp;User
                </div>
            </div>
            <div className="canvas">
                <TwoLinesChart selectedMonth={selectedMonth} />
            </div>
        </div>
    );
};

export default ThirdDiv;
