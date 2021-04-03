import React from "react";
import { RouteProps } from "react-router";
import SHOP_ITEMS from "../../data/shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

interface ShopPageProps extends RouteProps {}

class ShopPage extends React.Component<
  ShopPageProps,
  { collections: Array<any> }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      collections: SHOP_ITEMS,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((collection) => {
          return (
            <CollectionPreview
              key={collection.id}
              title={collection.title}
              items={collection.items}
            ></CollectionPreview>
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
