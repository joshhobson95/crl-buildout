import React from 'react'
import './History2.css'
import historybig from '../../assets/HistoryBig.png'


function History2() {



  return (
    <div className='history2_outer_shell'>

<div className='history_image_top'>
        <div className='sunset_image'>
        </div>
      </div>

          <div className='our_story'>
            <h2>Our Story</h2>
          </div>
  

      <img className='history_big' src={historybig} />


      <div className='overlay_history'>

        <div className='our_history_div'>
            <h3>Our History</h3>
            <p>
            Fusce id ipsum et massa rutrum mattis quis non ligula. Maecenas vitae gravida massa. Nulla nisi dolor, imperdiet a enim non, vehicula varius enim. Ut ut nulla lobortis, luctus augue id, tincidunt ligula. Praesent tempor diam velit, in pellentesque dui tristique sed.
            </p>
        </div>


        <div className='southwest_to_outback_div'>
            <h3>Southwest to Outback</h3>
            <p>
            Fusce id ipsum et massa rutrum mattis quis non ligula. Maecenas vitae gravida massa. Nulla nisi dolor, imperdiet a enim non, vehicula varius enim. Ut ut nulla lobortis, luctus augue id, tincidunt ligula. Praesent tempor diam velit, in pellentesque dui tristique sed.
            </p>
        </div>


        <div className='new_mexico_div'>
            <h3>New Mexico</h3>
            <p>
            Fusce id ipsum et massa rutrum mattis quis non ligula. Maecenas vitae gravida massa. Nulla nisi dolor, imperdiet a enim non, vehicula varius enim. Ut ut nulla lobortis, luctus augue id, tincidunt ligula. Praesent tempor diam velit, in pellentesque dui tristique sed.
            </p>
        </div>

      </div>


    </div>
  )
}

export default History2