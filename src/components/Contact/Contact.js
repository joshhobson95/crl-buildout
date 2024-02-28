import React from 'react'
import './Contact.css'

function Contact() {


  return (
    <div className='contact_outer_shell'>
              <div className='contact_logo_container'>
            <img className='contact_logo' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/yellowwheel.png' alt=''/>
            </div>

        <div className='contact_header'>
          <div className='contact_header_text'>
            <h2>Contact Us</h2>
            <p>Fore More Information About our Programs</p>
            <p>Or to hire a CRL consultant for your school or community organization, </p>
            <p>Please Contact</p>
            <p>The Center for Relationalearning & Relationaleadership</p>
          </div>
   
            <div className='contact_george_container'>
                    <img className='contact_george' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/Rectangle-247.png'  alt=''/>
            </div>
        </div>


<div className='contact_mid_page'>
            <div className='phone_container'>
                <p> (505) 690-8123</p>
                <img className='phone_icon' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/phonenemail-1.png' alt=''/>

            </div>
            <div className='email_container'>
                <p>Info@Relationalearning.com</p>
                <img className='email_icon' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/phonenemail-2.png' alt=''/>
            </div>
</div>

          <div className='email_list'>
<div className='contact_form_container'>
                <h2>Sign Up For Our Email List</h2>
                <p>And Stay Up To Date With The Cetner And All Our Offerings</p>

                    <form className='contact_email_form'>
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