import React, { Component } from 'react';


export class Card extends Component {
    static displayName = Card.name;

    constructor(props) {
        super(props);

        this.state = { loading: true };
        this.renderCard = this.renderCard.bind(this);
    }

    render() {
        return this.props.listPerson.map((item) => this.renderCard(item));
    }


    renderCard(item) {

        var divCardStyle = {
            marginTop: "12px",
            marginLeft: "10px"
        };

        var cardStyle = {
            background: "#effeff",
            borderRadius: "11px",
            boxShadow: "0px 0px 8px 1px var(--bs-secondary),inset 0px 0px 10px 0px rgb(123,186,249)",
            marginBottom: "13px",
            border: "2px solid rgb(82,168,255)",
            marginRight: "8px"
        };

        var cardBodyStyle = {
            padding: "6px"
        };

        var photoStyle = {
            marginRight: "12px",
            height: "136px"
        };

        var nameStyle = {
            marginBottom: "0px",
            marginTop: "-2px"
        };

        var divProfessionStyle = {
            marginTop: "-10px"
        }

        var professionStyle = {
            marginRight: "8px"
        }

        var workPhoneStyle = {
            marginBottom: "2px",
            marginTop: "2px"
        };

        var svgStyle = {
            marginRight: "9px",
            color: "var(--bs-blue)"
        };

        var headerWorkPhoneStyle = {
            marginBottom: "0px",
            marginRight: "44px"
        }

        var badgeStyle = {
            fontSize: "18px",
            borderRadius: "16px"
        };

        return (
            <div className="col-md-12 col-xxl-10" style={divCardStyle} key={item.personalId}>
                <div className="card" id={item.personalId} style={cardStyle}>
                    <div className="card-body" style={cardBodyStyle}>
                        <img className="float-start" src={"./photo/" + item.personalPhoto} style={photoStyle} />
                        <div>
                            <h5 className="fw-bold" style={nameStyle}>{item.personalLastName + ' ' + item.personalName + ' ' + item.personalMidName}</h5>
                            <h6 className="text-muted mb-2">{item.profession}</h6>
                            <div style={divProfessionStyle}>
                                <a href={"#"} id={item.personalOtdelId } style={professionStyle}>{item.routeOtdels }</a>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex align-items-center flex-wrap" style={workPhoneStyle}>
                                <svg className="bi bi-telephone-fill" xmlns="http://www.w3.org/2000/svg" width="1em" fill="currentColor" viewBox="0 0 16 16"
                                    style={svgStyle}>
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                                </svg>
                                <h6 style={headerWorkPhoneStyle}>рабочий телефон</h6>
                                <span className="badge bg-primary" style={badgeStyle}>{item.personalTel}</span>
                            </div>
                            <div className="d-flex align-items-center flex-wrap" style={workPhoneStyle}>
                                <svg className="bi bi-telephone-fill" xmlns="http://www.w3.org/2000/svg" width="1em" fill="currentColor" viewBox="0 0 16 16"
                                    style={svgStyle}>
                                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"></path>
                                </svg>
                                <h6 style={headerWorkPhoneStyle}>мобильный телефон</h6>
                                <span className="badge bg-primary" style={badgeStyle}>{item.personalMobil}</span>
                            </div>
                            <div className="d-flex align-items-center flex-wrap align-items-lg-center align-items-xl-center">
                                <svg className="bi bi-envelope-fill" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style={svgStyle}>
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path>
                                </svg>
                                <h6 style={headerWorkPhoneStyle}>электронная почта</h6><a href={"mailto:" + item.personalEmail}>{item.personalEmail}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


