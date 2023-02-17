import styles from '../../styles/Piada_category.module.css'
import React, { useCallback, useEffect, useState } from "react";
import api from '../api/api';

export interface ProjetoData{
  id: string;
  value: string;
}

export default function Piada_category(){
  const [category1, setCategory1] = useState<ProjetoData>();

  const [string, setString] = useState('')

  const food = () => {
    if(!string){
       return setString('?category=food')
    }else{
      return setString('')
    }
  }
  
  const animal = () =>{
    if(!string){
      return setString('?category=animal')
   }else{
     return setString('')
   }
  }

  const career = () =>{
    if(!string){
      return setString('?category=career')
   }else{
     return setString('')
   }
  }

  const celebrity = () =>{
    if(!string){
      return setString('?category=celebrity')
   }else{
     return setString('')
   }
  }

  const history= () =>{
    if(!string){
      return setString('?category=history')
   }else{
     return setString('')
   }
  }

  const movie= () =>{
    if(!string){
      return setString('?category=movie')
   }else{
     return setString('')
   }
  }

  const music= () =>{
    if(!string){
      return setString('?category=music')
   }else{
     return setString('')
   }
  }

  const sport= () =>{
    if(!string){
      return setString('?category=sport')
   }else{
     return setString('')
   }
  }

  const money= () =>{
    if(!string){
      return setString('?category=money')
   }else{
     return setString('')
   }
  }

  const political= () =>{
    if(!string){
      return setString('?category=political')
   }else{
     return setString('')
   }
  }

  const science = () =>{
    if(!string){
      return setString('?category=science')
   }else{
     return setString('')
   }
  }

  useEffect(()=>{
    api
    .get("https://api.chucknorris.io/jokes/random"+string)
    .then((response) => setCategory1(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, [string])


return(
   <div className={styles.container}>
     <h1>Random joke by category</h1>

     <div className={styles.menu}>
      <h3>We have some available categories of random jokes that you can see:</h3>
      <div className={styles.menu1}>
      <p><a onClick={animal}>animal</a></p>
      <p><a onClick={career}>career</a></p>
      <p><a onClick={celebrity}>celebrity</a></p>
      <p><a onClick={food}>food</a></p>
      <p><a onClick={history}>history</a></p>
      <p><a onClick={movie}>movie</a></p>
      <p><a onClick={music}>music</a></p>
      <p><a onClick={sport}>sport</a></p>
      <p><a onClick={money}>money</a></p>
      <p><a onClick={political}>political</a></p>
      <p><a onClick={science}>science</a></p>
      </div>
     </div>

      <div className={styles.frase}>
        {!string && <p>Choose a category</p>}
        {string && <h2>{'"'+category1?.value+'"'}</h2>}
      </div>
    
  </div>
)
}