import React, { useState } from "react";

const NameChange = () => {

    const [firstName, setFirstName] = useState<string>("Enter new name")

    function handleChangeName() {
        const newName = prompt("Enter new name");
        if(!newName)
            setFirstName("Enter Name Please");
        else setFirstName(newName);
    }

    return (
        <div>
            <h3>{firstName}</h3>
            <button onClick={handleChangeName}>Change Name</button>
        </div>
    );
};

export default NameChange;