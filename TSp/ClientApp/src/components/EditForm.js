import React, { Component } from 'react';
import { DropzoneComponent } from './DropFile';


export class EditForm extends Component {
    static displayName = EditForm.name;


    constructor(props) {
        super(props);

        this.state = {
            fileName: null,
            preview: null
        };


        this.savePerson = this.savePerson.bind(this);
        this.BrowsePhoto = this.BrowsePhoto.bind(this);
    }

    render() {

        return (
            <div className="row justify-content-center">
                <div className="col">
                    <div className="card mb-5">
                        <div className="card-body p-sm-5">
                            <form method="post" onSubmit={this.savePerson }>
                                <div className="mb-3">
                                    <h6>Фамилия</h6>
                                    <input ref="lastName" id="name-2" className="form-control" type="text" name="name" />
                                    <h6>Имя</h6>
                                    <input ref="name" id="name-3" className="form-control" type="text" name="name" />
                                    <h6>Отчество</h6>
                                    <input ref="midName" id="name-1" className="form-control" type="text" name="name" />
                                    <h6>Должность</h6>
                                    <input ref="profession" id="name-6" className="form-control" type="text" name="name" />
                                    <h6>Рабочий телефон</h6>
                                    <input ref="workPhone" id="name-4" className="form-control" type="text" name="name" />
                                    <h6>Мобильный телефон</h6>
                                    <input ref="mobPhone" id="name-5" className="form-control" type="text" name="name" />
                                    <h6>Отдел</h6>
                                    <select ref="otdel" className="form-select">
                                        <optgroup label="Отдел">
                                            <option value="12">This is item 1</option>
                                            <option value="13">This is item 2</option>
                                            <option value="14">This is item 3</option>
                                        </optgroup>
                                    </select>
                                    <div className="form-check" style={{ marginTop: "18px" }}>
                                        <input ref="isDiasabled" id="formCheck-1" className="form-check-input" type="checkbox" />
                                        <label className="form-check-label" htmlFor="formCheck-1">Отключен</label>
                                    </div>
                                </div>
                                <h6>Электронная почта</h6>
                                <input ref="email" id="email-2" className="form-control" type="email" name="email" />
                                <div>
                                    <button className="btn btn-primary d-block w-100"
                                        type="submit" style={{ margin: "14px" }}>Сохранить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="justify-content-center">
                        <DropzoneComponent fileName={this.state.fileName } urlFile={ this.state.preview }/>
                        {/*<img className="img-thumbnail" src="IMG_20131014_215721.jpg" style={{ width: "232px"} } />*/}
                        <input type="file" accept="image/" required onChange={this.BrowsePhoto } />

                    </div>
                    <div className="justify-content-evenly">
                        {/*<button className="btn btn-primary" onClick={(e) => this.BrowsePhoto(e)} type="button" style={{ marginRight: "60px" }}>Обзор...</button>*/}
                        <button className="btn btn-secondary" type="button">Удалить</button>
                    </div>

                </div>
            </div>

            );
    }

    savePerson(event) {

        event.preventDefault();

        //console.log(this.refs.photoName.value);

        const item = {
            personalName: this.refs.name.value,
            personalLastName: this.refs.lastName.value,
            personalMidName: this.refs.midName.value,
            personalEmail: this.refs.email.value,
            personalTel: this.refs.workPhone.value,
            personalMobil: this.refs.mobPhone.value,
            personalPhoto: "",
            personalProfId: 1,
            personalOtdelId: this.refs.otdel.value,
            personalDisabled: this.refs.isDiasabled.checked
        }


        fetch("cards/create", {
            method: 'POST',
            headers: {
                //'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            //.then(response => response.json())
            .then((stat) => {
                console.log("response " + stat.status);
            //    getItems();
            //    addNameTextbox.value = '';
            })
            .catch(error => console.error('Unable to add item.', error));


        //const data = new FormData();
        //data.append("personalName", this.refs.name.value);
        //var xhr = new XMLHttpRequest();
        //xhr.open("post", "cards", true);
        //xhr.setRequestHeader("Content-Type", "application/json");
        //xhr.onload = function () {
        //    if (xhr.status === 200) {
        //        //this.loadData();
        //    }
        //}.bind(this);
        //xhr.send(JSON.stringify(data));


        //history.push(`/adm`)
        //this.context.router.push('/adm');
    }

    BrowsePhoto(event) {

        event.preventDefault();

        let files = [...event.target.files];
        //let preview;

        if (files[0]) {
            this.setState(
                {
                    fileName: files[0].name,
                    preview: URL.createObjectURL(files[0])
                });

            //console.log("выбран файл " + this.preview);
        }

    }

}

