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
  }

  function handleToggle(id){
    setItemList((itemList) =>
      itemList.map((item) =>
         item.id === id ? {...item, packed:!item.packed}: item
      )
    )
     console.log(itemList)
  }

  function handleDelete(id){
    setItemList((itemList)=>
    itemList.filter((item)=>
    item.id !== id)
  )
  }

  function handleClearList(){
    setItemList([])
  }
  return (
    <div className="app">
      <Logo/>
      <Form onAdd={handleAdd}/>
      <PackingList itemList={itemList} onToggle={handleToggle} onDelete={handleDelete} onClear={handleClearList}/>
      <Stats itemList={itemList}/>
    </div>
  )
}

export default App
