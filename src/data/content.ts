export const personalInfo = {
  name: "James Boutros",
  tagline: "Incoming Waterloo ECE student building across hardware and software.",
  bio: [
    "I am an Egyptian-Canadian from Burlington, Ontario, motivated to succeed and make my family proud. As an incoming Electrical Engineering student at the University of Waterloo, I combine software development experience with hands-on hardware knowledge.",
    "I bring discipline to academics, lifting, and every project I build from the ground up. I enjoy learning unfamiliar systems and approach each problem with focus and intent. Beyond engineering, soccer, basketball, and my Coptic Christian faith are central to who I am. I commit fully to the work I choose."
  ],
  location: "Burlington, Ontario, Canada",
  email: "jamescb155@gmail.com",
  phone: "289-300-1288",
  linkedin: "linkedin.com/in/james-b-2682403b3/",
  github: "github.com/jcb1515",
  resumePath: "/api/download-resume",
  resumeFilename: "James_Boutros_Resume_2026.pdf",
};

export const education = [
  {
    institution: "University of Waterloo",
    period: "Starting September 2026",
    details: "BASc, Electrical and Computer Engineering",
  },
  {
    institution: "Assumption Catholic Secondary School",
    period: "Graduated 2026",
    details: "OSSD — Burlington, Ontario",
  }
];

export const accomplishments = [
  "AP Calculus AB Exam - score of 5",
  "Galois Waterloo Math Contest - highest score at school",
  "Grade 11 AP Advanced Functions course award",
  "Honor Roll - all four years (2023-2026)",
];

export const experience = [
  {
    role: "Co-Founder & CTO",
    company: "Phydata",
    period: "June 2026 - Present",
    description: "Co-founded a data-infrastructure startup focused on collection, labeling, and dataset-management tools for physical AI. Created the MVP blueprint, designed and built the company website, shaped the product roadmap, and developed tools supporting the company's growth.",
    highlights: [
      "Created the MVP blueprint for a physical-AI data platform, defining the core collection, labeling, and dataset-management workflows.",
      "Designed and built the company website with React, Python, and Supabase, and authored the YC application working document covering the market, competitive landscape, and business model.",
      "Proposed a roadmap for training proprietary foundation models on collected robot data and built an automated social-media agent for company marketing.",
    ],
    image: "/images/exp-phydata.jpg"
  },
  {
    role: "Independent Machine Learning Researcher",
    company: "Collaborative Research Team",
    period: "June 2026 - Present",
    description: "Researching whether SHAP-based explanation drift can improve early detection of individual model errors under real-world distribution shifts across multiple machine-learning architectures and datasets.",
    highlights: [
      "Investigating SHAP-based explanation drift as an early signal of individual model errors under real-world distribution shifts.",
      "Evaluating Logistic Regression, XGBoost, and TabPFN using AUROC, AUPRC, and calibration metrics.",
      "Completed studies on hospital-readmission and U.S. Census housing datasets, finding that the effect is architecture-dependent rather than universal; the work is progressing toward publication.",
    ],
    image: "/images/exp-research.jpg"
  },
  {
    role: "App Developer",
    company: "Career Education Council / Apple (Co-op)",
    period: "June 2025 - July 2025",
    description: "Developed accessible mobile applications in SwiftUI. Built and presented the MicroLoop productivity app to a panel of engineers, tested the application to identify bugs and improve performance, researched technologies for the development process, and documented updates for team reference.",
    highlights: [
      "Designed and built MicroLoop, a complete SwiftUI productivity app with goal tracking, AI-assisted breakdown, streaks, notifications, and reflection flows.",
      "Independently built the dashboard, goal-entry flow, animated progress system, and streak counter.",
      "Presented the completed application to a panel of Apple engineers.",
      "Researched emerging iOS frameworks and maintained documentation for team knowledge transfer.",
    ],
    image: "/images/exp-apple.jpg"
  },
  {
    role: "Peer Tutor",
    company: "High School",
    period: "2025 - 2026",
    description: "Provided one-on-one tutoring in Advanced Functions, Grade 12 Chemistry, and Physics inside and outside school. Created personalized learning plans and interactive practice materials for each student. Broke complex scientific and mathematical concepts into clear modules, helping students raise their averages by more than 15% and build academic confidence.",
    highlights: [
      "Delivered one-on-one tutoring in Advanced Functions, Grade 12 Chemistry, and Physics.",
      "Designed personalized curriculum plans and practice materials for each student.",
      "Helped students raise their averages by more than 15% through clear explanations of complex concepts.",
    ],
    image: "/images/exp-tutoring.jpg"
  },
];

