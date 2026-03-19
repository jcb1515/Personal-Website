export const personalInfo = {
  name: "James Boutros",
  tagline: "Aspiring Electrical Engineer | Builder",
  bio: [
    "I am an Egyptian-Canadian born and raised in Burlington, Ontario, driven by a deep desire to succeed and make my family proud. As an incoming Electrical Engineering student at the University of Waterloo, I bring a rare combination of software development experience and hands-on hardware knowledge.",
    "I am disciplined in everything I commit to, whether that is academics, lifting, or building projects from scratch. I love the challenge of learning new things and I approach every problem with focus and intent. Outside of engineering, I am passionate about soccer, basketball, and my faith as a Coptic Christian. I do not do things halfway."
  ],
  location: "Burlington, Ontario, Canada",
  email: "jamescb155@gmail.com",
  phone: "289-300-1288",
  linkedin: "linkedin.com/in/james-b-2682403b3/",
  github: "github.com/jcb1515",
  resumePath: "/api/download-resume",
};

export const education = [
  {
    institution: "University of Waterloo",
    period: "Starting Fall 2026",
    details: "Honours Electrical Engineering (incoming)",
  },
  {
    institution: "Assumption Catholic Secondary School",
    period: "Graduated 2026",
    details: "OSSD — Burlington, Ontario",
  }
];

export const accomplishments = [
  "Galois Waterloo Math Contest Award Winner",
  "Grade 8 Math Award Winner",
  "Honour Roll 2023",
  "Honour Roll 2024",
  "Grade 11 Advanced Functions Award Winner"
];

export const experience = [
  {
    role: "App Developer",
    company: "CEC / Apple (Co-op)",
    period: "06/2025 – 07/2025",
    description: "Designed and developed highly-performant iOS applications using Swift and SwiftUI within Apple's Consumer Electronics Control (CEC) division. Architected complex UI components with a relentless focus on Apple's Human Interface Guidelines, ensuring fluid, physics-based animations and pixel-perfect layouts. Wrote comprehensive XCTest suites to guarantee code reliability. Proactively researched emerging mobile trends and created detailed technical documentation to streamline onboarding. Collaborated daily with cross-functional teams of senior engineers and designers to ship robust, consumer-facing features on rigorous deadlines.",
    image: "/images/exp-apple.jpg"
  },
  {
    role: "Peer Tutor",
    company: "High School",
    period: "2025 – 2026",
    description: "Provided comprehensive 1-on-1 tutoring sessions in Advanced Functions, Grade 12 Chemistry, and Physics to over 15 high school students. Designed highly personalized curriculum plans and interactive practice materials tailored to each student's unique learning style. Successfully simplified complex scientific and mathematical concepts into digestible modules, fundamentally helping students elevate their average grades by over 15% and significantly boosting their academic confidence.",
    image: "/images/exp-tutoring.jpg"
  },
  {
    role: "Pharmacy Assistant",
    company: "East Waterdown Pharmacy",
    period: "07/2023 – 09/2023",
    description: "Managed daily operations in a high-volume, fast-paced retail pharmacy environment. Conducted precise inventory audits, managed stock rotation, and expertly assisted pharmacists with high-accuracy medication preparation and packaging. Delivered exceptional, empathetic customer service while handling sensitive inquiries. Strictly adhered to all provincial health regulations, maintaining absolute patient confidentiality and data security at all times.",
    image: "/images/exp-pharmacy.jpg"
  },
  {
    role: "Camp Counsellor",
    company: "ARSM",
    period: "07/2022 – 09/2022",
    description: "Directed dynamic daily schedules and engaging developmental activities for diverse groups of up to 20 children ages 6-12. Proactively planned and executed sports, arts, and educational modules. Acted as a vital positive role model, utilizing advanced conflict resolution and empathetic communication to foster a highly inclusive, safe, and supportive recreational environment.",
    image: "/images/exp-camp.jpg"
  }
];

