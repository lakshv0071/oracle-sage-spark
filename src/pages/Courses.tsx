import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Database, Cloud, Code, Bot, Clock, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const courseCategories = [
  {
    icon: Database,
    title: "Database Courses",
    description: "Master database technologies from fundamentals to advanced administration",
    color: "from-blue-500/20 to-cyan-500/20",
    courses: [
      {
        name: "PostgreSQL Administration",
        duration: "40 hours",
        level: "Intermediate",
        topics: ["Installation & Configuration", "Backup & Recovery", "Performance Tuning", "High Availability", "Security Best Practices"],
      },
      {
        name: "PostgreSQL for Developers",
        duration: "32 hours",
        level: "Beginner",
        topics: ["SQL Fundamentals", "Advanced Queries", "Stored Procedures", "Indexing Strategies", "JSON & JSONB"],
      },
      {
        name: "Oracle Database Fundamentals",
        duration: "48 hours",
        level: "Beginner",
        topics: ["Oracle Architecture", "SQL & PL/SQL", "Database Administration", "Backup & Recovery", "Performance Monitoring"],
      },
      {
        name: "Oracle Advanced Administration",
        duration: "40 hours",
        level: "Advanced",
        topics: ["RAC Configuration", "Data Guard", "ASM Management", "Advanced Tuning", "Upgrade Strategies"],
      },
      {
        name: "MySQL Administration",
        duration: "36 hours",
        level: "Intermediate",
        topics: ["Server Configuration", "Replication Setup", "Performance Optimization", "Security Hardening", "Backup Strategies"],
      },
      {
        name: "Database Performance Tuning",
        duration: "24 hours",
        level: "Advanced",
        topics: ["Query Optimization", "Index Design", "Execution Plans", "Memory Management", "I/O Optimization"],
      },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Courses",
    description: "Build cloud-native skills and master DevOps practices",
    color: "from-purple-500/20 to-pink-500/20",
    courses: [
      {
        name: "AWS Solutions Architect",
        duration: "60 hours",
        level: "Intermediate",
        topics: ["EC2 & VPC", "S3 & Storage", "RDS & Databases", "Lambda & Serverless", "Security & IAM"],
      },
      {
        name: "Azure Administration",
        duration: "48 hours",
        level: "Intermediate",
        topics: ["Azure Fundamentals", "Virtual Machines", "Azure AD", "Networking", "Storage Solutions"],
      },
      {
        name: "Google Cloud Platform",
        duration: "48 hours",
        level: "Intermediate",
        topics: ["Compute Engine", "Cloud Storage", "BigQuery", "Kubernetes Engine", "Cloud Functions"],
      },
      {
        name: "Kubernetes & Docker",
        duration: "40 hours",
        level: "Intermediate",
        topics: ["Docker Fundamentals", "Container Orchestration", "Kubernetes Architecture", "Helm Charts", "Service Mesh"],
      },
      {
        name: "CI/CD with Jenkins & GitLab",
        duration: "32 hours",
        level: "Intermediate",
        topics: ["Pipeline Design", "Jenkins Configuration", "GitLab CI/CD", "Automated Testing", "Deployment Strategies"],
      },
      {
        name: "Infrastructure as Code",
        duration: "36 hours",
        level: "Advanced",
        topics: ["Terraform Basics", "Ansible Automation", "CloudFormation", "Pulumi", "Best Practices"],
      },
    ],
  },
  {
    icon: Code,
    title: "Programming Courses",
    description: "Learn programming languages and web development technologies",
    color: "from-green-500/20 to-emerald-500/20",
    courses: [
      {
        name: "Python for Beginners",
        duration: "40 hours",
        level: "Beginner",
        topics: ["Python Basics", "Data Structures", "Functions & OOP", "File Handling", "Error Handling"],
      },
      {
        name: "Advanced Python Programming",
        duration: "36 hours",
        level: "Advanced",
        topics: ["Decorators & Generators", "Async Programming", "Testing & Debugging", "Package Development", "Design Patterns"],
      },
      {
        name: "Java Programming",
        duration: "48 hours",
        level: "Intermediate",
        topics: ["Core Java", "OOP Concepts", "Collections Framework", "Multithreading", "JDBC & Database"],
      },
      {
        name: "Full-Stack JavaScript",
        duration: "60 hours",
        level: "Intermediate",
        topics: ["JavaScript Fundamentals", "React.js", "Node.js", "Express & APIs", "MongoDB Integration"],
      },
      {
        name: "React & Node.js",
        duration: "48 hours",
        level: "Intermediate",
        topics: ["React Hooks", "State Management", "RESTful APIs", "Authentication", "Deployment"],
      },
      {
        name: "Web Development Bootcamp",
        duration: "80 hours",
        level: "Beginner",
        topics: ["HTML & CSS", "JavaScript Basics", "Responsive Design", "Git & GitHub", "Project Development"],
      },
    ],
  },
  {
    icon: Bot,
    title: "AI & Automation Courses",
    description: "Explore AI, Machine Learning, and automation technologies",
    color: "from-orange-500/20 to-amber-500/20",
    courses: [
      {
        name: "Machine Learning Fundamentals",
        duration: "48 hours",
        level: "Intermediate",
        topics: ["ML Algorithms", "Data Preprocessing", "Model Training", "Evaluation Metrics", "Scikit-learn"],
      },
      {
        name: "Deep Learning with TensorFlow",
        duration: "40 hours",
        level: "Advanced",
        topics: ["Neural Networks", "CNN & RNN", "TensorFlow Basics", "Model Optimization", "Deployment"],
      },
      {
        name: "AI for Business",
        duration: "24 hours",
        level: "Beginner",
        topics: ["AI Fundamentals", "Use Cases", "Implementation Strategy", "Ethics & Governance", "ROI Measurement"],
      },
      {
        name: "ChatGPT & LLM Integration",
        duration: "32 hours",
        level: "Intermediate",
        topics: ["Prompt Engineering", "API Integration", "Fine-tuning", "RAG Systems", "Production Deployment"],
      },
      {
        name: "RPA & Automation",
        duration: "36 hours",
        level: "Intermediate",
        topics: ["RPA Fundamentals", "UiPath Basics", "Process Automation", "Bot Development", "Enterprise Deployment"],
      },
      {
        name: "Data Science with Python",
        duration: "56 hours",
        level: "Intermediate",
        topics: ["Pandas & NumPy", "Data Visualization", "Statistical Analysis", "Feature Engineering", "Model Building"],
      },
    ],
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Professional Training
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Expert-Led Technology Courses
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              Comprehensive training programs designed by industry experts to help you master the latest technologies and advance your career.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Flexible Schedules</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span>Certification Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Categories */}
      {courseCategories.map((category, categoryIndex) => (
        <section 
          key={category.title} 
          className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-muted/30' : 'bg-background'}`}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                <category.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{category.title}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.courses.map((course, courseIndex) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: courseIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      course.level === 'Beginner' ? 'bg-green-500/10 text-green-600' :
                      course.level === 'Intermediate' ? 'bg-blue-500/10 text-blue-600' :
                      'bg-purple-500/10 text-purple-600'
                    }`}>
                      {course.level}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {course.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{course.name}</h3>
                  <ul className="space-y-2 mb-6">
                    {course.topics.map((topic) => (
                      <li key={topic} className="text-sm text-muted-foreground flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Learning?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contact us to discuss your training needs and find the perfect course for you or your team.
            </p>
            <Button size="lg">Get in Touch</Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
