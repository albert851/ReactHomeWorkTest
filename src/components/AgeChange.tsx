import React, { useState } from "react";

const AgeChange = () => {

    const [age, setAge] = useState<number>(99)

    function handleChangeName() {
        const newAge = prompt("Enter new name");
        if(!newAge)
            setAge(99);
        else setAge(Number(newAge));
    }

    return (
        <div>
            <h3>{age} years old</h3>
            <button onClick={handleChangeName}>Change Name</button>
        </div>
    );
};

export default AgeChange;