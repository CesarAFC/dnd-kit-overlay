import { CSSProperties, forwardRef, HTMLAttributes } from "react";
import { TItem } from "../App";

type Props = {
  item: TItem;
  isOpacityEnabled?: boolean;
  isDragging?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const Item = forwardRef<HTMLDivElement, Props>(
  ({ item, isOpacityEnabled, isDragging, style, ...props }, ref) => {
    const styles: CSSProperties = {
      opacity: isOpacityEnabled ? "0.4" : "1",
      cursor: isDragging ? "grabbing" : "grab",
      backgroundColor: 'powderblue',
      borderRadius: '8px',
      width: '300px',
      lineHeight: "0.5",
      // transform: isDragging ? "scale(1.05)" : "scale(1)",
      ...style
    };

    return (
      <div ref={ref} style={styles} {...props}>
        <div
        //   src={item.imageUrl}
        //   alt={`${item.id}`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: "8px",
            boxShadow: isDragging
              ? "none"
              : "rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px",
            maxWidth: "100%",
            height: '40px',
            objectFit: "cover"
          }}
        ><h1 style={{ display: 'inline-block', margin: '0' }}>{item.id}</h1></div>
      </div>
    );
  }
);

export default Item;
