import {
  BackgroundImageContainer,
  MenuItemContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer,
} from "./menu-item.styles";

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
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        imageUrl={imgUrl}
        className="background-image"
      ></BackgroundImageContainer>
      <ContentContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <SubtitleContainer>Shop Now</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
