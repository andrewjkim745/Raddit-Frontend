import React, {Component} from 'react'
import PostForm from './PostForm'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class CreatePosts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {
                title: '',
                username: '',
                link: '',
                description: ''

            },
            newPost: false
        }
    }
    // async addPosts() {
    //     const response = await axios('http://localhost:3000/posts')
    //     const data = response.data;
    //     this.setState({
    //         posts: data
    //     })
    // }

    componentDidMount() {
        // const post = {...this.state.post}
        // this.setState({ post })
    }

    handleChange = e => {
        
        const updated = {[e.target.name]: e.target.value}
        const edited = Object.assign(this.state.post, updated)
     
        this.setState({ post: edited })
    }

    handleSubmit = async(e) => {
        // console.log("hello", this.state)
        e.preventDefault()

        await axios.post('http://localhost:3000/posts', {
            title: this.state.post.title,
            username: this.state.post.username,
            link: this.state.post.link,
            description: this.state.post.description

        })
        this.setState({
            newPost: true
        })
        // const { title, username, link, description } = this.state.post
        // const data = {
        //     title,
        //     username,
        //     link,
        //     description
        // }
        // clears the form
    }
    render() {
        console.log(this.state.post)
        const { handleSubmit, handleChange } = this;
        const { newPost, post } = this.state;

        if (newPost) {
            return <Redirect to={'/'}/>
        }
        return (
            <PostForm
                post={post}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        )
    };

}