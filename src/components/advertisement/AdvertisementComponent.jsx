import {connect} from "react-redux";
import Advertisement from "./Advertisement";

let mapStateToProps = (state) => {
    return {
        advertisement : state.advertisement
    }
}

const AdvertisementComponent = connect(mapStateToProps)(Advertisement)
export default AdvertisementComponent;