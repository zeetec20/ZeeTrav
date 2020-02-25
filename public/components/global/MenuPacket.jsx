let test = fetch(`${MAIN_URL}/api/option_tour/get`)
.then(response => response.json())
.then(response => {
    return response
})

class MenuPacket extends React.Component{
    constructor(){
        super()

        this.state = {
            listOption_tour: []
        }
    }

    componentDidMount(){
        let state = this.state
        fetch(`${MAIN_URL}/api/option_tour/get`)
        .then(response => response.json())
        .then(response => {
            state.listOption_tour = response
            this.setState(state)
        })
    }

    render(){
        return(
            <React.Fragment>
                <a className="dropdown-item" href={`${MAIN_URL}/packet/`}>All Packet</a>
				{
                    this.state.listOption_tour.map((option_tour, key) => {
                        return <a key={key} className="dropdown-item" href={`${MAIN_URL}/packet/option/${option_tour.slugify}`}>{option_tour.name}</a>
                    })
                }
            </React.Fragment>
        )
    }
}

ReactDOM.render(<MenuPacket/>, document.getElementById('menu_option_tour'))