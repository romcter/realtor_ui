import {connect} from "react-redux";
import Advertisement from "./Advertisement";

let mapStateToProps = (state) => {
    return {
        ad_info : state.ad_info
    }
}

const AdvertisementComponent = connect(mapStateToProps)(Advertisement)
export default AdvertisementComponent;