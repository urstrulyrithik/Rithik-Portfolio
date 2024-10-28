import { useRef } from "react"
import "./portfolio.scss"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
    id: 1,
    title: "Customer Insights Analyst Intern at Star Health",
    projectLink:"https://github.com/urstrulyrithik",
    img: "./CustomerAnalyst.jpg",
    description: "Extracted, transformed, and loaded policyholder and transactional data into AWS MySQL databases using Informatica PowerCenter, leveraging SAS, Pandas, and NumPy to analyze trends and identify high-risk churn segments. Built logistic regression models with 80% accuracy, reducing churn by 10% and preventing $500K in lost premiums through targeted retention campaigns supported by Tableau and Power BI dashboards."
  },    
  {
    id: 2,
    title: "Junior Operations Data Analyst Intern at Flipkart",
    projectLink:"https://github.com/urstrulyrithik",
    img: "./OperationsAnalyst.jpg",
    description: "Automated ETL processes for over 1 million data rows, developed predictive models achieving 85% forecast accuracy, and reduced excess inventory by 15%, saving $96K annually while preventing stockouts and retaining $120K in revenue. Built interactive Tableau dashboards hosted on AWS to improve store visibility, reduce decision-making time by 40%, and contribute to 7% annual revenue growth."
  },
  {
    id: 3,
    title: "Covid Webiste Using Full Stack Web",
    projectLink:"https://github.com/urstrulyrithik/rithik-covidWebsite",
    img: "https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Designed and developed a Covid Website Using Full Stack Development from end to end using React JS, SQL and Express JS and CSS, whose objective is to display statistics and content regarding the pandemic and the Corona virus to users."
  },
  {
    id: 4,
    title: "Jobby App",
    projectLink:"https://rithikjobbyapp.ccbp.tech/login",
    img: "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Designed and developed Jobby App, a front-end ReactJS website for PC users, whose objective is to enable users to discover the jobs they seek. CREDENTIALS--> USERNAME: rahul ; PASSWORD: rahul@2021"
  },
  {
    id: 5,
    title: "Twitter Backend Clone",
    projectLink:"https://github.com/urstrulyrithik/TwitterClone",
    img: "https://images.pexels.com/photos/5417837/pexels-photo-5417837.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Designed Backend Twitter Clone REST APIs to recreate and carry out Twitter's backend database CRUD operations using JSON format, MySQL and Node JS (Express JS)"
  },
  {
    id: 6,
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
