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

  const handleChange = (event: any) => {
    setString(event.target.value);
    console.log(string)
  };

  useEffect(() => {
    api
      .get("https://api.chucknorris.io/jokes/random?category="+string)
      .then((response) => setCategory1(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [string]);

  console.log(category1)

return(
   <div className={styles.container}>
     <h1>Random joke by category</h1>

     <div className={styles.menu}>
      <h3>We have some available categories of random jokes that you can see:</h3>
      <div className={styles.menu1}>
      <p>animal</p>
      <p>career</p>
      <p>celebrity</p>
      <p>food</p>
      <p>history</p>
      <p>movie</p>
      <p>music</p>
      <p>sport</p>
      <p>money</p>
      <p>political</p>
      <p>science</p>
      </div>
     </div>

     <div>
        <input className={styles.input} type="text" placeholder='Write the category name' value={string} onChange={handleChange} />
      </div>

      <div className={styles.frase}>
        {!string && <h1>Write a category</h1>}
        {string && <h2>"{ category1?.value}"</h2>}
      </div>
    
  </div>
)
}