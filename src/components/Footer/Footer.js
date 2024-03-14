import React from 'react'
import './Footer.css'

function Footer() {


  return (
    <div className='footer_outer_shell'>



      <div className='backtotop'>
           <button className='footer_button'>Back to Top</button>
      </div>
<div className='footer_inner_shell'>

      <div className='footer_top_one'>
        <img className='BW_logo' src='https://dev.relationalearning.com/wp-content/uploads/2024/03/BWLogo.png' alt='Center for RelationaLearning Logo'/>
        <h3>Join Us On The Journey To Put Relationships First!</h3>
      </div>



<div className='footer_top_two'>

      <div className='footer_contact'>
        <h3>Contact Info</h3>
        <ul>
          <li>Dr. George Otero</li>
          <li>505.690.8123</li>
          <li>info@relationalearning.com</li>
        </ul>
      </div>

      
      <div className='footer_socials'>

<a href='https://www.instagram.com/gg_otero/'>
        <img src='https://dev.relationalearning.com/wp-content/uploads/2024/03/instagram.png' alt='Center For RelationaLearning Instagram'/>
</a>

<a href='https://www.facebook.com/CenterForRelationaLearning'>
      <img src='https://dev.relationalearning.com/wp-content/uploads/2024/03/facebook.png' alt='Center For RelationaLearning Facebook'/>
</a>

<a href='https://www.linkedin.com/in/george-otero-660a8159/'>
        <img src='https://dev.relationalearning.com/wp-content/uploads/2024/03/linkedin.png' alt='Center For RelationaLearning Linkedin'/>
</a>

      </div>
</div>


</div>
    </div>
  )
}

export default Footer