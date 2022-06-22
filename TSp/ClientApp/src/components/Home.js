import React, { Component } from 'react';
import { Container } from 'reactstrap';
//import React, { useState, useEffect } from "react";
import { Otdel } from './Otdel'
import { Alpha } from './Alpha'
import { Card } from './Card'


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

        this.state = {
        loading: true
        };

        this.clickOtdel = this.clickOtdel.bind(this);
        this.clickAlpha = this.clickAlpha.bind(this);
        this.LoadCardData = this.LoadCardData.bind(this);
    }


    componentDidMount() {
        this.LoadCardData(this.curOtdel, this.curAlpha, null, 1);
    }


    componentDidUpdate() {
        //console.log("componentDidUpdate");
        this.state.loading = true;
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextState.loading && this.sourceUpdate == null && nextProps.searchText != "") {
            this.curSearch = nextProps.searchText;
            this.curAlpha = null;
            this.curOtdel = null;
            this.sourceUpdate = "search";
        }

        if (nextState.loading) {
            this.LoadCardData(this.curOtdel, this.curAlpha, this.curSearch, 1);
            return false;
        }

        //console.log("Home render " + this.props.searchText);

        //if (this.oldSearch == this.props.searchText) {
        //    return false;
        //}

        //this.oldSearch = this.props.searchText


    //    if (this.props.searchText != null && this.oldSearch != this.props.searchText) {
    //        this.oldSearch = this.props.searchText
    //        this.LoadCardData(null, null, this.props.searchText, 1);
    //        console.log("Home LoadCardData " + this.props.searchText);
    //    }

        return true;
    }

    //-----------------------------------------------------------------------------------
    clickOtdel(e) {
        this.sourceUpdate = "otdel";
        this.curOtdel = e.target.id;
        this.curAlpha = null;
        this.curSearch = null;
        //console.log("clickOtdel=" + this.curOtdel);

        this.setState({ loading: true });
        //this.LoadCardData(this.curOtdel, this.curAlpha, null, 1);
    }

    //-----------------------------------------------------------------------------------
    clickAlpha(e) {
        this.sourceUpdate = "alpha";
        this.curAlpha = e.target.id;
        this.curSearch = null;
        this.setState({ loading: true });
        //this.LoadCardData(this.curOtdel, this.curAlpha, null, 1);
    }


    //-----------------------------------------------------------------------------------
    render() {

        //this.LoadCardData(this.curOtdel, this.curAlpha, null, 1);

        console.log("render loading=" + this.state.loading + " curOtdel=" + this.curOtdel);

        //if (this.state.loading && this.sourceUpdate == null && this.props.searchText != "") {
        //    this.curSearch = this.props.searchText;
        //    this.curAlpha = null;
        //    this.curOtdel = null;
        //    this.sourceUpdate = "search";
        //}

        //console.log("render2 loading=" + this.state.loading + " curOtdel=" + this.curOtdel);


        //console.log("render loading=" + this.state.loading);
        console.log("render search= " + this.curSearch);


        //console.log(this.listPerson);

        this.sourceUpdate = null;

        return (
            this.state.loading
                ? <p><em>Загрузка карт...</em></p>
                : 
          <div className="container-fluid d-flex">
                    <Otdel callBack={this.clickOtdel} currentOtdel={this.curOtdel } />
              <div className="col-12 offset-0 offset-md-3 col-md-9 offset-lg-4 col-lg-8">
                        <Alpha callBack={this.clickAlpha} currentAlpha={this.curAlpha} />
                <Card listPerson={this.listPerson}  />
              </div>
          </div>

        );
        //this.state.loading
        //   ? <p><em>Загрузка карт...</em></p>
        //    :
        //(
        //  <div className="container-fluid d-flex">
        //            <Otdel callBack={this.clickOtdel} currentOtdel={this.curOtdel } />
        //      <div className="col-12 offset-0 offset-md-3 col-md-9 offset-lg-4 col-lg-8">
        //                <Alpha callBack={this.clickAlpha} currentAlpha={this.curAlpha} />
        //        <Card listPerson={this.listPerson}  />
        //      </div>
        //  </div>
        //);
        
    }


    //-----------------------------------------------------------------------------------
    async LoadCardData(selOtdel, selAlpha, search, page) {


        if (selOtdel == null)
            selOtdel = -1;

        if (selAlpha == null)
            selAlpha = '';

        if (search == null)
            search = '';

        if (page == null)
            page = 1;

        const response = await fetch('cards?otdel=' + selOtdel + '&alpha=' + selAlpha + '&search=' + search + '&page=' + page);
        const data = await response.json();
        this.listPerson = data;
        this.setState({ loading: false });
    }

}








{/*{cards.map((item, i) => (<Card mans={item } />))}*/ }
