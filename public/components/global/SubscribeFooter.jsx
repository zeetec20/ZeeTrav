class SubscribeFooter extends React.Component {
    handleFormSubmit(event) {
        event.preventDefault()
        let form = document.getElementById('form_subscribe')
        let data = new FormData(form)
        axios({
            method: 'post',
            url: `${MAIN_URL}/api/subscribe`,
            data: data
        })
        .then(response => {
            response = response['data']

            let message = ('message' in response ? response['message'] : (response['success'] ? 'Thanks for Subscribed' : 'Sorry Failed to Subscribe'))
            document.querySelector('#form_subscribe .info').innerHTML = message
            console.log(message)
            form.reset()
        })
    }

    render() {
        return (
            <form className="subscribe_form relative" onSubmit={this.handleFormSubmit} id="form_subscribe">
                <div className="d-flex flex-row">
                    <input className="form-control" name="email" placeholder="Enter Email" required type="email"/>
                    <button type="submit" className="click-btn btn btn-default"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                    <div className="info"></div>
                </div>
            </form>
        )
    }
}

ReactDOM.render(<SubscribeFooter/>, document.getElementById('footer_form_subscribe'))