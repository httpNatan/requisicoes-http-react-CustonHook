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
    <div className="app">
      <h1>HTTP Requests</h1>
      <div className="cards">
        {item?.carts?.map((cart) => (
          <article className="card" key={cart.id}>
            <h2>Carrinho {cart.id}</h2>
            <p>Produtos: {cart.products.length}</p>
            <p className="product-title">{cart.products[0].title}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default App
