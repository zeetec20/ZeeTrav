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

class UserProfile extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            email: ''
        }
        this.logout = this.logout.bind(this)
    }
    
    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/zeetrav";
    }
    
    componentDidMount(){
        let username = getCookie('username')
        let email = getCookie('email')

        let state = this.state
        state.username = username
        state.email = email
        this.setState(state)
    }

    logout(event){
        event.preventDefault()
        this.setCookie('authenticated', '', 0);
        this.setCookie('username', '', 0);
        this.setCookie('email', '', 0);
        document.location.replace(`${MAIN_URL}/admin/login`)
    }

    render(){
        return(
            <React.Fragment>
                <div className="nav-user-info">
                    <h5 className="mb-0 text-white nav-user-name">{this.state.username}</h5>
                    <span className="status"></span><span className="ml-2">{this.state.email}</span>
                </div>
                <a className="dropdown-item" href="#" onClick={this.logout}><i className="fas fa-power-off mr-2"></i>Logout</a>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<UserProfile/>, document.getElementById('wrap_user_navbar'))