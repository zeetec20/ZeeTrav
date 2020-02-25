class BestPacketComp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            packet: [],
            listDestination: []
        }
    }
    
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    componentDidMount(){
        let state = this.state
        fetch(`${MAIN_URL}/api/packet/get/${this.props.packet.packet}`)
        .then(response => response.json())
        .then(response => {
            state.packet = response
            this.setState(state)
            fetch(`${MAIN_URL}/api/packet_purpose/get`)
            .then(response => response.json())
            .then(response => {
                state.listDestination = response
                this.setState(state)
            })
        })
    }

    render(){
        return(
            <React.Fragment>
            {
                this.state.packet[0] && this.state.listDestination != [] ?
                <div className="single-gallery">
                    <img height="400px" src={`${BASE_URL}${this.state.packet[0].cover}`} alt="" style={{margin: '0 auto', display: 'block', objectFit: 'cover', width: '100%', height: '100% !important'}}/>
                    <div className="gallery-content">
                        <div className="title align-items-center justify-content-between d-flex">
                            <p style={{fontSize: '16px'}}>Price start from</p>
                            <h4>Rp {this.numberWithCommas(this.state.packet[0].price)}</h4>
                        </div>
                        <h4>{this.state.packet[0].name}</h4>
                        <div className="review-title justify-content-between d-flex">
                            <p>Pulau Merah, &nbsp;Ijen</p>
                        </div>
                    </div>
                </div> :
                ''
            }
            </React.Fragment>
        )
    }
}

class BestPacket extends React.Component{
    constructor(){
        super()

        this.state = {
            listBestPacket: []
        }
    }
    
    componentDidMount(){
        let state = this.state
        fetch(`${MAIN_URL}/api/best_packet/get`)
        .then(response => response.json())
        .then(response => {
            state.listBestPacket = response
            this.setState(state)
            setTimeout(() => {
                $('.active-gallery-carousel').owlCarousel({
                    items: 2,
                    // autoplay: 2500,
                    loop: true,
                    margin: 30,
                    nav: true,
                    navText: [ `<img src='${BASE_URL}/asset/img/cprev.png'>`, `<img src='${BASE_URL}/asset/img/cnext.png'>` ],
                    dots: false,
                    responsive: {
                        0: {
                            items: 1
                        },
                        420: {
                            items: 1
                        },
                        575: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        1200: {
                            items: 2
                        },
                        1680: {
                            items: 2
                        }
                    }
                });
            }, 500);
        })
    }

    render(){
        return(
            <React.Fragment>
            {
                this.state.listBestPacket != [] ? 
                this.state.listBestPacket.map((best_packet, key) => {
                    return <BestPacketComp key={key} packet={best_packet} />
                }) :
                ''
            }
            </React.Fragment>
        )
    }
}

ReactDOM.render(<BestPacket/>, document.getElementById('best_packet'))