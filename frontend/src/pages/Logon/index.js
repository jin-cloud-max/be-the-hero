import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn }from 'react-icons/fi'
import './styles.css'
import heroImage from '../../assets/heroes.png'
import heroLogo from '../../assets/logo.svg'


export default function Logon() {

  return (
    <div className="logon-container">
      <section className="form">
        <img src={heroLogo} alt="Be The Hero"/>
        
        <form>
          <h1>Faça seu Logon</h1>
          <input placeholder="Sua ID"/>
          <button className="button" type="submit">Entrar</button>

          <Link  className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroImage} alt="Heroes"/>
    </div>
  )
}