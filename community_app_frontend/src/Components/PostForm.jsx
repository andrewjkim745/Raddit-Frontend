import React from 'react'
import './Styles/PostForm.css'
import { Redirect } from 'react-router'
// look at form component on react-post and substitute handlesubmit with handleadd

const PostForm = ({ post, handleSubmit, handleChange, }) => (
    <div className='outer-container'>
        <div className='form-title'>
        <p>Create or Update Posts</p>
        </div>
        <div className='line'>

        </div>
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <span>
                <textarea
                    value={post.title}
                    placeholder='title'
                    name='title'
                    required
                    onChange={handleChange}
                />
            </span>

            <span>
                <textarea
                    value={post.username}
                    placeholder='username'
                    name='username'
                    required
                    onChange={handleChange}
                />
            </span>

            <span>
                <textarea
                    value={post.link}
                    placeholder='link'
                    name='link'
                    onChange={handleChange}
                />
            </span>

            <span>
                <textarea
                    className='description-box'
                    value={post.description}
                    placeholder='description'
                    name='description'
                    required
                    onChange={handleChange}
                />
            </span>
            {/* <input type="hidden" name="postId" value={id}/> */}
            <div className='submit-div'>
            <button className='submit' type='submit'>Submit</button>
            </div>
        </form>
    </div>
    </div>

)


export default PostForm

