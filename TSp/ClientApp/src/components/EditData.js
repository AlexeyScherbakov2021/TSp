import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class EditData extends Component {
    static displayName = EditData.name;

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            listPerson: []
        };


        this.curSearch = null;

        this.renderCard = this.renderCard.bind(this);
        this.LoadCardData = this.LoadCardData.bind(this);
        this.DeletePerson = this.DeletePerson.bind(this);

    }

    //-----------------------------------------------------------------------------------
    componentDidMount() {
        this.myRef = React.createRef();
        //console.log("componentDidMount");
    }

    //-----------------------------------------------------------------------------------
    componentDidUpdate() {
        this.state.loading = true;
    }


    //-----------------------------------------------------------------------------------
    render() {

        //console.log("searchText = " + this.props.searchText);

        if (this.state.loading) {
            this.LoadCardData(this.props.searchText);
            return (
                //<img src="loading_spinner.gif" />
                <p><em>Загрузка...</em></p>
            );
        }



        return (
            <div style={{ margin: "11px" }}>
                <Link className="btn btn-primary" to='/editForm' style={{ marginLeft: "11px", marginBottom: "5px" }}
                    type="button">Создать</Link>
                {this.state.listPerson.map((item, i) => this.renderCard(item, i))}
            </div>
        );
    }

    //-----------------------------------------------------------------------------------
    renderCard(item, index) {
        var liStyle = {
            background: "rgba(255, 255, 255, 0)",
            paddingTop: "4px",
            paddingBottom: "4px"
        };

        var cardStyle = {
            borderRadius: "4px",
            borderTopLeftRadius: "6px",
            border: "1px solid var(--bs-gray-600)",
            background: "linear-gradient(-50deg, #adcedb, #f8ffff), rgb(232,253,255)",
            boxShadow: "0px 0px 5px var(--bs-gray)"
        };


        //console.log("search= " + this.props.searchText);

        return (
            <div className="col-lg-10" key={item.personalId }>
                    <ul className="list-group">
                        <li className="list-group-item border-0" style={liStyle}>
                            <div className="card" style={cardStyle}>
                                <div className="card-body d-flex" style={{ padding: '2px' }} >
                                    <div className="col d-flex align-items-center col-auto">
                                    <img className="border rounded shadow justify-content-center" src={"./photo/" + item.personalPhoto} style={{ width: "60px" }} />
                                    </div>
                                    <div className="col col-8 px-2">
                                        <h5 className="d-flex justify-content-between align-items-center" style={{ marginBottom: "4px" }}>
                                        {item.personalLastName + ' ' + item.personalName + ' ' + item.personalMidName}
                                        {(item.personalDisabled == true) ?
                                            <span className="badge rounded-pill bg-danger" style={{ marginRight: "25px", marginTop: "5px" }} >
                                                отключен
                                            </span>
                                            : <p></p>
                                        }
                                        </h5>
                                        <h6 className="fw-normal" style={{ marginBottom: "4px" }} >
                                        <span>{item.profession}</span>
                                            :
                                        <span>{item.routeOtdels}</span>
                                        </h6>
                                    <h6 className="text-muted mb-2">раб.тел: <span className="fw-bold">{item.personalTel}</span>    моб.тел: <span className="fw-bold">{item.personalMobil}</span>    эл.почта: <span className="fw-bold">{item.personalEmail}</span></h6>
                                    </div>
                                    <div className="col d-flex flex-column justify-content-evenly col-auto">
                                    {/*<button className="btn btn-primary btn-sm" type="button">Редактировать</button>*/}
                                    <Link className="btn btn-primary" to={{ pathname: '/editForm', person: item}} type="button">Редактировать</Link>
                                    <button className="btn btn-secondary btn-sm" onClick={() => this.DeletePerson(item, index)} type="button">Удалить</button></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
        );

    }

    //-----------------------------------------------------------------------------------
    async LoadCardData(search) {

        if (search == null)
            search = '';


        //var xhr = new XMLHttpRequest();
        //xhr.open("delete", "cards/10", true);
        //xhr.setRequestHeader("Content-Type", "application/json");
        //xhr.onload = function () {
        //    if (xhr.status === 200) {
        //        this.loadData();
        //    }
        //}.bind(this);
        //xhr.send();

        //const data = new FormData();
        //data.append("value", 10);
        //var xhr = new XMLHttpRequest();

        //xhr.open("post", "cards", true);
        //xhr.onload = function () {
        //    if (xhr.status === 200) {
        //        this.loadData();
        //    }
        //}.bind(this);
        //xhr.send(data);


        //var xhr = new XMLHttpRequest();
        //xhr.open("get", "cards/Index", true);
        //xhr.setRequestHeader("Content-Type", "application/json");
        //xhr.onload = function () {
        //    this.listPerson = JSON.parse(xhr.responseText);
        //    this.setState({ loading: false });
        //}.bind(this);
        //xhr.send();

        //const response = await fetch('cards?otdel=-1&alpha=&search=' + search + '&page=1&CardsPerPage=1000');
        const response = await fetch('cards/Index?search=' + search);
        this.state.listPerson = await response.json();
        this.setState({ loading: false });

    }

    DeletePerson(person, index) {

        console.log("DeletePerson " + person.personalId);

        var result = window.confirm('Удалить "' + person.personalLastName + ' ' + person.personalName + ' ' + person.personalMidName + '"');

        if (result) {
            var xhr = new XMLHttpRequest();
            xhr.open("delete", "cards/" + person.personalId, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = function () {
                console.log("status = " + xhr.status);
                if (xhr.status === 200) {
                    const data = { ...this.state.listPerson };
                    delete data[index];
                    this.setState({ listPerson: data });
                }
            }.bind(this);
            xhr.send();
        }
    }


}
