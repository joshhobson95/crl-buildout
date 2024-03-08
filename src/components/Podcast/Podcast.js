import React from 'react'
import './Podcast.css'


function Podcast() {


  return (
    <div className='podcast_outer_shell'>

<div class='podcast_top_background'>
        <div class='podcast_top'>       
            <h2>Relational Kaleidoscope</h2>
            <div class='podcast_top_inner'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. 
                </p>
            </div>
        </div>
</div>

<div className='podcast_cover_container'>
      <img className='podcast_cover' src='https://dev.relationalearning.com/wp-content/uploads/2024/03/podcastcover-e1709657025933.jpg' alt='Center For Relational Learning Podcast Cover'/>
</div>



      <div className='podcast_lower_page'>
        <h2>Want more Content?</h2>
        <p>Check out our Blogs and Online Courses to learn more about RelationaLearning</p>
        <button>Check It Out</button>
      </div>

        

    </div>
  )
}

export default Podcast