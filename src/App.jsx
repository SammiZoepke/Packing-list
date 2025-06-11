import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'

function App() {
  const [itemList, setItemList] = useState([])

  function handleAdd(item){
    setItemList(itemList=>
      [...itemList, item])
      console.log(itemList)
  }

  function handleToggle(id){
    setItemList((itemList) =>
      itemList.map((item) =>
         item.id === id ? {...item, packed:!item.packed}: item
      )
    )
  }

  
  return (
    <div className="app">
      <Logo/>
      <Form onAdd={handleAdd}/>
      <PackingList itemList={itemList} onToggle={handleToggle}/>
      <Stats/>
    </div>
  )
}

export default App
