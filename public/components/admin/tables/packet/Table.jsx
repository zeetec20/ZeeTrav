function numberWithCommas(x) {
    if (typeof x != "string") {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else{
        return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

class RegionComp extends React.Component{
    constructor(props){
        super(props)
        
        this.submit = this.submit.bind(this)
    }

    submit(event){
        event.preventDefault()
        let form = document.getElementById('form_region')
        let data = new FormData(form)
        axios({
            method: 'post',
            url: `${MAIN_URL}/api/region`,
            data: data
        }).then(response => {
            response = response.data
            if (response.success) {
                fetch(`${MAIN_URL}/api/region/get`)
                .then(response => response.json())
                .then(response => {
                    let newRegion = response[response.length - 1]
                    this.props.successAdd(newRegion)
                })
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <h5 className="card-header">Add Region</h5>
                <div className="card-body">
                    <form className="needs-validation" id="form_region" onSubmit={this.submit}>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-1">
                                <label htmlFor="validationCustom01">Name</label>
                                <input type="text" name="name" className="form-control" id="validationCustom01" placeholder="Name" required/>
                            </div>
                        </div>
                        <div className="form-row mt-4">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                <button className="btn btn-warning mr-3" onClick={this.props.cancel}>Cancel</button>
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

class PurposeComp extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            listRegion: [],
            addRegion: false,
        }

        this.addRegion = this.addRegion.bind(this)
        this.submit = this.submit.bind(this)
    }

    componentDidMount(){
        let state = this.state
        fetch(`${MAIN_URL}/api/region/get`)
        .then(response => response.json())
        .then(response => {
            state.listRegion = response
            this.setState(state)
        })
    }
    
    addRegion(event, value){
        let state = this.state
        if (event != null && event != false) event.preventDefault()
        state.addRegion = value
        this.setState(state)
    }

    submit(event){
        event.preventDefault()
        let form = document.getElementById('form_purpose')
        let data = new FormData(form)
        axios({
            method: 'post',
            url: `${MAIN_URL}/api/purpose`,
            data: data
        }).then(response => {
            response = response.data
            console.log(response)
            if (response.success) {
                fetch(`${MAIN_URL}/api/purpose/get`)
                .then(response => response.json())
                .then(response => {
                    let newPurpose = response[response.length - 1]
                    console.log(newPurpose)
                    this.props.successAdd(newPurpose)
                })
            }
        })
    }

    successAdd(response){
        let state = this.state
        state.addRegion = false
        state.listRegion.push(response)
        this.setState(state)
    }

    render(){
        return(
            <React.Fragment>
                {
                    this.state.addRegion ?
                    <RegionComp cancel={() => this.addRegion(false, false)} successAdd={response => this.successAdd(response)} /> : 
                    <React.Fragment>
                        <h5 className="card-header">Add Purpose</h5>
                        <div className="card-body">
                            <form className="needs-validation" id="form_purpose" onSubmit={response => this.submit(response)}>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-1">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" className="form-control" id="name" placeholder="First name" required/>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-1">
                                        <label htmlFor="region">Region &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="#" className="badge badge-success" onClick={response => this.addRegion(response, true)}>Add Region</a></label>
                                        <select name="region" defaultValue="0" className="custom-select" id="region">
                                            <option value="0">Choose Option Tour</option>
                                            {
                                                this.state.listRegion.map((value, key) => {
                                                    return <option key={key} value={value.id_region}>{value.name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-1">
                                        
                                    </div>
                                </div>
                                <div className="form-row mt-4">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <button className="btn btn-warning mr-3" onClick={this.props.cancel}>Cancel</button>
                                        <button className="btn btn-primary" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

class OptionTourComp extends React.Component{
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit(event){
        event.preventDefault()
        let form = document.getElementById('form_option_tour')
        let data = new FormData(form)
        let slugify = data.get('name')
        slugify = slugify.toLocaleLowerCase()
        slugify = slugify.replace(/ /g, '-')
        data.set('slugify', slugify)
        axios({
            method: 'post',
            url: `${MAIN_URL}/api/option_tour`,
            data: data
        }).then(response => {
            response = response.data
            console.log(response)
            if (response.success) {
                fetch(`${MAIN_URL}/api/option_tour/get`)
                .then(response => response.json())
                .then(response => {
                    let newRegion = response[response.length - 1]
                    this.props.successAdd(newRegion)
                })
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <h5 className="card-header">Add Option Tour</h5>
                <div className="card-body">
                    <form className="needs-validation" id="form_option_tour" onSubmit={this.submit}>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-1">
                                <label htmlFor="validationCustom01">Name</label>
                                <input type="text" name="name" className="form-control" id="validationCustom01" placeholder="Name" required/>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-1" style={{display: 'none'}}>
                                <input type="hidden" name="slugify" className="form-control" id="validationCustom01" value="null" placeholder="Name"/>
                            </div>
                        </div>
                        <div className="form-row mt-4">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                <button className="btn btn-warning mr-3" onClick={this.props.cancel}>Cancel</button>
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

class PacketComp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listOption_tour: this.props.listOption_tour,
            listPurpose: [[],[]],
            allListPurpose: [...this.props.listPurpose],
            inputPurpose: 0,
            inputPrice: '',
            addOption_tour: false,
            addPurpose: false
        }

        this.successAdd = this.successAdd.bind(this)
    }

    submit(event){
        event.preventDefault()
        let form = document.getElementById('form_packet')
        let data = new FormData(form)
        let slugify = data.get('name').toLowerCase().replace(/ /g, '-')
        data.set('slugify', slugify)
        data.set('price', data.get('price').replace(/,/g, '').replace(/[^0-9 \,]/, ''))
        if (data.get('option_tour') != 0 && this.state.listPurpose[1].length != 0) {
            axios({
                method: 'post',
                url: `${MAIN_URL}/api/packet`,
                data: data
            }).then(response => {
                response = response.data
                if (response.success) {
                    fetch(`${MAIN_URL}/api/packet/get`)
                    .then(response => response.json())
                    .then(response => {
                        let dataPurpose = new FormData
                        dataPurpose.append('purpose', this.state.listPurpose[1])
                        dataPurpose.append('packet', response[response.length -1].id_packet)
                        let packet = response[response.length -1]
                        axios({
                            method: 'post',
                            url: `${MAIN_URL}/api/packet_purpose`,
                            data: dataPurpose
                        }).then(response => {
                            response = response.data
                            console.log(response)
                            if (response.success) {
                                fetch(`${MAIN_URL}/api/packet_purpose/get`)
                                .then(response => response.json())
                                .then(response => {
                                    this.props.successAdd({
                                        packet: packet,
                                        packet_purpose: response,
                                        option_tour: this.state.listOption_tour,
                                        purpose: this.state.allListPurpose
                                    })
                                })
                            }
                        })
                    })
                }
            })
        } else {
            console.log(data.get('option_tour'))
            console.log('else')
        }
    }

    handleChangePrice(event){
        let state = this.state
        state.inputPrice = numberWithCommas(event.target.value.replace(/,/g, '').replace(/[^0-9 \,]/, ''))
        this.setState(state)
    }

    addListPurpose(event){
        if (event.target.value != 0) {
            let state = this.state
            let add = true
            this.state.allListPurpose.map(value => {
                if (this.state.listPurpose[1] == '') {
                    if (event.target.value == value.id_purpose) {
                        state.listPurpose[1].push(value.id_purpose)
                        state.listPurpose[0].push(value)
                        this.setState(state)
                    }
                } else {
                    this.state.listPurpose[1].map((value2, key) => {
                        if (event.target.value == value2) {
                            add = false
                        }
                        if (key == this.state.listPurpose[1].length -1 && add) {
                            if (event.target.value == value.id_purpose) {
                                state.listPurpose[1].push(value.id_purpose)
                                state.listPurpose[0].push(value)
                                this.setState(state)
                            }
                        }
                    })
                }
            })
        }
    }

    showCreate(event = null, value){
        if (event != null && event != false) event.preventDefault()
        let state = this.state
        if (value == 'purpose') state.addPurpose = !state.addPurpose 
        if (value == 'option_tour') state.addOption_tour = !state.addOption_tour 
        this.setState(state)
    }

    shouldComponentUpdate(){
        console.log(this.state)
        return true
    }

    successAdd(table, value){
        console.log(value)
        let state = this.state
        this.showCreate(false, table)
        if (table == 'option_tour') {
            state.listOption_tour.push(value)
        }
        if (table == 'purpose') {
            state.allListPurpose.push(value)
        }
        this.setState(state)
        console.log(this.state)
    }

    render(){
        return(
            <React.Fragment>
                {
                    this.state.addOption_tour ? 
                    <OptionTourComp cancel={() => this.showCreate(false, 'option_tour')} successAdd={response => this.successAdd('option_tour', response)} /> :
                    this.state.addPurpose ? 
                    <PurposeComp cancel={() => this.showCreate(false, 'purpose')} successAdd={response => this.successAdd('purpose', response)} /> : 
                    <React.Fragment>
                        <h5 className="card-header">Add Packet</h5>
                        <div className="card-body">
                            <form className="needs-validation" id="form_packet" onSubmit={response => this.submit(response)}>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-1">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Name Packet" required/>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-1 mb-3 mt-2">
                                        <label className="w-100 m-auto p-1 rounded" style={{cursor: 'pointer', border: 'solid 1px #d2d2e4'}} htmlFor="customFile">Upload Cover Packet</label>
                                        <input type="file" name="cover" style={{display: 'none'}} id="customFile" required/>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-1">
                                        <label htmlFor="detail">Detail</label>
                                        <textarea className="form-control" name="detail" id="detail" rows="4"></textarea>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-1">
                                        <label htmlFor="optionTour">Option Tour &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="#" className="badge badge-success" onClick={response => this.showCreate(response, 'option_tour')}>Add Option Tour</a></label>
                                        <select name="option_tour" defaultValue="0" className="custom-select" id="optionTour">
                                            <option value="0">Choose Option Tour</option>
                                            {
                                                this.state.listOption_tour.map((value, key) => {
                                                    return <option key={key} value={value.id_option_tour}>{value.name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-1">
                                        <label htmlFor="price">Price</label>
                                        <input type="text" name="price" value={this.state.inputPrice} onChange={res => this.handleChangePrice(res)} className="form-control" id="price" placeholder="Start Price From" required/>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-1">
                                        <label htmlFor="dateStart">Date Start</label>
                                        <input type="date" name="start" className="form-control" id="dateStart" required/>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-1">
                                        <label htmlFor="purpose">Destination &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="#" className="badge badge-success"  onClick={response => this.showCreate(response, 'purpose')}>Add Destination</a></label>
                                        <select value={this.state.inputPurpose} onChange={response => this.addListPurpose(response)} className="custom-select" id="purpose">
                                            <option value="0">Add Destination</option>
                                            {
                                                this.state.allListPurpose.map((value, key) => {
                                                    return <option key={key} value={value.id_purpose}>{value.name}</option>
                                                })
                                            }
                                        </select>
                                        <ul>
                                            {
                                                this.state.listPurpose[0].map((value, key) => {
                                                    return <li key={key}>{value.id_purpose}. {value.name} &nbsp;&nbsp;&nbsp; <a href="#" className="badge badge-danger" onClick={response => {response.preventDefault(); let state = this.state; state.listPurpose[0] = state.listPurpose[0].filter(res => res.id_purpose != value.id_purpose); state.listPurpose[1] = state.listPurpose[1].filter(res => res != value.id_purpose); this.setState(state);}}>Remove</a></li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <input type="hidden" name="slugify"/>
                                </div>
                                <div className="form-row mt-4">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <button className="btn btn-warning mr-3" onClick={this.props.cancel}>Cancel</button>
                                        <button className="btn btn-primary" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

class Table extends React.Component{
    constructor(){
        super()

        this.state = {
            thead: [
                'ID',
                'Name',
                'Cover',
                'Detail',
                'Option Tour',
                'Price',
                'Departure',
                'Packet Date Made',
                'Destination',
                'Action'
            ],
            tbody: [

            ],
            oldTbody: [

            ],
            create: false,
            listOption_tour: [],
            listPacket_purpose: [],
            listPurpose: [],
        }

        this.delete = this.delete.bind(this)
        this.successAdd = this.successAdd.bind(this)
        this.showCreate = this.showCreate.bind(this)
        this.getPurpose = this.getPurpose.bind(this)
    }

    showCreate(event = null, value){
        if (event != null && event != false) event.preventDefault()
        let state = this.state
        state.create = value
        this.setState(state)
    }

    edit(event, key){
        event.preventDefault()
        let state = this.state
        console.log(this.state)
        if (this.state.tbody[key].update) {
            state.tbody[key].slugify = this.state.tbody[key].name.toLocaleLowerCase().replace(/ /g, '-')
            this.setState(state)
            if (this.state.tbody[key].name != this.state.oldTbody[key].name || this.state.tbody[key].cover != this.state.oldTbody[key].cover || this.state.tbody[key].detail != this.state.oldTbody[key].detail || this.state.tbody[key].option_tour != this.state.oldTbody[key].option_tour || this.state.tbody[key].price != this.state.oldTbody[key].price || this.state.tbody[key].start != this.state.oldTbody[key].start) {
                let data = new FormData
                data.append('name', this.state.tbody[key].name)
                if (this.state.tbody[key].cover != this.state.oldTbody[key].cover) data.append('cover', document.getElementById('upload_image').files[0], document.getElementById('upload_image').files[0].name)
                data.append('detail', this.state.tbody[key].detail)
                data.append('option_tour', this.state.tbody[key].option_tour)
                data.append('price', this.state.tbody[key].price)
                data.append('start', this.state.tbody[key].start)
                data.append('slugify', this.state.tbody[key].slugify)
                data.append('id_packet', this.state.tbody[key].id_packet)
                axios({
                    method: 'post',
                    url: `${MAIN_URL}/api/packet/update`,
                    data: data
                }).then(respose => {
                    console.log(respose)
                    if (respose.data.success) {
                        state.tbody[key].update = false
                        this.setState(state)
                    }
                })
            } else {
                state.tbody[key].update = false
                this.setState(state)
            }
        } else {
            state.tbody[key].update = true
            this.setState(state)
        }
    }

    delete(event, value){
        event.preventDefault()
        let data = new FormData
        data.append('key', value.id_packet)
        data.append('path', value.cover)
        console.log(data.get('key'))
        axios({
            method: 'post',
            url: `${MAIN_URL}/api/packet/delete`,
            data: data
        }).then(respose => {
            console.log(respose)
        })
        let state = this.state
        state.tbody = state.tbody.filter(e => e != value)
        this.setState({
            thead: this.state.thead,
            tbody: state.tbody
        })
    }

    componentDidMount(){
        let state = this.state
        fetch(`${MAIN_URL}/api/packet/get`)
        .then(response => response.json())
        .then(response => {
            state.tbody = response
            state.tbody.map((value, key) => {
                state.tbody[key]['update'] = false
            })
            state.oldTbody = JSON.parse(JSON.stringify(response))
            this.setState(state)
        })
        fetch(`${MAIN_URL}/api/option_tour/get`)
        .then(response => response.json())
        .then(respose => {
            state.listOption_tour = respose
            this.setState(state)
        })
        fetch(`${MAIN_URL}/api/purpose/get`)
        .then(response => response.json())
        .then(respose => {
            state.listPurpose = respose
            this.setState(state)
        })
        fetch(`${MAIN_URL}/api/packet_purpose/get`)
        .then(respose => respose.json())
        .then(response => {
            state.listPacket_purpose = response
            this.setState(state)
            console.log(response)
        })
    }

    successAdd(response){
        let state = this.state
        console.log(response)
        this.showCreate(false, false)
        state.listOption_tour = response['option_tour']
        state.listPurpose = response['purpose']
        state.tbody.push(response['packet'])
        state.tbody[state.tbody.length -1].update = false
        state.oldTbody.push(response['packet'])
        state.listPacket_purpose = response['packet_purpose']
        this.setState(state)
    }

    getPurpose(packet){
        let purpose = []
        this.state.listPacket_purpose.map((value2, key) => {
            if (value2.packet == packet.id_packet) {
                this.state.listPurpose.map((value3, key) => {
                    if (value3.id_purpose == value2.purpose) {
                        purpose.push(value3.name)
                    } else {

                    }
                })
            }
        })
        return purpose
    }

    handleChangePrice(event, key){
        let state = this.state
        state.tbody[key].price = event.target.value.replace(/,/g, '').replace(/[^0-9 \,]/, '')
        this.setState(state)
    }

    updateImage(event, key){
        let state = this.state
        let reader = new FileReader()
        let file = event.target.files[0]
        reader.onloadend = () => {
            state.tbody[key].cover = reader.result
            this.setState(state)
        }
        reader.readAsDataURL(file)
    }

    render(){
        return(
            <React.Fragment>
                {
                    this.state.create ? 
                    <PacketComp cancel={() => this.showCreate(false, false)} successAdd={response => this.successAdd(response)} listOption_tour={this.state.listOption_tour} listPurpose={this.state.listPurpose} /> :
                    <React.Fragment>
                    <h5 className="card-header">Table Packet &nbsp;&nbsp;&nbsp; <a href="#" className="badge badge-success" onClick={response => this.showCreate(response, true)}>Add Packet</a></h5>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered first">
                                <thead>
                                    <tr>
                                        {
                                            this.state.thead.map((value, key) => {
                                                return <th key={key}>{value}</th>
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tbody.map((value, key) => {
                                            let bgColor1 = "#f2f2f9"
                                            let bgColor2 = "#ffffff"
                                            return(
                                                <tr key={key}>
                                                    <td>{value.id_packet}</td>
                                                    <td>{
                                                        value.update ? 
                                                        <input type="text" className="form-control" value={value.name} onChange={res => {let state = this.state; state.tbody[key].name = res.target.value; this.setState(state)}} /> :
                                                        value.name
                                                    }</td>
                                                    <td>{
                                                        value.update ?
                                                        <React.Fragment>
                                                            <label className="w-100 m-auto p-1 rounded mb-1" style={{cursor: 'pointer', backgroundColor: 'white', border: 'solid 1px #d2d2e4'}} htmlFor="upload_image">Upload Cover Packet</label>
                                                            <input type="file" style={{display: 'none'}} id="upload_image" onChange={res => this.updateImage(res, key)}/>
                                                            <img src={this.state.tbody[key].cover != this.state.oldTbody[key].cover ? this.state.tbody[key].cover : `${BASE_URL}${value.cover}`} className="mt-1" height="100px" />
                                                        </React.Fragment> :
                                                        <img src={this.state.tbody[key].cover != this.state.oldTbody[key].cover ? this.state.tbody[key].cover : `${BASE_URL}${value.cover}`} height="100px" />
                                                    }</td>
                                                    <td>{
                                                        value.update ?
                                                        <textarea rows="5" className="form-control" value={value.detail} style={{outline: "none", color: "#71748d"}} onChange={res => {let state = this.state; state.tbody[key].detail = res.target.value; this.setState(state)}}></textarea> :
                                                        <textarea readOnly rows="5" value={value.detail} style={{border: "none", outline: "none", color: "#71748d", backgroundColor: ((key + 2) % 2) == 0 ? bgColor1 : bgColor2 }}></textarea>
                                                    }</td>
                                                    <td>{
                                                        value.update ?                                                         
                                                        <select value={value.option_tour} className="custom-select" onChange={res => {let state = this.state; state.tbody[key].option_tour = res.target.value; this.setState(state)}}>
                                                            <option value="0">Choose Option Tour</option>
                                                            {
                                                                this.state.listOption_tour.map((value, key) => {
                                                                    return <option key={key} value={value.id_option_tour}>{value.name}</option>
                                                                })
                                                            }
                                                        </select> :
                                                        this.state.listOption_tour != [] ? this.state.listOption_tour.map(value2 => {
                                                            if (value2.id_option_tour == value.option_tour) {
                                                                return value2.name
                                                            }
                                                        }) : value.option_tour
                                                    }</td>
                                                    <td style={{minWidth: '120px'}}>{
                                                        value.update ? 
                                                        <input type="text" className="form-control" value={numberWithCommas(value.price)} onChange={res => this.handleChangePrice(res, key)}/>  :
                                                        `Rp. ${numberWithCommas(value.price)}`
                                                    }</td>
                                                    <td>{
                                                        value.update ? 
                                                        <input type="date" value={value.start} onChange={res => {let state = this.state; state.tbody[key].start = res.target.value; this.setState(state)}} className="form-control"/> :
                                                        value.start
                                                    }</td>
                                                    <td>{value.date_time}</td>
                                                    <td>
                                                        <div className="row">
                                                            <ul>
                                                                {
                                                                    this.getPurpose(value).map((value, key) => {
                                                                        return <li key={key}>{value}</li>
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="row justify-content-center align-items-center">
                                                            <a href="#" style={{minWidth: '55px'}} className="badge badge-danger col-lg-5 m-1" onClick={response => this.delete(response, value)} >Delete</a>
                                                            <a href="#" style={{minWidth: '55px'}} className="badge badge-warning col-lg-5 m-1" onClick={response => this.edit(response, key)} >{value.update ? 'Save' : 'Edit'}</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        {
                                            this.state.thead.map((value, key) => {
                                                return <th key={key}>{value}</th>
                                            })
                                        }
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Table/>, document.getElementById('wrap'))