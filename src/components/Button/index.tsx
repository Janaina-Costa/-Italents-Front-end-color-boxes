import { ButtonHTMLAttributes } from 'react'
import './styles.css'

export const Button = ({children, onClick}:ButtonHTMLAttributes<HTMLButtonElement>)=>{
  return(
    <button className='simple_button' onClick={onClick} >{children}</button>
  )
}