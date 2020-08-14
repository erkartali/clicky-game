import React from "react";

function Character(props) {
    return (
        <div >  
            <div className="img-container">
                <img alt={props.name} height='200' src={props.image} />
            </div>
            <div className="img-content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Character;