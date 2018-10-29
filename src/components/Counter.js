import React, { Component } from 'react';
import '../style/bootstrap.css';
import '../style/counter-style.css';

class Counter extends Component{
    state ={
        angka : 0
    };

    tambah = () =>{
        // alert ('test');
        this.setState({ 
            angka : this.state.angka +1 });
    }

    kurang = () =>{
        this.setState({
             angka : this.state.angka -1 });
    }
    render(){
        return(
        <div class="bg">
            <div class="h-100 align-items-center">
                <div class="col">
                    <h1 id="count" class="h1 display-1 font-weight-bold text-white center">
                        {this.state.angka}
                    </h1>
                    <br />
                    <div class="container">
                        <div class="row">
                            <div class="col-sm"></div>
                                <div class="col-sm">
                                        <div class="d-flex justify-content-center">
                                            <button onClick = {() => this.tambah()} type="button" class="btn btn-outline-primary btn-block text-white font-weight-bold">Tambah</button>
                                            <button onClick = {() => this.kurang()} type="button" class="btn btn-outline-primary btn-block text-white font-weight-bold" >Kurang</button>
                                        </div>
                                </div>
                            <div class="col-sm"></div>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
            // <div>
            //     <h1>
            //         {this.state.angka}
            //     </h1>
            //     <button onClick = {() => this.tambah()}>Tambah</button>
            //     <button onClick = {() => this.kurang()}>Kurang</button>
            // </div>
        );
    }
}

export default Counter;