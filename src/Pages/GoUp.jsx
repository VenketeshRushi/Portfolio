import { useEffect, useState } from "react"
import { ArrowUpIcon } from "@chakra-ui/icons";
import styles from "../Styles/goUp.module.css";
import { motion } from "framer-motion"

const GoUp = () => {
  const [showGoUp, setShowGoUp] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const { scrollY } = this.window

      if (scrollY >= 630) {
        setShowGoUp(true)
      } else {
        setShowGoUp(false)
      }
    })
  }, [])

  useEffect(() => {
    console.log(showGoUp)
  }, [showGoUp])


  /**
   * Scroll to the top level of the page
   */
  const handleScroll = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    })
  }

  return (
    <>
      {
        showGoUp && (
          <div
            className={styles.goUpContainer}
            onClick={handleScroll}
          >
            <motion.div
              animate={{ y: [0, -8, 5, 0, 0] }}
              transition={{
                duration: .8,
                type: "keyframes",
                repeat: Infinity
              }}
            >
              <ArrowUpIcon w={7} h={6} />
            </motion.div>
          </div>
        )
      }
    </>
  )
}

export default GoUp;