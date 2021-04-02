import { Component } from "react";

import "./directory.styles.scss";
import sections from "../../directory.data";
import MenuItem from "../menu-item/menu-item.component";

interface DirectoryProps {}

class Directory extends Component<DirectoryProps, { sections: Array<any> }> {
  constructor(props: DirectoryProps) {
    super(props);
    this.state = {
      sections,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section, key) => (
          <MenuItem
            key={key}
            title={section.title}
            imgUrl={section.imageUrl}
            size={section.size}
          ></MenuItem>
        ))}
      </div>
    );
  }
}

export default Directory;
