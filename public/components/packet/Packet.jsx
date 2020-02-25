class PacketComp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            listOption_tour: ''
        }
    }
    
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    componentDidMount(){
        let state = this.state
        if (!this.props.option) {
            fetch(`${MAIN_URL}/api/option_tour/get/${this.props.option_tour}`)
            .then(response => response.json())
            .then(response => {
                state.listOption_tour = response[0].name
                this.setState(state)
            })
        }
    }

    render(){
        return (
            <div className={`col-lg-4 col-md-4 col-sm-6 ${this.props.keyProp > 2 ? 'mt-5' : ''}`}>
                <div className="single-blog" style={{overflow: 'hidden'}}>
                    <div className="blog-thumb" style={{width: '100%', height: '280px', overflow: 'hidden', textAlign: 'center'}}>
                        <img height="100%" src={`${BASE_URL}${this.props.cover}`} alt="" style={{margin: '0 auto', display: 'block', objectFit: 'cover', width: '100%', height: '100% !important'}} />
                    </div>
                    <div className="blog-details">
                        <h4 className="mt-0"><a href={`${MAIN_URL}/packet/item/${this.props.slugify}`} style={{color: 'black'}}>{this.props.name}</a></h4>
                        <h6 className="mt-1">Start from Rp {this.numberWithCommas(this.props.price)}</h6>
                        <div className="blog-meta">
                            <a className="m-gap"><span className="lnr lnr-calendar-full"></span>{this.props.departure}</a>
                            <a className="m-gap"><span className="lnr lnr-home"></span>{this.props.option ? this.props.option_tour : this.state.listOption_tour}</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Packet extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            packet: [],
            listOption_tour: [],
            params: window.location.pathname.split('/').slice(3, 5)
        }
    }
    
    componentDidMount(){
        // params = JSON.parse(params)
        let state = this.state

        fetch(`${MAIN_URL}/api/packet/get`)
        .then(response => response.json())
        .then(response => {
            response = response.reverse()
            state.packet = response
            this.setState(state)
            if (this.state.params[0] == 'option') {
                fetch(`${MAIN_URL}/api/option_tour/get/`)
                .then(response => response.json())
                .then(response => {
                    state.listOption_tour = response
                    this.setState(state)
                    var match_option_tour = false
                    this.state.listOption_tour.map((option_tour, key) => {
                        if (this.state.params[1] == option_tour.slugify) {
                            state.packet = this.state.packet.filter(res => res.option_tour == option_tour.id_option_tour)
                            this.setState(state)
                            match_option_tour = true
                        }
                    })
                    if (!match_option_tour) {
                        state.packet = []
                        this.setState(state)
                    }
                })
            }
        })
    }

    render(){
        return (
            <React.Fragment>
                {
                    this.state.params[0] == 'option' && this.state.packet.length == 0 ?
                    <h1>Packet Not Found</h1> : 
                    this.state.packet.map((value, key) => {
                        return <PacketComp key={key} option={(this.state.params[0] == 'option')} keyProp={key} cover={value.cover} name={value.name} departure={value.start} option_tour={this.state.params[0] == 'option' ? this.state.params[1] : value.option_tour} price={value.price} slugify={value.slugify} />
                    })
                }
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Packet/>, document.getElementById('packet'))