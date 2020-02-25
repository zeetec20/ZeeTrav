class BestPacketComp extends React.Component{
    constructor(props){
        super(props)
        
        this.submit = this.submit.bind(this)
    }

    submit(event){
        event.preventDefault()
        let form = document.getElementById('form_best_packet')
        let data = new FormData(form)
        axios({
            method: 'post',
            url: `${MAIN_URL}/api/best_packet`,
            data: data
        }).then(response => {
            response = response.data
            if (response.success) {
                fetch(`${MAIN_URL}/api/best_packet/get`)
                .then(response => response.json())
                .then(response => {
                    let newBestPacket = response[response.length - 1]
                    this.props.successAdd(newBestPacket)
                })
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <h5 className="card-header">Add Best Packet</h5>
                <div className="card-body">
                    <form className="needs-validation" id="form_best_packet" onSubmit={this.submit}>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-1">
                                <label htmlFor="packet">Packet</label>
                                <select name="packet" defaultValue="0" className="custom-select" id="packet">
                                <option value="0">Choose Packet</option>
                                {
                                    this.props.listPacket.map((packet, key) => {
                                        return <option key={key} value={packet.id_packet}>{packet.name}</option>
                                    })
                                }
                            </select>
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
                'Packet',
                'Action'
            ],
            tbody: [],
            create: false,
            listPacket: []
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

    delete(event, value){
        event.preventDefault()
        let data = new FormData
        data.append('key', value.id_best_packet)
        axios({
            method: 'post',
            url: `${MAIN_URL}/api/best_packet/delete`,
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
        fetch(`${MAIN_URL}/api/best_packet/get`)
        .then(response => response.json())
        .then(response => {
            state.tbody = response
            this.setState(state)
            // setTimeout(() => {
            //     $(document).ready(function() {
            //         $('table.first').DataTable();
            //     });console
            // }, 500);
        })
        fetch(`${MAIN_URL}/api/packet/get`)
        .then(response => response.json())
        .then(response => {
            state.listPacket = response
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
                    <BestPacketComp cancel={() => this.showCreate(false, false)} successAdd={response => this.successAdd(response)} listPacket={this.state.listPacket} /> :
                    <React.Fragment>
                    <h5 className="card-header">Table Region &nbsp;&nbsp;&nbsp; <a href="#" className="badge badge-success" onClick={response => this.showCreate(response, true)}>Add Best Packet</a></h5>
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
                                                    <td>{value.id_best_packet}</td>
                                                    {
                                                        this.state.listPacket.map((packet, key) => {
                                                            if (packet.id_packet == value.packet) return <td key={key}>{packet.name}</td>
                                                        })
                                                    }
                                                    <td>
                                                        <div className="row justify-content-center align-items-center">
                                                            <a href="#" className="badge badge-danger col-lg-5 m-1" onClick={response => this.delete(response, value)} >Delete</a>
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