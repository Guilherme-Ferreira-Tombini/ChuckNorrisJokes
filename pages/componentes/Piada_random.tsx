import styles from '../../styles/Piada_random.module.css'
import React, { useCallback, useEffect, useState } from "react";
//import translate from "google-translate-api-next";
import api from "../api/api";


export interface ProjetoData{
    id: string;
    value: string;
  }

export default function Piada_random(){
    const [card, setCard] = useState<ProjetoData>();

    const array = ['/chuck1.gif', '/chuck2.gif', '/chuck3.gif', '/chuck4.gif']

    const img = ()=>{
        const randomElement = array[Math.floor(Math.random() * array.length)];
        return randomElement
        
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    })

  useEffect(() => {
    api
      .get("/jokes/random")
      .then((response) => setCard(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

return(
   <div className={styles.card}>
   <div className={styles.imagem} style={{ backgroundImage: `url(${img()})`, backgroundSize: '100% 100%'}}></div>

   <div className={styles.card1}>
    <p>"{card?.value}"</p>
   </div>
    
  </div>
)
}