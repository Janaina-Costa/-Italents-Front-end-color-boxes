import * as React from "react"
import './styles.css'

export interface IPropsBox{
  background: string,
  id:string
}

export const BoxItem:React.FC<IPropsBox>=({background, id})=>{
  return(
   
     <div className="container-item" style={{background:background, color:background === 'black'? 'white':'black'}} id={id}>
      {background}
     </div>
   
  )
}