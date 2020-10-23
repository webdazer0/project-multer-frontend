import React, { Component } from 'react';

class Uploads extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="card my-4">
                            <div className="card-header">
                                <h3>Carica la tua IMG</h3>
                            </div>
                            <div className="card-body">
                                <form action="/api/upload" method="post" encType="multipart/form-data">
                                    <div className="form-group my-4">
                                        <input type="file" name="image" className="form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-success btn-block">Carica</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Uploads;