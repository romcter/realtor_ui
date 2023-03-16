import React from "react";
import Info from "./info/Info";

const Advertisement = (props) =>{
    const state = props.ad_info;
    let advertisement = state.advertisement.map(p => <Info street={p.street} house={p.house} countRoom={p.countRoom} square={p.square}/>)

    return(
        <div>
            {advertisement}
        </div>
    )
}
export default Advertisement;