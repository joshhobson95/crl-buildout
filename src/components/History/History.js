import React from 'react';
import './History.css';
import ourhistory from '../../assets/ourhistory.png'
import swtooutback from '../../assets/swtooutback.png'
import newmexicotrue from '../../assets/newmexicotrue.png'



function History() {
  return (
    <div className='history_outer_container'>

      
      <div className='history_image_top'>
        <div className='sunset_image'>
        </div>
      </div>

          <div className='our_story'>
            <h2>Our Story</h2>
          </div>
      <div className="vertical_line"></div> 

    <div className='history_mid_page'>

      <div className='history_our_history'>
        <div className='history_our_history_inner'>
        <h3>Our History</h3>
        <img className='history_yellow_paint' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/paintbrush2-e1709075164364.png' alt=''/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat. Etiam finibus non dui eget imperdiet. Nulla eu dapibus elit, vitae eleifend arcu. Aliquam sed aliquet diam. Phasellus rhoncus gravida risus, at auctor magna pulvinar nec. Aliquam tincidunt aliquet metus consequat gravida. Pellentesque euismod, sem id tempor volutpat, lectus elit iaculis erat, vel bibendum risus ipsum sed nisi. Sed vehicula massa vitae tincidunt imperdiet. Duis a lacinia augue, in accumsan tellus.</p>
        </div>


        <img className='our_history_image' src={ourhistory} alt=''/>
      </div>

      <div className='southwest_to_outback'>
        <h3>Southwest to Outback</h3>
       <img className='history_teal_paint' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/paintbrush2-51.png' alt=''/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat. Etiam finibus non dui eget imperdiet.</p>
        < img className='our_history_image2' src={swtooutback} alt=''/>
      </div>


      <div className='new_mexico_end'>
        <h3>New Mexico Based</h3>
        <img className='history_nm_end' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/paintstroke-5.png' alt='' />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat. Etiam finibus non dui eget imperdiet.</p>
        < img className='our_history_image3' src={newmexicotrue} alt=''/>
      

      </div>






    </div>




    </div>
  );
}

export default History;
