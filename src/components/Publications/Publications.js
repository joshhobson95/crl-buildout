import React from 'react'
import './Publications.css'


function Publications() {


  return (
    <div className='publications_outer_shell'>

        <div className='publications_header_background'>
        <h2>Publications For Purchase</h2>
        </div>

        <div className='publications_top_container'>
            <img className='publications_top_image' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/matt-howard-A4iL43vunlY-unsplash.jpg' alt=''/>
        </div>

<div className='publications_mid_page'>

    <div className='publication_one_container'>
         <div className='publication_one_text'>
                <h3>RelationaLearning: A Way Forward</h3>
                <p>Essential reading for parents, teachers, community leaders and others  interested in guiding learning in a global society. This book offers a  radical new look at how relationships make learning possible. Teachers  and students become leaders and learners together as they build more  interdependent relationships.</p>
                <p>Written by: Dr. George Otero, Dr. robert Sparks, and Susan Chambers-Otero</p>

                    <div className='publications_price_container'>
                                    <span>$32.99 USD</span> <button className='publications_button'>Buy Now</button>
                    </div>
                </div>

                <img className='publication_one' src='https://dev.relationalearning.com/wp-content/uploads/2024/03/1.png' alt=''/>
            </div>

    <div className='publication_one_container'>
         <div className='publication_one_text'>
                <h3>A Different Book</h3>
                <p>Essential reading for parents, teachers, community leaders and others  interested in guiding learning in a global society. This book offers a  radical new look at how relationships make learning possible. Teachers  and students become leaders and learners together as they build more  interdependent relationships.</p>
                <p>Written by: Dr. George Otero, Dr. robert Sparks, and Susan Chambers-Otero</p>

                    <div className='publications_price_container'>
                                    <span>$32.99 USD</span> <button className='publications_button'>Buy Now</button>
                    </div>
                </div>

                <img className='publication_one' src='https://dev.relationalearning.com/wp-content/uploads/2024/03/1.png' alt=''/>
            </div>
            

            

    </div>

    </div>
  )
}

export default Publications