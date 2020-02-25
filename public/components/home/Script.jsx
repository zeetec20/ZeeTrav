fetch(`${MAIN_URL}/api/dbjson/about`)
.then(response => response.json())
.then(response => {
    ReactDOM.render(<span>{response}</span>, document.getElementById('about_text'))
})