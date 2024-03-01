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
        <div className='resource_green_paint_container'>
        <img className='resource_green_paint' src='https://dev.relationalearning.com/wp-content/uploads/2024/03/paintbrush1-41.png' alt=''/>
        </div>




    <div className='resources_mid_page'>
          <div className='resource_block1'>
                <div className='resource_block_inner'>
                        <h3>Resource Title</h3>
                        <p>Resource Description: something small to describe the content</p>
                </div>
          </div>


            <div className='resource_block2'>
            <div className='resource_block_inner'>
              <h3>Resource Title</h3>
              <p>Resource Description: someting small to describe the content</p>
            </div>
            </div>

            <div className='resource_block3'>
            <div className='resource_block_inner'>
              <h3>Resource Title</h3>
              <p>Resource Description: someting small to describe the content</p>
            </div>
            </div>
        </div>

        <img className='resource_yellow_paint' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/yellowbigalt.png' alt=''/>


    </div>
  )
}

export default Resources