import React, {PropTypes} from 'react';

import '../../../styles/projectStyle.css';

export let LongProject = ({project}) => (
      <article className="projectContainerLong" style={{ backgroundImage: `url(${project.backgroundImg.background})`}}>
        <div className="titleContainer">
          <h3 className="font-weight-light" id="blueTextColor" >{project.title}</h3>
          <p className="lead" id="blueTextColor">{project.description}</p>
        </div>
      </article>
    );

LongProject.PropTypes = {
	project: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};
