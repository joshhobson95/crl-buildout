import React from 'react'
import './Podcast.css'


function Podcast() {


  return (
    <div className='podcast_outer_shell'>

      <div className='podcast_header'>
      <h2>Relational Koleidescope</h2>
      <p>Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat.</p>

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