export const projects = [
  {
    type: "software",
    title: "Personal Website",
    tech: ["Next.js", "React", "Framer Motion", "Vercel"],
    description: "A portfolio designed and built from scratch to present my engineering background, software projects, and hardware work. It combines Apple-level scroll motion, a red, black, and white design system, and a single-file content architecture for straightforward updates.",
    image: "/images/recent%20web%20image.jpeg"
  },
  {
    type: "software",
    title: "Astrono Jarvis",
    tech: ["Python", "React", "Three.js", "Ollama", "Tauri", "MCP"],
    description: "A voice-first, locally operated AI command console built on OpenJarvis. Astrono Jarvis combines local Qwen inference and Whisper transcription with wake-word activation, streaming speech, an audio-reactive 3D astronomy interface, and confirmation-gated tools for safe desktop automation.",
    image: "/images/astrono-jarvis.png",
    projectUrl: "https://github.com/jcb1515/Jarvis"
  },
  {
    type: "hardware",
    title: "TinkerCAD — Fire Alarm",
    tech: ["TinkerCAD", "Arduino Uno", "C++", "MQ Gas Sensor", "TMP Temperature Sensor"],
    description: "A dual-sensor fire detection system simulated in TinkerCAD and programmed in C++. It reads analog voltage from an MQ-series gas sensor and a TMP temperature sensor, then triggers a 523 Hz buzzer and alert LED when readings cross set thresholds.",
    image: "/images/Grade%2012%20Culm%20Project%201-Fire%20alarm.png",
    schematicImage: "/images/Grade%2012%20Culm%20Project%201-Fire%20alarm.pdf",
    codePath: "/code/grade_12_culm_project_1_fire_alarm1.ino"
  },
  {
    type: "hardware",
    title: "TinkerCAD — Two-Door Lock",
    tech: ["TinkerCAD", "Arduino Uno", "C++", "Servo Motor", "4x4 Keypad", "I2C LCD", "Buzzer"],
    description: "A PIN-based electronic door lock built with a 4x4 matrix keypad, servo motor, I2C LCD, and buzzer. The system demonstrates object-oriented C++, hardware interfacing, and practical access-control logic.",
    image: "/images/Gr%2012%20Culm%20project%20two-Door%20lock%20system.png",
    schematicImage: "/images/Gr%2012%20Culm%20project%20two-Door%20lock%20system.pdf",
    codePath: "/code/gr_12_culm_project_two_door_lock_system1.ino"
  },
  {
    type: "hardware",
    title: "TinkerCAD — Traffic Light",
    tech: ["TinkerCAD", "Arduino Uno", "C++", "Interrupt-Driven I/O", "LCD"],
    description: "A pedestrian-controlled traffic light that uses a hardware interrupt and ISR to detect button presses. It demonstrates interrupt-driven programming, non-blocking control flow, and a state machine coordinating multiple outputs.",
    image: "/images/Traffic%20Light%20Culminating.png",
    schematicImage: "/images/Traffic%20Light%20Culminating.pdf",
    codePath: "/code/traffic_light_culminating1.ino"
  },
  {
    type: "hardware",
    title: "TinkerCAD — Photoresistor",
    tech: ["TinkerCAD", "Arduino Uno", "C++", "Analog Sensing", "LCD"],
    description: "An ambient-light system that reads analog voltage from a photoresistor and maps three intensity zones to LEDs. A potentiometer controls LCD contrast while the display shows the current light zone. The project demonstrates analog-to-digital conversion and efficient display-state management.",
    image: "/images/Photoresistor%20culminating.png",
    schematicImage: "/images/Photoresistor%20culminating.pdf",
    codePath: "/code/photoresistor_culminating1.ino"
  }
];

export type Project = (typeof projects)[number];

export interface OtherProject {
  title: string;
  label: string;
  tech: string[];
  description: string;
  highlights?: string[];
  projectUrl?: string;
}

