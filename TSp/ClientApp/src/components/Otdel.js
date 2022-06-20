import React, { Component } from 'react';


export class Otdel extends Component {
    static displayName = Otdel.name;

    constructor(props) {
        super(props);

        this.state = { listOtdel2: [], loading: true };

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

        }

        let contents = this.state.loading
            ? <p><em>Loading otdels...</em></p>
            : handleData(this.state.listOtdel2);

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


