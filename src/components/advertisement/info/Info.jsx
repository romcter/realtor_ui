import React from "react";

const Info = (props) => {
    return (
        <div>
            <div>
                <h2>Street : </h2>{props.street}
            </div>
            <div>
                <h2>House : </h2>{props.house}
            </div>
            <div>
                <h2>Count room : </h2>{props.countRoom}
            </div>
            <div>
                <h2>Square : </h2>{props.square}
            </div>
        </div>
    )
}
export default Info;