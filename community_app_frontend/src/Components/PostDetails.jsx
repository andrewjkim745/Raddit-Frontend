import React from 'react'
import './Styles/PostDetails.css'
import axios from 'axios'
import Moment from 'react-moment'
import withUnmounted from '@ishawnwang/withunmounted'



class PostDetails extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            username: '',
            link: '',
            description: '',
            views: '',
            votes: '',
            date: '',
            comments: [],
            isLoading: true

        } 
        
    }
    

    componentDidMount() {
        this.getPost()
        // this.getComments()
        // this._isMounted = true;
    }

    // componentWillUnmount() {
    //     this._isMounted = false;
    // }
    getPost = async () => {
        console.log('hello')
        await axios.get(`http://localhost:3000/posts/${this.props.match.params.id}`)
            .then((response) => {
                console.log(response.data.post.created_at)
                this.setState({
                    title: response.data.post.title,
                    description: response.data.post.description,
                    username: response.data.post.username,
                    link: response.data.post.link,
                    views: response.data.post.views,
                    votes: response.data.post.votes,
                    date: response.data.post.created_at
                })
            })

    }

    getComments = async () => {
        console.log('hello')
        await axios.get(`http://localhost:3000/posts/${this.props.match.params.id}`)
            .then((response) => {
                if (this._isMounted) {
                console.log(response.data.comments)
                this.setState({
                    comments: response.data.comments
                })}
            })
    }
    

    handleSubmit = async (e) => {
        e.preventDefault()

        await axios.put(`http://localhost:3000/posts/${this.props.match.params.id}`, {
            title: this.state.post.title,
            username: this.state.post.username,
            link: this.state.post.link,
            description: this.state.post.description
        })


    }



    render() {
        console.log(this.state.comments[0])
        // const { post } = this.state;
        return (
            <div className='outer-container'>
                <div className='post-container'>
                    <div className='votes-container'>
                        <p className='votes'>{this.state.votes ? this.state.votes : 0}</p>
                    </div>
                    <div className='top-container'>
                        <div className='user'>
                            <p>u/{this.state.username}-</p>
                            <Moment fromNow>{this.state.date}</Moment>

                        </div>
                        <h4>{this.state.title}</h4>
                        <img className='post-image' src={this.state.link}></img>
                        <p>{this.state.description}</p>
                        <div className='bottom-container'>
                            <p className='views'>{this.state.views ? this.state.views : 1} views</p>
                        </div>
                        <p>{this.state.comments[0]}</p>
                        {/* <div>
                            {this.state.comments[0]}

                        </div>
                        <div>
                            {this.state.comments[1]}
                        </div>
                        <div>
                            {this.state.comments[2]}
                        </div> */}
                    </div>




                </div>
            </div>
        )
    }


}

export default PostDetails