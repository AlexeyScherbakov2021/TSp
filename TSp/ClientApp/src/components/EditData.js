import React, { Component } from 'react';

export class EditData extends Component {
    static displayName = EditData.name;


    render() {

        var liStyle = {
            background: "rgba(255, 255, 255, 0)",
            paddingTop: "4px",
            paddingBottom: "4px"
        };

        var cardStyle = {
            borderRadius: "4px",
            borderTopLeftRadius: "6px",
            border: "1px solid var(--bs-gray-600)",
            background: "linear-gradient(-40deg, #7d9eab, #e2f6ff), rgb(202,223,255)", 
            boxShadow: "0px 0px 5px var(--bs-gray)"
        };


        console.log("search= " + this.props.searchText);

        return (
            <div style={{ margin: "11px" }}>
                <button className="btn btn-primary" style={{ marginLeft: "11px" }} type="button">Создать</button>
                <div className="col-lg-10">
                    <ul className="list-group">
                        <li className="list-group-item border-0" style={liStyle }>
                            <div className="card" style={cardStyle }>
                                <div className="card-body d-flex" style={{ padding: '2px' }} >
                                    <div className="col d-flex align-items-center col-auto">
                                        <img className="border rounded shadow justify-content-center" src="./photo/Агеев Виктор Викторович.jpg" style={{ width: "60px" }} />
                                    </div>
                                    <div className="col col-8 px-2">
                                        <h5 className="d-flex justify-content-between align-items-center" style={{marginBottom: "4px"}}>
                                            Петров Петр Петрович
                                            <span className="badge rounded-pill bg-danger" style={{ marginRight: "25px", marginTop: "5px" }} >
                                                отключен
                                            </span>
                                        </h5>
                                        <h6 className="fw-normal" style={{ marginBottom: "4px" }} >
                                            <span>Инженер-электрик</span>
                                            :
                                            <span>Инженерный отдел / группа АСУ</span>
                                        </h6>
                                        <h6 className="text-muted mb-2">раб.тел: <span className="fw-bold">3587</span>       моб.тел: <span className="fw-bold">3897</span>     эл.почта: <span className="fw-bold">admin@yandex.ru</span></h6>
                        </div>
                                    <div className="col d-flex flex-column justify-content-evenly col-auto">
                                        <button className="btn btn-primary btn-sm" type="button">Редактировать</button>
                                        <button className="btn btn-secondary btn-sm" type="button">Удалить</button></div>
                                    </div>
                        </div>
                    </li>
                </ul>
            </div>
          </div>
            );
    }
}
