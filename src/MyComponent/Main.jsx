
import { Link } from 'react-router-dom';
import '../App.css';
import About from './About'
import BussinessCard from './BussinessCard';
import Button from './Button';
import Card from './Card';
import CardSlider from './CardSlider';
import Condition from "./Condition";
import Faq from './Faq';
import HomePage from './HomePage';
import Register from './Register';
import TeachersCard from './TeachersCard';
import Thank from './Thank';

function Main() {

  const CardData = [
    {
      "heading": "complete mentorship",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/1.png"
    },

    {
      "heading": "Course Curriculum Design",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/2.png"
    },
    {
      "heading": "Profile Building & Optimization",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/3-1.png"
    },
    {
      "heading": "Repositioning And Re-Branding",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/4-1.png 500w, https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/4-1-300x300.png 300w, https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/4-1-150x150.png 150w"
    },
    {
      "heading": "Niche Clarity & Selection",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/5.png 500w, https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/5-300x300.png 300w, https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/5-150x150.png 150w"
    },
    {
      "heading": "Coaching Mindset",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/6.png"
    },
    {
      "heading": "Coaching System Design",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/7.png"
    },
    {
      "heading": "Tips, Tricks, Training & Tools",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/8.png"
    },
    {
      "heading": "Advertising Strategies",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/9.png"
    },

  ]

  const businessData = [
    {
      "heading": "DOMAIN + HOSTING + SSL",
      "subheading": "The Essentials for Taking Your Coaching business Online",
      "price": "5,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-3.png"
    },
    {
      "heading": "LANDING PAGE DESIGNING",
      "subheading": "Get a Eye-catching High-Converting Landing page that is oriented towards the goal of your coaching.",
      "price": "10,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-5.png"
    },
    {
      "heading": "PERSONAL WEBSITE",
      "subheading": "Take your personal branding to the next level with a professional website tailored specifically for you.",
      "price": "20,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-4.png"
    },
    {
      "heading": "AD VIDEO & WEBINAR SALES SCRIPT",
      "subheading": "Get 1-1 Discussion with The Rahul Awasthi himself and get a detailed Ad Video Script & Webinar Sales Pitch.",
      "price": "6,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-11.png"
    },
    {
      "heading": "AD MANAGEMENT",
      "subheading": "Get the High Quality - High Converting Leads for your webinar and flourish your webinars like never before",
      "price": "10,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-8.png"
    },
    {
      "heading": "SOCIAL MEDIA MANAGEMENT",
      "subheading": "We'll Manage your Social Media, The key to your strong branding and letting the world know about your coaching.",
      "price": "10,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-6.png"
    },
    {
      "heading": "WHATSAPP MARKETING SETUP",
      "subheading": "Unlock the power of the most powerful platform for Engaging Your Leads and increase your webinar show up rates like never before.",
      "price": "3,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-10.png"
    },
    {
      "heading": "COURSE AND OFFER CREATION",
      "subheading": "Build a strong foundation for your coaching business by designing attractive courses and offers with The Rahul Awasthi himself.",
      "price": "8,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/shadow-3.png"
    },
    {
      "heading": "E-MAIL MARKETING SETUP",
      "subheading": "Explore Your Leads and send timely follow ups.",
      "price": "3,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-9.png"
    },
    {
      "heading": "1-1 MENTORSHIP SESSIONS",
      "subheading": "Get 1-1 Mentorship Sessions with The Rahul Awasthi himself.",
      "price": "20,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/PRODUCT-BOX-13.png"
    },
    {
      "heading": "LMS SETUP",
      "subheading": "The key for a successful coaching business is building an seamless delivery system that is easy to use. Let's setup it together.",
      "price": "5,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/PRODUCT-BOX-15.png"
    },
    {
      "heading": "FUNNEL SETUP & AUTOMATION",
      "subheading": "Learn how to Build future ready system that minimize your efforts and maximize the number of leads over time with the mentorship of The Rahul Awasthi himself.",
      "price": "5,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/PRODUCT-BOX-14.png"
    },

  ]


  const TeacherData = [
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/DJ-Jain-1.jpg",
      "name": "Deepak Jain",
      "desination": "Business Coach"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Dr.-Puran-Sharma-1.jpg",
      "name": "Dr. Puran Sharma",
      "desination": "Reiki Coach"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Varsha-Kandhari-1.jpg",
      "name": "Varsha Kandhari",
      "desination": "Love Manifestation Coachi Coach"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Rupa-1.jpg",
      "name": "Rupa Singh",
      "desination": "AI & Data Science Expert"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/06/Juliet-2048x2048.jpg",
      "name": "Juliet Rodrigues",
      "desination": "Human Resource Expert and Trainer"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/06/Meraj-Raheman.jpg",
      "name": "Dr. Meraj Raheman",
      "desination": "Diabetic Reversal & Wellness Coachh"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/06/Reetha.jpg",
      "name": "Reetha Gopalakrishnan",
      "desination": "Corporate Communication Expert and Corporate Trainer"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/06/Dev-OM-1.jpg",
      "name": "Master Dev OM",
      "desination": "Meditation and Mindfulness Coach"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/06/SJ-DP-1024x1024-1.png",
      "name": "Suman Joseph",
      "desination": "Parenting Coach"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/06/photo-dr-bsr-1.jpg",
      "name": "Dr. Bhawani Singh Rathore",
      "desination": "Renewable Energy Coach"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/06/deepika.jpg",
      "name": "Deepika Bhatia",
      "desination": "Energy Healing Coach"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/06/Acharya-Pandit.jpg",
      "name": "Acharya Adarshh Panndey",
      "desination": "Numerlogy Coach"
    },

  ]



  const FAQData = [
    {
      quest: "How can I register myself for your services?",
      ans: "You don’t need to do anything. Just join the webinar, and everything will be explained in this."
    },
    {
      quest: "How I’ll get the bonus items?",
      ans: "All bounuses will be given via Google drive link after you enroll for the program."
    },
    {
      quest: "Why does this program is free?",
      ans: "I have seen many people struggling to start due to lack of knowledge and right tools. I am trying to help you here."
    },
    {
      quest: "Will I get the recording of the Webinar?",
      ans: "This is a live webinar where Rahul Awasthi will be training. So no recording will be provided."
    }, {
      quest: "Who is this webinar ideal for?",
      ans: "This webinar is for you, if you are a skill expert, coach, consultatnt, trainer or  if you wish to become one and make money selling your courses and digital products online."
    }, {
      quest: "Is this webinar is live of prerecorded ?",
      ans: "This is live interactive webinar"
    }, {
      quest: "What do I need to keep handy during the webinar?",
      ans: "Just an open mind and a book to make a lot of notes."
    }, {
      quest: "Do I need any technical skills to use your services?",
      ans: "No technical skills are required. Our team handles all the technical aspects of setting up and automating your coaching business, allowing you to focus on your expertise and coaching."
    },
    {
      quest: "How much does the service package cost?",
      ans: "The cost of our service package varies based on the specific needs and goals of your business. We offer a range of packages to suit different budgets. Please schedule a free consultation to discuss your needs and get a personalized quote."
    },{
      quest: "What results can I expect from your service?",
      ans: "While results can vary based on individual effort and market conditions, our clients typically see significant improvements in their business operations, client acquisition, and revenue. We use proven strategies to help you achieve sustainable growth."
    },{
      quest: "Is there a money-back guarantee?",
      ans: "We are committed to your satisfaction and success. Specific terms and conditions regarding refunds and guarantees will be discussed during our consultation. We strive to ensure you are fully confident in our services before moving forward."
    },{
      quest: "Contact Us",
      ans: "If you have any other questions or need further information, please feel free to contact us at email@therahulawasthi.com or +91 8299-854877. We’re here to help you succeed!"
    },


  ]

  const whoData = [
    "Individuals with a passion for coaching but struggling to translate it into a successful business venture.",
    "Newcomers to the coaching industry feeling lost amidst the complexities of starting their own practice.",
    "Those encountering roadblocks in defining their target audience and crafting a compelling coaching offer.",
    "Individuals grappling with self-doubt and uncertainty about their ability to succeed as coaches.",
    "Professionals seeking guidance on navigating the digital realm to establish their online presence as coaches.",
    "Aspiring coaches in need of practical strategies and support to overcome obstacles and turn their dreams into reality."
  ]

  const ConditionButton = [
    "Terms And Conditions", "Privacy Policy", "Refund Policy", "Disclaimer"
  ]

  const SliderData = [
    "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/10.png",
    "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/10.png",
    "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/10.png",
    "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/10.png",
    "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/10.png",
  ]
  return (
    <div className="App pb-[150px] max-md:px-5 bg-[#000000]">


      <HomePage />


      {/* Card component */}

      <div className='bg-[#0C883A] py-10'>
        <h1 className='text-center text-white font-bold text-[40px]'>What will be Covered?</h1>
        <div className='max-w-[1140px] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          {CardData.map((data, index) => (
            <div key={index} className='max-md:px-3'>
              <Card data={data} />
            </div>
          ))}
        </div>
      </div>

      {/* Card component */}

      <div className='bg-[#000000]'>
        <div className=' max-w-[800px] mx-auto py-[100px]'>
          <h1 className='text-center text-white font-bold text-[40px]'>Mentor's Message</h1>
          <About />

        </div>
      </div>

      <div className='bg-[#212121]'>
        <div className=' max-w-[1000px] mx-auto py-10'>
          <h1 className='text-center text-white font-bold text-[40px] mb-5'>As Seen On</h1>
          <CardSlider images={SliderData} />

        </div>
      </div>




      {/* Who's this for */}


      <div className='bg-[#000000] pt-10 pb-24'>
        <h1 className='text-center text-white font-bold text-[40px]'>Who’s This For ?</h1>
        <p className='text-[#fff] text-center font-semibold text-[16px]'>Of course, This is specifically tailored to fulfill the needs of aspiring coaches facing challenges in launching their coaching business.</p>
        <div className='max-w-[1140px] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-10'>
          {whoData.map((data, index) => (
            <div key={index} className='bg-[#2a2a2a] px-2 py-2 flex gap-2 items-center border-2 border-[#0CCE54] rounded-md leading-7 text-[20px] font-semibold text-white'>
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.7594 11.6375C32.3219 12.2625 32.3219 13.2 31.6969 13.7625L13.1969 32.2625C12.6344 32.8875 11.6969 32.8875 11.1344 32.2625L0.634375 21.7625C0.00937462 21.2 0.00937462 20.2625 0.634375 19.6375L3.07187 17.2C3.69687 16.575 4.63437 16.575 5.19687 17.2L12.1969 24.1375L27.1344 9.19995C27.6969 8.57495 28.6969 8.57495 29.2594 9.19995L31.7594 11.6375ZM11.4469 18.2625L4.44687 11.2625C4.07187 10.8875 4.07187 10.2625 4.44687 9.82495L7.32187 7.01245C7.69687 6.63745 8.32187 6.63745 8.69687 7.01245L12.1969 10.5125L21.6344 1.01245C22.0094 0.637451 22.6344 0.637451 23.0719 1.01245L25.8844 3.82495C26.2594 4.26245 26.2594 4.88745 25.8844 5.26245L12.8844 18.2625C12.5094 18.7 11.8219 18.7 11.4469 18.2625Z" fill="#06FF62" />
              </svg>

              {data}
            </div>
          ))}
        </div>

        <div className='w-full md:max-w-[500px] mx-auto mt-7'>
          {/* <Button name={"Register For Free"} /> */}

        </div>
        <div className='text-center'>
          <h1 className='text-center text-white font-bold text-[34px] mt-5'>📢 If You Can Relate To Even One Of These,</h1>
          <h1 className='text-center text-white font-bold text-[34px]'>Then This Package is going to be The Game Changer For You!!!</h1>
        </div>
      </div>



      <div className='bg-[#212121]'>
        <div className=' max-w-[1000px] mx-auto py-10'>
          <h1 className='text-center text-white font-bold text-[40px] mb-5'>As Seen On</h1>
          <CardSlider images={SliderData} />

        </div>
      </div>
      {/* Who's this for */}


      <div className='bg-[#000000] mt-20'>
        <div className='max-w-[1140px] bg-[#FF0000] py-1 mx-auto rounded-tl-[10px] rounded-tr-[10px] overflow-hidden'>
          <h1 className='text-center text-white font-bold text-[40px] '>Everything That your Coaching Needs.</h1>
        </div>
      </div>
      {/* Business Card component */}

      <div className=''>
        {businessData.map((data, index) => (
          <div key={index} className=''>
            <BussinessCard data={data} index={index} />
          </div>
        ))}
      </div>

      {/* Business Card component */}


      <div className='bg-[#2A2A2A] py-10'>
        <div className='max-w-[600px] mx-auto'>
          <img srcSet={"https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/06/Untitled-design-2024-06-04T015921.840-1024x520.png"} alt='book' className='' />
        </div>
        <h1 className='text-center text-white font-bold text-[40px]'>Everything That Your Coaching Needs.</h1>
        {/* <div className='w-full lg:max-w-[500px] mx-auto mt-2'>
          <div className=' flex justify-center items-center'>
            <div className="button flex flex-col justify-center w-full py-4 text-2xl font-bold leading-6 text-center text-white uppercase bg-green-500 rounded-xl shadow-sm max-md:pr-6 max-md:pl-6">
              TOTAL VALUE:
              <br />
              <span className="line-through">₹1,05,000/-</span>
            </div>
          </div>
        </div> */}

      </div>




      {/* Teacher Component */}



      <div className='bg-[#131313] py-10'>
        <h1 className='text-center text-white font-bold text-[40px]'>Coaches I have Worked With</h1>
        <div className='max-w-[1140px] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10'>
          {TeacherData.map((data, index) => (
            <div key={index} className=''>
              <TeachersCard data={data} />
            </div>
          ))}
        </div>
      </div>


      <div className='bg-[#131313]'>
        <div className='max-w-[940px] mx-auto text-white text-center'>
          <p className='text-[#fff] text-center font-semibold text-[30px]'>And Many More.......</p>
          <p className='text-[#fff] text-center font-semibold text-[30px]'>So, Don't Procrastinate any longer, and take actions NOW!!</p>
          {/* <div className='max-w-[500px] mx-auto mt-2'>
            <Button name={"Register For Free"} />

          </div> */}
        </div>

      </div>

      {/* Teacher Component */}


      {/* FAQ's Component */}

      <div className='bg-[#131313] py-10'>
        <h1 className='text-center text-white font-bold text-[40px]'>Frequently Asked Questions</h1>
        <div className='max-w-[1140px] flex flex-col gap-2 mx-auto  mt-10'>
          {FAQData.map((data, index) => (
            <div key={index} className=''>
              <Faq data={data} />
            </div>
          ))}
        </div>
        <Link to='/Register' className='Link' >
        <div className='flex justify-center mt-10'>
          <Button name={"Register For Free"} fixed={false} />

        </div>
        </Link>
      </div>
      {/* FAQ's Component */}

      <div className='bg-[#131313]'>
        <div className=' max-w-[940px] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-20'>
          {ConditionButton.map((data, index) => (
            <div key={index} className=''>
              <Condition name={data} />

            </div>
          ))}
        </div>
      </div>


      <div className='bg-[#131313]'>
        <div className='max-w-[940px] mx-auto text-white text-center'>
          <p>This website is not part of Facebook or Instagram, Facebook is a trademark of Meta Inc.  No information contained in this product
            should be construed as a claim to obtain results. Any reference to the past or potential performance of a strategy discussed in
            the content is not, and should not be construed as, a recommendation or a guarantee of any specific result.</p>

          <p className='text-[#fff] text-center font-semibold text-[20px] mt-5'>2024 The Rahul Awasthi. All rights Reserved | Designed by TISWAM</p>
        </div>
      </div>

      {/* <Thank /> */}
      {/* <Register /> */}



      <div className='bg-[#0CCE54] hidden md:block z-40 button text-[white] py-4 fixed bottom-0 w-full rounded-tl-[20px] rounded-tr-[20px] overflow-hidden'>
        <div className='max-w-[1280px] mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-[26px] font-bold'>Stop Procrastinating - Take Action Today</p>
            <Link to='/Register' className='Link' >
            <Button name={"Register For Free"} fixed={true} />
            </Link>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Main;
