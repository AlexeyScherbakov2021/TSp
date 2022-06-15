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



export class Otdel extends Component {
    static displayName = Otdel.name;

    //constructor(props) {
    //    super(props);

    //}


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


        function funOtdels(data, k) {
            const { name, child } = data;

            return (
                <>
                    <li className="list-group-item">
                        <button id={k} href={"#"} type="button">{name} </button>
                    </li>
                    <ul>
                        {
                            child &&
                            child.map((i, n) => <>{funOtdels(i, n)}</>)
                        }
                    </ul>
                </>
            );
        };



        function handleData(arr) {

            return (
                arr.map((data, i) => <>{funOtdels(data, i)}</>)
            );

            //return [...arr.map((i, n) => <Otdels data={i} key={n} />)];

        }


        return (

            <aside className="col-3 d-none d-md-block col-lg-4" style={asideStyle}>
                <div>
                    <a id="-1" href={"#"} onClick={this.props.callBack}>Весь список</a>
                </div>
                <ul className="list-group border rounded overflow-auto" style={ulStyle} onClick={this.props.callBack}>
                    {handleData(listOtdel)}
                </ul>
            </aside>
            );
    }

}


