class FormMessage extends React.Component{
    handleFormSubmit(event){
        event.preventDefault()
        let form = document.getElementById('form_message')
        let data = new FormData(form)
        axios({
            method: 'post',
            url: `${MAIN_URL}/api/message`,
            data: data
        })
        .then(response => {
            response = response.data
            if (response.success) {
                $('#success_message').modal('show');
                form.reset()
            } else {
                $('#error_message').modal('show');
                form.reset()
            }
        })
    }

    render(){
        return(
            <form className="row contact_form" id="form_message" onSubmit={this.handleFormSubmit}>
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" required/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <textarea className="form-control" name="message" id="message" rows="1" placeholder="Enter Message" required></textarea>
                    </div>
                </div>
                <div className="col-md-12 text-right">
                    <button type="submit" value="submit" className="main_btn">
                        Send Message
                        <img src={`${BASE_URL}/asset/img/next.png`} alt="" />
                    </button>
                </div>
            </form>
        )
    }
}

ReactDOM.render(<FormMessage/>, document.getElementById('wrap_form_message'))