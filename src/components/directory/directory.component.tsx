import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { useMemo } from "react";

const Directory = () => {
  const directory = useSelector((state: State) => state.directory);
  const sections = useMemo(() => directory, [directory]);

  return (
    <div className="directory-menu">
      {sections.map((section, key) => (
        <MenuItem
          key={key}
          title={section.title}
          imgUrl={section.imageUrl}
          size={section.size}
          linkUrl={section.linkUrl}
        ></MenuItem>
      ))}
    </div>
  );
};

export default Directory;