export const projects = [
  {
    type: "software",
    title: "Personal Website",
    tech: ["Next.js", "React", "Framer Motion", "Vercel"],
    description: "This portfolio site, designed and built from scratch to showcase my engineering background, software projects, and hardware work. Features Apple-level scroll animations, a red, black and white design system, and a single-file content architecture for easy updates.",
    image: "/images/website%20preview%20picture.png"
  },
  {
    type: "software",
    title: "JaboGPT",
    tech: ["Next.js", "React", "Gemini 2.5 Flash API", "Vercel"],
    description: "A full-featured AI chat application powered by Google Gemini 2.5 Flash. JaboGPT supports file and image uploads with AI-powered analysis, collapsible and searchable chat sidebar, chat pinning and renaming, and a fully secure server-side API key architecture. Live at: https://jabogpt.vercel.app",
    image: "/images/jabogpt%20picture.jpeg",
    codePath: "/code/JaboGPT_AetherApp.txt"
  },
  {
    type: "hardware",
    title: "TinkerCAD — Fire Alarm",
    tech: ["TinkerCAD", "Arduino Uno", "C++", "MQ Gas Sensor", "TMP Temperature Sensor"],
    description: "A dual-sensor fire detection system simulated in TinkerCAD and programmed in C++. Reads analog voltage from an MQ-series gas sensor and a TMP temperature sensor. Triggers a 523Hz buzzer tone and activates alert LED on thresholds.",
    image: "/images/Grade%2012%20Culm%20Project%201-Fire%20alarm.png",
    schematicImage: "/images/Grade%2012%20Culm%20Project%201-Fire%20alarm.pdf",
    codePath: "/code/grade_12_culm_project_1_fire_alarm1.ino"
  },
  {
    type: "hardware",
    title: "TinkerCAD — Two-Door Lock",
    tech: ["TinkerCAD", "Arduino Uno", "C++", "Servo Motor", "4x4 Keypad", "I2C LCD", "Buzzer"],
    description: "A PIN-based electronic door lock system. Uses a 4x4 matrix keypad, a servo motor, an I2C LCD, and a buzzer. Demonstrates object-oriented C++, hardware interfacing, and real-world access control logic.",
    image: "/images/Gr%2012%20Culm%20project%20two-Door%20lock%20system.png",
    schematicImage: "/images/Gr%2012%20Culm%20project%20two-Door%20lock%20system.pdf",
    codePath: "/code/gr_12_culm_project_two_door_lock_system1.ino"
  },
  {
    type: "hardware",
    title: "TinkerCAD — Traffic Light",
    tech: ["TinkerCAD", "Arduino Uno", "C++", "Interrupt-Driven I/O", "LCD"],
    description: "A pedestrian-controlled traffic light system. Uses a hardware interrupt to detect a pedestrian button press via an ISR. Demonstrates interrupt-driven programming, non-blocking control flow, and multi-output state machine design.",
    image: "/images/Traffic%20Light%20Culminating.png",
    schematicImage: "/images/Traffic%20Light%20Culminating.pdf",
    codePath: "/code/traffic_light_culminating1.ino"
  },
  {
    type: "hardware",
    title: "TinkerCAD — Photoresistor",
    tech: ["TinkerCAD", "Arduino Uno", "C++", "Analog Sensing", "LCD"],
    description: "An ambient light sensing system that reads analog voltage from a photoresistor and classifies light intensity into three zones, mapped to LEDs. Demonstrates analog-to-digital conversion and efficient display state management.",
    image: "/images/Photoresistor%20culminating.png",
    schematicImage: "/images/Photoresistor%20culminating.pdf",
    codePath: "/code/photoresistor_culminating1.ino"
  }
];

