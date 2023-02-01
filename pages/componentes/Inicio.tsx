import styles from '../../styles/Inicio.module.css'
import Image from 'next/image'

export default function Inicio (){
return(
  <div className={styles.container}>
      <div className={styles.image}>
     <Image src="/inicio.png" width="270px" height="260px"/>
     </div>
     <h1 className={styles.texto}>The most famous Chuck Norris jokes are now gathered on a website that you can randomly generate them or go through the available categories.</h1>
  </div>
)
}
