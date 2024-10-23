const projectsData = [
  {
    id: 1,
    title: "contact Hub",
    githubLink: "https://github.com/natan21addis/Contact-hub",
    demoLink: "https://contact-hub-zeta.vercel.app/",
    description:
      "A Contact Hub is built using Nuxt.js, Vue.js, Tailwind CSS, MongoDB, Mongoose, and Node.js for the backend. This technology stack enables efficient and user-friendly management of contacts, making it easier to handle and organize information",
    ImageSrc: `/Assests/Amdb/amdb.png`,
    sections: [
      {
        title: "Introduction",
        content: [
          "contact handling solution is designed to make your life easier. With seamless integration, you can manage your contacts effectively and efficiently.",
        ],
      },
      {
        title: "Technologies Used",
        content: [
          "Nuxt.js",
          "Express.js",
         "Node.js",
          "MongoDB",
           "Mongoose",
       "vue js",
          "vercel",
        ],
      },
      {
        title: "Key Features",
        content: [
          "1. A contact handling website offers several key features to enhance user experience. It includes contact management, which organizes and stores all contact details for easy updates and targeted outreach",
          '2. This project features a user-friendly contacts page where users can view their contacts in a structured tabular format. The page includes an "Add Contact" button that allows users to easily add new contacts to their list. Each contact row has "Edit" and "Delete" buttons, enabling users to modify or remove specific contacts as needed',

          "3. User Authentication: The app incorporates NuxtAuth to facilitate user authentication. This allows users to create accounts, log in, and securely access personalized feautures.",

          "4. users have a dedicated profile page where they can manage their personal information, including setting their birthday and other relevant details. This allows for a personalized experience and helps users keep track of essential information about themselves",

          "5. users can also add birthdays for their contacts, ensuring they never miss important dates. Additionally, each contact entry includes a notes feature, where users can jot down reminders or details about their relationships—whether the contact is a relative, a friend, or someone they met casually.",

          
        ,
        ],
        images: [
          "/Assests/contact_hub/1.avif",
          "/Assests/contact_hub/2.png",
          "/Assests/contact_hub/2.png",
          "/Assests/contact_hub/2.png",

        ],
      },
      
      {
        title: "Lessons Learned",
        content: [
          "Throughout the course of this project, my primary goal was to learn Nuxt.js with backend integration with node express and mongodb. As I dived into the development process, I gained insights and experience using Nuxt.js' dynamic routing, server-side rendering, and API integration features. This allowed me to create a more dynamic and performant application.",

          

         

          "Overall, this project provided me with hands-on experience in Nuxt.js, deepening my understanding of its features and benefits. I also gained insights into the importance of server-side components ",
        ],
      },
      {
        title: "Future Improvement",
        content: [
          "Based on the lessons learned from this project, there are some improvements I would like to make.",

          " 1. Convert most components to server-side components.By migrating a majority of the components to server-side rendering, I can take advantage of suspense boundaries to enhance the overall performance of the application. Additionally, server-side components provide automatic caching, which further improves performance by reducing unnecessary data fetching.",

          " 2. Enhance dynamic filtering.  ",
          "3,importing and exporting contacts from different sources",
          "3,live chat with contacts"
        ],
      },
    ],
  },



{
  "id": 2,
  "title": "book ambulance",
  "githubLink": "https://github.com/switch247/Blog-App-MERN-frontend/tree/back",
  "demoLink": "https://bloghub-lcpx.onrender.com/",
  "description": " The Hearts ambulance booking site is designed for HEARTS Company, allowing users to book or call for an ambulance during emergencies. Founded in 2023, HEARTS aims to serve the Ethiopian community by addressing critical challenges faced during emergencies, such as pregnancy complications and heart attacks e.tc. medcical problems. This platform will provide a vital solution to ensure timely medical assistance when it’s needed most",
  "ImageSrc": "/Assests/blogz/Screenshot 2023-08-18 135956.png",
  "sections": [
    {
      "title": "Introduction",
      "content": [
        "The application enables ambulance providers to communicate with each other quickly and effectively, ensuring rapid responses in critical situations. With a focus on 'coordinated care and rapid response,' it offers a seamless and intuitive experience for both users and administrators. Built using a modern tech stack that includes Express.js, React.js (Next.js), Node.js, and MongoDB, this platform enhances communication and coordination among ambulance services, facilitating timely and efficient emergency responses."
      ]
    },
    {
      "title": "Implementation Details",
      "content": [
        "The app follows a modular architecture, with the backend and frontend components neatly organized. The backend, powered by Node.js and Express, handles data management and user authentication. The frontend, built with React, provides a responsive and engaging user interface for creating and consuming blog content."
      ]
    },
    {
      "title": "Key Features",
      "content": [
        "1. User Authentication: useing otp message from afro message api ",
        "2. Post Management: landing page built using reactive components ",
        "3. Search Functionality:map integration from google api ",
        "4. Responsive Design: used for both mobile and desktop.   you can checkout the live demo for more and if u one to check the full site with api u can checkout `heartscare.net` on google"
      ],
      "images": [
        "/Assests/blogz/Screenshot 2023-08-18 135956.png",
        "/Assests/blogz/Screenshot 2023-08-18 140241.png",
        "/Assests/blogz/Screenshot 2023-08-18 140259.png",
        "/Assests/blogz/Screenshot 2023-08-18 184420.png",
      ]
    },
    {
      "title": "Lessons Learned",
      "content": [
        "Building projects in more user friendly way  and expirence of building projects for big companies and that have many users to use to "
      ]
    },
    
  ]
},


];

export default projectsData;
