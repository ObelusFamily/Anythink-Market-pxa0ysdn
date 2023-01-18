import agent from "../../agent";
import React from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  let [searchStr, setSearchStr] = React.useState("");

  if (searchStr.length >= 3) {
    props.onSearching(searchStr, agent.Items.byTitle(searchStr));
  }
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span>
            <input
              type="text"
              id="search-box"
              className="m-1 p-1 pl-2"
              value={searchStr}
              onChange={(e) => setSearchStr(e.target.value)}
            />
          </span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
