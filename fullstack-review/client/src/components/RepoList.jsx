import React from "react";
import Repos from "./Repos.jsx";

const RepoList = props => (
  <div>
    {/* <h4>
      Top <span className="count">{props.repos.length}</span> repos
    </h4>
    <hr /> */}
    <div className="wrapper">
      {props.repos.map((repo, idx) => {
        return <Repos repo={repo} key={idx} />;
      })}
    </div>
  </div>
);

export default RepoList;
