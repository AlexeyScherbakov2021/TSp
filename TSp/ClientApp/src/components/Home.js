import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Otdel } from './Otdel'
import { Alpha } from './Alpha'
import { Card } from './Card'


export class Home extends Component {
    static displayName = Home.name;



    constructor(props) {
        super(props);

    this.state = {
        curAlpha: null,
        curOtdel: null,
        curSearch: ""
    };

        this.clickOtdel = this.clickOtdel.bind(this);
        this.clickAlpha = this.clickAlpha.bind(this);
    }


    clickOtdel(e) {

        this.setState({
            curOtdel: e.target.id,
            curAlpha: null
        });

        console.log("select otdel " + e.target.id);
    }

    clickAlpha(e) {
        this.setState({
            curAlpha: e.target.id
        });
        console.log("select alpha " + e.target.id);
    }


    render() {



      return (
          <div className="container-fluid d-flex">
              <Otdel callBack={this.clickOtdel } />
              <div className="col-12 offset-0 offset-md-3 col-md-9 offset-lg-4 col-lg-8">
                  <Alpha callBack={this.clickAlpha} />
                  <Card selAlpha={this.state.curAlpha} selOtdel={this.state.curOtdel} search={this.state.curSearch} />
              </div>
          </div>
    );
  }
}









{/*{cards.map((item, i) => (<Card mans={item } />))}*/ }
