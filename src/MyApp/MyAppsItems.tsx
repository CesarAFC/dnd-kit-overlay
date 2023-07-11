import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
// import Item from "./Item"
import { HTMLAttributes } from "react"
import { TItem } from "../App"
import MyAppSingleItem from "./MyAppItem"

type Props = {
  item: TItem
} & HTMLAttributes<HTMLDivElement>

const MyAppsItems = ({ item, ...props }: Props) => {
  const { attributes, isDragging, listeners, setNodeRef, transform, transition } = useSortable({
    id: item.id,
  })

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  }

  return (
    <MyAppSingleItem
      item={item}
      ref={setNodeRef}
      style={styles}
      isOpacityEnabled={isDragging}
      {...props}
      {...attributes}
      {...listeners}
    />
  )
}

export default MyAppsItems
