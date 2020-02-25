let FacilitiesComp = props => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 facilities-item">
            <div className="single-amenities">
                <div className="amenities-thumb">
                    <div className="img-fluid">
                        <a><img height="100%" src={`${BASE_URL}${props.image}`}/></a>
                    </div>
                </div>
                <div className="amenities-details">
                    <h5><a>{props.name}</a></h5>
                    <p>{props.descript}</p>
                </div>
            </div>
        </div>
    )
}

class Facilities extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            facilities: []
        }
    }

    componentDidMount(){
        fetch(`${MAIN_URL}/api/dbjson/facilities`)
        .then(response => response.json())
        .then(response => {
            this.setState({
                facilities: response
            })
        })
    }

    render(){
        let facilities = this.state.facilities.map((value, key) => {
            return <FacilitiesComp key={key} name={value['name']} descript={value['descript']} image={value['image']}/>
        })
        return (
            <React.Fragment>
                {facilities}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Facilities/>, document.getElementById('facilities'))