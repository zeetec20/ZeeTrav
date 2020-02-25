class Testi extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            testi: []
        } 
    }

    componentDidMount(){
        axios.get(`${MAIN_URL}/api/testi/get`)
        .then(json => {
            this.setState({
                testi: json.data
            })
        })
    }

    componentLoad(props){
        console.log(props)
        if (props == (this.state.testi.length - 1)) {
            setTimeout(() => {
                $('.active_testimonial').owlCarousel({
                    items: 1,
                    loop: true,
                    dots: false,
                    autoplay: false,
                    nav: true,
                    navText: [ `<img src='${BASE_URL}/asset/img/cprev.png'>`, `<img src='${BASE_URL}/asset/img/cnext.png'>` ]
                });
            }, 500);
        }
    }

    render() {
        let listTesti = this.state.testi.map((value, key) => {
            return (
                <div className="single_testi" key={key} onLoad={this.componentLoad(key)}>
                    <div className="quote">
                        <img className="img-fluid" src={`${BASE_URL}/asset/img/quote.png`} alt=""/>
                    </div>
                    <div className="testi_content">
                        <p>{value.text}</p>
                    </div>
                    <div className="testi_author">
                        <div className="a-desc">
                            <h4>{value.name}</h4>
                            <p>{value.job}</p>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <React.Fragment>
                {listTesti}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Testi/>, document.getElementById('testi'))