import { motion } from "framer-motion";
import { Database, Cloud, Code, Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const courses = [
  {
    icon: Database,
    title: "Database Courses",
    description: "Master PostgreSQL, Oracle, and MySQL administration and development",
    topics: ["PostgreSQL Administration", "Oracle Database Fundamentals", "MySQL for Developers", "Database Performance Tuning"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Courses",
    description: "Learn AWS, Azure, GCP, Kubernetes, Docker, and CI/CD pipelines",
    topics: ["AWS Solutions Architect", "Kubernetes & Docker", "CI/CD with Jenkins & GitLab", "Azure Administration"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Code,
    title: "Programming Courses",
    description: "Build skills in Python, Java, JavaScript, and web development",
    topics: ["Python for Beginners", "Advanced Java Programming", "Full-Stack JavaScript", "React & Node.js"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Bot,
    title: "AI & Automation Courses",
    description: "Explore Machine Learning, AI Operations, and automation tools",
    topics: ["Machine Learning Fundamentals", "AI for Business", "RPA & Automation", "ChatGPT & LLM Integration"],
    color: "from-orange-500/20 to-amber-500/20",
  },
];

const CoursesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Professional Training
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Upskill with Our Expert-Led Courses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive training programs designed to help you master the latest technologies and advance your career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-5`}>
                <course.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{course.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
              <ul className="space-y-2 mb-5">
                {course.topics.slice(0, 3).map((topic) => (
                  <li key={topic} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {topic}
                  </li>
                ))}
              </ul>
              <Link 
                to="/courses" 
                className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                View Courses <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/courses">
            <Button size="lg" className="gap-2">
              Browse All Courses <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
