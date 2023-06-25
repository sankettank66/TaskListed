import React from 'react';

const TodaySchedule = ({ title, seeAll }) => {
    return (
        <div className="Top-Products">
            <p className="activities" style={{ marginTop: 0 }}>
                {title}
            </p>
            <div id="select">{seeAll} {">"}</div>
        </div>
    );
};

const Todo = ({ title, time, location }) => {
    return (
        <div className="todo">
            <div
                style={{
                    color: '#666666',
                    fontSize: 14,
                    fontFamily: 'Lato',
                    fontWeight: '700',
                    wordWrap: 'break-word',
                    marginLeft: '0.5rem'
                }}
            >
                {title}
            </div>
            <div
                style={{
                    color: '#999999',
                    fontSize: 12,
                    fontFamily: 'Lato',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                    marginLeft: '0.5rem'
                }}
            >
                {time}
            </div>
            <div
                style={{
                    color: '#999999',
                    fontSize: 12,
                    fontFamily: 'Lato',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                    marginLeft: '0.5rem'
                }}
            >
                {location}
            </div>
        </div>
    );
};

const FourthRight = () => {
    return (
        <div className="fourthRight">
            <TodaySchedule title="Today's Schedule" seeAll="See All" />
            <Todo
                title="Meeting with suppliers from Kuta Bali"
                time="14.00-15.00"
                location="at Sunset Road, Kuta, Bali"
            />
            <Todo
                title="Check operation at Giga Factory 1"
                time="18.00 - 20.00"
                location="at Central Jakarta"
            />
        </div>
    );
};

export default FourthRight;
