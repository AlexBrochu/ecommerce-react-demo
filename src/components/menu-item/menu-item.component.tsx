import "./menu-item.styles.scss";

import { RouteComponentProps, withRouter } from "react-router-dom";

interface MenuProps extends RouteComponentProps {
  title: string;
  imgUrl: string;
  size: string;
  linkUrl: string;
}

const MenuItem = ({
  title,
  imgUrl,
  size,
  linkUrl,
  history,
  match,
}: MenuProps) => {
  return (
    <div
      className={`menu-item ${size ? size : ""}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
