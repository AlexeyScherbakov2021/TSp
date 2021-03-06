import React, { Component } from 'react';


//var Alphabet = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Э", "Ю", "Я"];


export class Alpha extends Component {
    static displayName = Alpha.name;

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        };

        this.LoadAlpha = this.LoadAlpha.bind(this);
    }

    Alphabet = [];

    componentDidMount() {
        this.LoadAlpha();
    }


    render() {

        var alphaStyle = {
            paddingBottom: "6px",
            marginTop: "0px",
            background: "var(--bs-gray-100)",
            paddingTop: "5px",
            position: "sticky",
            top: "60px",
            zIndex: "1010"
        };

        var alphaButtonStyle = {
            padding: "8px",
            paddingTop: "0px",
            paddingBottom: "0px",
            fontSize: "18px",
            marginLeft: "1px"
        };

            
        return this.state.loading
            ? <p><em>Loading alpha...</em></p>
            : (
                <div id="alpha" style={alphaStyle} >
                    {
                        this.Alphabet.map((alpha, i) => (
                            <button id={alpha} className={alpha == this.props.currentAlpha ? "border rounded border-primary btn-primary" : "border rounded border-primary" } href={"#"} key={i} type="button"
                            style={alphaButtonStyle} onClick={this.props.callBack}>
                            <strong id={alpha}>{alpha}</strong>
                            </button>))
                    }
                </div>
            );

    }

    async LoadAlpha() {
        const response = await fetch('alpha');
        const data = await response.json();
        this.Alphabet = data;
        this.setState({ loading: false });
    }

}