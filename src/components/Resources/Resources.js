import React from 'react'
import './Resources.css'

function Resources() {



  return (
    <div class='resources_outer_shell'>

    <div class='resources_top_background'>
            <div class='resources_top'>       
                <h2>Relational Resources</h2>
                <div class='resources_top_inner'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. 
                    </p>
                </div>
            </div>
    </div>




    <div class='resources_mid_page'>
          <div class='resource_block1'>
                <div class='resource_block_inner'>
                        <h3>Resource Title</h3>
                        <p>Resource Description: something small to describe the content</p>
                </div>
          </div>


            <div class='resource_block2'>
            <div class='resource_block_inner'>
              <h3>Resource Title</h3>
              <p>Resource Description: someting small to describe the content</p>
            </div>
            </div>

            <div class='resource_block3'>
            <div class='resource_block_inner'>
              <h3>Resource Title</h3>
              <p>Resource Description: someting small to describe the content</p>
            </div>
            </div>
        </div>

        <img class='resource_yellow_paint' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/yellowbigalt.png' alt=''/>


    </div>
  )
}

export default Resources