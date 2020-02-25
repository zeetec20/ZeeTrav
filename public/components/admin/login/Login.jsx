let getCookie = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

class Login extends React.Component{
    constructor(props){
        super(props)
        
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/zeetrav";
    }

    handleFormSubmit(event){
        event.preventDefault()
        let form = document.getElementById('form_login')
        let data = new FormData(form)

        axios({
            method: 'post',
            url: `${MAIN_URL}/api/login`,
            data: data
        }).then(response => {
            console.log(response.data)
            if (response.data.success) {
                this.setCookie('authenticated', true, 15)
                this.setCookie('username', response.data.username, 15)
                this.setCookie('email', response.data.email, 15)
                form.reset()
                document.location.replace(`${MAIN_URL}/admin`)
            } else {
                document.getElementById('form_info').style.color = 'red';
                document.getElementById('form_info').innerHTML = 'Failed Login, Username or Password incorrect.'
                form.reset()
            }
        })
    }

    render(){
        return(
            <form id="form_login" onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <input className="form-control form-control-lg" name="username_email" id="username" type="text" placeholder="Username or Email" required/>
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" name="password" id="password" type="password" minLength="8" placeholder="Password" required/>
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
            </form>
        )
    }
}

ReactDOM.render(<Login/>, document.getElementById('wrap_form_login'))
