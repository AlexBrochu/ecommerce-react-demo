import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionOverview: React.FC<any> = ({ collections }: any) => {
  return (
    <div className="collections-overview">
      {(Object.keys(collections) as Array<keyof typeof collections>).map(
        (value, index) => {
          return (
            <CollectionPreview
              key={index}
              {...collections[value]}
            ></CollectionPreview>
          );
        }
      )}
    </div>
  );
};

export default CollectionOverview;
