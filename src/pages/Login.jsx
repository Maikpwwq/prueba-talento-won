import React from 'react';
import '../css/login.css';
import fetch from 'node-fetch';
//import logo from '../assets/won_logo_inicio.png';
// import Fetch, from ''

class Login extends React.Component {
    constructor() {
      super();
      this.state = { 
        users: [],         
        email: "dfcastanedat@slabcode.com",
        password: "Combino2",
        type: 'User',
        url : 'https://www.wonapp.co',
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    };
    
    render() {
      return (
        <div className="login-container">
          {/* <img src={logo} className="login-logo" alt="logo" />           */}
          <div className="login-logo-container">
            <div className="login-logo-image"></div>
          </div>
          <div className="login-form-container">
            <form className="login-form" onSubmit={this.handleSubmit}>
              <span className="login-title"> Iniciar Sesion</span>
              <div className="login-input">
                <input                
                  type="text"
                  name="email"
                  className="login-input_text"
                  id="txtEmail" 
                  onChange={this.handleChange}
                  placeholder="Correo electrónico"
                  defaultValue={this.state.email}
                />  
              </div>
              <div className="login-input">
                <input
                  type="text" 
                  name="password"               
                  className="login-input_text"
                  id="txtPassword"
                  onChange={this.handleChange}
                  placeholder="Contraseña"
                  defaultValue={this.state.password}
                />  
              </div> 
              <span className="login-olvido-password" >
                <a href="/login">Olvidé la contraseña</a>
              </span>
              <div className="login-grupo-botones">
                <button value="Submit" className="login-btn-ingresar">
                  <span className="login-btn-text-ingresar">
                    INGRESAR
                  </span> 
                </button>
                <span className="login-password-invalido">Contraseña incorrecta</span>
                <div className="login-crear-cuenta">
                    <button className="login-crear-cuenta-btn">
                      <span className="login-crear-cuenta-btntext">
                        Crear cuenta
                      </span>
                    </button>
                </div>
              </div>            
            </form>
          </div>          
        </div>
      );
    };
  
    handleChange = (e) => {
      const target = e.target;
      const value = target.value;
      const name = target.name;        
      // El evento altera los datos guardados 
      this.setState({ 
          [name]: value
      });
      console.log(this.state, 'Escribiendo ...');    
    };
  
    handleSubmit = (e) => {      
      e.preventDefault();
      if (this.state.email.length === 0) {
        return;
      }
      const newItem = {
        email: this.state.email,
        password: this.state.password,
        type: this.state.type,
      };
      //<WonApi />    
      fetch(this.state.url+'/login', {
        method: 'POST', 
        body: JSON.stringify(newItem), 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'',
          'Authorization': 'Bearer ${token}'
        },
      })
      .then( response => response.json())
      .then( data => {   
        console.log(data);     
        const User = {
          token: data.token,
          id: data.id,
          type: data.type,
        };
        this.setState(state => ({
          users: state.users.concat(User),
          email: '',
          password: ''
        }));
        console.log(this.state.users);
        localStorage.setItem('Auth', User);
        this.props.history.push('/catalogo')
          // En caso de no poder cargar la pagina del catalogo
          .catch((error) => console.log(error));
        })
        // En caso de no poder efectuar la consulta
        .catch(error => {
            this.setState({ error });
            // console.log(error);
        });
    };
}

/*
class WonApi extends React.Component {

    constructor() {
      super();
        this.state ={
          url : 'https://www.wonapp.co',
      }
    }
    
    // consumo Api inicio sesion a traves de peticion http con fetch

    consumeEndpoint = () => {      
      
    };    
}
*/

export default Login;