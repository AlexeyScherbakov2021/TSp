import React, { Component } from 'react';

var listOtdel = [
    {
        id: 1,
        name: "Аппарат управления"
    },
    {
        id: 2,
        name: "Группа системного администрирования"
    },
    {
        id: 3,
        name: "Инженерный отдел",
        child: [
            {
                id: 3.1,
                name: "Участок Автоматизированных Систем Управления"
            },
            {
                id: 3.2,
                name: "Участок сопровождения",
                child: [
                    {
                        id: 3.3,
                        name: "Участок сопровождения 1"
                    },
                    {
                        id: 3.3,
                        name: "Участок сопровождения 2"
                    },

                ]
            },

        ]
    },
    {
        id: 4,
        name: "Информационно-технический отдел"
    },
    {
        id: 5,
        name: "Испытательный центр"
    },
    {
        id: 6,
        name: "Конструкторский отдел"
    },
    {
        id: 7,
        name: "Отдел бухгалтерского учета"
    }
]


const Otdels = ({ data }) => {
    const { id, name, child } = data;

    return (
        <>
        <li className="list-group-item">
                <a href={"#"} type="button">{name} onClick={ this.selectOtdel }</a>
        </li>
        <ul>
        {
            child &&
                child.map((i, n) => <Otdels data={i} key={n} />)
            }
            </ul>
            </>
        );
};


export class Otdel extends Component {
    static displayName = Otdel.name;

    constructor(props) {
        super(props);

        this.selectOtdel = this.selectOtdel.bind(this);
    }

    selectOtdel(e) {

    }




    render() {

        var ulStyle = {
            height: "380px",
            marginRight: "10px",
            borderStyle: "none"
        };

        var asideStyle = {
            position: "fixed",
            top: "74px"
        };


        function handleData(arr) {

            // возвращаем полученный массив компонентов
            return [...arr.map((i, n) => <Otdels data={i} key={n} />)];

        }

        let showHTMLData = handleData(listOtdel);

        return (

            <aside className="col-3 d-none d-md-block col-lg-4" style={asideStyle}>
                <div>
                    <h5>Весь список</h5>
                </div>
                <ul className="list-group border rounded overflow-auto" style={ulStyle}>
                    {handleData(listOtdel)}

                </ul>
            </aside>
            );
    }

}