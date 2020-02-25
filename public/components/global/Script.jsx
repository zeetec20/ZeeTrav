let InstaPostComp = props => {
    return (
        <li><a target="_blank" rel="noopener noreferrer" href={`https://www.instagram.com/p/${props.link}/`} ><img width="58px" height="58px" src={props.image} alt=""/></a></li>
    )
}

let targetHashTag = 'travelindonesia'

class ScrapeTagInsta extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            post: []
        }
    }

    componentDidMount(){
        fetch(`${MAIN_URL}/api/scrape_tag_insta/${targetHashTag}`)
        .then(response => response.json())
        .then(response => {
            response = JSON.parse(response)['graphql']['hashtag']['edge_hashtag_to_media']['edges'].slice(0, 8)
            this.setState({
                post: response
            })
        })
        ReactDOM.render(
            <a className="text-white" target="_blank" rel="noopener noreferrer" href={`https://www.instagram.com/explore/tags/${targetHashTag}/`}>InstaFeed</a>, 
            document.getElementById('title_instafeed')
        )
    }

    render(){
        let post = this.state.post.map((value, key) => {
            return <InstaPostComp key={key} link={value['node']['shortcode']} image={value['node']['display_url']} />
        })
        return (
            <React.Fragment>
                {post}
            </React.Fragment>
        )
    }
}

fetch(`${MAIN_URL}/api/dbjson/about`)
.then(response => response.json())
.then(response => {
    ReactDOM.render(<span>{response}</span>, document.getElementById('footer_about_text'))
})

ReactDOM.render(<ScrapeTagInsta/>, document.getElementById('instafeed'))