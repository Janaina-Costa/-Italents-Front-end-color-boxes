import { ChangeEvent, useState } from 'react'
import './App.css'
import { BoxList } from './components/Box'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { IPropsBox } from './components/Box/BoxItem'
const colors = [
  {id:'box_1',background:'#0000CD'},
  {id:'box_2',background:'#FF6347'},
  {id:'box_3',background:'#FFD700'},
  {id:'box_5',background:'#6A5ACD'},
  {id:'box_4',background:'#00FF7F'},
  {id:'box_6',background:'#DC143C'},
  {id:'box_7',background:'#00FF00'},
  {id:'box_8',background:'#C71585'},
  {id:'box_9',background:'#B8D4E3'}, 
  {id:'box_10',background:'#F24E12'},
]

function App() {
  const [colorList, setColorList]= useState<IPropsBox[]>(colors)
  const [colorInput, setColorInput] = useState('')
  const [isInvalidColor, setInvalidColor] = useState<boolean>(false)

 const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
  const {value}= e.target
  
  setColorInput(value)  
 }

 const handleClick=()=>{
  const validateColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i
  if(!validateColor.test(colorInput)){
    setInvalidColor(true)
    return
  }
  setColorList([...colorList, {id:`box_${colorList.length}`, background:colorInput}])
  setInvalidColor(false)
  setColorInput('')
 }
  return (
    <main className='container'>
      <header className='header-container'>
      <h1 className='title'> <span>C</span>olor <span>B</span>oxes</h1>
      </header>
      <section className="input-container">
          <Input placeholder='Digite uma cor hexadecimal (ex. #fffff)' onChange={handleChange} value={colorInput}/>
          <Button onClick={handleClick}>Criar</Button>
      </section>
      {isInvalidColor? <p className='errorMessage' >Código hexadecimal invalido!</p>: ''}

      <section className="box-container">
        <BoxList listBox={colorList}/>
  
      </section>
    </main>
  )
}

export default App
