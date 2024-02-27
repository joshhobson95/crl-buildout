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
          <div className='our_story'>
            <h2>Our Story</h2>
          </div>
        </div>
      </div>

      <div className="vertical_line"></div> 

    <div className='history_mid_page'>

      <div className='history_our_history'>
        <h3>Our History</h3>
        <img src='https://dev.relationalearning.com/wp-content/uploads/2024/02/paintbrush2-e1709075164364.png'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat. Etiam finibus non dui eget imperdiet.</p>

        {/* < img className='our_history_image' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/DSC_0255.jpg' alt=''/> */}
        < img className='our_history_image' src={ourhistory} alt=''/>
      </div>

      <div className='southwest_to_outback'>
        <h3>Southwest to Outback</h3>
       
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat. Etiam finibus non dui eget imperdiet.</p>
        < img className='our_history_image' src={swtooutback} alt=''/>
      </div>


      <div className='new_mexico_end'>
        <h3>New Mexico Based</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit leo. Donec sit amet pharetra nunc, sit amet tincidunt lorem. Morbi vel justo eu leo finibus commodo a at lectus. Mauris non est feugiat, dapibus ipsum ultrices, viverra lorem. Nunc at pharetra purus. Nunc turpis lacus, mollis a sapien sit amet, sollicitudin hendrerit erat. Etiam finibus non dui eget imperdiet.</p>
        < img className='our_history_image' src={newmexicotrue} alt=''/>
      

      </div>






    </div>




    </div>
  );
}

export default History;
