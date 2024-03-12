import React from 'react'
import './SingleBlog.css'


function SingleBlog() {

    
  return (
    <div className='single_blog_outer_shell'>

        <div className='single_blog_top'>
                <img className='single_blog_featured_image' src='https://dev.relationalearning.com/wp-content/uploads/2024/03/IMG_0087.jpg' alt='RelationaLearning Blog Post'/>
                <h2>The Center for Relational Bloggings</h2>
                <span>11/06/1885</span>
        </div>

        <div className='single_blog_entry'>

            <img src='https://dev.relationalearning.com/wp-content/uploads/2024/02/matt-howard-A4iL43vunlY-unsplash.jpg' alt=''/>

            <p>Morbi pharetra auctor leo, a porta elit porta non. In porta ipsum id magna interdum, eget molestie magna fermentum. Etiam a rutrum nulla. Suspendisse tempor porta diam at aliquam. Proin eget elit felis. Nam rutrum nibh ac tellus ullamcorper, id varius augue consequat. Suspendisse potenti. Maecenas nec feugiat mauris, a sodales diam. Morbi pharetra auctor...</p>
             
        </div>

    </div>
  )
}

export default SingleBlog