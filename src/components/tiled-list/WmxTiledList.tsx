import React, {ChangeEvent} from 'react'
import WmxTiledListItem, {WmxTiledListItemInterface} from './WmxTiledListItem'
import Styles from './WmxTiledList.module.css'

export interface WmxTiledListProps {
  items: WmxTiledListItemInterface[]
  onChange(event: ChangeEvent<HTMLInputElement>): any
  name: string
  selectedItemIndex: number
}

const WmxTiledList: React.FunctionComponent<WmxTiledListProps> = ({items, onChange, name, selectedItemIndex}) => {
  return (
    <ul className={Styles.tiledList}>
      {
        items.map((item, index) => (
          <WmxTiledListItem
            key={item.id}
            name={name}
            item={item}
            selected={selectedItemIndex == index}
            onChange={onChange}/>
        ))
      }
    </ul>
  )
}

export default WmxTiledList
