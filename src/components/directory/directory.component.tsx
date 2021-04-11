import { Component } from "react";

import "./directory.styles.scss";
import sections from "../../data/directory.data";
import MenuItem from "../menu-item/menu-item.component";
import { SectionType } from "../../types/common.types";

interface DirectoryProps {}

class Directory extends Component<
  DirectoryProps,
  { sections: Array<SectionType> }
> {
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
            linkUrl={section.linkUrl}
          ></MenuItem>
        ))}
      </div>
    );
  }
}

export default Directory;
