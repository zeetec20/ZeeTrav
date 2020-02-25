class NewestPacketComp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            option_tour: ''
        }
    }
    
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    componentDidMount(){
        let state = this.state
        fetch(`${MAIN_URL}/api/option_tour/get/${this.props.option_tour}`)
        .then(response => response.json())
        .then(response => {
            state.option_tour = response[0].name
            this.setState(state)
        })
    }

    render(){
        return (
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-blog" style={{overflow: 'hidden'}}>
                    <div className="blog-thumb" style={{width: '100%', height: '280px', overflow: 'hidden', textAlign: 'center'}}>
                        <img height="100%" src={`${BASE_URL}${this.props.cover}`} alt="" style={{margin: '0 auto', display: 'block', objectFit: 'cover', width: '100%', height: '100% !important'}} />
                    </div>
                    <div className="blog-details">
                        <h4 className="mt-0"><a href={`${MAIN_URL}/packet/item/${this.props.slugify}`} style={{color: 'black'}}>{this.props.name}</a></h4>
                        <h6 className="mt-1">Start from Rp {this.numberWithCommas(this.props.price)}</h6>
                        <div className="blog-meta">
                            <a href="#" className="m-gap"><span className="lnr lnr-calendar-full"></span>{this.props.departure}</a>
                            <a href="#" className="m-gap"><span className="lnr lnr-home"></span>{this.state.option_tour}</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class NewestPacket extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            packet: []
        }
    }
    
    componentDidMount(){
        let state = this.state
        fetch(`${MAIN_URL}/api/packet/get`)
        .then(response => response.json())
        .then(response => {
            response = response.reverse()
            if (response.length > 3) response = response.slice(0, 3)
            state.packet = response
            console.log(response)
            this.setState(state)
        })
    }

    render(){
        return (
            <React.Fragment>
                {
                    this.state.packet.map((value, key) => {
                        return <NewestPacketComp key={key} cover={value.cover} name={value.name} departure={value.start} option_tour={value.option_tour} price={value.price} slugify={value.slugify} />
                    })
                }
		        <a href={`${MAIN_URL}/packet`} className="main_btn btn w-25 mt-4 p-1 pr-3 pl-3 rounded-0 border-0 btn-primary mx-auto" style={{backgroundColor: '#f8b732', color: 'black', outline: 'none'}}>Show More Packet</a>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<NewestPacket/>, document.getElementById('newest_packet'))