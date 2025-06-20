"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "Bachelor of Science in Data Science",
      institution: "University of Technology",
      location: "Gujranwala, Pakistan",
      period: "2022 - 2026 (Expected)",
      gpa: "3.8/4.0",
      description:
        "Comprehensive program covering statistics, machine learning, data mining, and big data technologies. Active member of the Data Science Club and AI Research Group.",
      courses: [
        "Machine Learning & AI",
        "Statistical Analysis",
        "Data Mining & Warehousing",
        "Big Data Technologies",
        "Database Systems",
        "Data Visualization",
      ],
    },
  ]

  const certifications = [
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "2023",
      credentialId: "ABC123XYZ",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "DEF456UVW",
    },
    {
      name: "Python for Data Science",
      issuer: "IBM",
      date: "2022",
      credentialId: "GHI789RST",
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "2023",
      credentialId: "JKL012MNO",
    },
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <GraduationCap className="mr-3 text-blue-600" size={28} />
              Education
            </h3>

            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">{edu.institution}</p>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {edu.period}
                  </div>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-4">
                  <MapPin size={16} className="mr-1" />
                  {edu.location} • GPA: {edu.gpa}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <GraduationCap className="mr-3 text-purple-600" size={28} />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">{cert.name}</h4>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm mb-1">{cert.issuer}</p>
                  <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 text-sm">
                    <span>Issued: {cert.date}</span>
                    <span className="text-xs">ID: {cert.credentialId}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
