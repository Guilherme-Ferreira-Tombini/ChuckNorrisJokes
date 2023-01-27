import styles from '../../styles/Inicio.module.css'
import Image from 'next/image'

export default function Inicio (){
return(
  <div className={styles.container}>
      <div className={styles.image}>
     <Image src="/inicio.png" width="270px" height="260px"/>
     </div>
     <h1 className={styles.texto}>As mais famosas piadas de Chuck Norris estão agora reunidas em um site que você pode gerar aleatoriamente ou ir pelas categorias disponíveis.</h1>
  </div>
)
}
