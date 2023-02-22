import styles from '../../styles/Texto_footer.module.css'
import Image from 'next/image'

export default function Texto_footer (){
return(
  <div className={styles.container}>
      <div className={styles.containe}>
    <div className={styles.texto}>
      <h2>About the site</h2>
      <p>This site was another part of my programming learning, studying more the visual part and I understand more about TypeScript.</p>
    </div>

    <div className={styles.texto}>
      <h2>Technologies used</h2>
      <p>This site was made with Node.js, Next.js, CSS and Typescript languages. The programs were VSCode and the Opera browser.</p>
    </div>

    <div className={styles.texto}>
      <h2>Chuck Jokes API</h2>
      <p>The API used to bring the jokes was: <a href='https://api.chucknorris.io'>https://api.chucknorris.io</a>. With it it is possible to search for jokes</p>
    </div>
    </div>

    <div className={styles.coisas}>
    <div className={styles.contatos}>
      <h3>Contacts</h3>
      <div className={styles.links}>
      <a href="https://www.instagram.com/guilhermetombini/"><img className={styles.img} src="/instagram.png"/></a>
      <a href="https://www.linkedin.com/in/guilherme-ferreira-tombini-593015247/"><img className={styles.img} src="/linkedin.png"/></a>
      <a href="mailto:ge555449@gmail.com"><img className={styles.img} src="/email.png"/></a>
      </div>
    </div>

    <div className={styles.logo}>
   <img className={styles.footer} src="/footer.png"/>
    <h5>® 2023 Guilherme Tombini</h5>
    </div>
    </div>
  </div>
)
}
