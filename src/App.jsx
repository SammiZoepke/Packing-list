import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'


function App() {
  const [item, setItem] = useState("")
  const [amount, setAmount] = useState("1")


  return (
    <>
      <Logo/>
      <Form item={item} amount={amount} onAmount={setAmount} onItem={setItem}/>
      <PackingList item={item} amount={amount}/>
      <Stats/>
    </>
  )
}

export default App
