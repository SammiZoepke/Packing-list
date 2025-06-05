import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'

function App() {
  return (
    <>
      <Logo/>
      <Form/>
      <PackingList/>
      <Stats/>
    </>
  )
}

export default App
