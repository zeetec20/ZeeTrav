class Table extends React.Component{
    constructor(){
        super()

        this.state = {
            thead: [
                'Id Subscribe',
                'Email',
                'Date Time',
                'Action'
            ],
            tbody: [

            ]
        }

        this.delete = this.delete.bind(this)
    }

    delete(event, value){
        event.preventDefault()
        let data = new FormData
        data.append('key', value.id_subscribe)
        axios({
            method: 'post',
            url: `${MAIN_URL}/api/subscribe/delete`,
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
        fetch(`${MAIN_URL}/api/subscribe/get`)
        .then(response => response.json())
        .then(response => {
            state.tbody = response
            this.setState(state)
            // setTimeout(() => {
            //     $(document).ready(function() {
            //         $('table.first').DataTable();
            //     });
            // }, 500);
        })
    }

    render(){
        return(
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
                                    <td>{value.id_subscribe}</td>
                                    <td>{value.email}</td>
                                    <td>{value.date_time}</td>
                                    <td><a href="#" className="badge badge-danger w-100" onClick={response => this.delete(response, value)} >Delete</a></td>
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
        )
    }
}

ReactDOM.render(<Table/>, document.getElementById('wrap_table'))