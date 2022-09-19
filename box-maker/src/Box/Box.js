import React from "react";
import './Box.css'


const Box = ({ backgroundColor, width, height, id, deleteBox }) => {
    const divStyle = {
        backgroundColor: backgroundColor,
        height: height + 'px',
        width: width + 'px'
    }
    return (
        <div className="Box" id={id}>
            <button className="Box-X" onClick={evt => deleteBox(id)}>X</button>
            <div
                className="Box-Box"
                style={divStyle}
            >
            </div>
        </div>

    )
}

export default Box;