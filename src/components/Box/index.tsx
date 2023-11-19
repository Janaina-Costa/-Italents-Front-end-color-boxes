import { BoxItem, IPropsBox } from "./BoxItem"
import './styles.css'

interface IProps{
  listBox:IPropsBox[]
}

export const BoxList =({listBox}:IProps)=>{
  return(
    <div className="container-list">
    {listBox.map(item=>(
        <BoxItem 
        background={item.background}
        key={item.id}
        id={item.id}
        
       />
  ))}
  </div>
  )
}