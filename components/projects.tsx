"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Customer Churn Prediction",
      description:
        "Built a machine learning model to predict customer churn using ensemble methods. Achieved 94% accuracy with feature engineering and hyperparameter tuning.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      github: "https://github.com/AbdulRehmanNaseer/churn-prediction",
      demo: "https://churn-demo.vercel.app",
    },
    {
      title: "Sales Forecasting Dashboard",
      description:
        "Interactive dashboard for sales forecasting using time series analysis. Implemented ARIMA and Prophet models with real-time data visualization.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "Streamlit", "Prophet", "Plotly"],
      github: "https://github.com/AbdulRehmanNaseer/sales-forecasting",
      demo: "https://sales-forecast.vercel.app",
    },
    {
      title: "Sentiment Analysis API",
      description:
        "RESTful API for sentiment analysis of social media posts using BERT and transformer models. Deployed on AWS with Docker containerization.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "FastAPI", "BERT", "Docker", "AWS"],
      github: "https://github.com/AbdulRehmanNaseer/sentiment-api",
      demo: "https://sentiment-api.herokuapp.com",
    },
    {
      title: "COVID-19 Data Analysis",
      description:
        "Comprehensive analysis of COVID-19 data with interactive visualizations. Explored trends, correlations, and predictive modeling.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["R", "Shiny", "ggplot2", "dplyr"],
      github: "https://github.com/AbdulRehmanNaseer/covid-analysis",
      demo: "https://covid-dashboard.shinyapps.io",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
