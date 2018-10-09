import React from "react";

const Citation = ({citation}) => {
    return (
        <div className="Citation">
        <button onClick ={citation}> Afficher un citation </button>
        </div>
    )
}
export default Citation;