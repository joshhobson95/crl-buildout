import React from 'react'
import './Team.css'
import poster from '../../assets/poster.jpg'
import headshot from '../../assets/headshot.jpg'
import purple from '../../assets/paint/purplestroke.png'
import blue from '../../assets/paint/bluesplotch.png'


function Team() {




  return (
    <div className='team_outer_shell'>
      <div className='team_intro'>
        <h2>Start The Relational by Learning Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat.</p>
        <div className='blue_splotch_container'>
        <img className='blue_splotch' src={blue} alt='' />
        </div>
      </div>

    <div className='george_and_susan'>
        <div>
        <img className='george' src={poster} alt='' />
        <h2>George Otero</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat.</p>
        </div>
        <div>
        <img className='susan' src={poster} alt='' />
        <h2>Susan Chambers-Otero</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat.</p>
        </div>
    </div>

    <div className="other_faculty">
      <div className="faculty">
        <img className='headshot' src={headshot} alt=''/>
        <h3>Sofia Martinez</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat.</p>
      </div>
      <div className="faculty">
      <img className='headshot' src={headshot} alt=''/>
        <h3>Sofia Martniez</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat.</p>
      </div>
      <div className="faculty">
      <img className='headshot' src={headshot} alt=''/>
        <h3>Lisa Otero</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat.</p>
      </div>
      <div className="faculty">
      <img className='headshot' src={headshot} alt=''/>
        <h3>Title 4</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat.</p>
      </div>
      <div className="faculty">
      <img className='headshot' src={headshot} alt=''/>
        <h3>Title 5</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat.</p>
      </div>
      <div className="faculty">
      <img className='headshot' src={headshot} alt=''/>
        <h3>Title 6</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat.</p>
      </div>
      <div className='purplestroke_container'>
        <img className="purplestroke" src={purple} alt='' />
      </div>
    </div>



    </div>
  )
}

export default Team