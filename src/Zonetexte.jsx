import React, { Component } from "react";
// export default class Zonetexte extends Component {
//     render (){
//         const {personnel} = this.props;
//         return (
//             <div>
//                 <h2> Nom: {personnel.character} </h2>
//                 <img src= {personnel.image} alt="personnel"/>
//                 <h2> Citation : {personnel.quote}</h2>
//             </div>
//         )
//     }
// }
const Zonetexte = ({ personnel }) => {
    return (
        <div>
            {/* {personnel.map(p =>
                <div key={p.character}>
                    <h2> Name: {p.character} </h2>
                    <img src={p.image} alt="personnel" />
                    <h2> Quote : {p.quote}</h2>
                </div>
            )} */}
            <div key={personnel.character}>
                    <h2> Name: {personnel.character} </h2>
                    <img src={personnel.image} alt="personnel" />
                    <h2> Quote : {personnel.quote}</h2>
                </div>
        </div>
    )
}


export default Zonetexte;