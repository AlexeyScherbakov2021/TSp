import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Otdel } from './Otdel'
import { Alpha } from './Alpha'
import { Card } from './Card'

var cards = [
    {
        name: "Петров Петр Петрович",
        prof: "Инженер 1 категории",
        workPhone: 3578,
        mobPhone: 4578,
        email: "p.petrov@ngk-ehz.ru"
    },
    {
        name: "Иванов Иван Иванович",
        prof: "Инженер 2 категории",
        workPhone: 3579,
        mobPhone: 4579,
        email: "i.ivanov@ngk-ehz.ru"
    },
    {
        name: "Константинов Константин Константинович",
        prof: "Начальник инженерного отдела",
        workPhone: 3598,
        mobPhone: 4574,
        email: "k.konstantinov@ngk-ehz.ru"
    },
    {
        name: "Сидоров Станислав Иванович",
        prof: "Инженер-технолог",
        workPhone: 3547,
        mobPhone: 4534,
        email: "s.sidorov@ngk-ehz.ru"
    },

]



export class Home extends Component {
  static displayName = Home.name;

    render() {

      return (
          <div className="container-fluid d-flex">
              <Otdel />
              <div className="col-12 offset-0 offset-md-3 col-md-9 offset-lg-4 col-lg-8">
                  <Alpha />
                  {cards.map((item, i) => (<Card mans={item } />))}
              </div>
          </div>
    );
  }
}
