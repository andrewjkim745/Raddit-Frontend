import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import './Styles/Home.css'
import Moment from 'react-moment';
import axios from 'axios';
// // import PostForm from './CreatePostform'
// import { Link } from 'react-router-dom'


// export default function Home(props) {
//     const { posts, comments } = props;

//     const displayallPosts = () => {
//         return posts.map(post => (
//             <div key={post.id} className="post">
//                 <div>
//                     <p>{post.title}</p>
//                     <p>Posted by {post.username} at {post.created_at}</p>
//                 </div>
//                 <p>{post.description}</p>
//                 <div>
//                     {/* <p>{comments.length}</p> */}
//                 </div>
//             </div>
//         ))
//     }

//     return (
//         <div>{displayallPosts()}</div>
//     )
// }


class Home extends React.Component {
  state = {
    posts: [],
    comments: '',
    votes: 0,
    confirm: false,
    deleted: false
  };
  componentDidMount() {
    this.getPosts();
  }
  getPosts() {
    fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(jsonedPosts => this.setState({ posts: jsonedPosts }))
      .catch(error => console.error(error));

  }
  handleDelete(post) {
    fetch(`http://localhost:3000/posts/${post.id}`, {
      method: 'DELETE',
      // headers: {
      //   'Accept': 'application/json, text/plain, */*',
      //   'Content-Type': 'application/json'
      // }
    })
    console.log("hi")
    this.getPosts();
  }

  // getComments(post_id) {
  //   fetch(`http://localhost:3000/posts/${post_id}/comments`)
  //     .then(response => response.json())
  //     .then(jsonedComments => this.setState({ comments: jsonedComments }))
  //     .catch(error => console.error(error));

  getComments = async (post_id) => {
    try{
    let data = await axios.get(`http://localhost:3000/posts/${post_id}`).then(() => {
          console.log(data)
    // console.log(data[0])
    console.log(data[Object.keys(data)[0]])
    console.log(data[Object.keys(data)[0]].comments[0])
    let comments = data[Object.keys(data)[0]].comments[0].reply
    console.log('this is in getComments', comments)
    // this.setState({ 
    //   comments: comments
    // })
    })

  } catch(error) {
    console.log(error)
  }

  }



  handleUpVote = async (post_id) => {
    let data = await axios.get(`http://localhost:3000/posts/${post_id}`)
    console.log(data)
    console.log(data[Object.keys(data)[0]].post.votes)
    // console.log(data[Object.keys(data)[0]].comments[0].reply)
    let newData = data[Object.keys(data)[0]].post.votes + 1
    console.log(newData)
    await axios.put(`http://localhost:3000/posts/${post_id}`, {
      votes: newData
    })
    this.getPosts();

    // let newdata = data.post.votes + 1
    // console.log(newdata)
    // data.votes + 1
    // axios PushSubscription


  }

  handleDownVote = async (post_id) => {
    let data = await axios.get(`http://localhost:3000/posts/${post_id}`)
    console.log(data)
    console.log(data[Object.keys(data)[0]].post.votes)
    let newData = data[Object.keys(data)[0]].post.votes - 1
    console.log(newData)
    await axios.put(`http://localhost:3000/posts/${post_id}`, {
      votes: newData
    })
    this.getPosts();

    // let newdata = data.post.votes + 1
    // console.log(newdata)
    // data.votes + 1
    // axios PushSubscription


  }



  render() {
    // console.log(this.getComments(7))
    

    return (
      <>
        <div className='create-posts'>
          <Link exact to='/createposts' activeClassName='active' className='please'>
          <h3 className='header'>Welcome to Raddit</h3>
            <div className='button'>
              <p className='button-text'>Post</p>
              <img className='pencil' src='https://i.imgur.com/X7GIKlu.png'></img>
            </div>
          </Link>
          <div>
          </div>
        </div>
        {this.state.posts.reverse().map(post => {
          return (
            <div className='post-card' key={post.id}>
              <div className='votes-cont'>
                <div onClick={() => this.handleUpVote(post.id)} className='up-arrow'>
                  <h3>^</h3>
                </div>
                <p className='vote-count'>{post.votes ? post.votes : 0}</p>
                <div onClick={() => this.handleDownVote(post.id)} className='down-arrow'>
                  <h3>^</h3>
                </div>
              </div>
              <div className='info-div'>
                <Link exact to={`/posts/${post.id}`} className='please'>
                <div className='user-date'>
                    <p className='user-name'>Posted by {post.username}-</p>
                    <Moment fromNow>{post.created_at}</Moment>
                  </div>
                  <div className='title-div'>
                  <h3 className='title'>{post.title}</h3>
                  </div>

                </Link>
                <div className='buttons'>
                  <div className='comments'>
                     {/* {this.getComments(post.id)} */}
                    {/* <p>{typeof this.state.comments === 'string' ? this.state.comments : ''}</p> */}
                  </div>
                  <div className='delete-div' onClick={() => this.handleDelete(post)}>
                    <img className='delete-button' src='https://i.imgur.com/I8VKeEG.png'></img>
                    <p>delete</p>
                  </div>
                    <Link exact to={`/posts/${post.id}/edit`} activeClassName='active' className='edit-div'>
                    
                      <img className='edit-button' src='http://cdn.onlinewebfonts.com/svg/img_186761.png'></img>
                      <p className='p-edit'>edit</p>
                    
                    </Link>
                  
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}


  export default Home;