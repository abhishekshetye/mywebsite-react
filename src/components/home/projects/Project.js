import React, {PropTypes} from 'react';

import '../../../styles/projectStyle.css';

export let Project = ({project}) => (
      <article className="projectContainer" style={{ backgroundImage: `url(${project.backgroundImg.background})`}}>
        <div className="titleContainer">
          <h3 className="font-weight-light" id="greenTextClass" >{project.title}</h3>
          <p id="greenTextClass">{project.description}</p>
        </div>
      </article>
    );

Project.PropTypes = {
	project: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};
