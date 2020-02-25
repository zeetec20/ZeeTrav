class Contact extends React.Component{
    constructor(){
        super()

        this.state = {
            prevAddress: {
                text: '',
                detail: ''
            },
            address: {
                text: '',
                detail: ''
            },
            prevNumber_phone: {
                text: '',
                detail: ''
            },
            number_phone: {
                text: '',
                detail: ''
            },
            prevEmail: {
                text: '',
                detail: ''
            },
            email: {
                text: '',
                detail: ''
            },

            updateAddress: false,
            updateEmail: false,
            updateNumber_phone: false
        }

        this.updateAddress = this.updateAddress.bind(this)
        this.updateNumber_phone = this.updateNumber_phone.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
        this.saveAddress = this.saveAddress.bind(this)
        this.saveNumber_phone = this.saveNumber_phone.bind(this)
        this.saveEmail = this.saveEmail.bind(this)
    }

    updateAddress(event, key){
        let state = this.state
        if (!this.state.updateAddress) {
            event.preventDefault()
            state.updateAddress = true
            this.setState(state)
        } else {
            if (key == 1) {
                state.address.text = event.target.value
                this.setState(state)
            } else {
                state.address.detail = event.target.value
                this.setState(state)
            }
        }
    }

    updateNumber_phone(event, key){
        let state = this.state
        if (!this.state.updateNumber_phone) {
            event.preventDefault()
            state.updateNumber_phone = true
            this.setState(state)
        } else {
            if (key == 1) {
                state.number_phone.text = event.target.value
                this.setState(state)
            } else {
                state.number_phone.detail = event.target.value
                this.setState(state)
            }
        }
    }

    updateEmail(event, key){
        let state = this.state
        if (!this.state.updateEmail) {
            event.preventDefault()
            state.updateEmail = true
            this.setState(state)
        } else {
            if (key == 1) {
                state.email.text = event.target.value
                this.setState(state)
            } else {
                state.email.detail = event.target.value
                this.setState(state)
            }
        }
    }

    saveAddress(event){
        if (event != null) event.preventDefault()
        let state = this.state
        state.updateAddress = false
        this.setState(state)

        if (this.state.prevAddress.text != this.state.address.text) {
            let data = new FormData
            data.append('text', this.state.address.text)
            axios({
                method: 'post',
                url: `${MAIN_URL}/api/dbjson/contact/address/text`,
                data: data
            }).then(response => {
                console.log(response)
            })
        }
        if (this.state.prevAddress.detail != this.state.address.detail) {
            let data = new FormData
            data.append('text', this.state.address.detail)
            axios({
                method: 'post',
                url: `${MAIN_URL}/api/dbjson/contact/address/descript`,
                data: data
            }).then(response => {
                console.log(response)
            })
        }
    }

    saveNumber_phone(event){
        if (event != null) event.preventDefault()
        let state = this.state
        state.updateNumber_phone = false
        this.setState(state)

        if (this.state.prevNumber_phone.text != this.state.number_phone.text) {
            let data = new FormData
            data.append('text', this.state.number_phone.text)
            axios({
                method: 'post',
                url: `${MAIN_URL}/api/dbjson/contact/number_phone/text`,
                data: data
            }).then(response => {
                console.log(response)
            })
        }
        if (this.state.prevNumber_phone.detail != this.state.number_phone.detail) {
            let data = new FormData
            data.append('text', this.state.number_phone.detail)
            axios({
                method: 'post',
                url: `${MAIN_URL}/api/dbjson/contact/number_phone/descript`,
                data: data
            }).then(response => {
                console.log(response)
            })
        }
    }

    saveEmail(event){
        if (event != null) event.preventDefault()
        let state = this.state
        state.updateEmail = false
        this.setState(state)

        if (this.state.prevEmail.text != this.state.email.text) {
            let data = new FormData
            data.append('text', this.state.email.text)
            axios({
                method: 'post',
                url: `${MAIN_URL}/api/dbjson/contact/email/text`,
                data: data
            }).then(response => {
                console.log(response)
            })
        }
        if (this.state.prevEmail.detail != this.state.email.detail) {
            let data = new FormData
            data.append('text', this.state.email.detail)
            axios({
                method: 'post',
                url: `${MAIN_URL}/api/dbjson/contact/email/descript`,
                data: data
            }).then(response => {
                console.log(response)
            })
        }
    }

    componentDidMount(){
        let state = this.state
        fetch(`${MAIN_URL}/api/dbjson/contact/`)
        .then(response => response.json())
        .then(response => {
            state.prevAddress.text = response['address']['text']
            state.prevAddress.detail = response['address']['descript']
            state.address.text = response['address']['text']
            state.address.detail = response['address']['descript']

            state.prevNumber_phone.text = response['number_phone']['text']
            state.prevNumber_phone.detail = response['number_phone']['descript']
            state.number_phone.text = response['number_phone']['text']
            state.number_phone.detail = response['number_phone']['descript']

            state.prevEmail.text = response['email']['text']
            state.prevEmail.detail = response['email']['descript']
            state.email.text = response['email']['text']
            state.email.detail = response['email']['descript']
            this.setState(state)
        })
    }

    render(){
        return(
            <React.Fragment>
                <li>
                    <div className="contact-item" id="dashboard_contact_address">
                        <h4>Address &nbsp; <a href="#" className="badge badge-primary button_update" onClick={this.state.updateAddress ? this.saveAddress : this.updateAddress}>{this.state.updateAddress ? 'Save' : 'Update'}</a></h4>
                        
                        <div className="col-lg-12">
                            <div className="row m-1">
                                <label >Address : &nbsp;</label>
                                {
                                    !this.state.updateAddress ? 
                                    <p className="bg-light p-1">{this.state.address.text}</p> : 
                                    <input type="text" style={{width: "100%"}} value={this.state.address.text} onChange={response => this.updateAddress(response, 1)}/>
                                }
                            </div>
                            <div className="row m-1">
                                <label>Detail : &nbsp;</label>
                                {
                                    !this.state.updateAddress ? 
                                    <p className="bg-light p-1">{this.state.address.detail}</p> :
                                    <input type="text" style={{width: "100%"}} value={this.state.address.detail} onChange={response => this.updateAddress(response, 2)}/>
                                }
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="contact-item" id="dashboard_contact_email">
                        <h4>Email &nbsp; <a href="#" className="badge badge-primary button_update" onClick={this.state.updateEmail ? this.saveEmail : this.updateEmail}>{this.state.updateEmail ? 'Save' : 'Update'}</a></h4>

                        <div className="col-lg-12">
                            <div className="row m-1">
                                <label>Email : &nbsp;</label>
                                {
                                    !this.state.updateEmail ?
                                    <p className="bg-light p-1">{this.state.email.text}</p> :
                                    <input type="text" style={{width: "100%"}} value={this.state.email.text} onChange={response => this.updateEmail(response, 1)}/>
                                }
                            </div>
                            <div className="row m-1">
                                <label>Detail : &nbsp;</label>
                                {
                                    !this.state.updateEmail ?
                                    <p className="bg-light p-1">{this.state.email.detail}</p> :
                                    <input type="text" style={{width: "100%"}} value={this.state.email.detail} onChange={response => this.updateEmail(response, 2)}/>
                                }
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="contact-item" id="dashboard_contact_number_phone">
                        <h4>Number Phone &nbsp; <a href="#" className="badge badge-primary button_update" onClick={this.state.updateNumber_phone ? this.saveNumber_phone : this.updateNumber_phone}>{this.state.updateNumber_phone ? 'Save' : 'Update'}</a></h4>

                        <div className="col-lg-12">
                            <div className="row m-1">
                                <label>Number Phone : &nbsp;</label>
                                {
                                    !this.state.updateNumber_phone ?
                                    <p className="bg-light p-1">{this.state.number_phone.text}</p> :
                                    <input type="text" style={{width: "100%"}} value={this.state.number_phone.text} onChange={response => this.updateNumber_phone(response, 1)}/>
                                }
                            </div>
                            <div className="row m-1">
                                <label>Detail : &nbsp;</label>
                                {
                                    !this.state.updateNumber_phone ?
                                    <p className="bg-light p-1">{this.state.number_phone.detail}</p> :
                                    <input type="text" style={{width: "100%"}} value={this.state.number_phone.detail} onChange={response => this.updateNumber_phone(response, 2)}/>
                                }
                            </div>
                        </div>
                    </div>
                </li>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Contact/>, document.getElementById('wrap_contact'))