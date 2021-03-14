import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ponto Eletrônico</title>
        <meta name="viewport" content="width=device-width, initial=scale=1.0"/>
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
              <div><h1>Utilize o painel agora <br/> mesmo</h1></div>
              
              <div>
                <input type="email" name="email" id="emailInput" placeholder="Digite o seu e-mail"/>
                <input type="password" name="password" id="passInput" placeholder="Digite a sua senha"/>
                <span>Esqueci Minha Senha</span>
              </div>
              
              <div><button>Entrar</button></div>
            </div>
              
          </div>

        </div>
      </div>

    </div>
  )
}
