import React from 'react'
import PostForm from './PostForm'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'


class UpdatePosts extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            post: {
                title: '',
                username: '',
                link: '',
                description: ''

            },
            updated: false
        }
    }

    // // async componentDidMount() {
    // //     try {
    // //       const post = axios.get(`http://localhost:3000/posts/${id}`)
    // //       this.setState({ post });
    // //     } catch (err) {
    //       console.error(err);
    // //     }
    // //   }


    handleChange = event => {
        const updatedField = { [event.target.name]: event.target.value };
        const editedPost = Object.assign(this.state.post, updatedField);
        this.setState({ post: editedPost })
    };
    handleSubmit = async(e) => {
        e.preventDefault()

        await axios.put(`http://localhost:3000/posts/${this.props.match.params.id}`, {
            title: this.state.post.title,
            username: this.state.post.username,
            link: this.state.post.link,
            description: this.state.post.description
        })
        this.setState({
            updated: true
        })
    }





    render() {
        console.log(this.state.post)
        const { post, updated } = this.state;
        const { handleChange, handleSubmit } = this;

        if (updated) {
            return <Redirect to={'/'}/>
        }
    

        return (
            <>
                <PostForm
                    post={post}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    />
                
                    </>

        )


    }
}

export default UpdatePosts