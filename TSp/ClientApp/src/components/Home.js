import React, { Component } from 'react';
import { Container } from 'reactstrap';
//import React, { useState, useEffect } from "react";
import { Otdel } from './Otdel'
import { Alpha } from './Alpha'
import { Card } from './Card'
import { ToTop } from './ToTop'

export class Home extends Component {
    static displayName = Home.name;

    listPerson = [];
    curAlpha;
    curOtdel = -1;
    curSearch;
    sourceUpdate;
    oldSearch;

    constructor(props) {
        super(props);

        this.clickOtdel = this.clickOtdel.bind(this);
        this.clickAlpha = this.clickAlpha.bind(this);
    }


    //-----------------------------------------------------------------------------------
    componentDidMount() {
        this.myRef = React.createRef();
    }

    //-----------------------------------------------------------------------------------
    clickOtdel(e) {
        this.typeUpdate = "otdel";
        this.curOtdel = e.target.id;
        this.curAlpha = null;
    }

    //-----------------------------------------------------------------------------------
    clickAlpha(e) {
        this.typeUpdate = "alpha";
        this.curAlpha = e.target.id;
    }


    //-----------------------------------------------------------------------------------
    render() {

        if (this.typeUpdate != null) {
            curSearch = null;
        } esle {
            curSearch = this.props.searchText;
        }



        return (
            <div className="container-fluid d-flex" ref={this.myRef} >
                <Otdel callBack={this.clickOtdel} currentOtdel={this.curOtdel} />
                <div className="col-12 offset-0 offset-md-3 col-md-9 offset-lg-4 col-lg-8">
                    <Alpha callBack={this.clickAlpha} currentAlpha={this.curAlpha} />
                    <Card curAlpha={this.curAlpha} curOtdel={this.curOtdel} curSearch={this.props.searchText} /> 
                </div>
                <ToTop scrollWin={this.myRef} />
          </div>

        );
       
    }

}



