import React from 'react';

import SkillsItem from './SkillsItem';

import {getSkills} from './../../services/jsonServices';

export default class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      database: [],
      bigDataNoSql: [],
      languages: [],
      frameworkAndWeb: [],
      servers: [],
      ide: [],
      os: [],
      cloud: [],
    }
  }

  componentDidMount() {
    getSkills(this.onSuccess, this.onError);
  }

  onSuccess = (result) => {
    console.log('onSuccess');
    console.log(result);
    this.setState({...result});
  }

  onError = (error) => {
    console.log('onError');
    console.log(error);
  }

  render() {
    return (
      <div className="container">
        <h2 className="header">Skills</h2>
        <SkillsItem category="Databases" skills={this.state.database} />
        <SkillsItem category="Big Data / NoSQL" skills={this.state.bigDataNoSql} />
        <SkillsItem category="Cloud" skills={this.state.cloud} />
        <SkillsItem category="Languages" skills={this.state.languages} />
        <SkillsItem category="Framework and Web Development" skills={this.state.frameworkAndWeb} />
        <SkillsItem category="Application Servers" skills={this.state.servers} />
        <SkillsItem category="IDE" skills={this.state.ide} />
        <SkillsItem category="OS" skills={this.state.os} />
        <SkillsItem category="Methodology & Software engineering" skills={this.state.methodology} />
      </div>
    );
  }
}