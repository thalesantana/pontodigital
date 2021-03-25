import React,{ useEffect, useState } from 'react'
//import { Link } from 'react-router-dom'
import api from '../services/api'
import style from '../styles/Login.module.css'

export default function Home() {
  const [admins,setAdmins] = useState([])
  const [data, setData] = useState({email: "", pass: ""})
  const [user, setUser] = useState({email: "", pass: ""})
  const [error, setError] = useState("")

  useEffect(() => {
    api.get('admins').then((response)=>{
      setAdmins(response.data)
    })
  }, [])

  const submitHandler = e => {
    e.preventDefault()

  }
  const Login = data =>{
  admins.map((admin)=>{
     if( data.email === admin.email && data.pass === admin.pass){
       console.log('Login ok')
       setUser({
         email:data.email,
         pass:data.pass
       }, []);
    }else{
      console.log("Email e senha ou usuário não existe!")
    setError("Email e senha ou usuário não existe!")
    }
  })
  }
  //console.log(admins)
  return (
    <div className={style.container}>
      <header>
        <title>Ponto Eletrônico</title>
        <meta name="viewport" content="width=device-width, initial=scale=1.0"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="styleheet"/>
      </header>

      <div className={style.background}></div>
      <div className={style.textContainer}>
        
        <div className={style.contentContainer}>

          <div className={style.WellcomeContainer}>
            
            <div>
              <h1>Seja Bem-vindo</h1>
              <p>Para continuar <br></br> por favor faça o login</p>
              <h2>Logotipo</h2>
            </div>
            
          </div>
          
          <form className={style.LoguinContainer} onSubmit={submitHandler}>

            <div>
              <div><h1>Utilize o painel agora <br/> mesmo</h1></div>
              
              <div >
                <input 
                  type="email" 
                  name="email" 
                  id="emailInput" 
                  placeholder="Digite o seu e-mail" 
                  onChange={e => setData({...data, email: e.target.value})}
                  value={data.email}
                />

                <input 
                  type="password" 
                  name="password" 
                  id="passInput" 
                  placeholder="Digite a sua senha"
                  onChange={e => setData({...data,pass: e.target.value})} 
                  value={data.pass}
                />
                <span>Esqueci Minha Senha</span>
              </div>
              {(error !== "")?(<div className="error">{error}</div>) : ""}
              <div><button type="submit">Entrar</button></div>
            </div>
              
          </form>

        </div>
      </div>

    </div>
  )
}
