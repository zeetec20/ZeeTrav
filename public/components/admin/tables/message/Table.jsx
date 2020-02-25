class Table extends React.Component{
    constructor(){
        super()

        this.state = {
            thead: [
                'ID',
                'Name',
                'Email',
                'Subject',
                'Message',
                'Date Time',
                'Action'
            ],
            tbody: [

            ]
        }

        this.delete = this.delete.bind(this)
        this.reply = this.reply.bind(this)
    }

    delete(event, value){
        event.preventDefault()
        let data = new FormData
        data.append('key', value.id_message)
        axios({
            method: 'post',
            url: `${MAIN_URL}/api/message/delete`,
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

    reply(event, email){
        event.preventDefault()
        
    }

    componentDidMount(){
        let state = this.state
        fetch(`${MAIN_URL}/api/message/get`)
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
                            let bgColor1 = "#f2f2f9"
                            let bgColor2 = "#ffffff"
                            return(
                                <tr key={key}>
                                    <td>{value.id_message}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.subject}</td>
                                    <td><textarea readOnly rows="5" style={{border: "none", outline: "none", color: "#71748d", backgroundColor: ((key + 2) % 2) == 0 ? bgColor1 : bgColor2 }}>{value.message}</textarea></td>
                                    <td>{value.date_time}</td>
                                    <td>
                                        <div className="row justify-content-center align-items-center">
                                            <a href="#" className="badge badge-danger col-lg-5 m-1" onClick={response => this.delete(response, value)} >Delete</a>
                                            <a target="_blank" rel="noopener" href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${value.email}&su=&tf=1`} className="badge badge-success col-lg-5 m-1">Reply</a>
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
        )
    }
}

ReactDOM.render(<Table/>, document.getElementById('wrap_table'))