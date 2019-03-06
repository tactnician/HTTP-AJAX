import React, { Fragment } from 'react';

// export default class DisplayFriends extends Component {
//     constructor(props){
//         super(props);

//     }
    
//     render() {
//         console.log(this.props)
//         return(
//             {props.friends.map((friend, index) => {
//                 <div key={friend.id}>
//                     <h3>{friend.name}</h3>
//                     <p>Age: {friend.age}</p>
//                     <p>Email: {friend.email}</p>
//                 </div>
//                 }
//             )}
//         )
//     }
// }

const DisplayFriends = (props) => {
    return(
        <div>
            {props.friends.map((friend, index) => {
                return(
                    <div key={friend.id}>
                        <h3>{friend.name}</h3>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                )
                }
            )}
        </div>
    )    
}

export default DisplayFriends;