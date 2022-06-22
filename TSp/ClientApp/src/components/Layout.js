import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Home } from './Home';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
      //console.log("�������� Layout " + this.props.updateData);

      return (
        <div>
             <NavMenu updateData={this.props.updateData } />
             {/*<NavMenu />*/}
            {this.props.children}
      </div>
    );
  }
}
