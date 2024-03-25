import React from 'react';

import './GoalList.css';

const GoalList = props => {
  console.log(props.goals);
  return (
    <ul className="goal-list">{
      props.goals.map((goals)=>{
        return <li key = {goals.id}>{goals.text}</li>;
      })
    }</ul>
  );
};

export default GoalList;
