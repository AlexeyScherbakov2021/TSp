import React, { Component } from 'react';

//var listOtdel = [
//    {
//        id: 1,
//        name: "Аппарат управления"
//    },
//    {
//        id: 2,
//        name: "Группа системного администрирования"
//    },
//    {
//        id: 3,
//        name: "Инженерный отдел",
//        child: [
//            {
//                id: 3.1,
//                name: "Участок Автоматизированных Систем Управления"
//            },
//            {
//                id: 3.2,
//                name: "Участок сопровождения",
//                child: [
//                    {
//                        id: 3.3,
//                        name: "Участок сопровождения 1"
//                    },
//                    {
//                        id: 3.3,
//                        name: "Участок сопровождения 2"
//                    },

//                ]
//            },

//        ]
//    },
//    {
//        id: 4,
//        name: "Информационно-технический отдел"
//    },
//    {
//        id: 5,
//        name: "Испытательный центр"
//    },
//    {
//        id: 6,
//        name: "Конструкторский отдел"
//    },
//    {
//        id: 7,
//        name: "Отдел бухгалтерского учета"
//    }
//]



export class Otdel extends Component {
    static displayName = Otdel.name;

    constructor(props) {
        super(props);

        this.state = { listOtdel2: [], loading: true };

    }

    componentDidMount() {
        this.LoadOtdelData();
        //console.log("componentDidMount для отделов.");
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


        function funOtdels(data) {
            const { otdelName, subOtdel, otdelId } = data;

            return (

                //<p>{otdelName}</p>
                <div key={data.otdelId}>
                    <li className="list-group-item" key={data.otdelId}>
                        <button id={otdelId} href={"#"} type="button">{otdelName} </button>
                        {
                            subOtdel &&
                        <ul>
                                {subOtdel.map((i) => <>{funOtdels(i)}</>)}
                        </ul>
                        }
                    </li>
                </div>
            );
        };



        function handleData(arr) {

            return (
                arr.map((data) => <>{funOtdels(data)}</>)
            );

            //return <p>2222</p>

            //return (arr.map((data) => <p>{data.otdelName}</p>));

        }

        let contents = this.state.loading
            ? <p><em>Loading otdels...</em></p>
            : handleData(this.state.listOtdel2);
            //: this.state.listOtdel2.map((data) => <p>{data.otdelName}</p>);


        return (

            <aside className="col-3 d-none d-md-block col-lg-4" style={asideStyle}>
                <div>
                    <a id="-1" href={"#"} onClick={this.props.callBack}>Весь список</a>
                </div>
                <ul className="list-group border rounded overflow-auto" style={ulStyle} onClick={this.props.callBack}>
                    {contents}
                </ul>
            </aside>
            );
    }

    async LoadOtdelData() {

        const response = await fetch('otdel');
        const data = await response.json();
        this.setState({ listOtdel2: data, loading: false });
    }


}


