import { useState,useEffect } from "react"

export const FetchHook = (url)=>{

    const [dado,setDado] = useState([])

    useEffect(()=>{
        const buscar = async ()=>{
            const objetoJson = await fetch(url)
            const objeto = await objetoJson.json()
            setDado(objeto)

        }
        buscar()
    },[url])

    return { dado }

}