export const otherProjects: OtherProject[] = [
  {
    title: "Morning Research Agent",
    label: "Featured agentic system",
    tech: ["PowerShell", "Gmail API", "Google Calendar", "Obsidian"],
    description: "A daily agentic research-and-action system that synthesizes academic deadlines, AI and hardware news, co-op signals, and personal priorities into one focused morning brief.",
    highlights: [
      "Orchestrates a validator-first pipeline across research, source auditing, brief generation, calendar updates, and Obsidian synchronization.",
      "Produces a Gmail-ready briefing and duplicate-safe Google Calendar updates from the same verified research run.",
      "Uses 84 supporting artifacts and anti-hallucination safeguards to keep every output traceable and reliable.",
    ],
  },
  {
    title: "JaboGPT",
    label: "AI application",
    tech: ["Next.js", "React", "Gemini 2.5 Flash", "Vercel"],
    description: "An AI chat application with file and image analysis, searchable conversations, chat pinning and renaming, and secure server-side API-key handling.",
    projectUrl: "https://jabogpt.vercel.app",
  },
  {
    title: "OpenProcessing Portfolio",
    label: "Creative coding",
    tech: ["p5.js", "JavaScript", "Creative Coding", "Interactive Design"],
    description: "A collection of interactive sketches and visual experiments exploring computational thinking, animation, user input, and algorithmic art in the browser.",
  },
  {
    title: "ESP32 Flight & Security Simulations",
    label: "Embedded systems / Wokwi",
    tech: ["ESP32", "Arduino C++", "Wokwi", "State Machines", "Serial Protocols"],
    description: "Two ESP32 systems developed and tested in Wokwi: a distributed spacecraft flight-control simulator and an interactive vault escape-room console.",
    highlights: [
      "Coordinated four microcontrollers through a complete mission-state machine and serial protocols for telemetry and commands.",
      "Added flight-safety logic that blocks arming when battery levels are low or the system is overheating.",
      "Built a multi-stage vault challenge using proximity, light, motion, and PIN inputs to control the unlock sequence.",
    ],
  },
];

export const skills = [
  {
    category: "Programming Languages",
    summary: "Languages I have used to build deployed software, mobile interfaces, automation, and embedded systems.",
    items: [
      { name: "Python", description: "Used for scripting, automation, rapid prototypes, coursework physics simulations, mathematical problem-solving, and data processing for peer-tutoring materials." },
      { name: "Swift", description: "My primary language during the Apple co-op. I built the complete MicroLoop iOS app with Swift and SwiftUI, including complex components, state management, and screens guided by Apple's Human Interface Guidelines." },
      { name: "C++", description: "The core language behind all four TinkerCAD systems: Fire Alarm, Two-Door Lock, Traffic Light, and Photoresistor. I wrote interrupt-driven control loops, object-oriented sensor abstractions, and real-time Arduino Uno I/O." },
      { name: "HTML", description: "The semantic foundation of this portfolio, supporting search-friendly pages, accessible navigation, and clear component hierarchies across Next.js applications." },
      { name: "CSS", description: "Used throughout this portfolio through Tailwind utilities, custom motion, glass effects, responsive breakpoints, and a consistent red, black, and white visual system." },
      { name: "JavaScript", description: "Powers my web projects through dynamic rendering and this portfolio's Framer Motion interactions." }
    ]
  },
  {
    category: "Frameworks & Libraries",
    summary: "Frameworks and libraries I have used in deployed projects to build reliable interfaces and product interactions.",
    items: [
      { name: "React", description: "The core UI library for this portfolio. I built reusable component systems, managed complex state with hooks, and added responsive interactions." },
      { name: "Next.js", description: "Powers this portfolio's App Router, file-based routes, page transitions, and optimized static generation." },
      { name: "SwiftUI", description: "Used throughout MicroLoop, from its dashboard and goal-creation flows to the timer, streak tracking, and reflection survey. Its declarative model supported fast, precise interface iteration." },
      { name: "Framer Motion", description: "Controls this portfolio's scroll reveals, page transitions, staggered entrances, hover responses, card highlights, and navigation motion." },
      { name: "p5.js", description: "Used in coursework for creative coding and interactive visualizations that apply computational thinking and algorithmic art in the browser." }
    ]
  },
  {
    category: "Developer Tools",
    summary: "Tools I use to design, build, test, version, and deploy software and embedded projects.",
    items: [
      { name: "Git", description: "Version control for every project I build, including clean histories, feature branches, and collaborative workflows during my Apple co-op and personal work." },
      { name: "GitHub", description: "Hosts my open-source and personal repositories and supports reviews, issue tracking, and documentation for this portfolio and my TinkerCAD code." },
      { name: "Vercel", description: "Deploys this portfolio through automatic GitHub builds, secure environment variables, and custom domain management." },
      { name: "Xcode", description: "My primary MicroLoop IDE during the Apple co-op. I used Interface Builder, SwiftUI previews, debugging, Instruments profiling, and XCTest unit testing." },
      { name: "TinkerCAD", description: "The simulation environment for all four hardware projects. I designed and tested Arduino circuits with sensors, actuators, LCDs, and keypads before writing their embedded C++ controls." }
    ]
  },
  {
    category: "Certifications",
    summary: "Credentials supporting my technical development, workplace readiness, and responsibility for safety.",
    items: [
      { name: "First Aid and CPR Certified", description: "Completed first aid and CPR training for emergency response and safe workplace practices." },
      { name: "ICT SHSM Certifications", description: "Earned through Assumption CSS's Information and Communications Technology Specialist High Skills Major. The certifications covered technology infrastructure, coding fundamentals, and digital systems." }
    ]
  }
];

