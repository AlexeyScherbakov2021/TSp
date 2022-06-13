import React, { Component } from 'react';

export class Otdel extends Component {
    static displayName = Otdel.name;

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


        return (

            <aside className="col-3 d-none d-md-block col-lg-4" style={asideStyle}>
                <div>
                    <h5>Весь список</h5>
                </div>
                <ul className="list-group border rounded overflow-auto" style={ulStyle}>
                    <li className="list-group-item">
                        <a href={"#"} type="button">Отдел информационных технологий</a>
                    </li>
                    <li className="list-group-item">
                        <a href={"#"} type="button">Отдел маркетинга</a>
                    </li>
                    <li className="list-group-item">
                        <a href={"#"} type="button">Отдел менеджмента качества</a>
                    </li>
                    <li className="list-group-item">
                        <a href={"#"} type="button">Инженерный отдел</a>
                    </li>
                </ul>
            </aside>
            );
    }

}