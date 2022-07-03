import React, { Component, useState } from 'react';

export class DropzoneComponent extends Component {
    static displayName = DropzoneComponent.name;

    files = [];

    constructor(props) {
        super(props);

        this.drop = false;
        this.state = { drag: false };
        this.dragStartHandler = this.dragStartHandler.bind(this);
        this.dragLeaveHandler = this.dragLeaveHandler.bind(this);
        this.dropHandler = this.dropHandler.bind(this);
    }


    dragStartHandler(e) {
        e.preventDefault();
        this.setState({ drag : true});
    }

    dragLeaveHandler(e) {


        e.preventDefault();
        this.setState({ drag : false});
    }

    dropHandler(e) {
        e.preventDefault();

        let files = [...e.dataTransfer.files];

        //files.map(file => Object.assign(file, {
        //    preview: URL.createObjectURL(file)
        //}));

        this.fileName = files[0].name;
        this.urlFile = URL.createObjectURL(files[0]);

        this.drop = true;

        //console.log(this.files[0]);

        //const data = new FormData();
        //data.append("file", this.files[0]);

        //var xhr = new XMLHttpRequest();
        //xhr.open("post", "cards", true);
        //xhr.setRequestHeader("Content-Type", "application/json");
        //xhr.onload = function () {
        //    if (xhr.status === 200) {
        //        //this.loadData();
        //    }
        //}.bind(this);
        //xhr.send(data);

        this.setState({ drag: false });
    }



    render() {

        const baseStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            borderWidth: 2,
            borderRadius: 2,
            borderColor: '#eeeeee',
            borderStyle: 'dashed',
            backgroundColor: '#fafafa',
            color: '#bdbdbd',
            width: "232px",
            height: "300px",
            transition: 'border .3s ease-in-out'
        };

        //const imgStyle = {
        //    width: "232px"
        //};
        //const thumbs = this.files.map(file => (
        //    <div key={file.name}>
        //        <img
        //            src={file.preview}
        //            alt={file.name}
        //        />
        //    </div>
        //));

        if (this.drop == false) {
            //console.log(this.props.urlFile);
            this.fileName = this.props.fileName;
            this.urlFile = this.props.urlFile;
        }
        this.drop = false;

        return (
            <div style={baseStyle} className="align-items-center justify-content-center">
                { this.state.drag
                    ? <div className="drop-area" 
                        onDragStart={e => this.dragStartHandler(e)}
                        onDragLeave={e => this.dragLeaveHandler(e)}
                        onDragOver={e => this.dragStartHandler(e)}
                        onDrop={e => this.dropHandler(e)}
                    >отпустите файл</div>
                    :
                    <div 
                    onDragStart={e => this.dragStartHandler(e)}
                    onDragLeave={e => this.dragLeaveHandler(e)}
                    onDragOver={e => this.dragStartHandler(e)}
                       >
                        {this.fileName === null
                            ? <div  >Перетащите файл</div>
                            : <img className="img-thumbnail" 
                                src={this.urlFile} alt={this.fileName}
                            />
                        }
                    </div>
                }

            </div>

        );
    }
}



