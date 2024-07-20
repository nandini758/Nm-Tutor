
import './App.css';
import BussinessCard from './MyComponent/BussinessCard';
import Button from './MyComponent/Button';
import Card from './MyComponent/Card';
import Condition from "./MyComponent/Condition";
import Faq from './MyComponent/Faq';
import HomePage from './MyComponent/HomePage';
import TeachersCard from './MyComponent/TeachersCard';

function App() {



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
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-3.png"
    },
    {
      "heading": "PERSONAL WEBSITE",
      "subheading": "Take your personal branding to the next level with a professional website tailored specifically for you.",
      "price": "20,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-3.png"
    },
    {
      "heading": "AD VIDEO & WEBINAR SALES SCRIPT",
      "subheading": "Get 1-1 Discussion with The Rahul Awasthi himself and get a detailed Ad Video Script & Webinar Sales Pitch.",
      "price": "6,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-3.png"
    },
    {
      "heading": "AD MANAGEMENT",
      "subheading": "Get the High Quality - High Converting Leads for your webinar and flourish your webinars like never before",
      "price": "10,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-3.png"
    },
    {
      "heading": "SOCIAL MEDIA MANAGEMENT",
      "subheading": "We'll Manage your Social Media, The key to your strong branding and letting the world know about your coaching.",
      "price": "10,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-3.png"
    },
    {
      "heading": "WHATSAPP MARKETING SETUP",
      "subheading": "Unlock the power of the most powerful platform for Engaging Your Leads and increase your webinar show up rates like never before.",
      "price": "3,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-3.png"
    },
    {
      "heading": "COURSE AND OFFER CREATION",
      "subheading": "Build a strong foundation for your coaching business by designing attractive courses and offers with The Rahul Awasthi himself.",
      "price": "8,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-3.png"
    },
    {
      "heading": "E-MAIL MARKETING SETUP",
      "subheading": "Explore Your Leads and send timely follow ups.",
      "price": "3,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-3.png"
    },
    {
      "heading": "1-1 MENTORSHIP SESSIONS",
      "subheading": "Get 1-1 Mentorship Sessions with The Rahul Awasthi himself.",
      "price": "20,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-3.png"
    },
    {
      "heading": "LMS SETUP",
      "subheading": "The key for a successful coaching business is building an seamless delivery system that is easy to use. Let's setup it together.",
      "price": "5,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-3.png"
    },
    {
      "heading": "FUNNEL SETUP & AUTOMATION",
      "subheading": "Learn how to Build future ready system that minimize your efforts and maximize the number of leads over time with the mentorship of The Rahul Awasthi himself.",
      "price": "5,000",
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Background-3.png"
    },

  ]


  const TeacherData = [
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Dr.-Puran-Sharma-1.jpg",
      "name": "Deepak Jain",
      "desination": "Business Coach"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Dr.-Puran-Sharma-1.jpg",
      "name": "Dr. Puran Sharma",
      "desination": "Reiki Coach"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Dr.-Puran-Sharma-1.jpg",
      "name": "Varsha Kandhari",
      "desination": "Love Manifestation Coachi Coach"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Dr.-Puran-Sharma-1.jpg",
      "name": "Rupa Singh",
      "desination": "AI & Data Science Expert"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Dr.-Puran-Sharma-1.jpg",
      "name": "Juliet Rodrigues",
      "desination": "Human Resource Expert and Trainer"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Dr.-Puran-Sharma-1.jpg",
      "name": "Dr. Meraj Raheman",
      "desination": "Diabetic Reversal & Wellness Coachh"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Dr.-Puran-Sharma-1.jpg",
      "name": "Reetha Gopalakrishnan",
      "desination": "Corporate Communication Expert and Corporate Trainer"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Dr.-Puran-Sharma-1.jpg",
      "name": "Master Dev OM",
      "desination": "Meditation and Mindfulness Coach"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Dr.-Puran-Sharma-1.jpg",
      "name": "Suman Joseph",
      "desination": "Parenting Coach"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Dr.-Puran-Sharma-1.jpg",
      "name": "Dr. Bhawani Singh Rathore",
      "desination": "Renewable Energy Coach"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Dr.-Puran-Sharma-1.jpg",
      "name": "Deepika Bhatia",
      "desination": "Energy Healing Coach"
    },
    {
      "image": "https://cdn-ilajebb.nitrocdn.com/wGFtqfgKtokGEDWasoQhcaTkMaHhbUSN/assets/images/optimized/rev-7f9434c/therahulawasthi.com/wp-content/uploads/2024/05/Dr.-Puran-Sharma-1.jpg",
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


  ]


  const ConditionButton = [
    "Terms And Conditions", "Privacy Policy", "Refund Policy", "Disclaimer"
  ]
  return (
    <div className="App">


      <HomePage />


      {/* Card component */}

      <div className='bg-[#0C883A] py-10'>
        <h1 className='text-center text-white font-bold text-[40px]'>What will be Covered?</h1>
        <div className='max-w-[1140px] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          {CardData.map((data, index) => (
            <div key={index} className=''>
              <Card data={data} />
            </div>
          ))}
        </div>
      </div>

      {/* Card component */}


      {/* Business Card component */}

      <div className=''>
        {businessData.map((data, index) => (
          <div key={index} className=''>
            <BussinessCard data={data} index={index} />
          </div>
        ))}
      </div>

      {/* Business Card component */}
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

      {/* Teacher Component */}


      {/* FAQ's Component */}

      <div className='bg-[#131313] py-10 '>
        <h1 className='text-center text-white font-bold text-[40px]'>Frequently Asked Questions</h1>
        <div className='max-w-[1140px] flex flex-col gap-2 mx-auto  mt-10'>
          {FAQData.map((data, index) => (
            <div key={index} className=''>
              <Faq data={data} />
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-10'>
          <Button name={"Register For Free"} fixed={false} />

        </div>

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




      <div className='bg-[#0CCE54] text-[white] py-4 border fixed bottom-0 w-full rounded-tl-[20px] rounded-tr-[20px] overflow-hidden'>
        <div className='max-w-[1280px] mx-auto'>
          <div className='flex justify-between items-center'>
            <p className='text-[26px] font-bold'>Stop Procrastinating - Take Action Today</p>
            <Button name={"Register For Free"} fixed={true} />
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
