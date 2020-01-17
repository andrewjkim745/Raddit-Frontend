import React from 'react'

class Comments extends React.Component {
    state = {
        comments: []
    }

    componentDidMount() {
        this.getComments();

    }

    getComments = async() => {
    let data = await axios.get(`http://localhost:3000/posts/${post_id}`)
    console.log(data)
    console.log(data[Object.keys(data)[0]].post.votes)

  }

}


export default Comments 