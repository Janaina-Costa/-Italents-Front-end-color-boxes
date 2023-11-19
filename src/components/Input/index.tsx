import { InputHTMLAttributes } from 'react'
import './styles.css'

export const Input = ({type, placeholder,value,onChange}:InputHTMLAttributes<HTMLInputElement>)=>{
  return(
    <input type={type} placeholder={placeholder} onChange={onChange} value={value}/>
  )
}