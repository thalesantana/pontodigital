import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"/>
      </Head>

      <div className={styles.background}></div>
      <div className={styles.textContainer}>
        
        <div className={styles.contentContainer}>

          <div className={styles.WellcomeContainer}>
            
            <div>
              <h1>Seja Bem-vindo</h1>
              <p>Para continuar <br></br> por favor faça o login</p>
              <h2>Logotipo</h2>
            </div>
            
          </div>
          
          <div className={styles.LoguinContainer}>

            <div>
              <h1>Utilize o painel agora <br/> mesmo</h1>
              <input type="email" name="email" id="emailInput" placeholder="Digite o seu e-mail"/>
              <input type="password" name="password" id="passInput" placeholder="Digite a sua senha"/>
              <span>Esqueci Minha Senha</span>
              <button>Entrar</button>
            </div>
              
          </div>

        </div>
      </div>

    </div>
  )
}
