import React, { useState } from "react";

import './NewGoal.css'


const NewGoal = props => {

    const [enteredText, setEnteredText] = useState('');

    const addGoalHanler = event => {
        event.preventDefault(); //เพื่อไม่ให้หน้ารีเฟรชค่าหลังจากกรอก

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };
        // console.log(newGoal);

        setEnteredText('');

        props.onAddGoal(newGoal);
    };

    const textChangeHandler = event => {
        setEnteredText(event.target.value)
    };
    //สร้างข้อมูลที่กรอกใหม่

    return(
        <form className = "new-goal" onSubmit={addGoalHanler}>
           <input type = "text" value={enteredText} onChange={textChangeHandler}></input>
           <button type="submit">Add Goal</button>
        </form>      
    );
};

export default NewGoal;