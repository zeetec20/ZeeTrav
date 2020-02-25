let slugify = window.location.pathname.split('/').reverse()[0]

let numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

fetch(`${MAIN_URL}/api/packet/get`)
.then(response => response.json())
.then(response => { 
    let packet = response.filter(res => res.slugify == slugify)[0]
    console.log(packet)
    fetch(`${MAIN_URL}/api/packet_purpose/get`)
    .then(response => response.json())
    .then(response => {
        let list_packet_purpose = response.filter(res => res.packet == packet.id_packet)
        console.log(list_packet_purpose)
        fetch(`${MAIN_URL}/api/purpose/get`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            ReactDOM.render(
            <React.Fragment>
                <h5>Destination</h5>
                {
                    list_packet_purpose.map((value, key) => {
                        console.log(value)
                        return <li key={key}>{response.filter(res => res.id_purpose == value.purpose)[0].name} .{key + 1}</li>
                    })
                }
            </React.Fragment>,
            document.getElementById('list_destination')
            )
        })
    })

    ReactDOM.render(<img height="340px" src={`${BASE_URL}${packet.cover}`} alt="" style={{margin: '0 auto', display: 'block', objectFit: 'cover', width: '100%'}} />, document.getElementById('packet_cover'))
    ReactDOM.render(<span>{packet.name}</span>, document.getElementById('packet_title1'))
    ReactDOM.render(<span>{packet.name}</span>, document.getElementById('packet_title2'))
    ReactDOM.render(<textarea id="packet_detail_text" value={packet.detail} className="excert" style={{width: '100%', border: 'none', outline: 'none', resize: 'none'}} readOnly></textarea>, document.getElementById('packet_detail'))
    ReactDOM.render(<span><span className="mr-1">{packet.start}</span><i className="lnr lnr-calendar-full"></i></span>, document.getElementById('packet_departure'))
    ReactDOM.render(<span>Rp. {numberWithCommas(packet.price)}</span>, document.getElementById('packet_price'))

    autosize(document.getElementById('packet_detail_text'))
})


class BestPacketComp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            packet: null
        }
    }

    componentDidMount(){
        let state = this.state
        fetch(`${MAIN_URL}/api/packet/get/${this.props.packet}`)
        .then(response => response.json())
        .then(response => {
            state.packet = response[0]
            this.setState(state)
        })
    }

    render(){
        return(
            <div className="media post_item">
                <img height="60px" src={`${BASE_URL}${this.state.packet ? this.state.packet.cover : ''}`} alt="" style={{margin: '0 auto', display: 'block', objectFit: 'cover', width: '100px'}} />
                <div className="media-body">
                    <a href={`${MAIN_URL}/packet/item/${this.state.packet ? this.state.packet.slugify : ''}`}>
                        <h3>{this.state.packet ? this.state.packet.name : ''}</h3>
                    </a>
                    <p>{this.state.packet ? this.state.packet.start : ''}</p>
                </div>
            </div>
        )
    }
}

class ListBestPacket extends React.Component{
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
        })
    }

    render(){
        return(
            <React.Fragment>
                {
                    this.state.listBestPacket.map((best_packet, key) => {
                        return <BestPacketComp key={key} packet={best_packet.packet} />
                    })
                }
            </React.Fragment>
        )
    }
}

ReactDOM.render(<ListBestPacket/>, document.getElementById('list_best_packet'))