import React from 'react'
import './Team.css'
import poster from '../../assets/poster.jpg'
import headshot from '../../assets/headshot.jpg'
import purple from '../../assets/paint/purplestroke.png'
import blue from '../../assets/paint/bluesplotch.png'


function Team() {




  return (
    
    <div class='team_outer_shell'>
      

      <div class='team_background_image'>
        
      <div class='team_intro'>
        <h2>Start The Relational by Learning Us</h2>
        <p>Welcome to the Center for RelationaLearning. We would be happy to share a little about ourselves with you and have you get to know us!</p>
      </div>

    <div class='george_and_susan'>
        <div>
        <img class='george' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/headshot-scaled.jpg' alt='' />
        <h2>George Otero</h2>
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat.</p>
        </div>
        <div>
        <img class='susan' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/headshot-scaled.jpg'alt='' />
        <h2>Susan Chambers-Otero</h2>
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat.</p>
        </div>
    </div>



    <div class="other_faculty">

      <h2>Our Team</h2>

      <div class='our_team_images'>
        <div class='faculty'>
        <img src='https://dev.relationalearning.com/wp-content/uploads/2024/02/headshot-scaled.jpg' alt='' />
        <h4>Sofia Martinez</h4>
        </div>
        <div class='faculty'>
        <img src='https://dev.relationalearning.com/wp-content/uploads/2024/02/headshot-scaled.jpg' alt='' />
        <h4>Sofia Martinez</h4>
        </div>
        <div class='faculty'>
        <img src='https://dev.relationalearning.com/wp-content/uploads/2024/02/headshot-scaled.jpg' alt='' />
        <h4>Sofia Martinez</h4>
        </div>
        <div class='faculty'>
        <img src='https://dev.relationalearning.com/wp-content/uploads/2024/02/headshot-scaled.jpg' alt='' />
        <h4>Sofia Martinez</h4>
        </div>
      </div>

      <div class='faculty_bio'>

        <div class='faculty_bio_inner'>
          <p>Ocotillo Strategies was founded to serve as an intermediary strategic partner to connect education policy to practice and practice to policy in New Mexico. Ocotillo Strategies believes that by amplifying community-connected, innovative practice and weaving the vast cultural, linguistic, and financial resources in the state with lived experience of those closest to the impact of policy and practice, New Mexicans can nourish the education ecosystem and continuously improve upon the student experience of learning. Student success happens one meaningful conversation at a time, and we aim to cultivate these conversations to strategically improve education outcomes in New Mexico.</p>
          <button onclick="closeBio()">Close</button>
        </div>

      </div>
      




    </div>



      </div>
    </div>
  )
}

export default Team