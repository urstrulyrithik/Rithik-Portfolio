import { motion } from "framer-motion"
import "./hero.scss"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}
const sliderVariants = {
    initial: {
        x: 5,
    },
    animate: {
        x: "-220%",
        transition: {
            duration: 20,
            repeat: Infinity,
            repeatType:"mirror",

        }
    },

}

const Hero = () => {
    const scrollToPortfolio = () => {
        window.location.hash = '#Portfolio';
      };
    const scrollToContact = () => {
        window.location.hash = '#Contact';
      };
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>RITHIK REDDY</motion.h2>
                    <motion.h1 variants={textVariants}>Data Analyst / Software Developer</motion.h1>
                    <motion.div className="buttons">
                        <motion.button variants={textVariants} onClick={scrollToPortfolio}>See the Latest Works</motion.button>
                        <motion.button variants={textVariants} onClick={scrollToContact}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="scroller" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                New Grad SWE
            </motion.div>
            <div className="imageContainer">
                <img src="./Bg Final Rithik.png" alt="Rithik" />
            </div>

        </div>
    )
}

export default Hero
