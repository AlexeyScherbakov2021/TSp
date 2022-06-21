import React, { Component } from 'react';


export class Otdel extends Component {
    static displayName = Otdel.name;

    constructor(props) {
        super(props);

        this.state = { listOtdel2: [], loading: true };

        this.funOtdels = this.funOtdels.bind(this);

    }

    componentDidMount() {
        this.LoadOtdelData();
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


        let contents = this.state.loading
            ? <p><em>Загрузка отделов...</em></p>
            : this.state.listOtdel2.map((data, i) => <>{this.funOtdels(data, i)}</>)

        return (

            <aside className="col-3 d-none d-md-block col-lg-4" style={asideStyle}>
                <div className="mb-1">
                    <a id="-1" href={"#"} className="fs-5 fw-bold" onClick={this.props.callBack}>Показать весь список</a>
                </div>
                <ul className="list-group border rounded overflow-auto" style={ulStyle} onClick={this.props.callBack}>
                    {contents}
                </ul>
            </aside>
            );
    }

    //-----------------------------------------------------------------------------------------------
   funOtdels(data, i) {
    const { otdelName, subOtdel, otdelId } = data;

       return (

           //<p>{otdelName}</p>
           //<div key={data.otdelId}>
           <li className={otdelId == this.props.currentOtdel ? "list-group-item active border border-primary rounded-2 border-0 text-light" : "list-group-item"}
               id={otdelId} style={{ padding: 0 }} >

               <button id={otdelId} className={otdelId == this.props.currentOtdel ? "btn text-start text-light" : "btn text-start"}
                   type="button" style={{ margin: 1 }} >{otdelName}</button>
                {
                   subOtdel &&
                   <ul>
                        {subOtdel.map((child, n) => <>{this.funOtdels(child, n)}</>)}
                   </ul>
                }
            </li>
        //</div>
        );
    }
    //-----------------------------------------------------------------------------------------------

    async LoadOtdelData() {

        const response = await fetch('otdel');
        const data = await response.json();
        this.setState({ listOtdel2: data, loading: false });
    }


}


