import React,{useState,useEffect} from 'react';
import axios from"axios"
import{Media,Socialmedia ,Social,Socialprag,Socialspan1,Socialspan2 } from"./style.js"
const Socailmedia = () => {

    const[social,Setsocial] = useState([])

    const socialmmenu=social.map((item,index)=>{return(
        <Socialmedia item={item.id} key={item.id}  >
        <Social className={item.icon}></Social>
        <Socialprag>
            <Socialspan1> {item.title}</Socialspan1>
            <Socialspan2> {item.body} </Socialspan2>
        </Socialprag>
    </Socialmedia>
    )})

    useEffect(()=>{
        axios.get("js/data.json").then(res =>{Setsocial(res.data.social)})
  
    },[])


    return (
        <Media>

{socialmmenu}
         

        </Media>
    )
}
export default Socailmedia;