"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Data Science student with a deep fascination for uncovering insights hidden within data.
              My journey in data science began with a curiosity about how numbers can tell compelling stories and drive
              meaningful decisions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently pursuing my degree in Data Science, I'm constantly exploring the intersection of statistics,
              programming, and domain expertise. I love working with Python, R, and various machine learning frameworks
              to solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not analyzing datasets or building models, you can find me contributing to open-source projects,
              participating in data science competitions, or sharing my knowledge through blog posts and tutorials.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</h3>
              <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400">3+</h3>
              <p className="text-gray-600 dark:text-gray-300">Years Learning</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-bold text-green-600 dark:text-green-400">10+</h3>
              <p className="text-gray-600 dark:text-gray-300">Technologies</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-bold text-red-600 dark:text-red-400">5+</h3>
              <p className="text-gray-600 dark:text-gray-300">Certifications</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
