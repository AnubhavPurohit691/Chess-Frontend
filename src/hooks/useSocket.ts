import { useEffect, useState } from "react"

export const useSocket=() => {
   const [socket,setsocket]=useState<WebSocket|null>(null)
   useEffect(() => {
     const ws = new WebSocket("ws://localhost:8080")
         ws.onopen=()=>{
            console.log("connected")
            setsocket(ws)
         }
         ws.onclose=()=>{
            console.log("disconnected")
            setsocket(null)
         }
        return () => {
            ws.close()
        }
   },[])
   return socket
}