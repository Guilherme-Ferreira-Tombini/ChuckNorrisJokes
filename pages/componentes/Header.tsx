import styles from '../../styles/Header.module.css'
import Image from 'next/image'

export default function Header (){
return(
  <div className={styles.header}>
    <div className={styles.img}>
    <Image src="/download.png" width="80px" height="70px"/>
    </div>

    <div className={styles.menu}>
     <h3><a href="#container2">Piada aleatória</a></h3>
     <h3><a href="#container3">Piada categoria</a></h3>
    </div>
  </div>

)
}
