import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios').default;

export default class Planta extends Component {
	constructor(props){
        super(props);
        this.state = {
            plants: [], 
            nombre: "Pepito"
        };
        //console.log(props);
        //console.log("Se esta ejecutando el contructor (constructor)")
    }

    async componentDidMount(){
       /* try{
            var respuesta = await axios.get('https://trefle.io/api/v1/plants?token=PWMmIx7yT3RyNgiLUOLcdboglHHQaKmu4A_CSt7_n3E');
            if(Array.isArray(respuesta.data))
                this.setState({plants : respuesta.data}); 
            else
                this.setState({plants : [respuesta.data]}); 
        }catch(error){
            console.log("================");
            console.log(error);
            console.log(respuesta);
            console.log("================");
        }
        */
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?api_key=VmDN7rZJcN4H6SkCCmMf4et28BcatWVMJEgqBygh&start_date=2020-08-07&end_date=2020-08-07')
        .then(res => {
          console.log(res)
        })
        .catch(e => console.log(e))
    }
    
   
    //delete
    render() {
        let {plants} = this.state;
        console.log("Se esta renderizando el HTML (render)");
        return (
            <article className="row">
                <article className="col-lg-12">
                    <table id="tbl-mensualidades" className="table table-bordered">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Nombre común</th>
                            <th>Nombre de Familia</th>
                            <th>Nombre Científico</th>
                            <th>Costo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plants.map((plant, id) => {
                                return (<tr key = {id}>
                                    <td>{plant.id}</td>
                                    <td>{plant.common_name}</td>
                                    <td>{plant.family_name}</td>
                                    <td>{plant.scientific_name}</td>
                                    <td>{plant.cost}</td>
                                </tr>);
                            })}
                        </tbody>
                    </table>
                    <form>
                        <label>Nombre común	</label>
                        <input type = "text" id = "nombre_comum"></input>
                        
                        <label>Nombre de familia</label>
                        <input type = "text" id = "nombre_familia"></input>
                        
                        <label>Nombre Científico </label>
                        <input type = "text" id = "nombre_cintifico"></input>
                        
                        <label>Costo </label>
                        <input type = "text" id = "costo"></input>
                        
                    </form>
                 </article>            

            </article>
        );
    }
}