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
  <h2>Exploring the Shifting Layers of our World to Uncover the Power of Relationships</h2>
      <img className='podcast_cover' src='https://dev.relationalearning.com/wp-content/uploads/2024/03/podcastcover-e1709657025933.jpg' alt='Center For Relational Learning Podcast Cover'/>
</div>


        <div className='podcast_player_outer'>
          <div className='podcast_player_embeded'>
              <iframe
                      title="Relational Kaleidoscope"
                      allowtransparency="true"
                      height="315"
                      width="75%"
                      style={{ border: 'none', minWidth: '100%', height: '315px' }}
                      scrolling="no"
                      data-name="pb-iframe-player"
                      src="https://www.podbean.com/player-v2/?i=rgmfb-f48ca2-pbblog-playlist&share=1&download=0&rtl=0&fonts=Arial&skin=654771&font-color=auto&logo_link=podcast_page&order=episodic&limit=10&filter=all&ss=a713390a017602015775e868a2cf26b0&btn-skin=60a0c8&size=315"
                      loading="lazy"
                      allowFullScreen
                      ></iframe>
            </div>
        </div>




    <div className='podcast_video_header'>
          <h2>Relational Kaleidoscope Videos</h2>
    </div>
        <div className='podcast_video_section'>

      <div className='podcast_video'>
              <iframe
        title='Relational Kaleidoscope Video 1'
        src="https://www.youtube.com/embed/6mbjRtpgY3M"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </div>
      <div className='podcast_video'>
              <iframe
                  title='Relational Kaleidoscope Video 2'
        src="https://www.youtube.com/embed/0y2o9q-00yk"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </div>
      <div className='podcast_video'>
              <iframe
                  title='Relational Kaleidoscope Video 3'
        src="https://www.youtube.com/embed/31yyqPXUCBs"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </div>
      <div className='podcast_video'>
              <iframe
                  title='Relational Kaleidoscope Video 4'
        src="https://www.youtube.com/embed/WPx-8QB4JR8"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </div>
      <div className='podcast_video'>
              <iframe
                  title='Relational Kaleidoscope Video 5'
        src="https://www.youtube.com/embed/bComVtAV3bg"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </div>





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