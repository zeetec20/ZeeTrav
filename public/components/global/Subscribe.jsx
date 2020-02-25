class Subscribe extends React.Component {
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
            form.reset()
        })
    }

    render() {
        return (
            <form method="get" className="subscribe_form relative" onSubmit={this.handleFormSubmit} id="form_subscribe" >
                <div className="input-group d-flex flex-row">
                    <input className="input_form_subscribe" name="email" placeholder="Enter email address" required type="email" />
                    <button className="main_btn" type="submit">
                        Subscribe
                        <img src={`${BASE_URL}/asset/img/next.png`} />
                    </button>
                </div>
                <div className="mt-10 info"></div>
            </form>
        )
    }
}


ReactDOM.render(<Subscribe/>, document.getElementById('wrap_form_subscribe'))
