import React, {PropTypes} from 'react';

import '../../../styles/projectStyle.css';

export let Project = ({project}) => (
      <article className="projectContainer" style={{ backgroundImage: `url(${project.backgroundImg.background})`}}>
        <div className="titleContainer">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      </article>
    );

Project.PropTypes = {
	project: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};
