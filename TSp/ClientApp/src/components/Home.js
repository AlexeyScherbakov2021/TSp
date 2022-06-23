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
            loading: true,
            keyCards: 1
        };

        this.listPerson = [];
        this.currentPage = 1;
        this.LoadedAll = false;
        this.endPage = false;


        this.clickOtdel = this.clickOtdel.bind(this);
        this.clickAlpha = this.clickAlpha.bind(this);
        this.LoadCardData = this.LoadCardData.bind(this);
        this.onScrollList = this.onScrollList.bind(this);
    }


    //-----------------------------------------------------------------------------------
    componentDidMount() {
        this.myRef = React.createRef();
        window.addEventListener('scroll', this.onScrollList)
        window.addEventListener('resize', this.onScrollList)
        this.LoadCardData(this.curOtdel, this.curAlpha, null, this.state.currentPage);
    }

    //-----------------------------------------------------------------------------------
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollList)
        window.removeEventListener('resize', this.onScrollList)
    }

    //-----------------------------------------------------------------------------------
    componentDidUpdate() {
        this.state.loading = true;
    }

    //-----------------------------------------------------------------------------------
    shouldComponentUpdate(nextProps, nextState) {

        if (nextState.loading && this.sourceUpdate == null && nextProps.searchText != "") {
            this.curSearch = nextProps.searchText;
            this.curAlpha = null;
            this.curOtdel = null;
            this.sourceUpdate = "search";
        }

        if (nextState.loading) {
            //this.scrollToMyRef();
            this.LoadCardData(this.curOtdel, this.curAlpha, this.curSearch, this.state.currentPage);
            this.state.keyCards += 1;
            //return false;
        }
        return true;
    }

    //-----------------------------------------------------------------------------------
    onScrollList(e) {
        const height = document.body.clientHeight;
        const screenHeight = window.innerHeight;
        const scrolled = window.scrollY;

        const threshold = height - screenHeight / 4;
        const position = scrolled + screenHeight;

        if (position >= threshold && !this.LoadedAll && !this.endPage) {
            this.endPage = true;
            this.currentPage++;
            //console.log("page " + this.currentPage);
            this.LoadCardData(this.curOtdel, this.curAlpha, this.curSearch, this.currentPage);
        }

    }


    //scrollToMyRef = () => {
    //    window.scrollTo(0, 0)
    //    //window.scrollTo(0, this.myRef.current.scrollHeight)
    //}


    //-----------------------------------------------------------------------------------
    clickOtdel(e) {
        this.sourceUpdate = "otdel";
        this.curOtdel = e.target.id;
        this.curAlpha = null;
        this.curSearch = null;
        this.currentPage = 1;
        this.LoadedAll = false;

        this.setState({ loading: true });
    }

    //-----------------------------------------------------------------------------------
    clickAlpha(e) {
        this.sourceUpdate = "alpha";
        this.curAlpha = e.target.id;
        this.curSearch = null;
        this.currentPage = 1;
        this.LoadedAll = false;
        this.setState({ loading: true });
    }


    //-----------------------------------------------------------------------------------
    render() {

        this.sourceUpdate = null;

        return (

            <div className="container-fluid d-flex" ref={this.myRef} >
                <Otdel callBack={this.clickOtdel} currentOtdel={this.curOtdel} />
                <div className="col-12 offset-0 offset-md-3 col-md-9 offset-lg-4 col-lg-8">
                        <Alpha callBack={this.clickAlpha} currentAlpha={this.curAlpha} />
                    { this.state.loading
                        ? <img src="loading_spinner.gif" />
                        : <Card listPerson={this.listPerson} /> }
                </div>
          </div>

        );
       
    }

    //onScroll = { event => onScrollList(event) } style = {{ transition: 'ease 0.5s' }}
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
        if (data.length == 0 && page > 1) {
            this.LoadedAll = true;
            return;
        }

        if (page > 1) {
            for (let d of data)
                this.listPerson.push(d);
        } else {
            this.listPerson = data;
        }

        this.setState({ loading: false });
        this.endPage = false;
    }

}



