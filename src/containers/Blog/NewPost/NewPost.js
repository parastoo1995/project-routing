import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import './NewPost.css'

class NewPost extends React.Component {

  componentDidMount() {
    console.log(this.props)
  }

  state = {
    title: '',
    content: '',
    author: 'Parastoo',
    submitted: false,
  }

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    }
    axios
      .post('https://jsonplaceholder.typicode.com/posts', data)
      .then((response) => {
        console.log(response)
        this.setState({ submitted: true })
      })
  }

  render() {
    let redirect = null
    if(this.state.submitted) {
      redirect = <Redirect to="/" />
    }

    return (
      <div className="new-post">
        {redirect}
        <h2>Add a Post</h2>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Parastoo">Parastoo</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    )
  }
}

export default NewPost
