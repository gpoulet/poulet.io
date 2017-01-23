import React from 'react';


const Item = (skill, index) => {
  return (
    <a href={skill.url} target="_blank" key={index} className="col s6 m3 l2 center-align">
      <img src={skill.image} alt={skill.name} style={{ maxWidth: '160px', maxHeight: '90px' }}/>
      <p style={{color: '#000'}}>{skill.name}</p>
    </a>
  );
}

const SkillsItem = (props) => {
  return (
    <div>
      <h4>{props.category}</h4>
      <div className="row">
        {props.skills ? props.skills.map(Item) : null}
      </div>
    </div>
  );
};

export default SkillsItem;