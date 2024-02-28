import React from 'react'
import './Contact.css'

function Contact() {


  return (
    <div className='contact_outer_shell'>

        <div className='contact_header'>
            <h2>Contact Us</h2>
            <p>Fore More Information About our Programs</p>
            <p>Or to hire a CRL consultant for your school or community organization, </p>
            <p>Please Contact</p>
            <p>The Center for Relationalearning & Relationaleadership</p>

            <div className='contact_george_container'>
                    <img className='contact_george' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/Rectangle-247.png'  alt=''/>
            </div>


        </div>


            <div className='phone_container'>
                <p> (505) 690-8123</p>
                <img className='phone_icon' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/phonenemail-1.png' alt=''/>

            </div>
            <div className='email_container'>
                <p>Info@Relationalearning.com</p>
                <img className='email_icon' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/phonenemail-2.png' alt=''/>
            </div>

            



    </div>
  )
}

export default Contact