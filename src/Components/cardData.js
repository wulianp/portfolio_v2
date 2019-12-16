import pweblogo from '../photos/projects_img/pwebsitelogo.png';
import pweb1 from '../photos/projects_img/pwebsite1.png';
import pweb2 from '../photos/projects_img/pwebsite2.png';
import bl from '../photos/projects_img/bl1.png';
import bl2 from '../photos/projects_img/bl2.png';
import bl3 from '../photos/projects_img/bl3.png';
import bl4 from '../photos/projects_img/bl-login.png';
import mentorslogo from '../photos/projects_img/mentorslogo.png';
import mentors1 from '../photos/projects_img/mentors1.png';
import mentors2 from '../photos/projects_img/mentors2.png';
import modeldash from '../photos/projects_img/modeldashboard.png';
import smoke from '../photos/projects_img/smoke.png';


const posts = [

  {
   cardNumber: 1,
   title: "Personal Website v1",
   excerpt: "This is my first post with more content inside",
   image: pweblogo,
   images :
   [
     {
       src: mentors1,
       title: 'image title',
       description: 'image description'
     },
           {
       src: mentors1,
       title: 'image title',
       description: 'image description'
     },
     
   ],
   technologies: ['Jekyll', 'HTML', 'CSS', 'JavaScript']
  },
 
  {
    cardNumber: 2,
   title: "BlueLight",
   excerpt: "This is my second post with more content inside",
   image: bl,
   technologies: ['Jekyll', 'HTML', 'CSS', 'JavaScript'],
   images :
   [
     {
       src: mentors1,
       title: 'image title',
       description: 'image description'
     },
           {
       src: mentors1,
       title: 'image title',
       description: 'image description'
     },
   ]
  },
 
  {
    cardNumber: 3,
   title: "Smoking Cessation Dashboard",
   excerpt: "This is my third post with more content inside",
   image: smoke,
   technologies: ['Jekyll', 'HTML', 'CSS', 'JavaScript'],
   images :
   [
     {
       src: mentors1,
       title: 'image title',
       description: 'image description'
     },
           {
       src: mentors1,
       title: 'image title',
       description: 'image description'
     },
   ]
  },
 
  {
    cardNumber: 4,
   title: "Mentors Website",
   excerpt: "This is my fourth post with more content inside",
   image: mentorslogo,
   imgs: {mentors1, mentors2},
   technologies: ['Jekyll', 'HTML', 'CSS', 'JavaScript'],
   images :
    [
      {
        src: mentors1,
        title: 'image title',
        description: 'image description'
      },
            {
        src: mentors1,
        title: 'image title',
        description: 'image description'
      },
    ]
},
 
  {
    cardNumber: 5,
   title: "Model Feature Extraction Dashboard",
   excerpt: "This is my fifth post with more content inside",
   technologies: ['Jekyll', 'HTML', 'CSS', 'JavaScript'],
   image: modeldash
  },
 
  {
    cardNumber: 6,
   title: "Cloud Photos Storage",
   excerpt: "This is my sixth post with more content inside",
   technologies: ['Jekyll', 'HTML', 'CSS', 'JavaScript'],
   image: "https://bit.ly/2WNi2Ml"
  }
 ]
 export default posts;