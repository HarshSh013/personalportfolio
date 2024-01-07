/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "HarshSh013",
  title: "Hi all, I'm Harsh",
  subTitle: emoji(
    "Passionate about data science by day, and a dedicated gym enthusiast practicing calisthenics by night! 💪 Balancing the world of algorithms and datasets with the discipline of workouts. Always optimizing both code and reps for peak performance. Let's crush those data challenges and fitness goals together! 🏋️‍♂️📊 "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1IgWbXREAW5UYc2_7sTaiZ0bwbl3Ex45r/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/harshsh013",
  linkedin: "https://www.linkedin.com/in/harshsharma013/",
  gmail: "harshsh013@gmail.com",
  gitlab: "https://gitlab.com/harshsh013",
  facebook: "https://www.facebook.com/harshsh013",
  medium: "https://medium.com/@harshsh013",
  stackoverflow: "https://stackoverflow.com/users/18058842/harsh-sharma",
  instagram:"https://instagram.com/harshxx._",
  twitter:"https://twitter.com/HarshSh013",
  kaggle:"https://www.kaggle.com/harshsh013",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Embracing the duality of coding and calisthenics, I excel in crafting code and perfecting my form in the gym – finding strength in both worlds. 💻💪",
  skills: [
    emoji("💻 Tech Stack Mastery: SQL | Python | Java | Django | TensorFlow | Unreal Engine 5 | Git | Azure | AWS | GCP | Prompt Engineering"),
    emoji("🎨 Creative Toolbox: Blender | Adobe Suite (Premiere Pro, Photoshop) | Game Development | API Integration | Multimedia Production"),
    emoji("📊 Data Alchemist: Pandas | Kibana | Power Bi | Data Analytics | Cloud Platforms | Full-stack Development | Version Control (Git)"),
    emoji("💪Holistic Fitness: Gym | Calisthenics | Street Lifting | Swimming | Basketball "),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  { skillName: "Unreal Engine 5", fontAwesomeClassname: "fas fa-gamepad" }, // Using a gamepad icon as an alternative
  { skillName: "Unity", fontAwesomeClassname: "fas fa-atom" }, // Using an atom icon as an alternative
  { skillName: "Blender", fontAwesomeClassname: "fas fa-cube" }, // Using a cube icon as an alternative
  { skillName: "Adobe Premiere Pro", fontAwesomeClassname: "fas fa-film" }, // Using a film icon as an alternative
  { skillName: "Adobe Photoshop", fontAwesomeClassname: "fas fa-paint-brush" }, // Using a paintbrush icon as an alternative
  { skillName: "Flask", fontAwesomeClassname: "fas fa-flask" },
  { skillName: "Kibana", fontAwesomeClassname: "fas fa-chart-line" }, // Use an alternative icon or omit
  { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
  { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
  { skillName: "C#", fontAwesomeClassname: "fas fa-code" },
  { skillName: "Django", fontAwesomeClassname: "fab fa-python" }, // Using Python's icon for Django
  { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain" },
  { skillName: "Artificial Intelligence", fontAwesomeClassname: "fas fa-brain" },
  { skillName: "Machine Learning", fontAwesomeClassname: "fas fa-cogs" },
  { skillName: "Computer Vision", fontAwesomeClassname: "fas fa-eye" },
  { skillName: "Keras", fontAwesomeClassname: "fas fa-code" },
  { skillName: "API Integration", fontAwesomeClassname: "fas fa-link" },
  { skillName: "Pandas", fontAwesomeClassname: "fas fa-table" },
  { skillName: "Python Tkinter", fontAwesomeClassname: "fab fa-python" },
  { skillName: "PyQt", fontAwesomeClassname: "fab fa-python" },
  { skillName: "Neo4J", fontAwesomeClassname: "fas fa-database" }, 
  { skillName: "Power Bi", fontAwesomeClassname: "fas fa-chart-bar" },
  { skillName: "Google Data Studio", fontAwesomeClassname: "fas fa-chart-pie" },
  { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
  { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
  { skillName: "Google Cloud Platform", fontAwesomeClassname: "fab fa-google" },
  { skillName: "Grafana", fontAwesomeClassname: "fas fa-chart-line" },
  { skillName: "Retool", fontAwesomeClassname: "fas fa-tools" },
  { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" }
],


  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "St. Anselm School",
      logo: require("./assets/images/SchoolLogo.png"),
      subHeader: "Science(PCM)",
      duration: "April 2007 - April 2020",
      desc: "Completed schooling with Science Background.",
      descBullets: [
        "Completed schooling with A-grade",
        "Subject- PCM(Computer Science)"
      ]
    },
    {
      schoolName: "J.K.Lakshmipat University",
      logo: require("./assets/images/jklulogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2020 - Present",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, Game Development ...",
      descBullets: ["Engaged in Various co curricular activities"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python Programming", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Tensor-flow & Keras",
      progressPercentage: "50%"
    },
    {
      Stack: "MERN",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Web Developer",
      company: "KS Ventures",
      companylogo: require("./assets/images/KS.PNG"),
      date: "June 2022 – Aug 2022",
      desc: "Collaborated within an Agile team to develop and integrate webpages using HTML, CSS,JavaScript, and Django, ensuring seamless connections between frontend and backend."
    },
    {
      role: "AI & ML Intern",
      company: "Coincent(IBM)",
      companylogo: require("./assets/images/ibm.PNG"),
      date: "Sep 2022 – Nov 2022",
      desc: "Developed a software for recommending user clothes by conducting extensive research on largedatasets and Designed a self-driving car utilizing a vast collection of dash camera images.",
      descBullets: [
        "Project I - Clothing Classification on Fashion MNIST",
        "Project II - Self Driving Car"
      ]
    },
    {
      role: "Data Scientist Associate",
      company: "Black Coffer",
      companylogo: require("./assets/images/BC.PNG"),
      date: "Dec 2023 – Present",
      desc: "Currently working as Data Scientist Associate."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/KS.PNG"),
      projectName: "KS Ventures",
      projectDesc: "Developed Front-End and done some Back-End for their website.",
      footerLink: [
        {
          name: "Visit Work",
          url: "https://github.com/HarshSh013/KS-Ventures"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/BC.PNG"),
      projectName: "BlackCoffer",
      projectDesc: "Currently working as Data Scientist Associate",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://blackcoffer.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Cloud Career Readlines",
      subtitle:
        "I had successfully completed all the courses and labs in the Google Cloud Engineer Track.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Cloud Career Readlines",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1BsXjCYGd1B86uKys2GVNrbh6Yxp19yYN/view?usp=sharing"
        },
        /*{
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }*/
      ]
    },
    {
      title: "IBM Python For Data Science",
      subtitle:
        "My first certification course that helped me to dive into python domain.",
      image: require("./assets/images/ibm.PNG"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1IcPcnrF3N5XwVEGxyOK4PPIfWJvpGJB4/view?usp=drive_link"
        }
      ]
    },

    {
      title: "IBM ML with Python",
      subtitle: "Developed a Self-driving ML project.",
      image: require("./assets/images/ibm.PNG"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1vj4_IOeCyj4NyiEN0IGgseDBxenXbUWN/view?usp=drive_link"},
        /*{
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
        */
      ]
    },
    {
      title: "Other Certifications",
      subtitle: "You can view all of my certifications over here.",
      image: require("./assets/images/more.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certifications", url: "https://drive.google.com/drive/folders/1MTBktC8j1xjsS53XJo7coBcdbZOw2DQR?usp=drive_link"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7073396759",
  email_address: "harshsh013@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "HarshSh013", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
