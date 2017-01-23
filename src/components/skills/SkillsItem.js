import React from 'react';


const Item = (skill, index) => {
  return (
    <div className="col s12 m6 l3" key={index}>
      <div className="card">
        <div className="card-image">
          <a href={skill.url} target="_blank">
            <div
              style={{
                backgroundImage: `url(${skill.image})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '300px'
              }}/>
          </a>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p className="card-title truncate">{skill.name}</p>
          </div>
        </div>
      </div>
    </div>
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