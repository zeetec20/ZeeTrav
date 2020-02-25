class OptionTour extends React.Component{
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
                {
                    this.state.listOption_tour != [] ?
                        this.state.listOption_tour.map((value, key) => {
                            if (key == 0 || key % 2 == 0) {
                                return <div key={key} className={key != 0 && key % 2 == 0 ? "bottom-two mt-3" : "bottom-two"}>
                                    {
                                        this.state.listOption_tour.map((value, key2) => {
                                            if (key == key2 || key2 - 1 == key) {
                                                return (
                                                    <a key={key2} href={`${MAIN_URL}/packet/option/${value.slugify}`}>
                                                        <div className="single_counter">
                                                            <div className="thumb">
                                                                <img src={`${BASE_URL}/asset/img/popular/icon1.png`} alt=""/>
                                                            </div>
                                                            <div className="info-content">
                                                                <h4>{value.name}</h4>
                                                            </div>
                                                        </div>
                                                    </a>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            } else {

                            }
                        }) :
                    ''
                }
            </React.Fragment>
        )
    }
}

ReactDOM.render(<OptionTour/>, document.getElementById('option_tour'))