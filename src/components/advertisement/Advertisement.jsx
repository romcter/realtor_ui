import React from "react";
import Info from "./info/Info";
import Image from "./image/Image"
import css from './Advertisement.module.css'
import logo from "../../assets/Difference-between-flat-and-apartment.jpg"

const Advertisement = (props) => {
    const el = props.advertisement.advertisements[0];
    let advertisement = <Info street={el.street} house={el.house} countRoom={el.countRoom} square={el.square}/>
    // debugger;
    return (
        <div className={css.catalogCard}>
            <div className={css.catalogCard}>
                <img className={css.catalogCardImages} src={logo} alt='../../../assets/Difference-between-flat-and-apartment.jpg'/>
                <Image src={el.src} alt={el.alt}/>
            </div>
            <div>
                {advertisement}
            </div>
        </div>
    )
}
export default Advertisement;