export const extracurriculars = [
  {
    title: "Robotics Club — Grade 10-12",
    description: "Worked with a team to design, build, and program competition robots. Regional tournaments provided hands-on experience in mechanical engineering, electronics, and control systems."
  },
  {
    title: "ICT SHSM Program",
    description: "Completed specialized coursework, industry certifications, and experiential learning through the Information and Communications Technology Specialist High Skills Major, focused on technology, coding, and digital infrastructure."
  },
  {
    title: "Weightlifting — 3 Years",
    description: "Built three years of consistent weightlifting around discipline, health, perseverance, and deliberate goal-setting."
  },
  {
    title: "160+ Volunteer Hours",
    description: "Contributed more than 160 hours across community-service initiatives, reflecting a sustained commitment to service, community, and responsibility beyond academics."
  }
];

export const microloop = {
  title: "MicroLoop",
  tech: ["Swift", "iOS", "Xcode", "SwiftUI"],
  description: "MicroLoop is a productivity app built during the Career Education Council and Apple co-op program. It helps people stay consistent with the small actions that compound into meaningful progress. The app is accessible to anyone, anywhere. Users can set goals, track numbered steps, break major goals into manageable actions, and use focused tools to build lasting habits. We built the complete app in SwiftUI and presented it to a panel of engineers at the end of the program.",
  designedFeatures: [
    { title: "Schedule", image: "/images/schedule-mc.jpeg", description: "A calendar-based view for planning daily micro-learning sessions and tracking upcoming goals." },
    { title: "Focus Timer", image: "/images/timer-mc.jpeg", description: "A focused countdown with clear progress feedback for study and habit-building sessions." },
    { title: "Notifications", image: "/images/notifications-mc.jpeg", description: "Push reminders for upcoming sessions, paired with recognition when users complete a streak." },
    { title: "Session Reflection", image: "/images/reflection%20survey-mc.jpeg", description: "End-of-session prompts that help users assess progress and adjust their approach." }
  ],
  codedFeatures: [
    { title: "Dashboard", video: "/images/Home%20Page.mp4", description: "The central view for active goals, daily progress, and direct access to every app feature.", videoOffset: "55.8% center" },
    { title: "Goal Creation", video: "/images/Adding%20goals.mp4", description: "A focused flow for adding goals and organizing them with numbered steps.", videoOffset: "55.8% center" },
    { title: "Goal Breakdown", video: "/images/Goal%20Breakdown.mp4", description: "Automatically turns a major goal into smaller, actionable steps.", videoOffset: "55.8% center" },
    { title: "Live Progress", video: "/images/progress%20bar.mp4", description: "Animated feedback updates in real time as users complete micro-tasks.", videoOffset: "55.5% center" },
    { title: "Streak Tracking", video: "/images/streak.mp4", description: "Visual streak counters encourage users to maintain daily consistency.", videoOffset: "50% center" }
  ]
};
