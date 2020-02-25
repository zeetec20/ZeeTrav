
class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            address: {
                text: "",
                descript: ""
            },
            number_phone: {
                text: "",
                descript: ""
            },
            email: {
                text: "",
                descript: ""
            }
        }
    }

    componentDidMount(){
        fetch(`${MAIN_URL}/api/dbjson/contact/address`)
        .then(response => response.json())
        .then(response => {
            let state = this.state
            state.address = response
            this.setState(state)
        })
        fetch(`${MAIN_URL}/api/dbjson/contact/number_phone`)
        .then(response => response.json())
        .then(response => {
            let state = this.state
            state.number_phone = response
            this.setState(state)
        })
        fetch(`${MAIN_URL}/api/dbjson/contact/email`)
        .then(response => response.json())
        .then(response => {
            let state = this.state
            state.email = response
            this.setState(state)
        })
    }

    render(){
        return (
            <React.Fragment>
                <div className="info_item">
                    <i className="lnr lnr-home"></i>
                    <h6>{this.state.address.text}</h6>
                    <p>{this.state.address.descript}</p>
                </div>
                <div className="info_item">
                    <i className="lnr lnr-phone-handset"></i>
                    <h6><a href={`https://api.whatsapp.com/send?phone=${this.state.number_phone.text}&text=Halo%20ZeeTrav`}>{this.state.number_phone.text}</a></h6>
                    <p>{this.state.number_phone.descript}</p>
                </div>
                <div className="info_item">
                    <i className="lnr lnr-envelope"></i>
                    <h6><a href="#">{this.state.email.text}</a></h6>
                    <p>{this.state.email.descript}</p>
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Contact/>, document.getElementById('contact_info'))