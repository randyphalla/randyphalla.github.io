import React, { Component } from 'react';
import './skill-item.component.css';

class SkillItemComponent extends Component {
  render() {
    return (
        <div className="col-6 col-sm-4 col-md-4 col-lg-3 skill-item"> 
            <img src={this.props.imageUrl} alt={this.props.imageTitle} />
        </div>  
    );
  }
}

export default SkillItemComponent;
