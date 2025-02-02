import { useRef } from "react"
import "./portfolio.scss"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
  {
    id: 1,
    title: " Healthcare Data Analyst at Apollo Hospitals",
    projectLink:"https://github.com/urstrulyrithik",
    img: "./HealthcareDAImage.jpg",
    description: "As a Healthcare Data Analyst, I leveraged machine learning models built with TensorFlow and PyTorch to predict patient readmission risks with 87% accuracy, contributing to a 12% reduction in hospital readmissions. I streamlined the extraction and transformation of over 5 million patient records from MongoDB and Snowflake into a centralized analytics platform, cutting data processing time by 40%. Additionally, I conducted exploratory data analysis (EDA) on treatment adherence data using Python and Pandas, driving a 15% improvement in patient adherence rates. I also designed dynamic dashboards in Excel, improving clinical decision-making efficiency by 25%."
  },
    {
    id: 2,
    title: "Data Analyst at Star Health Allied Insurance",
    projectLink:"https://github.com/urstrulyrithik",
    img: "./CustomerAnalyst.jpg",
    description: "I extracted and consolidated customer data from Snowflake, AWS RDS, and Amazon S3 using SQL and Python. Using Pandas, NumPy, and Excel, I cleaned and analyzed the data to identify churn risks and trends. I developed logistic regression models with 80% accuracy to predict cancellations, leading to a 10% reduction in churn and saving $500K in premiums through targeted retention campaigns. Additionally, I worked closely with marketing teams to design dashboards in Tableau and Power BI, driving data-driven decisions that improved customer retention rates by 80%."
  },    
  {
    id: 3,
    title: "Operations Data Analyst at Flipkart",
    projectLink:"https://github.com/urstrulyrithik",
    img: "./OperationsAnalyst.jpg",
    description: "I automated ETL processes to centralize over 1M data rows in Snowflake, reducing manual data entry by 30%. Using SAS and SQL, I cleaned and transformed data to develop Linear Regression and ARIMA models with 85% forecast accuracy, lowering MAPE by 12%. My optimization of inventory management helped reduce excess stock and prevent stockouts, saving $96K annually and safeguarding $120K in revenue. Additionally, I developed comprehensive Tableau dashboards for over 50 retail locations using AWS EC2 and Amazon S3, which enhanced data-driven decisions and improved operational performance by 40%."
  },
    {
    id: 4,
    title: "Software Developer Intern",
    projectLink:"https://github.com/urstrulyrithik",
    img: "./bbSDE.jpg",
    description: "During my internships at BigBasket, I contributed to high-impact projects that significantly enhanced both user experience and backend efficiency. I optimized the main website’s shopping cart and checkout modules using React, Node.js/Express, and SQL—achieving a 30% reduction in page load times and a 15% boost in completed transactions. Additionally, I developed a next-generation inventory management system with React, Node.js, Express, and MongoDB, which improved real-time stock tracking and reduced inventory discrepancies by 30% across 30+ retail locations. I implemented robust CI/CD pipelines and automated testing frameworks that ensured system reliability and scalability, even during high-traffic periods."
  },
  {
    id: 5,
    title: "Expense Tracking System",
    projectLink:"https://github.com/urstrulyrithik/Project_Expense_Tracking_System",
    img: "./ExpenseTracking.png",
    description: "An Expense Management System featuring a Streamlit-based frontend and a FastAPI backend, designed for efficient tracking and management of personal expenses. The project includes a modular structure with dedicated components for frontend, backend, and comprehensive testing."
  },
  {
    id: 6,
    title: "Predictive Modeling",
    projectLink:"https://github.com/urstrulyrithik/Predictive-Modeling",
    img: "./PredictiveAnalytics.jpg",
    description: "This project develops a predictive model in R to analyze and forecast based on historical data, leveraging machine learning techniques and statistical analysis. Key features include data preprocessing, exploratory data analysis, model training and selection, performance evaluation, and result visualization."
  },
  {
    id: 7,
    title: "Text Analytics",
    projectLink:"https://github.com/urstrulyrithik/Text-Analytics",
    img: "./TextAnalytics.jpeg",
    description: "This project involved extensive text mining and social network analysis in R, focusing on the book 'Tarzan of the Apes' to identify significant words and sentences, perform sentiment analysis, and uncover latent topics through topic modeling. Key features included corpus preprocessing, sentiment analysis, topic modeling (LDA, CTM), and visualizations such as word clouds and sentiment trajectories."
  },
  {
    id: 8,
    title: "Covid Webiste Using Full Stack Web",
    projectLink:"https://github.com/urstrulyrithik/rithik-covidWebsite",
    img: "https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Designed and developed a Covid Website Using Full Stack Development from end to end using React JS, SQL and Express JS and CSS, whose objective is to display statistics and content regarding the pandemic and the Corona virus to users."
  },
  {
    id: 9,
    title: "Jobby App",
    projectLink:"https://rithikjobbyapp.ccbp.tech/login",
    img: "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "In this project, I developed a comprehensive job-hunting platform designed to streamline the application process for users. I built an intuitive ReactJS frontend that features interactive dashboards, allowing applicants to easily navigate job listings, track application progress, and manage their profiles. On the backend, I implemented a robust Node.js and Express.js server, leveraging MySQL and JSON to provide real-time job listings, sophisticated filtering options, and efficient profile management. This integration reduced manual steps by 40%, significantly enhancing the overall user experience. CREDENTIALS--> USERNAME: rahul ; PASSWORD: rahul@2021"
  },
  {
    id: 10,
    title: "Twitter Backend Clone",
    projectLink:"https://github.com/urstrulyrithik/TwitterClone",
    img: "https://images.pexels.com/photos/5417837/pexels-photo-5417837.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "I developed a comprehensive Twitter clone backend that mimics core functionalities of the popular social media platform. Using Node.js and Express.js, I built a suite of RESTful APIs capable of handling full CRUD operations for tweets, likes, and follows. My implementation leveraged MySQL for efficient data storage and retrieval, ensuring robust management of relationships and high-performance query processing. To secure the application, I integrated JSON Web Tokens (JWT) for authentication and authorization, safeguarding user data and ensuring that each API endpoint was protected from unauthorized access."
  },
  {
    id: 11,
    title: "My Portfolio Site",
    img: "./PortfolioHero.png",
    projectLink:"https://github.com/urstrulyrithik/Rithik-Portfolio",
    description: "I've crafted my personal portfolio website using the ReactJS framework, enhanced with Framer Motion for seamless animations, SCSS for stylish design, and Javascript for dynamic functionality. Feel free to reach out by sending an email through the contact section located at the end of the website."
  },
]

const Single = ({ item }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  const openDemoLink = () => {
    // Replace 'your-demo-link' with the actual link you want to open
    const demoLink = item.projectLink;
    window.open(demoLink, '_blank');
  };

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button onClick={openDemoLink}>View Project</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {

  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio
