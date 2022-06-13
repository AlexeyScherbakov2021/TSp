import React, { Component } from 'react';

export class Alpha extends Component {
    static displayName = Alpha.name;

    render() {

        var alphaStyle = {
            paddingBottom: "2px",
            marginTop: "0px",
            background: "var(--bs-gray-100)",
            paddingTop: "5px"
        };

        var alphaButtonStyle = {
            padding: "8px",
            paddingTop: "0px",
            paddingBottom: "0px",
            fontSize: "18px",
            marginLeft: "1px"
        };

        return (
            <div id="alpha" style={alphaStyle}>
                <a className="border rounded border-primary" href={"#"} type="button" style={alphaButtonStyle}>
                    <strong>А</strong>
                </a>
                <a className="border rounded border-primary btn-primary" href={"#"} type="button" style={alphaButtonStyle}>
                    <strong>А</strong>
                </a>
            </div>
            );

    }
}