export const skills = [
  {
    category: "Programming Languages",
    summary: "From low-level hardware control to modern app development, I have built real projects across multiple languages and paradigms.",
    items: [
      { name: "Python", description: "Used extensively for scripting, automation, and rapid prototyping. Applied in physics simulations and mathematical problem-solving during coursework, and leveraged for data processing tasks during my peer tutoring curriculum development." },
      { name: "Swift", description: "Primary language during my Apple co-op, where I built the entire Microloop iOS application from scratch using Swift and SwiftUI. Developed complex UI components, state management logic, and integrated Apple's Human Interface Guidelines into every screen." },
      { name: "C++", description: "Core language for all four TinkerCAD hardware projects — Fire Alarm, Two-Door Lock, Traffic Light, and Photoresistor systems. Wrote interrupt-driven control loops, object-oriented sensor abstractions, and real-time I/O handling for Arduino Uno microcontrollers." },
      { name: "HTML", description: "Foundation of both JaboGPT and this Personal Website. Structured semantic markup for SEO-optimized pages, accessible navigation, and clean component hierarchies across multiple Next.js applications." },
      { name: "CSS", description: "Styled every pixel of this portfolio and JaboGPT using modern CSS techniques — Tailwind utility classes, custom animations, glassmorphism effects, responsive breakpoints, and a cohesive red-black-white design system." },
      { name: "JavaScript", description: "The backbone of all my web development work. Used across JaboGPT for API integrations with Gemini 2.5 Flash, real-time chat state management, and dynamic UI rendering. Also powers the Framer Motion animations throughout this portfolio." }
    ]
  },
  {
    category: "Frameworks & Libraries",
    summary: "I choose frameworks that let me ship fast without sacrificing quality. Every tool here has been battle-tested in a deployed project.",
    items: [
      { name: "React", description: "Core UI library for both JaboGPT and this Personal Website. Built reusable component architectures, managed complex state with hooks, and implemented optimistic UI updates for real-time chat interactions." },
      { name: "Next.js", description: "Full-stack framework powering JaboGPT (server-side API routes for secure Gemini key handling) and this portfolio (App Router with file-based routing, dynamic page transitions, and optimized static generation)." },
      { name: "SwiftUI", description: "Used during my Apple co-op to build Microloop's entire interface — from the home dashboard and goal creation flows to the timer, streak tracking, and reflection survey screens. Leveraged declarative syntax for rapid, pixel-perfect UI iteration." },
      { name: "Framer Motion", description: "Drives all the scroll-triggered animations, page transitions, staggered reveals, and hover effects across this portfolio. Every section entrance, card hover glow, and navigation fade is orchestrated through Framer Motion variants." },
      { name: "p5.js", description: "Used for creative coding projects and interactive visualizations during coursework. Applied computational thinking and algorithmic art concepts to generate dynamic, browser-based visual experiments." }
    ]
  },
  {
    category: "Developer Tools",
    summary: "I work with professional-grade tools and workflows — the same ones used by teams at Apple, Google, and top startups.",
    items: [
      { name: "Git", description: "Version control for every project I build. Maintained clean commit histories, feature branches, and collaborative workflows during my Apple co-op and across all personal projects." },
      { name: "GitHub", description: "Central hub for all my open-source and personal repositories. Used for code hosting, pull request reviews, issue tracking, and project documentation across JaboGPT, this portfolio, and my TinkerCAD codebases." },
      { name: "Vercel", description: "Deployment platform for both JaboGPT and this Personal Website. Configured automatic deployments from GitHub, environment variables for API key security, and custom domain management." },
      { name: "Xcode", description: "Primary IDE during my Apple co-op for Microloop development. Used Xcode's Interface Builder, SwiftUI previews, debugging tools, performance profiler (Instruments), and XCTest framework for comprehensive unit testing." },
      { name: "TinkerCAD", description: "Circuit simulation environment for all four hardware projects. Designed and tested complex Arduino circuits with sensors, actuators, LCDs, and keypads before writing the embedded C++ control software." }
    ]
  },
  {
    category: "Soft Skills",
    summary: "Technical skills get the job done, but soft skills determine how well. These are the qualities I bring to every team and project.",
    items: [
      { name: "Reliable", description: "Consistently delivered on commitments during my Apple co-op, meeting every sprint deadline and shipping features on schedule. My peer tutoring students and their parents trusted me to show up prepared every single session." },
      { name: "Disciplined", description: "Three years of rigorous weightlifting, maintaining honour roll academics, and building complex projects from scratch — all require the same core discipline. I do not cut corners or take shortcuts." },
      { name: "Strong Work Ethic", description: "Logged 160+ volunteer hours while maintaining top grades, holding a co-op position, tutoring peers, and building personal projects. I consistently put in the work others are not willing to do." },
      { name: "Strategic Decision Making", description: "From choosing the right architecture for JaboGPT's API security model to selecting optimal data structures in my C++ hardware projects, I approach every technical decision with careful analysis and long-term thinking." },
      { name: "Cooperative", description: "Collaborated daily with senior engineers and designers at Apple during my co-op. Worked in team-based robotics competitions, group coding projects, and community service initiatives throughout high school." },
      { name: "Problem Solving", description: "Debugged interrupt-driven hardware systems, architected secure API pipelines, and solved complex algorithmic challenges in math contests (Galois Award winner). I thrive on breaking down hard problems into solvable pieces." }
    ]
  },
  {
    category: "Certifications",
    summary: "Industry-recognized credentials that validate my commitment to professional development and safety standards.",
    items: [
      { name: "First Aid and CPR Certified", description: "Completed comprehensive first aid and CPR training, equipping me with life-saving emergency response skills. This certification was essential for my role as a camp counsellor at ARSM, where I was responsible for the safety of up to 20 children." },
      { name: "ICT SHSM Certifications", description: "Earned through the Information and Communications Technology Specialist High Skills Major program at Assumption CSS. Completed specialized industry certifications covering modern technology infrastructure, coding fundamentals, and digital systems — reinforcing my technical foundation." }
    ]
  }
];

