class About extends React.Component{
    constructor(){
        super()

        this.state = {
            prevText: '',
            text: '',
            update: false
        }

        this.update = this.update.bind(this)
        this.save = this.save.bind(this)
    }

    update(event){
        let state = this.state
        if (!this.state.update) {
            event.preventDefault()
            state.update = true
            this.setState(state)
        } else {
            state.text = event.target.value
            this.setState(state)
        }
    }

    save(event){
        if (event != null) event.preventDefault()
        let state = this.state
        state.update = false
        this.setState(state)

        if (this.state.prevText != this.state.text) {
            let data = new FormData
            data.append('text', this.state.text)
            axios({
                method: 'post',
                url: `${MAIN_URL}/api/dbjson/about`,
                data: data
            }).then(response => {
                // console.log(response)
            })
        }
    }

    componentDidMount(){
        fetch(`${MAIN_URL}/api/dbjson/about`)
        .then(response => response.json())
        .then(response => {
            let state = this.state
            state.prevText = response
            state.text = response
            this.setState(state)
        })
    }

    render(){
        return(
            <div className="row">
                <div className="title w-100">
                    <h3>About &nbsp; <a href="#" className="badge badge-primary button_update" onClick={this.state.update ? this.save : this.update}>{this.state.update ? 'Save' : 'Update'}</a></h3>
                </div>
                {
                    this.state.update ? 
                    <input type="text" style={{width: "100%"}} onKeyPress={e => {if (e.key == 'Enter'){this.save()}}} value={this.state.text} onChange={this.update}/> : 
                    <p className="bg-light p-1">{this.state.text}</p>
                }
            </div>
        )
    }
}

ReactDOM.render(<About/>, document.getElementById('dashboard_about'))