﻿import React, { Component } from 'react';


export class Card extends Component {
    static displayName = Card.name;

    render() {
        var divCardStyle = {
            marginTop: "12px",
            marginLeft: "10px"
        };

        var cardStyle = {
            background: "#eafcf8",
            borderRadius: "15px",
            boxShadow: "2px 2px 5px rgb(155,155,155)",
            marginBottom: "13px",
            border: "3px solid #83f0ff",
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

            <div className="col-md-12 col-xxl-10" style={divCardStyle}>
                <div className="card" style={cardStyle}>
                    <div className="card-body" style={cardBodyStyle}>
                        <img className="float-start" src="./photo/Cat.jpg" style={photoStyle} />

                        <div>
                            <h5 className="fw-bold" style={nameStyle}>{this.props.mans.name}</h5>
                            <h6 className="text-muted mb-2">{this.props.mans.prof }</h6>
                            <div style={divProfessionStyle}>
                                <a href={"#"} style={professionStyle}>Департамент технологий</a>
                                <a href={"#"} style={professionStyle}>Инжнерный отдел</a>
                            </div>
                        </div>

                        <div>
                            <div className="d-flex align-items-center flex-wrap" style={workPhoneStyle}>
                                <svg className="bi bi-telephone-fill" xmlns="http://www.w3.org/2000/svg" width="1em" fill="currentColor" viewBox="0 0 16 16"
                                    style={svgStyle }>
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                                </svg>
                                <h6 style={headerWorkPhoneStyle }>рабочий телефон</h6>
                                <span className="badge bg-primary" style={badgeStyle}>{this.props.mans.workPhone}</span>
                            </div>
                            <div className="d-flex align-items-center flex-wrap" style={workPhoneStyle}>
                                <svg className="bi bi-telephone-fill" xmlns="http://www.w3.org/2000/svg" width="1em" fill="currentColor" viewBox="0 0 16 16"
                                    style={svgStyle}>
                                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"></path>
                                </svg>
                                <h6 style={headerWorkPhoneStyle}>мобильный телефон</h6>
                                <span className="badge bg-primary" style={badgeStyle}>{this.props.mans.mobPhone}</span>
                            </div>
                            <div class="d-flex align-items-center flex-wrap align-items-lg-center align-items-xl-center">
                                <svg class="bi bi-envelope-fill" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style={svgStyle }>
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path>
                            </svg>
                                <h6 style={headerWorkPhoneStyle}>электронная почта</h6><a href="#">{this.props.mans.email}</a>
                            </div>
                        </div>



                    </div>
                </div>



            </div>
        );
    }
}

//function MainData({ name, prof })
//{
//    return (
//        <div>
//            <h5 className="fw-bold" style={nameStyle}>{name}</h5>
//            <h6 className="text-muted mb-2">{prof}</h6>
//            <div style={divProfessionStyle}>
//                <a href={"#"} style={professionStyle}>Департамент технологий</a>
//                <a href={"#"} style={professionStyle}>Инжнерный отдел</a>
//            </div>
//        </div>
//    );
//}



//function PhonesAndEmail({ workPhone, mobPhone, email }) {

//    return (
//        <div>
//            <div className="d-flex align-items-center flex-wrap" style={workPhoneStyle}>
//                <svg className="bi bi-telephone-fill" xmlns="http://www.w3.org/2000/svg" width="1em" fill="currentColor" viewBox="0 0 16 16"
//                    style={svgStyle}>
//                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
//                </svg>
//                <h6 style={headerWorkPhoneStyle}>рабочий телефон</h6>
//                <span className="badge bg-primary" style={badgeStyle}>{workPhone }</span>
//            </div>
//            <div className="d-flex align-items-center flex-wrap" style={workPhoneStyle}>
//                <svg className="bi bi-telephone-fill" xmlns="http://www.w3.org/2000/svg" width="1em" fill="currentColor" viewBox="0 0 16 16"
//                    style={svgStyle}>
//                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"></path>
//                </svg>
//                <h6 style={headerWorkPhoneStyle}>мобильный телефон</h6>
//                <span className="badge bg-primary" style={badgeStyle}>{mobPhone }</span>
//            </div>
//            <div class="d-flex align-items-center flex-wrap align-items-lg-center align-items-xl-center">
//                <svg class="bi bi-envelope-fill" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style={svgStyle}>
//                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path>
//                </svg>
//                <h6 style={headerWorkPhoneStyle}>электронная почта</h6><a href="#">{email }</a>
//            </div>
//        </div>
//        );
//}
