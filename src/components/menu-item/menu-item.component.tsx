import "./menu-item.styles.scss";

interface MenuProps {
  title: string;
  imgUrl: string;
  size: string;
}

const MenuItem = ({ title, imgUrl, size }: MenuProps) => {
  return (
    <div className={`menu-item ${size ? size : ""}`}>
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

export default MenuItem;
