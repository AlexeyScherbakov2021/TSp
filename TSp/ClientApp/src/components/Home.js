import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Otdel } from './Otdel'
import { Alpha } from './Alpha'
import { Card } from './Card'


export class Home extends Component {
    static displayName = Home.name;

    listPerson = [];
    curAlpha;
    curOtdel = -1;
    curSearch;


    constructor(props) {
        super(props);

        this.state = {
        loading: true,
    };

        this.clickOtdel = this.clickOtdel.bind(this);
        this.clickAlpha = this.clickAlpha.bind(this);
        this.LoadCardData = this.LoadCardData.bind(this);
    }


    componentDidMount() {
        this.LoadCardData(this.curOtdel, this.curAlpha, null, 1);
    }

    //-----------------------------------------------------------------------------------
    clickOtdel(e) {
        this.curOtdel = e.target.id;
        this.curAlpha = null;
        this.LoadCardData(this.curOtdel, this.curAlpha, null, 1);

        console.log("select otdel " + e.target.id);
    }

    //-----------------------------------------------------------------------------------
    clickAlpha(e) {
        console.log("select alpha " + e.target.id);
        this.curAlpha = e.target.id;
        this.LoadCardData(this.curOtdel, this.curAlpha, null, 1);
    }


    //-----------------------------------------------------------------------------------
    render() {

        return this.state.loading 
           ? <p><em>Loading cards...</em></p>
            :
      (
          <div className="container-fluid d-flex">
              <Otdel callBack={this.clickOtdel } />
              <div className="col-12 offset-0 offset-md-3 col-md-9 offset-lg-4 col-lg-8">
                <Alpha callBack={this.clickAlpha} />
                <Card listPerson={this.listPerson}  />
              </div>
          </div>
    );
    }


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
