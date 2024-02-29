import React from 'react'
import './Resources.css'

function Resources() {



  return (
    <div className='resources_outer_shell'>

        <h2 className='resources_header'>Resources</h2>
        <div className='resources_top_background'>
        <div className='resources_purple_top'>
            <p>Dive into Relational Learning with our curated resources at the Center for Relational Learning. Explore articles, webinars, and more to grow personally and professionally. Start your journey today!</p>
        </div>
        </div>




        <div className='resources_mid_page'>
        <div className='resource_block1'>
    <div className='resource_block_inner'>
        <div className="background-image"></div>
        <div className='content-div'>
            <h3>Resource Title</h3>
            <p>Resource Description: something small to describe the content</p>
        </div>
    </div>
</div>
            <div className='resource_block2'>
              <h3>Resource Title</h3>
              <p>Resource Description: someting small to describe the content</p>
            </div>
            <div className='resource_block3'>
              <h3>Resource Title</h3>
              <p>Resource Description: someting small to describe the content</p>
            </div>
        </div>


    </div>
  )
}

export default Resources