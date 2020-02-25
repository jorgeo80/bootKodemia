import React from 'react'

import Navbar from './components/Navbar'

import PostCard from './components/PostCard'
import AppButton from './components/AppButton'

function App () {
  const numPosts = [1, 2, 3];
  const imgArray = numPosts.map(val => {
    return `https://picsum.photos/id/${Math.trunc(Math.random() * val * 10)}/200/300`
  })
  const readTimeArray = numPosts.map(val => `${Math.trunc(Math.random() * val * 10)}m`)

  return (
    <div className='app'>
      <Navbar />

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <PostCard
              img={imgArray[0]}
              text={`Prueba Texto ${Math.trunc(Math.random() * 10)}`}
              readTime={readTimeArray[0]}
            >
              <div className='btn-group'>
                <AppButton
                  text='Edit'
                  size='sm'
                  className='btn-outline-secondary'
                />
                <AppButton
                  text='View'
                  size='sm'
                  className='btn-outline-secondary'
                />
              </div>
            </PostCard>
          </div>

          <div className='col-md-4'>
            <PostCard
              img={imgArray[1]}
              text={`Prueba Texto ${Math.trunc(Math.random() * 10)}`}
              readTime={readTimeArray[1]}
            >
              <div className='btn-group'>
                <AppButton
                  text='Edit'
                  size='sm'
                  className='btn-outline-secondary'
                />
                <AppButton
                  text='View'
                  size='sm'
                  className='btn-outline-secondary'
                />
              </div>
            </PostCard>
          </div>

          <div className='col-md-4'>
            <PostCard
              img={imgArray[2]}
              text={`Prueba Texto ${Math.trunc(Math.random() * 10)}`}
              readTime={readTimeArray[2]}
            >
              <div className='btn-group'>
                <AppButton
                  text='Edit'
                  size='sm'
                  className='btn-outline-secondary'
                />
                <AppButton
                  text='View'
                  size='sm'
                  className='btn-outline-secondary'
                />
              </div>
            </PostCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
