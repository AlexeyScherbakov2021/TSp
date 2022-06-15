import React, { Component } from 'react';


var Alphabet =  [ "А", "Б", "В","Г","Д","Е","Ж","З","И","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Э","Ю","Я"];

export class Alpha extends Component {
    static displayName = Alpha.name;

    render() {

        var alphaStyle = {
            paddingBottom: "2px",
            marginTop: "0px",
            background: "var(--bs-gray-100)",
            paddingTop: "5px",
            position: "sticky",
            top: "74px",
            zIndex: "1010"
        };

        var alphaButtonStyle = {
            padding: "8px",
            paddingTop: "0px",
            paddingBottom: "0px",
            fontSize: "18px",
            marginLeft: "1px"
        };

        return (
            <div id="alpha" style={alphaStyle} >
                {
                    Alphabet.map((alpha, i) => (
                        <button id={alpha } className="border rounded border-primary" href={"#"} key={i} type="button"
                            style={alphaButtonStyle} onClick={this.props.callBack}>
                            <strong id={alpha}>{alpha}</strong>
                        </button>))
                }
            </div>
            );

    }
}