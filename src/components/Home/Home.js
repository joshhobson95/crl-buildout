import React, { useState, useEffect } from 'react';
import './Home.css';
import ladder from '../../assets/LadderFINAL.png';
import Learn from '../../assets/Learn.png'
import Listen from '../../assets/Listen.png'
import Watch from '../../assets/Watch.png'
import boardroom from '../../assets/boardroom.jpg'
import kids from '../../assets/kids.jpg'
import maps2 from '../../assets/maps2.png'
import maps3 from '../../assets/maps3.png'
import maps4 from '../../assets/maps4.png'
import maps5 from '../../assets/maps5.png'
import booksplash from '../../assets/booksplash.png'
import greenwheel from '../../assets/greenwheel.png'
import redwheel from '../../assets/redwheel.png'
import yellowbig from '../../assets/paint/yellowbig.png'



function Home() {
  const [posts, setPosts] = useState([]);

  const url = 'https://dev.relationalearning.com/wp-json/wp/v2/posts?_cache=' + Date.now();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchData();
  }, []);
console.log(posts)
  const handleSubmit = (e) => {
    e.preventDefault();

  };



  return (
    
    <div class='home_outer_container'>
      <div class='home_top'>
<div class='home_ladder_container'>
          <img class='home_ladder' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/LadderFINAL.png' alt='' />
</div>
 
        <div class='home_top_text'>
          <h1 class='freehand_header'>Join Us On The Journey To Put Relationships First</h1>
          <p>RelationaLeadership and RelationaLearning has helped thousands of individuals and scores of schools, community groups and organizations to develop competency in what we call RelationaLeadership and Relationalearning.

          Throughout our four decades of working with educators from the US, the UK, and Australia, we have developed theory and practices for learning and leading relationally.

          We believe skillfully placing relationships first in all our interactions holds the key to personal and professional success, and contributes most to our becoming better human beings.

          Our research, publications, programs and collaborations highlight and support the primacy of Relationships First in making our organizations, schools and communities places of equity, justice, hope, achievement and joy for all.</p>
<div class='home_more_info_shell'>
        <button class='home_more_info'>Get Started</button>
</div>
        </div>

      </div>

<div class='blog_section'>
  <div class='blog_section_inner_blogs'>
        <div class='blog_block'>
          <h2>This Week's Blog</h2>
          <img src='https://dev.relationalearning.com/wp-content/uploads/2024/03/roadrunner.jpg' alt=''/>
      
          <p>In vestibulum vestibulum posuere. Nulla augue velit, interdum a ultrices sit amet, rhoncus vitae nisi....</p>
        </div>
        <div class='blog_block'>
          <h2>This Week's Blog</h2>
          <img src='https://dev.relationalearning.com/wp-content/uploads/2024/03/roadrunner.jpg' alt=''/>
          
          <p>In vestibulum vestibulum posuere. Nulla augue velit, interdum a ultrices sit amet, rhoncus vitae nisi....</p>
        </div>
        <div class='blog_block'>
          <h2>This Week's Blog</h2>
          <img src='https://dev.relationalearning.com/wp-content/uploads/2024/03/roadrunner.jpg' alt=''/>
         
          <p>In vestibulum vestibulum posuere. Nulla augue velit, interdum a ultrices sit amet, rhoncus vitae nisi....</p>
        </div>
</div>
  <div class='blog_history_shell'>
        <div class='blog_history'>
          <h2>Our History</h2>
          <p>In vestibulum vestibulum posuere. Nulla augue velit, interdum a ultrices sit amet, rhoncus vitae nisi. Curabitur finibus nisi libero, eget vehicula ligula lobortis vitae. </p>
          <button>Learn More</button>
        </div>
  </div>
</div>

<div class='listen_learn_watch'>
 <div class='home_links'>
  <h2>Learn</h2>
  <img src='https://dev.relationalearning.com/wp-content/uploads/2024/02/Learn.png' alt='' />
  <p>Check out our Online Courses</p>

 </div>
 <div class='home_links'>
  <h2>Listen</h2>
  <img class='listen_image' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/Listen.png' alt=''/>
  <p>Listen to our Podcast</p>

 </div>
 <div class='home_links'>
  <h2>Watch</h2>
  <img src='https://dev.relationalearning.com/wp-content/uploads/2024/02/Watch.png' alt=''/>
  <p>Watch Videos from CRL</p>

 </div>

</div>

<div class='CRL_for_all'>
  <div class='redwheel_container'>
  <img class='redwheel' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/redwheel.png' alt='' />
  </div>

  <h2>RelationaLearning for <span class='underline'>All</span></h2>

  <div class='CRL_for_all_top'>
  <div class="boardroom_container">
  <img class='boardroom' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/boardroom-scaled.jpg' alt='' />
  <img class='greenwheel' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/greenwheel.png' alt='' />
</div>
<div class='CRL_for_all_top_text'>
    <h3>From the boardroom...</h3>
    <p>Morbi pharetra auctor leo, a porta elit porta non. In porta ipsum id magna interdum, eget molestie magna fermentum. Etiam a rutrum nulla. Suspendisse tempor porta diam at aliquam. Proin eget elit felis. Nam rutrum nibh ac tellus ullamcorper, id varius augue consequat. Suspendisse potenti. Maecenas nec feugiat mauris, a sodales diam. In ut nisi eros. Ut molestie ultricies mollis. Nam auctor lacus nec dolor tincidunt, id ullamcorper felis interdum. Duis vel faucibus purus.</p>
</div>
  </div>

  <div class='CRL_for_all_bottom'>
    <div class='classroom_container'>
    <img class='kids' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/kids-scaled.jpg' alt=''/>
    <div class='paint_container'>
    <img class='paint' src='https://dev.relationalearning.com/wp-content/uploads/2024/02/yellowbig.png' alt=''/>
    </div>
    </div>
    <div class='CRL_for_all_bottom_text'>
    <h3>...To the classroom</h3>
    <p>Morbi pharetra auctor leo, a porta elit porta non. In porta ipsum id magna interdum, eget molestie magna fermentum. Etiam a rutrum nulla. Suspendisse tempor porta diam at aliquam. Proin eget elit felis. Nam rutrum nibh ac tellus ullamcorper, id varius augue consequat. Suspendisse potenti. Maecenas nec feugiat mauris, a sodales diam. In ut nisi eros. Ut molestie ultricies mollis. Nam auctor lacus nec dolor tincidunt, id ullamcorper felis interdum. Duis vel faucibus purus.</p>
    </div>
  </div>
</div>

<div class='gradient_bottom_page'>
<div class='global_effort'>
  <h2>A Global Effort</h2>
<p>Morbi pharetra auctor leo, a porta elit porta non. In porta ipsum id magna interdum, eget molestie magna fermentum. Etiam a rutrum nulla. Suspendisse tempor porta diam at aliquam. Proin eget elit felis. Nam rutrum nibh ac tellus ullamcorper, id varius augue consequat. Suspendisse potenti. Maecenas nec feugiat mauris, a sodales diam.

In ut nisi eros. Ut molestie ultricies mollis. Nam auctor lacus nec dolor tincidunt, id ullamcorper felis interdum. Duis vel faucibus purus.</p>


<div class='global_bottom'>
  <div>
    <h4>Southwestern USA</h4>
    <img src='https://dev.relationalearning.com/wp-content/uploads/2024/02/maps3.png' alt=''/>
  </div>
  <div>
    <h4>United Kingdom</h4>
    <img src='https://dev.relationalearning.com/wp-content/uploads/2024/02/maps4.png' alt=''/>
  </div>
  <div>
    <h4>Australia</h4>
    <img src='https://dev.relationalearning.com/wp-content/uploads/2024/02/maps5.png' alt=''/>
  </div>
  <div>
    <h4>And remote from anywhere around the World</h4>
    <img src='https://dev.relationalearning.com/wp-content/uploads/2024/02/maps2.png' alt=''/>
  </div>
</div>
</div>

<div class='home_email_div'>
  <div class='home_email_form_shell'>
  {/* <form onSubmit={handleSubmit} class='home_email_form'>
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
      </form> */}

<link href="https://static-cdn.e2ma.net/signups/css/signup-refresh.lrg.css" rel="stylesheet" type="text/css" /><script type="text/javascript" src="https://signup.e2ma.net/tts_signup/1720637/fa3c07b971e97814abe4622bd4ba019b/1714785/"></script><div id="load_check" class="signup_form_message" >This form needs Javascript to display, which your browser doesn't support. <a href="https://signup.e2ma.net/signup/1720637/1714785/"> Sign up here</a> instead </div><script type="text/javascript">signupFormObj.drawForm();</script>

  </div>



  
  <div class='booksplash_shell'>
<img src='https://dev.relationalearning.com/wp-content/uploads/2024/02/booksplash.png' class='booksplash' alt=''/>
  </div>

</div>

</div>






    </div>
  );
}

export default Home;
