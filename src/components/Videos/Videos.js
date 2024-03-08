import React from 'react'
import './Videos.css'


function Videos() {
  return (
    <div class='videos_outer_shell'>

        <div class='videos_header_container'>
            <h2>Videos</h2>
        </div>


        <div class='videos_top_shell'>

            <div class='video_banner_container'>
                <div class='video_banner_image_container'>
                <img class='video_banner' src='https://dev.relationalearning.com/wp-content/uploads/2024/03/video.jpg' alt='Center For RelationaLearning Video Banner'/>
                </div>
                <div class='video_banner_text'>
                <h2>Relational Kolideiscopes</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat.</p>
                </div>
            </div>

        <div class='videos_container_main'>
            <div class='video_container'>
                <iframe  src="https://www.youtube.com/embed/6mbjRtpgY3M" frameborder="0" allowfullscreen></iframe>
                <div class='video_container_text'>
                <h3>Relational Kaleidoscope: George Otero in conversation with Lisa Otero</h3>
                <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat.</p>
                </div>
             </div>
        </div>
        
        <div class='videos_container_main'>
            <div class='video_container'>
           <iframe  src="https://www.youtube.com/embed/0y2o9q-00yk" frameborder="0" allowfullscreen></iframe>
                <div class='video_container_text'>
                <h3>Relational Kaleidoscope: Episode 2 with special guest Phillip Crump</h3>
                <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat.</p>
                </div>
             </div>
        </div>

        </div>

    </div>
  )
}

export default Videos