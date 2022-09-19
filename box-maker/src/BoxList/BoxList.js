import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "../Box/Box.js";
import NewBoxForm from "../NewBoxForm/NewBoxForm.js"
import './BoxList.css';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const deleteBox = (id) => {
        const copy = [...boxes];
        setBoxes(copy.filter(box => box.id !== id))
    }

    const renderBoxes = () => {
        return (
            <ul className="BoxList-List">
                {boxes.map(box => (
                    <div className="BoxList-Boxes" key={box.id}>
                        <Box
                            backgroundColor={box.backgroundColor}
                            height={box.height}
                            width={box.width}
                            id={box.id}
                            deleteBox = {deleteBox}
                        />
                    </div>

                ))}
            </ul>
        )
    }

    /** Add new box object to list */
    const addBox = box => {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    )
}

export default BoxList;