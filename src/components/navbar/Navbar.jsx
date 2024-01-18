import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"
const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{ opacity: 0.1, scale: 0.5 }} animate={{ opacity: 1, scale: 1.3 }} transition={{ duration: 1 }} style={{marginLeft:110}}>Rithik Reddy</motion.span>
        <div className="social">
          <a href="https://github.com/urstrulyrithik"><img src="/facebook.png" alt="" /></a>
          <a href="https://github.com/urstrulyrithik"><img src="/instagram.png" alt="" /></a>
          <a href="https://github.com/urstrulyrithik"><img src="/youtube.png" alt="" /></a>
          <a href="https://github.com/urstrulyrithik"><img src="/dribbble.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar