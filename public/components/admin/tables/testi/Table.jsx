class TestiComp extends React.Component{
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit(event){
        event.preventDefault()
        let form = document.getElementById('form_testi')
        let data = new FormData(form)
        axios({
            method: 'post',
            url: `${MAIN_URL}/api/testi`,
            data: data
        }).then(response => {
            response = response.data
            if (response.success) {
                fetch(`${MAIN_URL}/api/testi/get`)
                .then(response => response.json())
                .then(response => {
                    this.props.successAdd(response[response.length - 1])
                })
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <h5 className="card-header">Add Testi</h5>
                <div className="card-body">
                    <form className="needs-validation" id="form_testi" onSubmit={this.submit}>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-1">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" className="form-control" id="name" placeholder="Name" required/>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-1">
                                <label htmlFor="detail">Testi</label>
                                <textarea className="form-control" name="text" id="detail" rows="4"></textarea>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-1">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="job" className="form-control" id="title" placeholder="Title" required/>
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

class Table extends React.Component{
    constructor(){
        super()

        this.state = {
            thead: [
                'ID',
                'Name',
                'Text',
                'Title',
                'Action'
            ],
            tbody: [

            ],
            create: false,
        }

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
            if (this.state.tbody[key].name != this.state.oldTbody[key].name || this.state.tbody[key].text != this.state.oldTbody[key].text || this.state.tbody[key].job != this.state.oldTbody[key].job) {
                let data = new FormData
                data.append('name', this.state.tbody[key].name)
                data.append('text', this.state.tbody[key].text)
                data.append('job', this.state.tbody[key].job)
                data.append('id_testi', this.state.tbody[key].id_testi)
                axios({
                    method: 'post',
                    url: `${MAIN_URL}/api/testi/update`,
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
        data.append('key', value.id_testi)
        axios({
            method: 'post',
            url: `${MAIN_URL}/api/testi/delete`,
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
        fetch(`${MAIN_URL}/api/testi/get`)
        .then(response => response.json())
        .then(response => {
            response.map((res, key) => {
                response[key]['update'] = false
            })
            state.tbody = JSON.parse(JSON.stringify(response))
            state.oldTbody = JSON.parse(JSON.stringify(response))
            this.setState(state)
        })
    }

    successAdd(response){
        let state = this.state
        this.showCreate(false, false)
        state.tbody.push(response)
        this.setState(state)
    }

    render(){
        return(
            <React.Fragment>
                {
                    this.state.create ? 
                    <TestiComp cancel={() => this.showCreate(false, false)} successAdd={response => this.successAdd(response)} /> :
                    <React.Fragment>
                    <h5 className="card-header">Table Testi &nbsp;&nbsp;&nbsp; <a href="#" className="badge badge-success" onClick={response => this.showCreate(response, true)}>Add Testi</a></h5>
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
                                                    <td>{value.id_testi}</td>
                                                    <td>{
                                                        value.update ? 
                                                        <input type="text" className="form-control" value={value.name} onChange={res => {let state = this.state; state.tbody[key].name = res.target.value; this.setState(state)}} /> :
                                                        value.name
                                                    }</td>
                                                    <td>{
                                                        value.update ? 
                                                        <input type="text" className="form-control" value={value.text} onChange={res => {let state = this.state; state.tbody[key].text = res.target.value; this.setState(state)}} /> :
                                                        value.text
                                                    }</td>
                                                    <td>{
                                                        value.update ? 
                                                        <input type="text" className="form-control" value={value.job} onChange={res => {let state = this.state; state.tbody[key].job = res.target.value; this.setState(state)}} /> :
                                                        value.job
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