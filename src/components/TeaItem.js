import React from "react";

const TeaItem = ({id, title, type, description, sessional}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://static.wixstatic.com/media/0568de_9e57bb5081c043d38e43482490e3625b~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/0568de_9e57bb5081c043d38e43482490e3625b~mv2.webp"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <span className="tag is-light subtitle is-6">{type}</span>
          </div>
        </div>

        <div className="content">
        
          {description}
          <div>
          {sessional ? <span className="tag is-primary">sessional</span> : ''}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default TeaItem;
