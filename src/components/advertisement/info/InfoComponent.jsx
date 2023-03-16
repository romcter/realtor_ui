import {connect} from "react-redux";
import {updateNewMessage, sendMessage} from './../../redux/dialog-reducer'
import Info from "./Info";

let mapStateToProps = (state) => {
    return {
        ad_info : state.ad_info
    }
}

const InfoComponent = connect(mapStateToProps)(Info)
export default InfoComponent;