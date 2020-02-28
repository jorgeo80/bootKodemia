import React from 'react'
import PostCard from '../components/PostCard'
import PostCardButton from '../components/PostCardButton'

function PostList (props) {
  return (
    <div className='row'>
      {
        props.list.map(post => (
          <div
            key={post.id}
            className='col-md-4'
          >
            <PostCard
              title={post.title}
              img={post.image}
              text={post.text}
              readTime={post.readTime}
            >
              <PostCardButton
                edit={post.edit}
                view={post.view}
              />
            </PostCard>
          </div>
        ))
      }
    </div>
  )
}

export default PostList
