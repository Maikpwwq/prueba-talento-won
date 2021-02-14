import React from "react";
import Menu from "../container/Menu";
import "../css/catatogo.css";

// this.consultar();
// this.consultar = this.consultar.bind(this);
// page, per_page, category, subcategory
  // consultar = () => {
    // get (/products/search?page=${page}&per_page=${per_page}&category=${category}&subcategory=${subcategory}) 
    // let Item2 = {
    //   page: 5,
    //   per_page: 10,
    //   category: "",
    //   subcategory: "",
    // };
  // };

class Catalogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  render() {
    return (
      <div className="catalogo-container">
        <Menu />
        <div className="catalogo-group">
          <div className="catalogo-fixed-menu">
            <div className="catalogo-fixed-menu_list">
              <ul>
                <li>TOP 10</li>
                <li>APPS</li>
                <li>BONOS</li>
                <li>PAQUETES</li>
                <li>RECARGAS</li>
              </ul>
            </div>
            <div className="catalogo-fixed-menu_saldo">Saldo</div>
            <div className="catalogo-fixed-menu_busqueda">
              
            </div>
          </div>
          <div className="catalogo-shadow"></div>
          <div className="catalogo-productos">
              <GaleriaProductos items={this.state.items} />
          </div>
        </div>
      </div>
    );
  }
}

class GaleriaProductos extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      URL: "https://www.wonapp.co/products/top",
    };        
  }

  render() {    
    return (
      <div className="coleccion-productos">
        {this.state.productos.map((item) => (
          <div className="coleccion-card" key={item.id}>
            <div className="coleccion-card_imagen">
              {item.imagen}
            </div>
            <div className="coleccion-card_descripcion">
              {item.descripcion}
            </div>
            <div className="coleccion-card_precio">
              {item.precio}
            </div>
            <div className="coleccion-card_puntos">
              <div className="coleccion-card_puntos_producto">
                Obtienes {item.puntos} puntos
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  componentDidMount(){
    fetch(this.state.URL, {
      method: "GET",      
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "",
        "Authorization": "Bearer ${token}",
      },
    })
      .then((response) => response.json())
      .then((arreglo) => {
        var i;
        for (i=0; i<= arreglo.data.length-1 ; i++) {
          // console.log(arreglo.data[i]);
          let Catalogo = {
            id: arreglo.data[i].id,
            imagen: arreglo.data[i].image_url,
            descripcion: arreglo.data[i].name,
            precio: arreglo.data[i].value,
            puntos: arreglo.data[i].points,
          };
          this.setState(state => ({
            productos: state.productos.concat(Catalogo),
          }));
        }              
        console.log(this.state.productos);
      })     
        // En caso de no poder efectuar la consulta      
      .catch((error) => {
        this.setState({ error });
        console.log(error);
      });
  };
};

export default Catalogo;
