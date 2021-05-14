import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import { ItemType } from "../../types/common.types";
import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

interface CollectionItemProps {
  item: ItemType;
}

const CollectionItem = ({ item }: CollectionItemProps) => {
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addItem(item))}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
