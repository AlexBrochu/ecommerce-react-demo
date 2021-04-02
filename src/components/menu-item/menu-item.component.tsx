import "./menu-item.styles.scss";

interface MenuProps {
  title: string;
  imgUrl: string;
  size: string;
}

const MenuItem = ({ title, imgUrl, size }: MenuProps) => {
  return (
    <div
      className={`${size} menu-item`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
