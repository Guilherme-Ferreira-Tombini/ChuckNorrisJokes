import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Inicio from './componentes/Inicio'
import Image from 'next/image'
import Piada_random from './componentes/Piada_random'
import Piada_category from './componentes/Piada_category'
import Texto_footer from './componentes/Texto_footer'


export default function Home() {

  return (
    <div className={styles.container} >
      <Head>
        <title>Chuck Norris Jokes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <div className={styles.main}>

    <div id='container' className={styles.container1}>
      <Inicio/>

      <div className={styles.botao1}>
       <a href="#container2">
        <div className={styles.botao2}>
          <Image src="/seta_abaixo.png" width="85px" height="80px"/>
        </div> 
      </a>
     </div>

    </div>

    <div id='container2' className={styles.container2}>
     <div>
       <Piada_random/>
     </div>

    </div>

    <div id='container3' className={styles.container3} >
      <div>
      <Piada_category/>
      </div>
    </div>

    <div id='container4' className={styles.container4}>
      <Texto_footer/>
    <div className={styles.botao3}>
       <a href="#container">
        <div className={styles.botao4}>
          <Image src="/seta.png" width="85px" height="80px"/>
        </div> 
      </a>
     </div>
    </div>
    </div>

   </div>
  )
}

