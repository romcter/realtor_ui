import React from "react";

const Info = (props) => {
    return (
        <div>
            <div>
                <h3>Street : {props.street}</h3>
                <h3>House : {props.house}</h3>
                <h3>Count room : {props.countRoom}</h3>
                <h3>Square : {props.square}</h3>
                <br/>
            </div>
        </div>
    )
}
export default Info;