import React, {ChangeEvent} from 'react'
import classNames from 'classnames'
import Styles from './WmxTiledListItem.module.css'

export interface WmxTiledListItemInterface {
  id: string
  label: string
  icon: string
  description: string
  value: number
}

interface WmxTiledListItemProps {
  name: string
  item: WmxTiledListItemInterface
  selected: boolean
  onChange?(event: ChangeEvent<HTMLInputElement>): any
  children?: never
}

const WmxTiledListItem: React.FunctionComponent<WmxTiledListItemProps> = ({item, name, selected, onChange}) => {
  return (
    <li className={classNames(Styles.tiledListItem, {[Styles.checked]: selected})}>
      <label
        htmlFor={`item-${item.id}`} >
        <span className={classNames(Styles.icon, item.icon, 'mdi mdi-40px')}/>
        {item.label}
        <span className={Styles.description}>
          {item.description}
        </span>
        <input
          type='radio'
          id={`item-${item.id}`}
          name={name}
          value={item.value}
          onChange={onChange}
          checked={selected}
        />
      </label>
    </li>
  )
}

export default WmxTiledListItem
