import React from "react";
import "./DashBoardUi.css";
import TopProducts from "./components/TopProducts";
import FourthRight from "./components/fourthRight";
import ThirdDiv from "./components/ThirdDiv";
import CardSection from "./components/CardSection";
import FirstDiv from "./components/FirstDiv";
import SecondDiv from "./components/secondDiv";
function DashboardUi() {
    return (
        <>
            <div className="cont">
                <div className="left">
                    <div className="firstDiv">Board.</div>
                    <SecondDiv/>
                    <div className="thirdDiv">
                        <div className="end">
                            <p>Help</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <FirstDiv/>
                    <CardSection/>
                    <ThirdDiv/>
                    <div className="fourth-Div">
                        <TopProducts/>
                        <FourthRight/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardUi;
