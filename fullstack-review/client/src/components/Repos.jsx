import React from "react";

const Repos = props => {
  console.log(props.repo);
  return (
    <div>
      <div className="allRepos">
        <span>{props.repo.owner.login}</span>
        <img className="images" srcSet={props.repo.owner.avatar_url} />
        <a
          href={props.repo.html_url}
          className="badge badge-dark"
          target="blank"
          className="links"
        >
          <h4 className="links">{props.repo.name}</h4>
        </a>
        <hr />
      </div>
    </div>
  );
};

export default Repos;
