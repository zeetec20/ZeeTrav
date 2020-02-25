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


class Table extends React.Component{
    constructor(){
        super()

        this.state = {
            thead: [
                'ID',
                'Name',
                'Region',
                'Action'
            ],
            tbody: [

            ],
            oldTbody: [

            ],
            create: false,
            listRegion: []
        }

        this.test = 'uwu'
        this.delete = this.delete.bind(this)
        this.successAdd = this.successAdd.bind(this)
        this.showCreate = this.showCreate.bind(this)
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
        if (this.state.tbody[key].update) {
            state.tbody[key].update = false
            if (this.state.tbody[key].name != this.state.oldTbody[key].name || this.state.tbody[key].region != this.state.oldTbody[key].region) {
                let data = new FormData
                data.append('name', this.state.tbody[key].name)
                data.append('region', this.state.tbody[key].region)
                data.append('id_purpose', this.state.tbody[key].id_purpose)
                axios({
                    method: 'post',
                    url: `${MAIN_URL}/api/purpose/update`,
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
        data.append('key', value.id_purpose)
        axios({
            method: 'post',
            url: `${MAIN_URL}/api/purpose/delete`,
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
        fetch(`${MAIN_URL}/api/purpose/get`)
        .then(response => response.json())
        .then(response => {
            response.map((res, key) => {
                response[key]['update'] = false
            })
            this.setState(ste => {ste.tbody = JSON.parse(JSON.stringify(response)); ste.oldTbody = JSON.parse(JSON.stringify(response))})
            // setTimeout(() => {
            //     $(document).ready(function() {
            //         $('table.first').DataTable();
            //     });console
            // }, 500);
        })
        fetch(`${MAIN_URL}/api/region/get`)
        .then(response => response.json())
        .then(response => {
            state.listRegion = response
            this.setState(state)
        })
    }

    successAdd(response){
        let state = this.state
        console.log(response)
        this.showCreate(false, false)
        state.tbody.push(response)
        this.setState(state)
    }

    render(){
        return(
            <React.Fragment>
                {
                    this.state.create ? 
                    <PurposeComp cancel={response => this.showCreate(response, false)} successAdd={response => this.successAdd(response)} /> :
                    <React.Fragment>
                    <h5 className="card-header">Table Destination &nbsp;&nbsp;&nbsp; <a href="#" className="badge badge-success" onClick={response => this.showCreate(response, true)}>Add Destination</a></h5>
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
                                            return(
                                                <tr key={key}>
                                                    <td>{value.id_purpose}</td>
                                                    <td>{
                                                        value.update ? 
                                                        <input type="text" className="form-control" value={value.name} onChange={res => {let state = this.state; state.tbody[key].name = res.target.value; this.setState(state)}} /> :
                                                        value.name
                                                    }</td>
                                                    <td>{
                                                        value.update ? 
                                                        <select name="region" value={value.region} onChange={res => {let state = this.state; state.tbody[key].region = res.target.value; this.setState(state)}} className="custom-select" id="region">
                                                            <option value="0">Choose Option Tour</option>
                                                            {
                                                                this.state.listRegion.map((value, key) => {
                                                                    return <option key={key} value={value.id_region}>{value.name}</option>
                                                                })
                                                            }
                                                        </select>:
                                                        this.state.listRegion != [] ? this.state.listRegion.map(value2 => {if (value2.id_region == value.region) return value2.name}) : ''
                                                    }</td>
                                                    <td>
                                                        <div className="row justify-content-center align-items-center">
                                                            <a href="#" className="badge badge-danger col-lg-5 m-1" onClick={response => this.delete(response, value)} >Delete</a>
                                                            <a href="#" className="badge badge-warning col-lg-5 m-1" onClick={response => this.edit(response, key)} >{value.update ? 'Save' : 'Edit'}</a>
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