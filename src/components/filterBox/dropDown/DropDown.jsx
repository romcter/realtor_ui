import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from "react-redux";

const DropDown = ({label}) => {
    const [selected, setSelected] = useState(undefined);
    const data = [
        {label: 'One', value: '1'},
        {label: 'Two', value: '2'},
        {label: 'Three', value: '3'},
        {label: 'Four', value: '4'},
        {label: 'Five', value: '5'},
    ];

    return (
        <div>
            {/*<View style={styles.container}>*/}
            {/*    {!!selected && (*/}
            {/*        <Text>*/}
            {/*            Selected: label = {selected.label} and value = {selected.value}*/}
            {/*        </Text>*/}
            {/*    )}*/}
            {/*    <Dropdown label="Select Item" data={data} onSelect={setSelected}/>*/}
            {/*    <Text>This is the rest of the form.</Text>*/}
            {/*</View>*/}
            <form action="/action_page.php">
                <label htmlFor="cars">Choose a car:</label>
                <select name="cars" id="cars">
                    <optgroup label="Swedish Cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                    </optgroup>
                    <optgroup label="German Cars">
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </optgroup>
                </select>
                <br></br>
                    <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        dropDown: state.dropDown
    }
}

export default connect(mapStateToProps)(DropDown);