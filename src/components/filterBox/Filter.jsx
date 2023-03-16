import React from "react";
import Dropdown from "./dropDown/DropDown";
import { Text } from 'react-native';

const Filter = () =>{
    return(
        <div>
            <Dropdown label={'Select Item'} />
            <Text>This is the rest of the form.</Text>
        </div>
    )
}
export default Filter;