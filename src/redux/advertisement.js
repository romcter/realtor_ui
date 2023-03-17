let GET_INFO = 'ADD_NEW_MESSAGE';
let SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    advertisements: [
        {id: 1, street: 'jope', house: 16, countRoom: 2, square: 45, src: '../../../assets/Difference-between-flat-and-apartment.jpg', alt:'../../../assets/Difference-between-flat-and-apartment.jpg'},
        {id: 2, street: 'jope1', house: 165, countRoom: 3, square: 35},
        {id: 3, street: 'jope2', house: 166, countRoom: 4, square: 55},
        {id: 4, street: 'jope3', house: 167, countRoom: 5, square: 65},
        {id: 5, street: 'jope4', house: 168, countRoom: 6, square: 75},
        {id: 6, street: 'jope5', house: 169, countRoom: 7, square: 85},
    ]
}
const advertisement = (state = initialState, action) => {
    return state;
}

// export const updateNewMessage = (body) => ({type: ADD_NEW_MESSAGE, body: body});
// export const sendMessage = (message) => ({type: SEND_MESSAGE, message: message});

export default advertisement;