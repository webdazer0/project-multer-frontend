import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Images extends Component {

    constructor(props) {
        super(props);
        this.state = { data:[], redirect: false };
       }

    getImages = async () => {
            const res = await fetch('/api/upload');
            const data = await res.json();
            return this.setState({data});
        };

    deleteImage = async (id) => {
        
        const URI = `/api/images/${id}`;
        const res = await fetch(URI, {
            method: 'DELETE',
        });
        // const data = await res.json();
        this.update();
        // console.log(data,message);
        // return <Redirect to='/' />;
        // window.location.href = "/";
    }

    update = () => {
        this.getImages();
    };


    componentDidMount() {
        this.getImages();
    }

    render() {

        console.log(this.state);       

        // const images = this.state.map(image => <img src={`google.it`} />);

        return(
           <div className="container">
               <h3>Immagini</h3>
               <div className="row">
               {this.state.data.map(({imgUrl, _id}) => (
                   <div key={_id} className="col-md-4">
                       <div className="card my-3">
                       <div className="card-header">
                            <small>{_id}</small>
                       </div>
                       <div className="card-body">
                       <img src={`/uploads/${imgUrl}`} alt={_id} className="img-fluid" />
                       </div>
                       <div className="card-footer">
                           <button onClick={() => this.deleteImage(_id)} className="btn btn-danger">Delete</button>
                       </div>
                   </div>
                   </div>
               ))}
               </div>
           </div>
        )
    }
}

export default Images;