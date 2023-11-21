import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Media.css';

function Media() {

    document.title = "Медіа"

    return (
        <div className={'mediaPage'}>
            <Header/>
            <div>
                <graph indexType="custom" height="400" width="400" nodes={[{label: 1, center: {x: 220.5, y: 113.6}}, {
                    label: "2",
                    center: {x: 131.6, y: 196.9}
                }, {label: "3", center: {x: 327.2, y: 172.5}}, {label: "4", center: {x: 183.2, y: 307.2}}, {
                    label: "5",
                    center: {x: 304.1, y: 292.1}
                }]} edges={[{source: 1, target: 0}, {source: 0, target: 2}, {source: 2, target: 0}, {
                    source: 1,
                    target: 2
                }, {source: 2, target: 1}, {source: 3, target: 0}, {source: 3, target: 1}, {
                    source: 3,
                    target: 2
                }, {source: 0, target: 3}, {source: 1, target: 3}, {source: 2, target: 3}, {
                    source: 0,
                    target: 4
                }, {source: 1, target: 4}, {source: 2, target: 4}, {source: 3, target: 4}, {
                    source: 4,
                    target: 0
                }, {source: 4, target: 1}, {source: 4, target: 2}, {source: 4, target: 3}, {source: 0, target: 1}]}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Media;