export const extracurriculars = [
  {
    title: "Robotics Club — Grade 10-12",
    description: "Collaborated with team members to design, build, and program competitive robots. Gained hands-on experience with mechanical engineering, electronics, and control systems while competing in regional robotics tournaments."
  },
  {
    title: "ICT SHSM Program",
    description: "Participated in the Information and Communications Technology Specialist High Skills Major program. Completed specialized coursework, industry certifications, and experiential learning focused on modern technology, coding, and digital infrastructure."
  },
  {
    title: "Weightlifting — 3 Years",
    description: "Maintained a rigorous, disciplined approach to personal fitness and health through 3 years of consistent weightlifting. Developed strong habits of dedication, perseverance, and strategic goal-setting."
  },
  {
    title: "160+ Volunteer Hours",
    description: "Dedicated over 160 hours to various community service initiatives, demonstrating a strong commitment to giving back, community building, and personal responsibility outside of academics."
  }
];

export const microloop = {
  title: "Microloop",
  tech: ["Swift", "iOS", "Xcode", "SwiftUI", "UIKit"],
  description: "An iOS application developed during my co-op with CEC and Apple through the Develop the Future program. Built entirely in Swift, Microloop gave me hands-on experience in mobile UI design, application testing, and professional software development workflows in a real industry environment.",
  designedFeatures: [
    { title: "Schedule View", image: "/images/schedule-mc.jpeg", description: "A clean, calendar-driven interface for organizing daily micro-learning sessions and tracking upcoming goals." },
    { title: "Timer Interface", image: "/images/timer-mc.jpeg", description: "A focused countdown timer with visual progress indicators for timed study and habit-building sessions." },
    { title: "Notifications Panel", image: "/images/notifications-mc.jpeg", description: "Smart push notification system to remind users of upcoming sessions and celebrate completed streaks." },
    { title: "Reflection Survey", image: "/images/reflection%20survey-mc.jpeg", description: "End-of-session reflection prompts that help users evaluate their progress and adjust their learning strategy." }
  ],
  codedFeatures: [
    { title: "Home Page", video: "/images/Home%20Page.mov", description: "The main dashboard showing active goals, daily progress, and quick-access navigation to all app features." },
    { title: "Adding Goals", video: "/images/Adding%20goals.mov", description: "Intuitive goal creation flow with category selection, scheduling options, and milestone configuration." },
    { title: "Goal Breakdown", video: "/images/Goal%20Breakdown.mov", description: "Detailed drill-down view showing individual goal progress, completion history, and performance analytics." },
    { title: "Progress Bar", video: "/images/progress%20bar.mov", description: "Animated progress tracking with visual feedback that updates in real-time as users complete micro-tasks." },
    { title: "Streak Tracking", video: "/images/streak.mov", description: "Gamified streak system that motivates users to maintain daily consistency with visual streak counters." }
  ]
};
