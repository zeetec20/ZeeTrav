class Tables extends React.Component{
    constructor(){
        super()

        this.state = {
            tables: []
        }
    }

    componentDidMount(){
        let state = this.state.tables
        fetch(`${MAIN_URL}/api/message/get`)
        .then(response => response.json())
        .then(response => {
            state = [...this.state.tables, {
                title: 'Message',
                count: response.length,
                url: `${MAIN_URL}/admin/tables/message`
            }]
            this.setState({
                tables: state
            })
        })
        fetch(`${MAIN_URL}/api/packet/get`)
        .then(response => response.json())
        .then(response => {
            state = [...this.state.tables, {
                title: 'Packet',
                count: response.length,
                url: `${MAIN_URL}/admin/tables/packet`
            }]
            this.setState({
                tables: state
            })
        })
        fetch(`${MAIN_URL}/api/testi/get`)
        .then(response => response.json())
        .then(response => {
            state = [...this.state.tables, {
                title: 'Testimonial',
                count: response.length,
                url: `${MAIN_URL}/admin/tables/testi`
            }]
            this.setState({
                tables: state
            })
        })
        fetch(`${MAIN_URL}/api/option_tour/get`)
        .then(response => response.json())
        .then(response => {
            state = [...this.state.tables, {
                title: 'Option Tour',
                count: response.length,
                url: `${MAIN_URL}/admin/tables/option_tour`
            }]
            this.setState({
                tables: state
            })
        })
        fetch(`${MAIN_URL}/api/subscribe/get`)
        .then(response => response.json())
        .then(response => {
            state = [...this.state.tables, {
                title: 'Subscribe',
                count: response.length,
                url: `${MAIN_URL}/admin/tables/subscribe`
            }]
            this.setState({
                tables: state
            })
        })
        fetch(`${MAIN_URL}/api/purpose/get`)
        .then(response => response.json())
        .then(response => {
            state = [...this.state.tables, {
                title: 'Purpose',
                count: response.length,
                url: `${MAIN_URL}/admin/tables/purpose`
            }]
            this.setState({
                tables: state
            })
        })
        fetch(`${MAIN_URL}/api/best_packet/get`)
        .then(response => response.json())
        .then(response => {
            state = [...this.state.tables, {
                title: 'Best Packet',
                count: response.length,
                url: `${MAIN_URL}/admin/tables/best_packet`
            }]
            this.setState({
                tables: state
            })
        })
        fetch(`${MAIN_URL}/api/region/get`)
        .then(response => response.json())
        .then(response => {
            state = [...this.state.tables, {
                title: 'Region',
                count: response.length,
                url: `${MAIN_URL}/admin/tables/region`
            }]
            this.setState({
                tables: state
            })
        })
    }

    render(){
        return(
            <React.Fragment>
                {
                    this.state.tables.map((value, key) => {
                        return(
                            <div key={key} className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="card border-3 border-top border-top-primary">
                                    <div className="card-body">
                                        <h5 className="text-muted">{value.title != null ? value.title : 'Table' }</h5>
                                        <div className="metric-value d-inline-block">
                                            <h1 className="mb-1">{value.count != null ? value.count : '0'}</h1>
                                        </div>
                                        <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                                            <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-eye"></i></span><a href={value.url} className="ml-1">Show More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Tables/>, document.getElementById('wrap_tables'))