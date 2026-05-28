import { useEffect, useState } from 'react'
//importe do cuscton hook
import { FetchHook } from './hoocks/FetchHook'

function App() {
  //url que iremos trabalhar 
  const url = 'https://dummyjson.com/carts'

  //pegando dados do custon hook e renomeando
  const {dado:item} = FetchHook(url)
  
  //console.log para saber que estamos conseguindo trazer os dados
  useEffect(()=>{
    console.log(item)
  },[item])

  return (
    <>
      <h1>HTTP Requests</h1>
      {item?.carts?.map((cart) => (
        <p key={cart.id}>{cart.products[0].title}</p>
      ))}
    </>
  )
}

export default App
