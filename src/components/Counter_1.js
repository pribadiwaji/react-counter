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
            <div class="h-100 row align-items-center">
                <div class="col">
                    <h1 id="count" class="h1 display-1 font-weight-bold text-white center">0</h1>
                    <br />
                    <div class="container">
                        <div class="row">
                            <div class="col-sm"></div>
                            <div class="col-sm">
                                <div class="d-flex justify-content-center">
                                    <button onclick="tambah()" type="button" class="btn btn-outline-primary btn-block text-white font-weight-bold">Plus</button>
                                    <button onclick="kurang()" type="button" class="btn btn-outline-primary btn-block text-white font-weight-bold">Minus</button>
                                </div>
                            </div>
                            <div class="col-sm"></div>
                        </div>
                    </div>
                    {/* <div style="margin:auto;"></div> */}
                    
                    <div class="container">
                        <div class="row ">
                            <div class="col-sm"></div>
                            <div class="col-6 ">
                                <div class="d-flex justify-content-center ">
                                    <button id="btn-reset" onclick="reset()" type="button" class="btn btn-danger btn-block text-white btn-sm">Reset</button>
                                    <button id="btn-incr" onclick="showincr()" type="button" class="btn btn-outline-primary btn-block text-white btn-sm">Set Increment</button>
                                </div>
                            </div>
                            <div class="col-sm"></div>
                        </div>
                    </div>
                    
                    <br /><br />
                    <div id="showDiv" >
                        <div  class="d-flex justify-content-center">
                            <div class="d-flex bd-highlight">
                                <div class="p-2 flex-fill bd-highlight align-self-center">
                                    <h2 class="h6 text-white">increment :</h2>
                                </div>
                                <div class="p-2 flex-fill bd-highlight align-self-center">
                                    <h2 id="incr" class="h6 text-white">1</h2>
                                </div>
                                <div class="p-2 flex-fill bd-highlight">
                                    <div class="d-flex justify-content-center align-self-center">
                                        <div class="btn-group-vertical" role="group" aria-label="Basic example">
                                            <button onclick="incr_tambah()" type="button" class="btn btn-outline-success btn-sm text-white">+</button>
                                            <button onclick="incr_kurang()" type="button" class="btn btn-outline-success btn-sm text-white">-</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        );
    }
}

export default Counter;