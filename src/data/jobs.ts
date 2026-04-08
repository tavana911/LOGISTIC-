export interface Job {
  id: number;
  title: string;
  type: string;
  location: string;
  payRate: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  requirements: string[];
  benefits: string[];
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Driver",
    type: "Full-Time",
    location: "Remote (USA)",
    payRate: "$35 - $65/hour",
    icon: "truck",
    shortDescription: "Responsible for safe and timely delivery of goods to customers...",
    fullDescription: "Responsible for safe and timely delivery of goods to customers. Maintain vehicle cleanliness, perform pre-trip inspections, and ensure DOT compliance.",
    requirements: [
      "Valid CDL Class A or B license",
      "Clean driving record (MVR)",
      "2+ years commercial driving experience",
      "Ability to pass DOT physical and drug test",
      "Strong customer service skills"
    ],
    benefits: ["Health insurance", "401k", "Paid time off", "Equipment provided"]
  },
  {
    id: 2,
    title: "Delivery Personnel",
    type: "Full-Time/Part-Time",
    location: "Remote (USA)",
    payRate: "$35 - $65/hour",
    icon: "package",
    shortDescription: "Handle last-mile deliveries and ensure customer satisfaction...",
    fullDescription: "Handle last-mile deliveries, ensure customer satisfaction, maintain delivery records, collect proof of delivery, and resolve delivery issues.",
    requirements: [
      "Valid driver's license",
      "Ability to lift up to 50 lbs repeatedly",
      "Customer service skills",
      "Smartphone for delivery app",
      "Clean background check"
    ],
    benefits: ["Flexible scheduling", "Health insurance", "Mileage reimbursement"]
  },
  {
    id: 3,
    title: "Data Analyst",
    type: "Full-Time",
    location: "Remote (USA)",
    payRate: "$35 - $65/hour",
    icon: "chart",
    shortDescription: "Analyze logistics data, create reports and dashboards...",
    fullDescription: "Analyze logistics data, create reports and dashboards, identify trends, optimize routes, and provide insights for decision-making.",
    requirements: [
      "Bachelor's degree in Data Science, Statistics, or related field",
      "Proficiency in SQL, Excel, Python/R",
      "Experience with Tableau, Power BI, or similar",
      "2+ years data analysis experience",
      "Strong problem-solving skills"
    ],
    benefits: ["Health insurance", "401k", "Professional development", "Flexible hours"]
  },
  {
    id: 4,
    title: "Logistics Coordinator",
    type: "Full-Time",
    location: "Remote (USA)",
    payRate: "$35 - $65/hour",
    icon: "clipboard",
    shortDescription: "Coordinate shipments, track deliveries, communicate with...",
    fullDescription: "Coordinate shipments, track deliveries, communicate with carriers and customers, resolve transportation issues, and maintain documentation.",
    requirements: [
      "2+ years logistics or transportation experience",
      "Strong communication and organizational skills",
      "Knowledge of TMS (Transportation Management Systems)",
      "Proficiency in MS Office",
      "Multitasking abilities"
    ],
    benefits: ["Health insurance", "401k", "Paid time off", "Remote work"]
  },
  {
    id: 5,
    title: "Supply Chain Coordinator",
    type: "Full-Time",
    location: "Remote (USA)",
    payRate: "$35 - $65/hour",
    icon: "network",
    shortDescription: "Manage end-to-end supply chain processes and inventory...",
    fullDescription: "Manage end-to-end supply chain processes, inventory management, vendor relationships, procurement activities, and demand planning.",
    requirements: [
      "Bachelor's degree in Supply Chain, Logistics, or Business",
      "3+ years supply chain experience",
      "ERP system knowledge (SAP, Oracle, etc.)",
      "Analytical and negotiation skills",
      "APICS certification a plus"
    ],
    benefits: ["Health insurance", "401k", "Professional development", "Performance bonuses"]
  },
  {
    id: 6,
    title: "Logistics Manager",
    type: "Full-Time",
    location: "Remote (USA)",
    payRate: "$35 - $65/hour",
    icon: "users",
    shortDescription: "Lead logistics operations team and develop strategies...",
    fullDescription: "Lead logistics operations team, develop strategies, manage budgets, ensure KPIs are met, drive continuous improvement, and oversee vendor relationships.",
    requirements: [
      "5+ years logistics management experience",
      "Proven leadership and team management skills",
      "P&L management experience",
      "Bachelor's degree in Logistics or related field",
      "Strong strategic thinking abilities"
    ],
    benefits: ["Health insurance", "401k matching", "Performance bonuses", "Stock options"]
  },
  {
    id: 7,
    title: "Operations Coordinator",
    type: "Full-Time",
    location: "Remote (USA)",
    payRate: "$35 - $65/hour",
    icon: "cog",
    shortDescription: "Support daily operations and coordinate between departments...",
    fullDescription: "Support daily operations, coordinate between departments, maintain operational documentation, assist with process improvements, and handle administrative tasks.",
    requirements: [
      "2+ years operations or administrative experience",
      "Strong organizational skills",
      "Proficiency in MS Office Suite",
      "Attention to detail",
      "Ability to work in fast-paced environment"
    ],
    benefits: ["Health insurance", "401k", "Paid time off", "Growth opportunities"]
  },
  {
    id: 8,
    title: "Compliance Specialist",
    type: "Full-Time",
    location: "Remote (USA)",
    payRate: "$35 - $65/hour",
    icon: "shield",
    shortDescription: "Ensure regulatory compliance and manage documentation...",
    fullDescription: "Ensure regulatory compliance with DOT/FMCSA regulations, manage documentation, conduct internal audits, stay updated on transportation laws, and train staff on compliance requirements.",
    requirements: [
      "In-depth knowledge of DOT/FMCSA regulations",
      "3+ years compliance or regulatory experience",
      "Strong attention to detail",
      "Audit experience",
      "Certification in transportation compliance preferred"
    ],
    benefits: ["Health insurance", "401k", "Professional development", "Certification reimbursement"]
  }
];

