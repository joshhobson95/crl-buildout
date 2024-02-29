import React from 'react'
import './Contact.css'

function Contact() {


  return (
    <div class='contact_outer_shell'>
              <div class='contact_logo_container'>
            <img class='contact_logo' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/yellowwheel.png' alt=''/>
            </div>

        <div class='contact_header'>
          <div class='contact_header_text'>
            <h2>Contact Us</h2>
            <p>Fore More Information About our Programs</p>
            <p>Or to hire a CRL consultant for your school or community organization, </p>
            <p>Please Contact</p>
            <p>The Center for Relationalearning & Relationaleadership</p>
          </div>
   
            <div class='contact_george_container'>
                    <img class='contact_george' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/Rectangle-247.png'  alt=''/>
            </div>
        </div>


<div class='contact_mid_page'>
<div class='phone_container'>
    <a class='phone_a_tag' href='tel:5056908123'>
        <p> (505) 690-8123</p>
        <img class='phone_icon' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/phonenemail-1.png' alt=''/>
    </a>
</div>

<div class='email_container'>
    <a href='mailto:Info@Relationalearning.com'>
        <p>Info@Relationalearning.com</p>
        <img class='email_icon' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/phonenemail-2.png' alt=''/>
    </a>
</div>
</div>

  <div class='email_list'>
<div class='contact_form_container'>
  <div class='contact_form_text'>
                <h2>Sign Up For Our Email List</h2>
                <p>And Stay Up To Date With The Cetner And All Our Offerings</p>
    </div>
                    <form class='contact_email_form'>
                         <h2>Join Our Email List!</h2>
                  <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" />
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" />
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                  </div>
                  <button type="submit" >Submit</button>
                </form>
          </div>
          </div>

            



    </div>
  )
}

export default Contact