import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'

function App() {
  const [itemList, setItemList] = useState([])

  function addItem(item){
    setItemList([...itemList, item])
    console.log(itemList)
  }

  function handleToggle(id){
    setItemList(itemList=>
      itemList.map(item=>
        item.id === id ? {...item, packed: !item.packed} : item
      )
    )
  }

  function handleDelete(id){
    setItemList(itemList=>
      itemList.filter(item =>
        item.id !== id
      )
    )
  }
  
  return (
    <div className="app">
      <Logo/>
      <Form onAddItem={addItem}/>
      <PackingList itemList={itemList} onHandleToggle={handleToggle} onDelete={handleDelete}/>
      <Stats itemList={itemList}/>
    </div>
  )
}

export default App
