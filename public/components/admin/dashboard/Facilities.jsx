class Facilities extends React.Component{
    constructor(){
        super()

        this.state = {
            prevFacilities1: {
                name: '',
                descript: '',
                image: ''
            },
            prevFacilities2: {
                name: '',
                descript: '',
                image: ''
            },
            prevFacilities3: {
                name: '',
                descript: '',
                image: ''
            },

            facilities1: {
                name: '',
                descript: '',
                image: ''
            },
            facilities2: {
                name: '',
                descript: '',
                image: ''
            },
            facilities3: {
                name: '',
                descript: '',
                image: ''
            },

            updateFacilities1: false,
            updateFacilities2: false,
            updateFacilities3: false,

            updateImageFacilities1: {
                isUpdate: false,
                file: ''
            },
            updateImageFacilities2: {
                isUpdate: false,
                file: ''
            },
            updateImageFacilities3: {
                isUpdate: false,
                file: ''
            }
        }

        this.updateFacilities1 = this.updateFacilities1.bind(this)
        this.updateFacilities2 = this.updateFacilities2.bind(this)
        this.updateFacilities3 = this.updateFacilities3.bind(this)
        this.saveFacilities1 = this.saveFacilities1.bind(this)
        this.saveFacilities2 = this.saveFacilities2.bind(this)
        this.saveFacilities3 = this.saveFacilities3.bind(this)
    }

    updateFacilities1(event, key){
        let state = this.state
        if (!this.state.updateFacilities1) {
            event.preventDefault()
            state.updateFacilities1 = true
            this.setState(state)
        } else {
            if (key == 1) {
                state.facilities1.name = event.target.value
                this.setState(state)
            } else if (key == 2) {
                state.facilities1.descript = event.target.value
                this.setState(state)
            } else if (key == 3) {
                if (event.target.value != null || event.target.value != '') {
                    state.updateImageFacilities1.isUpdate = true
                    this.setState(state)
                    console.log(event.target.value)

                    let reader = new FileReader()
                    let file = event.target.files[0];
                    reader.onloadend = () => {
                        state.updateImageFacilities1.file = reader.result
                        this.setState(state)
                        console.log(state)
                    }
                    reader.readAsDataURL(file)
                }
            }
        }
    }

    updateFacilities2(event, key){
        let state = this.state
        if (!this.state.updateFacilities2) {
            event.preventDefault()
            state.updateFacilities2 = true
            this.setState(state)
        } else {
            if (key == 1) {
                state.facilities2.name = event.target.value
                this.setState(state)
            } else if (key == 2) {
                state.facilities2.descript = event.target.value
                this.setState(state)
            } else if (key == 3) {
                if (event.target.value != null || event.target.value != '') {
                    state.updateImageFacilities2.isUpdate = true
                    this.setState(state)
                    console.log(event.target.value)

                    let reader = new FileReader()
                    let file = event.target.files[0];
                    reader.onloadend = () => {
                        state.updateImageFacilities2.file = reader.result
                        this.setState(state)
                        console.log(state)
                    }
                    reader.readAsDataURL(file)
                }
            }
        }
    }

    updateFacilities3(event, key){
        let state = this.state
        if (!this.state.updateFacilities3) {
            event.preventDefault()
            state.updateFacilities3 = true
            this.setState(state)
        } else {
            if (key == 1) {
                state.facilities2.name = event.target.value
                this.setState(state)
            } else if (key == 2) {
                state.facilities2.descript = event.target.value
                this.setState(state)
            } else if (key == 3) {
                if (event.target.value != null || event.target.value != '') {
                    state.updateImageFacilities3.isUpdate = true
                    this.setState(state)
                    console.log(event.target.value)

                    let reader = new FileReader()
                    let file = event.target.files[0];
                    reader.onloadend = () => {
                        state.updateImageFacilities3.file = reader.result
                        this.setState(state)
                        console.log(state)
                    }
                    reader.readAsDataURL(file)
                }
            }
        }
    }

    saveFacilities1(event){
        if (event != null) event.preventDefault()
        let state = this.state
        state.updateFacilities1 = false
        this.setState(state)

        if (this.state.prevFacilities1.name != this.state.facilities1.name) {
            let data = new FormData
            data.append('text', this.state.facilities1.name)
            axios({
                method: 'post',
                url: `${MAIN_URL}/api/dbjson/facilities/0/name`,
                data: data
            }).then(response => {
                console.log(response)
            })
        }
        if (this.state.prevFacilities1.descript != this.state.facilities1.descript) {
            let data = new FormData
            data.append('text', this.state.facilities1.descript)
            axios({
                method: 'post',
                url: `${MAIN_URL}/api/dbjson/facilities/0/descript`,
                data: data
            }).then(response => {
                console.log(response)
            })
        }
        if (this.state.updateImageFacilities1.isUpdate) {
            state.updateImageFacilities1.isUpdate = false
            this.setState(state)
            let form = document.getElementById('input_facilities1_image')
            let data = new FormData(form)
            axios({
                method: 'post',
                url: `${MAIN_URL}/api/dbjson/facilities/0/image`,
                data: data
            }).then(response => {
                console.log(response)
            })
        }
    }

    saveFacilities2(event){
        if (event != null) event.preventDefault()
        let state = this.state
        state.updateFacilities2 = false
        this.setState(state)

        if (this.state.prevFacilities2.name != this.state.facilities2.name) {
            let data = new FormData
            data.append('text', this.state.facilities2.name)
            axios({
                method: 'post',
                url: `${MAIN_URL}/api/dbjson/facilities/1/name`,
                data: data
            }).then(response => {
                console.log(response)
            })
        }
        if (this.state.prevFacilities2.descript != this.state.facilities2.descript) {
            let data = new FormData
            data.append('text', this.state.facilities2.descript)
            axios({
                method: 'post',
                url: `${MAIN_URL}/api/dbjson/facilities/1/descript`,
                data: data
            }).then(response => {
                console.log(response)
            })
        }
        if (this.state.updateImageFacilities2.isUpdate) {
            state.updateImageFacilities2.isUpdate = false
            this.setState(state)
            let form = document.getElementById('input_facilities2_image')
            let data = new FormData(form)
            axios({
                method: 'post',
                url: `${MAIN_URL}/api/dbjson/facilities/1/image`,
                data: data
            }).then(response => {
                console.log(response)
            })
        }
    }

    saveFacilities3(event){
        if (event != null) event.preventDefault()
        let state = this.state
        state.updateFacilities3 = false
        this.setState(state)

        if (this.state.prevFacilities3.name != this.state.facilities3.name) {
            let data = new FormData
            data.append('text', this.state.facilities3.name)
            axios({
                method: 'post',
                url: `${MAIN_URL}/api/dbjson/facilities/2/name`,
                data: data
            }).then(response => {
                console.log(response)
            })
        }
        if (this.state.prevFacilities3.descript != this.state.facilities3.descript) {
            let data = new FormData
            data.append('text', this.state.facilities3.descript)
            axios({
                method: 'post',
                url: `${MAIN_URL}/api/dbjson/facilities/2/descript`,
                data: data
            }).then(response => {
                console.log(response)
            })
        }
        if (this.state.updateImageFacilities3.isUpdate) {
            state.updateImageFacilities3.isUpdate = false
            this.setState(state)
            let form = document.getElementById('input_facilities3_image')
            let data = new FormData(form)
            axios({
                method: 'post',
                url: `${MAIN_URL}/api/dbjson/facilities/2/image`,
                data: data
            }).then(response => {
                console.log(response)
            })
        }
    }

    componentDidMount(){
        fetch(`${MAIN_URL}/api/dbjson/facilities`)
        .then(response => response.json())
        .then(response => {
            let state = this.state
            state.facilities1.name = response[0]['name']
            state.facilities1.descript = response[0]['descript']
            state.facilities1.image = response[0]['image']
            state.prevFacilities1.name = response[0]['name']
            state.prevFacilities1.descript = response[0]['descript']
            state.prevFacilities1.image = response[0]['image']
            state.facilities3.name = response[2]['name']
            state.facilities3.descript = response[2]['descript']
            state.facilities3.image = response[2]['image']
            state.prevFacilities3.name = response[2]['name']
            state.prevFacilities3.descript = response[2]['descript']
            state.prevFacilities3.image = response[2]['image']
            state.facilities2.name = response[1]['name']
            state.facilities2.descript = response[1]['descript']
            state.facilities2.image = response[1]['image']
            state.prevFacilities2.name = response[1]['name']
            state.prevFacilities2.descript = response[1]['descript']
            state.prevFacilities2.descript = response[1]['image']
            this.setState(state)
        })
    }

    render(){
        return(
            <React.Fragment>
                <li>
                    <div className="facilities-item">
                        <h4>Facilities 1 &nbsp; <a href="#" className="badge badge-primary button_update" onClick={this.state.updateFacilities1 ? this.saveFacilities1 : this.updateFacilities1}>{this.state.updateFacilities1 ? 'Save' : 'Update'}</a></h4>
                        
                        <div className="col-lg-12">
                            <div className="row m-1">
                                <label>Name : &nbsp;</label>
                                {
                                    !this.state.updateFacilities1 ?
                                    <p className="bg-light p-1">{this.state.facilities1.name}</p> :
                                    <input type="text" value={this.state.facilities1.name} style={{width: "100%"}} onChange={response => this.updateFacilities1(response, 1)} />
                                }
                            </div>
                            <div className="row m-1">
                                <label>Description : &nbsp;</label>
                                {
                                    !this.state.updateFacilities1 ? 
                                    <p className="bg-light p-1">{this.state.facilities1.descript}</p> :
                                    <input type="text" value={this.state.facilities1.descript} style={{width: "100%"}} onChange={response => this.updateFacilities1(response, 2)} />
                                }
                            </div>
                            <div className="row m-1">
                                <label>Image : &nbsp;</label>
                                {
                                    !this.state.updateFacilities1 ?
                                    <div className="img" style={{backgroundImage: `url('${this.state.updateImageFacilities1.file == '' ? BASE_URL + this.state.facilities1.image : this.state.updateImageFacilities1.file}')`}}></div> :
                                    <form id="input_facilities1_image">
                                        <input type="file" ref="file" name="image" onChange={response => this.updateFacilities1(response, 3)} />
                                    </form>
                                }
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="facilities-item">
                        <h4>Facilities 2 &nbsp; <a href="#" className="badge badge-primary button_update" onClick={this.state.updateFacilities2 ? this.saveFacilities2 : this.updateFacilities2}>{this.state.updateFacilities2 ? 'Save' : 'Update'}</a></h4>
                            
                        <div className="col-lg-12">
                            <div className="row m-1">
                                <label>Name : &nbsp;</label>
                                {
                                    !this.state.updateFacilities2 ?
                                    <p className="bg-light p-1">{this.state.facilities2.name}</p> :
                                    <input type="text" value={this.state.facilities2.name} style={{width: "100%"}} onChange={response => this.updateFacilities2(response, 1)} />
                                }
                            </div>
                            <div className="row m-1">
                                <label>Description : &nbsp;</label>
                                {
                                    !this.state.updateFacilities2 ? 
                                    <p className="bg-light p-1">{this.state.facilities2.descript}</p> :
                                    <input type="text" value={this.state.facilities2.descript} style={{width: "100%"}} onChange={response => this.updateFacilities2(response, 2)} />
                                }
                            </div>
                            <div className="row m-1">
                                <label>Image : &nbsp;</label>
                                {
                                    !this.state.updateFacilities2 ?
                                    <div className="img" style={{backgroundImage: `url('${this.state.updateImageFacilities2.file == '' ? BASE_URL + this.state.facilities2.image : this.state.updateImageFacilities2.file}')`}}></div> :
                                    <form id="input_facilities2_image">
                                        <input type="file" ref="file" name="image" onChange={response => this.updateFacilities2(response, 3)} />
                                    </form>
                                }
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="facilities-item">
                        <h4>Facilities 3 &nbsp; <a href="#" className="badge badge-primary button_update" onClick={this.state.updateFacilities3 ? this.saveFacilities3 : this.updateFacilities3}>{this.state.updateFacilities3 ? 'Save' : 'Update'}</a></h4>
                                
                        <div className="col-lg-12">
                            <div className="row m-1">
                                <label>Name : &nbsp;</label>
                                {
                                    !this.state.updateFacilities3 ?
                                    <p className="bg-light p-1">{this.state.facilities3.name}</p> :
                                    <input type="text" value={this.state.facilities3.name} style={{width: "100%"}} onChange={response => this.updateFacilities3(response, 1)} />
                                }
                            </div>
                            <div className="row m-1">
                                <label>Description : &nbsp;</label>
                                {
                                    !this.state.updateFacilities3 ? 
                                    <p className="bg-light p-1">{this.state.facilities3.descript}</p> :
                                    <input type="text" value={this.state.facilities3.descript} style={{width: "100%"}} onChange={response => this.updateFacilities3(response, 2)} />
                                }
                            </div>
                            <div className="row m-1">
                                <label>Image : &nbsp;</label>
                                {
                                    !this.state.updateFacilities3 ?
                                    <div className="img" style={{backgroundImage: `url('${this.state.updateImageFacilities3.file == '' ? BASE_URL + this.state.facilities3.image : this.state.updateImageFacilities3.file}')`}}></div> :
                                    <form id="input_facilities3_image">
                                        <input type="file" ref="file" name="image" onChange={response => this.updateFacilities3(response, 3)} />
                                    </form>
                                }
                            </div>
                        </div>
                    </div>
                </li>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Facilities/>, document.getElementById('wrap_facilities'))