export const profile = {
  name: "Chitranjan Vishwakarma",
  first: "Chitranjan",
  role: "Data Analyst",
  location: "Varanasi, Uttar Pradesh",
  phone: "+91 9453171634",
  email: "chitranjanvishwakarma84@gmail.com",
  linkedin: "https://linkedin.com/in/chitranjan-vishwakarma-429a373b5",
  github: "https://github.com/Chitranjan-7-8-6",
  site: "https://chitranjan-portfolio-786.netlify.app",
  bio: "Analytical and detail-oriented BCA graduate with hands-on experience as a Data Analytics Intern at Hummingbyte Pvt Ltd. I build interactive Power BI dashboards and clean raw data (ETL) to drive business insights, with DAX, data modeling and SQL, across 3 delivered analytics projects. I turn complex raw data into clear, actionable visual stories that support strategic decisions.",
  strengths: [
    "Interactive Power BI dashboards",
    "Data cleaning (ETL) at scale",
    "Hypothesis-first statistical testing",
    "Clear visual storytelling",
  ],
  stats: [
    { k: "Analytics projects", v: "10+" },
    { k: "Internships", v: 3 },
    { k: "Certifications", v: "5+" },
  ],
};
export type Milestone = {
  id: string;
  type: "Work Experience" | "Education";
  title: string;
  org: string;
  place?: string;
  date: string;
  points: string[];
  active?: boolean;
};
export const milestones: Milestone[] = [
  {
    id: "vois",
    type: "Work Experience",
    title: "Data Analyst Intern",
    org: "VOIS and Edunet Foundation",
    date: "Aug 2026 – Present",
    active: true,
    points: [
      "Environment: Google Colab, Jupyter Notebook",
      "Data analysis with LLMs like Gemini, Julius AI, IBM BOB",
    ],
  },
  
  {
  id: "yuva",                        // har item ka alag id, space nahi
  type: "Work Experience",           // exactly aise hi likhna
  title: "Data Analyst Intern",      // job ka title
  org: "Yuva Intern",                // company ya organization ka naam
  place: "Remote",                   // optional, jagah (chaho to hata do)
  date: "Aug 2026 – Oct 2026",       // kab se kab tak
  points: [
    "Environment: Jupyter Lab, Google Colab, Power BI",
    "Worked on data cleaning and analysis using LLMs like Julius AI",
  ],
},

  {
    id: "hb",
    type: "Work Experience",
    title: "Data Analyst Intern",
    org: "Hummingbyte Pvt Ltd",
    place: "Nashik, Maharashtra",
    date: "Jun 2025 – Oct 2025",
    points: [
      "Environment: Python (Pandas, Numpy), MS Power BI, SQL, SSMS, Advanced Excel (Pivot Table)",
      "Built interactive Power BI dashboards and performed data cleaning (ETL)",
    ],
  },
  {
    id: "bca",
    type: "Education",
    title: "BCA in Computer Application",
    org: "Mahatma Gandhi Kashi Vidyapeeth",
    place: "Varanasi",
    date: "2023 – 2026",
    points: ["Bachelor of Computer Applications"],
  },
  {
    id: "12",
    type: "Education",
    title: "Intermediate (Class 12th)",
    org: "Sri Krishna Inter College Boharanpur",
    place: "Babhaniyaw, Varanasi",
    date: "2022",
    points: ["Higher secondary education"],
  },
  {
    id: "10",
    type: "Education",
    title: "High School (Class 10th)",
    org: "Sri Krishna Inter College Boharanpur",
    place: "Babhaniyaw, Varanasi",
    date: "2020",
    points: ["Secondary education"],
  },
];
export const projects = [
  {
    title: "Seasonal Agriculture Performance Analysis",
    img: "./projects/agriculture.png",
    stack: [
      "Jupyter Lab",
      "Google Colab",
      "Python",
      "Pandas",
      "Matplotlib",
      "Numpy",
      "Scipy",
      "Seaborn",
    ],
    desc: "Analyzed an agricultural dataset to investigate seasonal differences in performance, identifying patterns, trends, relationships and variations driven by environmental conditions, farming practices, resource availability and market conditions.",
    live: "https://chitranjan-7-8-6.github.io/Seasonal-Agriculture-Performance-Analysis",
  },
  {
    title: "Car Market Trend Analysis",
    img:"./projects/car-market.png",
    stack: [
      "MS Excel",
      "Pivot Table",
      "VLOOKUP",
      "XLOOKUP",
      "HLOOKUP",
      "Google Colab",
      "Julius AI",
    ],
    desc: 'Analyzed 301 real marketplace listings (2003–2018) to answer 25 questions on pricing, depreciation and "good deal" detection, separating cars from bikes in raw, unlabeled CarDekho-style data.',
    live: "https://chitranjan-7-8-6.github.io/Car_Market_Trend_Analysis",
  },
  {
    title: "Aadhar Enrolment EDA",
    img: "./projects/aadhar.jpg",
    stack: [
      "Anaconda",
      "Python",
      "MS Power BI",
      "Pivot Table",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    desc: "Formulated 4 testable hypotheses upfront and ran the right statistical test for each, reporting two the data did not support. Found rejection spikes to 6.92% for ages 0–5 vs 2.73% for adults 31–45; a digital-engagement theory was rejected (r=0.27, p=0.11).",
    live: "https://chitranjan-7-8-6.github.io/Aadhar-Enrolment-EDA",
  },
];
export const skillGroups: Record<string, string[]> = {
  Languages: ["C", "C++", "Python"],
  "Python Stack": ["Numpy", "Pandas", "Matplotlib", "Scipy", "Seaborn"],
  "BI & Analytics": [
    "Power BI",
    "DAX",
    "Data Modeling",
    "Data Visualization",
    "Tableau",
  ],
  Spreadsheets: ["Advanced Excel", "Pivot Tables", "VLOOKUP", "XLOOKUP"],
  "Data Engineering": ["Data Cleaning (ETL)", "SQL", "SSMS"],
  "Working Style": [
    "Analytical Thinking",
    "Quick Learner",
    "Problem Solving",
    "Team Collaboration",
  ],
};
export const certs = [
  {
    id: "c1",
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte via Forage",
    color: "#2a05fcc6",
    code: "FORAGE-DELOITTE",
    date: "Job simulation",
    skills: ["Tableau", "CSV analysis", "Pattern finding"],
    blurb:
      "Learned Tableau to build meaningful insights and analyzed the company product's CSV dataset to understand performance.",
  },

  {
  id: "c2",                          // har card ka alag id
  title: "Anthropic Claude 101 Certification",      // card ka bada heading
  issuer: "Anthropic Education",               // upar chhota text, issuer ka naam
  color: "#f2c811",                  // upar ki laser line ka rang (hex)
  code: "AI-LEARNER",                // neeche chip mein dikhne wala code
  date: "2026",                      // modal mein "Date" ke aage
  skills: ["Prompt Engineering & Design", "AI Workflow Optimization","Large Language Models (LLMs)"],       // modal ke andar chhote tags
  blurb: "Completed the Claude 101 course, gaining foundational expertise in AI interaction, prompt engineering design, and leveraging large language models for workflow optimization and content creation.",  // modal ka description
  },

  {
    id: "c3",
    title: "Data Visualization",
    issuer: "VOIS and Edunet Foundation",
    color: "#e0002a",
    code: "VOIS-DATAVIZ",
    date: "2026",
    skills: ["Matplotlib", "Chart selection"],
    blurb:
      "Learned to select different chart types for different data patterns and applied Matplotlib for data visualization.",
  },
  {
    id: "c4",
    title: "Data Analyst Intern",
    issuer: "Hummingbyte Pvt Ltd",
    color: "#00b3ff",
    code: "HB-INTERN",
    date: "Jun – Oct 2026",
    skills: ["Power BI", "SQL", "Pandas"],
    blurb:
      "Internship credential: Power BI dashboards, ETL cleaning, SQL and Excel pivot analysis.",
  },
  {
    id: "c5",
    title: "Data Analyst Intern",
    issuer: "VOIS and Edunet Foundation",
    color: "#ff9d00",
    code: "VOIS-INTERN",
    date: "Aug 2026 – Present",
    skills: ["Colab", "Jupyter", "LLM analysis"],
    blurb:
      "Internship credential: analysis in Colab and Jupyter with Gemini, Julius AI and IBM BOB.",
  },
  {
    id: "c6", // har card ka alag id
    title: "MS Office", // card ka bada heading
    issuer: "STP Computer Education", // upar chhota text, issuer ka naam
    color: "#f609ba", // upar ki laser line ka rang (hex)
    code: "STP-254343", // neeche chip mein dikhne wala code
    date: "2024", // modal mein "Date" ke aage
    skills: ["MS Word", "MS Excel", "MS PowerPoint"], // modal ke andar chhote tags
    blurb:
      "Certified in Microsoft Office (Word, Excel, PowerPoint), with expertise in professional documentation, data management, dynamic spreadsheets, and business presentations.", // modal ka description
  },
  {
  id: "c7",                          // har card ka alag id
  title: "Data Analyst Intern",      // card ka bada heading
  issuer: "YUVA INTERN",               // upar chhota text, issuer ka naam
  color: "#f2c811",                  // upar ki laser line ka rang (hex)
  code: "YUVA-INTERN",                // neeche chip mein dikhne wala code
  date: "2026",                      // modal mein "Date" ke aage
  skills: ["Jupyter Lab", "Google Colab","Matplotlib", "Power BI", "DAX"],       // modal ke andar chhote tags
  blurb: "Completed a Data Analyst Internship via Yuva Intern, gaining hands-on experience in data processing, cleaning, and extracting actionable business insights using analytical tools.",  // modal ka description
},
// {
//   id: "c7",                          // har card ka alag id
//   title: "Anthropic Claude 101 Certification",      // card ka bada heading
//   issuer: "Anthropic Education",               // upar chhota text, issuer ka naam
//   color: "#f2c811",                  // upar ki laser line ka rang (hex)
//   code: "AI-LEARNER",                // neeche chip mein dikhne wala code
//   date: "2026",                      // modal mein "Date" ke aage
//   skills: ["Prompt Engineering & Design", "AI Workflow Optimization","Large Language Models (LLMs)"],       // modal ke andar chhote tags
//   blurb: "Completed the Claude 101 course, gaining foundational expertise in AI interaction, prompt engineering design, and leveraging large language models for workflow optimization and content creation.",  // modal ka description
// },
];
