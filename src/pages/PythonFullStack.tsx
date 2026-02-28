import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bot, Brain, Briefcase, MessageSquare, Rocket, Users,
  BookOpen, Mic, Award, Clock, CheckCircle2, ArrowRight,
  Mail, Phone, Star, GraduationCap
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { sendInquiryEmail } from "@/lib/emailjs";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const PythonFullStack = () => {
  const { toast } = useToast();
  const registrationRef = useRef<HTMLDivElement>(null);
  const curriculumRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sameAsPhone, setSameAsPhone] = useState(true);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    college: "",
    yearOfStudy: "",
    heardFrom: "",
    consent: false,
  });

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) {
      toast({ title: "Please agree to be contacted", variant: "destructive" });
      return;
    }
    if (form.phone.replace(/\D/g, "").length !== 10) {
      toast({ title: "Phone must be 10 digits", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      // Store in Supabase
      const { error } = await supabase.from("registrations").insert({
        full_name: form.fullName,
        email: form.email,
        phone: form.phone,
        whatsapp_number: sameAsPhone ? form.phone : form.whatsapp,
        college_name: form.college,
        year_of_study: form.yearOfStudy,
        heard_from: form.heardFrom,
        consent: form.consent,
      });
      if (error) throw error;

      // Send admin notification email via EmailJS
      await sendInquiryEmail({
        type: "Python Full Stack Program Registration",
        name: form.fullName,
        email: form.email,
        phone: form.phone,
        company: form.college,
        message: `WhatsApp: ${sameAsPhone ? form.phone : form.whatsapp}\nYear of Study: ${form.yearOfStudy}\nHeard From: ${form.heardFrom}`,
      });

      // TODO: Send confirmation email to user (integrate Resend or another provider)
      // TODO: Integrate WhatsApp Business API / Twilio for WhatsApp confirmation

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Python Full Stack Developer Program",
    description: "Become a Python Full Stack Developer in 4 months. Learn Python, Django, React, PostgreSQL, Docker and more.",
    provider: {
      "@type": "Organization",
      name: "Paramanu Consulting",
      url: "https://www.paramanuconsulting.com",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      duration: "P4M",
    },
  };

  const uspCards = [
    { icon: Bot, title: "AI-First Learning", desc: "We don't just teach you to write code. We teach you to understand, debug, and leverage AI tools like a real developer." },
    { icon: Brain, title: "Think Like an Engineer", desc: "Problem-solving mindset, not syntax memorization." },
    { icon: Briefcase, title: "Career-Ready in 4 Months", desc: "Mock interviews, resume prep, and job assistance included." },
    { icon: MessageSquare, title: "Communication Skills", desc: "Dedicated 2–4 hour module to ace tech interviews and workplace communication." },
    { icon: Rocket, title: "Build & Deploy Real Projects", desc: "Capstone project deployed live with GitHub + Docker." },
    { icon: Users, title: "Expert Mentors", desc: "Industry professionals guiding every step." },
  ];

  const includedCards = [
    { icon: BookOpen, title: "Full Curriculum", desc: "15–18 weeks, 120–150 hours of live instruction" },
    { icon: Mic, title: "Mock Interviews", desc: "Technical + HR rounds with real feedback" },
    { icon: Briefcase, title: "Job Assistance", desc: "Resume, referrals, job portal access" },
    { icon: MessageSquare, title: "Communication Skills", desc: "2–4 hours dedicated workshop" },
  ];

  const curriculum = [
    {
      title: "Track 1: Python Programming Foundations",
      modules: [
        "Module 1: Python Fundamentals — variables, loops, functions, strings",
        "Module 2: Data Structures & Problem Solving — lists, dicts, sorting, time complexity",
        "Module 3: Advanced Python & OOP — file handling, decorators, generators, OOP design",
      ],
    },
    {
      title: "Track 2: Frontend Development",
      modules: [
        "Module 4: HTML5 & CSS3 — semantic HTML, Flexbox, Grid, responsive design",
        "Module 5: JavaScript (ES6+) — DOM, Fetch API, async/await, LocalStorage",
        "Module 6: React — components, hooks, routing, API integration",
      ],
    },
    {
      title: "Track 3: Database",
      modules: [
        "Module 7: PostgreSQL — schema design, joins, subqueries, normalization, indexes",
      ],
    },
    {
      title: "Track 4: Backend — Django & REST APIs",
      modules: [
        "Module 8: Django Core — MVT, models, migrations, admin panel",
        "Module 9: Django ORM — QuerySets, relationships, select_related",
        "Module 10: Django REST Framework — Serializers, ViewSets, JWT auth, Swagger docs",
        "Module 11: Full Stack Integration — React + Django, protected routes, end-to-end flows",
      ],
    },
    {
      title: "Track 5: DevOps & Deployment",
      modules: [
        "Module 12: Git, GitHub, Postman, PR workflow",
        "Module 13: Docker, Docker Compose, deployment on Render/Railway/AWS EC2",
      ],
    },
    {
      title: "Capstone Projects (Choose 1)",
      modules: [
        "🎓 Student LMS — batches, attendance, tests, role-based access",
        "💼 Placement Portal — company posts, student profiles, resume upload",
        "🛒 E-Commerce Mini Platform — cart, orders, admin, payment demo",
        "💰 Personal Finance Tracker — income/expense, charts, monthly reports",
      ],
    },
  ];

  const timeline = [
    { weeks: "Weeks 1–4", title: "Python Foundations" },
    { weeks: "Weeks 5–7", title: "Frontend (HTML/CSS/JS/React)" },
    { weeks: "Weeks 8–9", title: "PostgreSQL & Database Design" },
    { weeks: "Weeks 10–13", title: "Django + DRF + APIs" },
    { weeks: "Weeks 14–15", title: "React + Full Stack Integration" },
    { weeks: "Weeks 16–18", title: "Docker + Deployment + Capstone" },
  ];

  // TODO: Replace with real testimonials
  const testimonials = [
    { name: "Priya S.", college: "JNTU Hyderabad", text: "This program transformed my career. I went from zero coding knowledge to getting placed in 3 months after completion!" },
    { name: "Rahul K.", college: "VIT Vellore", text: "The AI-first approach and real project experience made me stand out in interviews. Highly recommend!" },
    { name: "Ananya M.", college: "SRM Chennai", text: "The mentors were incredible. They didn't just teach — they made sure I understood every concept deeply." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Python Full Stack Developer Program | Paramanu Consulting"
        description="Become a Python Full Stack Developer in 4 months. Live mentorship, job assistance, mock interviews. Built for B.Tech students ready to get hired."
        url="https://www.paramanuconsulting.com/python-full-stack"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* SECTION 1: Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero hero-gradient-overlay" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="container relative z-10">
            <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Become a <span className="text-gradient-primary">Python Full Stack Developer</span> in 4 Months
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Not just coding — learn to <strong className="text-foreground">READ, UNDERSTAND & DEBUG</strong> code in the AI era. Built for B.Tech students ready to get hired.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Button variant="hero" size="xl" onClick={() => scrollTo(registrationRef)}>
                  Register Now — Seats Are Limited <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="heroOutline" size="xl" onClick={() => scrollTo(curriculumRef)}>
                  View Curriculum
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-muted-foreground">
                {["120–150 Hours", "Live Mentorship", "Job Assistance", "Mock Interviews"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: Why This Program */}
        <section className="py-16 md:py-24">
          <div className="container">
            <motion.div className="text-center mb-12" {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why This Program?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">What makes our program different from every other bootcamp out there.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {uspCards.map((card, i) => (
                <motion.div key={card.title} {...fadeInUp} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <Card className="h-full bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <card.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                      <p className="text-sm text-muted-foreground">{card.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: What's Included */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12" {...fadeInUp}>What's Included</motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {includedCards.map((card, i) => (
                <motion.div key={card.title} {...fadeInUp} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <Card className="h-full bg-card border-primary/20 text-center">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <card.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                      <p className="text-sm text-muted-foreground">{card.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Curriculum */}
        <section ref={curriculumRef} className="py-16 md:py-24 scroll-mt-24">
          <div className="container max-w-4xl">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-4" {...fadeInUp}>What You'll Learn</motion.h2>
            <motion.p className="text-center text-muted-foreground mb-12" {...fadeInUp}>Complete Curriculum — 15 to 18 Weeks</motion.p>
            <motion.div {...fadeInUp}>
              <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
                {curriculum.map((track, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border border-border/50 rounded-xl px-4 bg-card/50">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                      {track.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {track.modules.map((mod, j) => (
                          <li key={j} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>{mod}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5: Timeline */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container max-w-4xl">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12" {...fadeInUp}>Program Timeline</motion.h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />
              {timeline.map((phase, i) => (
                <motion.div
                  key={i}
                  className={`relative flex items-center mb-8 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  {...fadeInUp}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 shadow-glow" />
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                    <Card className="bg-card border-border/50">
                      <CardContent className="p-4">
                        <span className="text-xs font-semibold text-primary">{phase.weeks}</span>
                        <h3 className="text-foreground font-semibold mt-1">{phase.title}</h3>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: Social Proof / Urgency */}
        <section className="py-16 md:py-24">
          <div className="container">
            <motion.div className="text-center mb-12 p-8 rounded-2xl bg-accent/10 border border-accent/30" {...fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">🔥 Limited Seats Available — Next Batch Starting Soon</h2>
              {/* TODO: Configure actual countdown date */}
              <div className="flex items-center justify-center gap-6 mt-6">
                {[{ val: "15", label: "Days" }, { val: "08", label: "Hours" }, { val: "42", label: "Mins" }].map((t) => (
                  <div key={t.label} className="text-center">
                    <div className="text-3xl font-bold text-accent">{t.val}</div>
                    <div className="text-xs text-muted-foreground">{t.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <Card className="h-full bg-gradient-card border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.college}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: Pricing */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container max-w-lg">
            <motion.div {...fadeInUp}>
              <Card className="bg-card border-primary/30 overflow-hidden">
                <div className="bg-primary/10 p-6 text-center border-b border-border/50">
                  <h2 className="text-2xl font-bold text-foreground">Python Full Stack Developer</h2>
                  <p className="text-muted-foreground text-sm">4-Month Bootcamp</p>
                </div>
                <CardContent className="p-6">
                  {/* TODO: Update with actual pricing */}
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-foreground">Contact for Pricing</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {["Full Curriculum (120–150 hrs)", "Mock Interviews (Tech + HR)", "Job Assistance & Referrals", "Communication Skills Workshop", "Live Mentorship", "Capstone Project"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  {/* TODO: Replace with actual Razorpay/Stripe payment link */}
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href="#payment-link">Pay & Enroll Now</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* SECTION 8: Registration Form */}
        <section ref={registrationRef} id="register" className="py-16 md:py-24 scroll-mt-24">
          <div className="container max-w-xl">
            <motion.div {...fadeInUp}>
              {submitted ? (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-foreground mb-3">You're In! 🎉</h2>
                  <p className="text-muted-foreground mb-2">We'll contact you within 24 hours.</p>
                  <p className="text-sm text-muted-foreground mb-6">
                    ✅ Registration successful! You'll receive a WhatsApp message on your number shortly from our team.
                  </p>
                  <Button variant="outline" asChild>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent("I just registered for Python Full Stack Developer Program at Paramanu Consulting! Check it out: https://www.paramanuconsulting.com/python-full-stack")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Share with a Friend 📤
                    </a>
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Register Your Seat</h2>
                  <p className="text-center text-muted-foreground mb-8">🚀 Batch starting soon — limited seats available</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input id="fullName" required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="Enter your full name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number * (+91)</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground bg-secondary px-3 py-2 rounded-md">+91</span>
                        <Input id="phone" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })} placeholder="9876543210" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="sameAsPhone" checked={sameAsPhone} onCheckedChange={(c) => setSameAsPhone(!!c)} />
                      <Label htmlFor="sameAsPhone" className="text-sm cursor-pointer">WhatsApp number same as phone</Label>
                    </div>
                    {!sameAsPhone && (
                      <div>
                        <Label htmlFor="whatsapp">WhatsApp Number * (+91)</Label>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground bg-secondary px-3 py-2 rounded-md">+91</span>
                          <Input id="whatsapp" required value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value.replace(/\D/g, "").slice(0, 10) })} placeholder="9876543210" />
                        </div>
                      </div>
                    )}
                    <div>
                      <Label htmlFor="college">College Name *</Label>
                      <Input id="college" required value={form.college} onChange={(e) => setForm({ ...form, college: e.target.value })} placeholder="Your college name" />
                    </div>
                    <div>
                      <Label>Year of Study *</Label>
                      <Select required onValueChange={(v) => setForm({ ...form, yearOfStudy: v })}>
                        <SelectTrigger><SelectValue placeholder="Select year" /></SelectTrigger>
                        <SelectContent>
                          {["1st Year", "2nd Year", "3rd Year", "4th Year", "Passed Out"].map((y) => (
                            <SelectItem key={y} value={y}>{y}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>How did you hear about us?</Label>
                      <Select onValueChange={(v) => setForm({ ...form, heardFrom: v })}>
                        <SelectTrigger><SelectValue placeholder="Select option" /></SelectTrigger>
                        <SelectContent>
                          {["Instagram", "LinkedIn", "Friend", "College", "Other"].map((o) => (
                            <SelectItem key={o} value={o}>{o}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-start gap-2">
                      <Checkbox
                        id="consent"
                        checked={form.consent}
                        onCheckedChange={(c) => setForm({ ...form, consent: !!c })}
                      />
                      <Label htmlFor="consent" className="text-sm cursor-pointer leading-snug">
                        I agree to be contacted by Paramanu Consulting regarding this program
                      </Label>
                    </div>
                    <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                      {loading ? "Submitting..." : "🚀 Register My Seat Now"}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* SECTION 9: Footer CTA */}
        <section className="py-12 bg-primary/5 border-t border-border/50">
          <div className="container text-center">
            <p className="text-muted-foreground mb-4">Still have questions? We're happy to help.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:info@paramanuconsulting.com">
                  <Mail className="w-4 h-4 mr-2" /> info@paramanuconsulting.com
                </a>
              </Button>
              {/* TODO: Replace with actual WhatsApp number */}
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/917989359581" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PythonFullStack;
