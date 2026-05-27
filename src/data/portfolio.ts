export type ThemeName = 'light' | 'dark' | 'device';
export type AccentName = 'sand' | 'sage' | 'sky' | 'amber' | 'rose';

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  when: string;
  details: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  when: string;
  bullets: string[];
}

export interface ProjectItem {
  title: string;
  link?: string;
  subtitle?: string;
  when: string;
  bullets: string[];
  badge?: string;
  stack?: string[];
}

export interface ResearchItem {
  type: string;
  title: string;
  bullets: string[];
  badge?: string;
}

export interface GlobalExposureItem {
  title: string;
  subtitle: string;
  when: string;
  bullets: string[];
}

export interface ResearchActivityItem {
  text: string;
  isBold?: boolean;
}

export interface VolunteerItem {
  organization: string;
  role: string;
  when: string;
  bullets?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
}

export interface GroupedAchievementItem {
  year: string;
  items: string[];
}

export interface PortfolioSkillGroup {
  label: string;
  items: string[];
}

export const portfolio = {
  name: 'Jainee Patel',
  role: 'Computer Engineering Student, Research Intern, and Full-Stack Developer',
  location: 'Gandhinagar, Gujarat',
  email: 'jainu2426@gmail.com',
  phone: '+91 7981 23552',
  summary:
    'Computer Engineering student focused on AI/ML, data analytics, research, and product-oriented web development. Active across IEEE, student research programs, hackathons, and publication-driven work.',
  stats: [
    { value: '2', label: 'research internships' },
    { value: '4', label: 'featured projects' },
    { value: '6', label: 'certifications' },
    { value: '10+', label: 'awards & recognitions' },
  ],
  education: [
    {
      institution: 'LDRP Institute of Technology and Research',
      location: 'Gandhinagar, Gujarat',
      degree: 'Bachelor of Engineering - Computer Engineering',
      when: 'Expected July 2027',
      details: [
        'Cumulative CGPA: 8.62 / 10 (Till 6th Semester)',
        'Relevant Coursework: Software Engineering, Operating Systems, Algorithms, Artificial Intelligence, Data Analysis, Machine Learning, Database Management System',
      ],
    },
    {
      institution: 'Higher Secondary Education',
      location: 'Gandhinagar, Gujarat',
      degree: 'Mathematics',
      when: 'Jul 2022 - Jul 2023',
      details: [
        'Cumulative Percentage: 66.76%',
        'Board: GHSEB (Gujarat Higher Secondary Education Board)',
      ],
    },
  ] as EducationItem[],
  experience: [
    {
      company: 'IEEE EMBS Pune Chapter, Maharashtra',
      role: 'Research Internship - AI Based Regional EEG Analysis and Seizure Prediction Model',
      when: 'Jun 2025 - Jul 2025',
      bullets: [
        'Collaborative internship with two teammates focused on EEG analysis and seizure prediction.',
        'Developed machine learning algorithms for reliable biomedical signal processing to assist clinicians in early detection and intervention.',
        'Currently drafting the research paper covering methodology, experimental setup, and model interpretability.',
      ],
    },
    {
      company: 'IEEE SPS Gujarat Section',
      role: 'Research Internship - Misinformation Detection Using LLM with Explainability',
      when: 'Jun 2025 - Jul 2025',
      bullets: [
        'Developed an LLM-based system to detect, analyze, and mitigate misinformation using advanced NLP techniques.',
        'Focused on practical and scalable solutions for real-world information verification challenges across digital platforms.',
        'Contributed to preparing a research paper for publication and methodology reporting.',
      ],
    },
  ] as ExperienceItem[],
  projects: [
    {
      title: 'IEEE Student Branch, Kadi Sarva Vishwavidyalaya Website',
      link: 'https://ieee-ksv-sb.mmpsrpc.in',
      subtitle: 'ieee-ksv-sb.mmpsrpc.in',
      when: 'Jan 2025 - Present',
      badge: 'Live',
      stack: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'MERN Stack'],
      bullets: [
        'Designed and developed the official IEEE-KSV SB website to improve digital presence and accessibility.',
        'Built the frontend and backend using modern web technologies and maintained a responsive user experience.',
      ],
    },
    {
      title: 'ImpactThon 2025-2026 Website',
      link: 'https://impactthon.mmpsrpc.in',
      subtitle: 'impactthon.mmpsrpc.in',
      when: 'Nov 2025 - Dec 2025',
      badge: 'Event Platform',
      stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      bullets: [
        'Designed and developed the official ImpactThon 2025-26 website organized by KSV and MMPSRPC.',
        'Built frontend and backend workflows for event communication, registration, and public visibility.',
      ],
    },
    {
      title: 'Supreme Court Judgment Prediction using Machine Learning',
      subtitle: 'Datathon Runner-Up - Sampark 2025',
      when: 'Jan 2025 - Feb 2025',
      badge: 'Runner-Up',
      stack: ['Python', 'Machine Learning', 'NLP', 'Scikit-learn', 'XAI'],
      bullets: [
        'Built an AI model that analyzes legal documents to predict Supreme Court judgments.',
        'Applied Explainable AI to improve transparency and interpretability in legal decision-making.',
        'Worked in a team of three and improved predictive accuracy using machine learning techniques and judicial precedent analysis.',
      ],
    },
    {
      title: 'IEEE LDRP-ITR Website',
      link: 'https://ieee-ldrp-itr.sb.vercel.app/',
      subtitle: 'ieee-ldrp-itr.sb.vercel.app',
      when: 'Feb 2024 - Dec 2024',
      badge: 'Frontend',
      stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      bullets: [
        'Contributed as a frontend developer to build a seamless, responsive, and user-friendly interface.',
        'Improved communication, event visibility, and accessibility for the student branch website.',
      ],
    },
    {
      title: 'Wellness Vivek - Smart Healthcare Management Platform',
      link: 'https://wellness-vivek.netlify.app/',
      subtitle: 'Smart India Hackathon 2024',
      when: 'Oct 2024 - Nov 2024',
      badge: '5th Position',
      stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Healthcare Analytics'],
      bullets: [
        'Developed a comprehensive hospital management platform featuring patient flow optimization, bed management, inventory tracking, pharmacy operations, and pathology lab integration.',
        'Implemented city-wide healthcare coordination modules and secure backend services for patient and inventory workflows.',
      ],
    },
  ] as ProjectItem[],
  research: [
    {
      type: 'Research Paper',
      title: "Exploring AI's Influence on Human Thinking: Productivity, Learning, and Cognitive Skills in the Age of XAI",
      badge: 'Published',
      bullets: [
        'Accepted at AISTS 2025 and published in IEEE Xplore.',
        'Examines the cognitive and behavioral effects of AI on learning, productivity, and decision-making.',
        'Combines cognitive science, AI ethics, and HCI perspectives.',
      ],
    },
    {
      type: 'Book Chapter',
      title: 'Introduction to Internet of Things - Chapter 2, Quantum Computing, Sensing and Communications for IoT',
      badge: 'Published',
      bullets: [
        'Contributing author for the Springer Book Series Studies in Computational Intelligence.',
        'Chapter published in the Springer Nature book Quantum Computing, Sensing and Communications for IoT.',
      ],
    },
    {
      type: 'Research Paper',
      title: 'Misinformation Detection using Large Language Models with Explainability',
      badge: 'Published',
      bullets: [
        'Accepted for publication in the proceedings of ACAI 2025 and published on IEEE Xplore.',
        'Focused on misinformation detection using LLMs, NLP, and explainable AI methods.',
      ],
    },
    {
      type: 'Under Review',
      title: 'Early Epileptic Seizure Diagnosis Through Dilated Temporal Convolutional Networks on CHB-MIT Scalp EEG Signals',
      badge: 'Under Review',
      bullets: [
        'Developing an explainable deep learning framework for EEG based seizure prediction.',
        'Incorporates SHAP-assisted interpretability for regional brain activity analysis.',
        'Submitted to IEEE-CICON 2026.',
      ],
    },
    {
      type: 'Under Review',
      title: 'U-FIN: A Federated Generative Learning with RL-Tuned Dual-Stream Networks (TCN-GAT) for Real-Time Financial Fraud Detection',
      badge: 'Under Review',
      bullets: [
        'Developing a federated generative learning approach for real-time financial fraud detection.',
        'Uses RL-tuned dual-stream networks with TCN-GAT to improve detection robustness and adaptability.',
        'Submitted to IEEE IRAI 2026.',
      ],
    },
    {
      type: 'Ongoing Research Paper',
      title: 'Intelligent Skill Extraction & Profile Classification for Alumni Platforms',
      badge: 'Ongoing',
      bullets: [
        'Developing NLP-based models for automated skill extraction and profile categorization.',
        'Improving alumni networking through semantic classification and recommendation systems.',
      ],
    },
  ] as ResearchItem[],
  globalExposure: [
    {
      title: 'UK-France Immersion Future Leaders Program 2025',
      subtitle: 'University of Kent (UK) and IESEG School of Management (France)',
      when: 'Oct 2025',
      bullets: [
        'Participated in a 1-month hybrid international immersion program organized by the Department of International Relations, Sarva Vidyalaya Kelavani Mandal (Trust) and KSV.',
        'Completed academic and cultural immersion at the University of Kent and IESEG School of Management, with sessions, excursions, and global collaboration activities.',
        'Completed a custom course on Luxury Marketing and International Business Strategy as part of the curriculum.',
      ],
    },
  ] as GlobalExposureItem[],
  researchActivities: [
    { text: 'Active member - Students Research Lab (SRL), M. M. Patel Students Research Project Cell (MMPSRPC), KSV.' },
    { text: 'Assisted in organizing and managing the Research Orientation Workshop conducted by MMPSRPC-KSV and MMPRC-KSV.' },
    { text: 'Volunteered at the Research Project Evaluation event on 26 September 2025 at the Research Lab, LDRP-ITR, KSV.' },
    { text: 'Supported the MMPRC Talk on Interdisciplinary Research by coordinating operations and event facilitation.' },
    { text: 'Volunteered at the Chiropractic Research Meet with Life Chiropractic College West, USA, helping with interdisciplinary discussions and coordination.' },
    { text: 'Second Position - Track V: Intelligent Data Analytics & Data Engineering, IGNITE 2.0, Marwadi University, Gujarat, August 2025.' },
  ] as ResearchActivityItem[],
  volunteerPositions: [
    {
      organization: 'IEEE Student Branch - Kadi Sarva Vishwavidyalaya',
      role: 'Digital & Website Committee Member',
      when: 'Jan 2026 - Present',
      bullets: ['Active member of IEEE KSV SB WIE Affinity Group and IEEE KSV SB SPS Chapter.'],
    },
    {
      organization: 'IEEE Student Branch - Kadi Sarva Vishwavidyalaya',
      role: 'Chair',
      when: 'Jan 2025 - Dec 2025',
      bullets: ['Guided the direction of IEEE Student Branch activities and supported leadership development.'],
    },
    {
      organization: 'IEEE Gujarat Section Student Representative',
      role: '2025',
      when: 'Apr 2025 - Jan 2026',
      bullets: ['Represented student branches of Gujarat Section and acted as a liaison with the section executive committee.'],
    },
    {
      organization: 'IEEE TechSangam Ambassador / IEEE MIT-ADT Student Branch',
      role: 'Ambassador',
      when: 'Apr 2025 - Jul 2025',
      bullets: ['Supported outreach and event coordination for the IEEE TechSangam ecosystem.'],
    },
    {
      organization: 'IEEE DEY 2025',
      role: 'Ambassador',
      when: 'Jul 2025 - Oct 2025',
      bullets: ['Promoted IEEE programs and student engagement initiatives.'],
    },
    {
      organization: 'IEEE Gujarat Section, Kadi Sarva Vishwavidyalaya',
      role: 'Student Coordinator, Emerging Research Trends in Engineering (ERTE-2025)',
      when: 'July 2025',
      bullets: ['Coordinated and managed ERTE-2025, handling planning, logistics, and seamless event execution.'],
    },
    {
      organization: 'IEEE LDRP-ITR Student Branch',
      role: 'Website Committee Member',
      when: 'Feb 2024 - Dec 2024',
      bullets: ['Coordinated the Career Compass event and a 5 day STTP on Mathematics Driven Machine Learning.'],
    },
  ] as VolunteerItem[],
  skills: [
    {
      label: 'Data Analysis & Visualization',
      items: ['Pandas', 'NumPy', 'MATLAB', 'Matplotlib', 'Seaborn', 'LLM'],
    },
    {
      label: 'Frameworks',
      items: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'OpenCV'],
    },
    {
      label: 'Programming Languages',
      items: ['C', 'C++', 'Python', 'SQL', 'React', 'JavaScript', 'TypeScript'],
    },
  ] as PortfolioSkillGroup[],
  certifications: [
    { title: 'Database Management System', issuer: 'NPTEL', year: '2024' },
    { title: 'Problem Solving Through Programming in C', issuer: 'NPTEL', year: '2024' },
    { title: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft' },
    { title: 'GitHub Foundation', issuer: 'GitHub' },
    { title: 'Python for Data Science', issuer: 'NPTEL', year: '2025' },
    { title: 'Introduction to Algorithms and Analysis', issuer: 'NPTEL', year: '2025' },
  ] as CertificationItem[],
  achievementGroups: [
    {
      year: '2026',
      items: [
        'Shortlisted for the IEEE IES Generative AI Challenge 2026 Hackathon.',
        'Finalist - ODOO x Gujarat Vidyapith Hackathon 2026.',
        'Finalist - AISEHack 2026.',
      ],
    },
    {
      year: '2025',
      items: [
        '1st Runner-Up - Datathon (Software Category) at Sampark 2025 organized by IEEE SCET SB and IEEE Gujarat Section.',
        '2nd Prize - Video Making Competition on AI for Aspirational India at Xenesis 2025, LDRP-ITR.',
        'Winner - IEEE R10 Ethics Awareness and Advancement Contest, Gujarat Section.',
        'Round 2 Qualifier - TCS CodeVita Season 12.',
        'Appreciation Letter - For developing the official website of IEEE Kadi Sarva Vishwavidyalaya Student Branch.',
        'Runner-up - State Level Football (KSV Team).',
        'Presented Poster - National Poster Competition on AI Powered Research and Innovation organized by GTU.',
        'Best Poster Award - Second Position on Track V: Intelligent Data Analytics & Data Engineering at IGNITE 2.0, AISTS 2025.',
        'Finalist - IEEE Data Science Challenge (DSC 3.0).',
        'Finalist - InnovAItion: Shaping Future Innovators Hackathon.',
        'Winner - ImpactThon @ KSV 2025-26 (Track: Safe, Trusted and Responsible Technology).',
        '4th Rank - Top 5 IEEE YESIST12 2025 publicity ambassadors in India.',
      ],
    },
    {
      year: '2024',
      items: ['Runner-up - State Level Football (KSV Team).'],
    },
  ] as GroupedAchievementItem[],
} as const;
