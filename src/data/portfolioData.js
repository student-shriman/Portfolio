export const personalData = {
  name: "Shriman Narayan",
  title: "Senior Generative AI & Agentic Systems Engineer",
  badge: "Available for High-Impact AI Roles",
  location: "Hyderabad, Telangana, India",
  email: "student.shriman@gmail.com",
  phone: "+91 9304723057",
  github: "https://github.com/student-shriman",
  githubUsername: "student-shriman",
  linkedin: "https://linkedin.com/in/shrimanai",
  linkedinUsername: "shrimanai",
  
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Production AI Systems", value: "6+" },
    { label: "Global Registries Integrated", value: "40+" },
    { label: "Query Peak Scale", value: "2K req/s" },
  ],

  summary: "Generative AI Engineer with 5+ years of experience focused on building agentic AI systems and LLM-powered production architectures. Specialized in developing end-to-end multi-agent pipelines with dynamic orchestration, hybrid retrieval, and reasoning-based decision flows for complex, real-world data systems. Experienced in optimizing large-scale AI workflows for latency, cost, and accuracy using asynchronous execution and intelligent fallback strategies. Strong expertise in system design, scalable deployments, and observability across modern AI infrastructure.",

  personalProfile: [
    "Built agentic AI systems with multi-agent orchestration, dynamic routing, and reasoning workflows.",
    "Developed end-to-end LLM pipelines with hybrid retrieval (vector + tools) and context-aware generation.",
    "Experienced with LangChain, LangGraph, OpenAI Agents SDK, CrewAI for scalable agent architectures.",
    "Implemented Agentic/Corrective RAG with re-ranking and fallback reasoning, along with async pipelines optimizing latency, cost, and throughput.",
    "Deployed scalable systems using Docker, Kubernetes, and cloud platforms with strong focus on observability and reliability."
  ],

  skillsSummary: [
    { name: "Generative AI & Agentic Architectures", desc: "Multi-agent systems, Tool-based reasoning, Dynamic routing & Handoffs" },
    { name: "Advanced RAG & Retrieval", desc: "Agentic RAG, Corrective RAG, Hybrid dense+sparse search, Re-ranking" },
    { name: "Production Engineering & MLOps", desc: "Docker, Kubernetes, AWS, Azure, Langfuse PromptOps, MLflow" },
    { name: "Deep Learning & Computer Vision", desc: "PyTorch, Detectron2, YOLO, Image segmentation, Model Quantization" },
    { name: "Architecture & System Design", desc: "High-throughput async APIs, Fault-tolerant pipelines, Security & SSO" }
  ]
};

export const technicalSkills = [
  {
    category: "LLM & Agentic Systems",
    icon: "Bot",
    skills: [
      "Multi-Agent Architectures",
      "Agentic RAG & Corrective RAG",
      "MCP Servers (Model Context Protocol)",
      "Tool-Based Reasoning",
      "Google ADK",
      "OpenAI Agents SDK",
      "A2A Protocol (Agent-to-Agent)",
      "Sequential Handoffs & Fallback Logic"
    ]
  },
  {
    category: "Orchestration & Frameworks",
    icon: "GitFork",
    skills: [
      "LangChain",
      "LangGraph",
      "CrewAI",
      "LlamaIndex",
      "vLLM & TRL",
      "Transformers (HuggingFace)"
    ]
  },
  {
    category: "Retrieval & Vector Databases",
    icon: "Database",
    skills: [
      "Qdrant (Dense + Sparse)",
      "Pinecone",
      "LanceDB",
      "Hybrid Semantic Search",
      "Cross-Encoder Re-ranking",
      "Context-Aware Chunking"
    ]
  },
  {
    category: "LLMs & Foundation Models",
    icon: "Cpu",
    skills: [
      "OpenAI GPT-4o / GPT-4.1",
      "Anthropic Claude 3.5 Sonnet",
      "Google Gemini Pro / Flash",
      "Mistral-Instruct & Gemma",
      "BART-large & RoBERTa",
      "Fine-Tuning & Model Evaluation"
    ]
  },
  {
    category: "Backend, APIs & Ingestion",
    icon: "Server",
    skills: [
      "FastAPI (Async/Await)",
      "RESTful API Design",
      "Python 3.x",
      "BeautifulSoup (bs4)",
      "Pandas & NumPy",
      "Node.js & Express",
      "SQL & PostgreSQL",
      "MongoDB & NoSQL"
    ]
  },
  {
    category: "Cloud, Deployment & MLOps",
    icon: "Cloud",
    skills: [
      "Docker & Containerization",
      "Kubernetes (K8s)",
      "AWS (EC2, Bedrock, S3)",
      "Azure (AI Foundry, App Services, Key Vault)",
      "Langfuse (PromptOps & Tracing)",
      "MLflow & Experiment Tracking",
      "CI/CD (GitHub Actions, Azure DevOps, Jenkins)"
    ]
  },
  {
    category: "Computer Vision & Edge",
    icon: "Eye",
    skills: [
      "OpenCV",
      "Detectron2",
      "YOLO (v3, v5)",
      "Faster R-CNN & Mask R-CNN",
      "TorchServe & PyTorch Lightning",
      "Model Quantization & Pruning",
      "Raspberry Pi & Embedded AI"
    ]
  }
];

export const workExperience = [
  {
    id: "latinem",
    role: "Senior AI Engineer",
    company: "Latinem Pvt Ltd. (Shobha Realty, Dubai)",
    location: "Hyderabad",
    period: "July 2026 - Present",
    status: "Current",
    highlights: [
      "Developing an AI-powered Audit tool at Latinem using Azure AI Foundry models and Azure Document Intelligence, React, MSAL-based SSO, RBAC, PostgreSQL, MCP Servers, and Azure CI/CD.",
      "Securing and deploying enterprise applications using Azure Key Vault, Docker containers, and Azure App Services with strict compliance."
    ],
    tech: ["Azure AI Foundry", "Azure Document Intelligence", "React", "MCP Servers", "PostgreSQL", "Docker", "Azure Key Vault", "Azure App Services"]
  },
  {
    id: "globaldata",
    role: "Gen AI Engineer",
    company: "GlobalData PLC (Akshaya Business IT Solutions)",
    location: "Hyderabad",
    period: "April 2025 - June 2026",
    highlights: [
      "Developed LLM-driven, asynchronous pipelines for extracting and analyzing multilingual clinical trial data, leveraging LangChain, LangGraph, vector databases, and FastAPI for scalable, low-latency outputs.",
      "Built autonomous multi-agent systems using OpenAI Agents SDK, Google ADK, A2A protocol, and MCP servers to enable dynamic orchestration and collaborative reasoning across workflows.",
      "Designed agentic RAG architectures with hybrid retrieval (vector + external tools), incorporating re-ranking and fallback reasoning for improved accuracy on complex inputs.",
      "Containerized and deployed production-grade AI systems using Docker and Kubernetes, ensuring scalability, reliability, and continuous delivery within a healthcare intelligence platform."
    ],
    tech: ["OpenAI Agents SDK", "LangGraph", "Google ADK", "MCP Servers", "Qdrant", "FastAPI", "Docker", "Kubernetes", "AWS EC2"]
  },
  {
    id: "lamipak",
    role: "GenAI Engineer (LLMs focused role)",
    company: "LamiPak (Chinese - Indonesian company)",
    location: "Kunshan, China",
    period: "July 2024 - December 2024",
    highlights: [
      "Built an LLM-powered customer support system integrating SQL-based structured data with agent-driven query processing using LangChain.",
      "Developed a RAG pipeline (Pinecone) to handle multi-format data (PDFs, CSVs, images) for context-aware retrieval and response generation.",
      "Implemented LLM-based analytics and trend analysis on customer complaint data using Python (Pandas, NumPy, Matplotlib).",
      "Designed backend services with FastAPI and deployed scalable solutions using Docker, Kubernetes, AWS, and MLflow."
    ],
    tech: ["LangChain", "FastAPI", "Pinecone", "SQL", "GPT-4", "Pandas", "Matplotlib", "Docker", "AWS", "MLflow"]
  },
  {
    id: "vridhee",
    role: "Lead AI Engineer",
    company: "Vridhee Innovations Pvt Ltd",
    location: "Hyderabad, India",
    period: "June 2023 - June 2024",
    highlights: [
      "Managed AI system development for the Smart LMS platform, leading design and implementation of LLM-driven features across cross-functional teams for seamless integration.",
      "Conducted applied research to improve Large Language Model performance for educational content generation, focusing on accuracy, structure, and optimization techniques.",
      "Developed and fine-tuned LLM-based pipelines using ChatGPT and related models to generate curriculum-aligned content based on Bloom's Taxonomy."
    ],
    tech: ["Mistral-Instruct", "Gemma", "React", "Node.js", "FastAPI", "MongoDB", "vLLM", "TRL", "Pinecone"]
  },
  {
    id: "convergeone",
    role: "GCP - AI Engineer",
    company: "ConvergeOne Inc. (Agiline India PVT LTD)",
    location: "Minnesota, USA / Remote",
    period: "June 2022 - November 2022",
    highlights: [
      "Overseeing daily project coordination, planning, and execution across multiple engineering teams.",
      "Engaging in research-oriented tasks and conducting experiments using cutting-edge NLP and transformer algorithms to address specific enterprise challenges."
    ],
    tech: ["Transformers", "BART", "RoBERTa", "GCP", "Flask", "MongoDB", "ASR"]
  },
  {
    id: "bakerhughes",
    role: "Computer Vision Engineer",
    company: "Baker Hughes - GE Company",
    location: "Bangalore, India",
    period: "November 2021 - May 2022",
    highlights: [
      "Conducted day-to-day project co-ordination, planning, and implementation across multiple teams.",
      "Conducted deep R&D and experiments with state-of-the-art computer vision algorithms for automated battery inspection and defect detection."
    ],
    tech: ["PyTorch", "Faster R-CNN", "YOLO-v5", "TorchServe", "OpenCV", "GANs", "Nvidia DGX"]
  }
];

export const projectsData = [
  {
    id: "healthcare-agentic",
    title: "Structured Automation for Healthcare",
    subtitle: "Clinical Trial Multi-Agent Intelligence Pipeline",
    organization: "GlobalData PLC, Hyderabad",
    period: "April 2025 - Present",
    tag: "Agentic AI & Healthcare",
    description: "Production-grade asynchronous multi-agent LLM pipeline processing clinical trial data from 40+ global registries. Designed agentic workflows with extraction, hybrid matching (exact + vector search), and LLM-based reasoning using sequential handoffs. Enabled parallel processing of 30-35 records concurrently, implemented PromptOps with Langfuse, and deployed scalable APIs via FastAPI on AWS EC2.",
    techStack: [
      "FastAPI", "OpenAI GPT-4o mini & GPT-4.1", "Claude 3.5", "OpenAI Agents SDK",
      "Qdrant Vector DB", "BeautifulSoup (bs4)", "Python AsyncIO", "Langfuse",
      "Docker", "AWS EC2", "JWT/OAuth"
    ],
    metrics: [
      { label: "Global Registries", value: "40+" },
      { label: "Concurrent Records", value: "30-35" },
      { label: "Pipeline Handoffs", value: "3 Agents" },
      { label: "Observability", value: "100% Traced" }
    ],
    architectureDetails: [
      {
        title: "1. Data Ingestion & Registry Parsing",
        desc: "Built a centralized retrieval pipeline fetching clinical trial data using registry IDs (e.g. NCT IDs) from 40+ global registries, handling heterogeneous formats (XML, JSON, HTML) with custom BeautifulSoup parsers."
      },
      {
        title: "2. LLM-Based Entity Extraction",
        desc: "Engineered context-aware extraction identifying Sponsors, Collaborators, CROs, Facilities, Indications, and Subject Types with sentence-level grounding, confidence scoring, and explainable reasoning."
      },
      {
        title: "3. Sequential Multi-Agent Handoffs",
        desc: "Orchestrated specialized agents: Extraction Agent (entity ID) → Matching Agent (fast-path resolution) → Fallback Agent (deep reasoning & semantic matching) with asynchronous tool-based execution."
      },
      {
        title: "4. Multi-Stage Hybrid Normalization",
        desc: "Combined exact string matching, historical auto-correction logic, hybrid dense + sparse vector search in Qdrant, and LLM-based re-ranking with detailed justification."
      },
      {
        title: "5. Observability & PromptOps",
        desc: "Integrated Langfuse for prompt versioning per registry/entity type, tracing end-to-end execution, token usage tracking, and latency-cost optimization."
      }
    ]
  },
  {
    id: "lamipak-chatbot",
    title: "Customer Support Management & RAG Platform",
    subtitle: "Enterprise Customer Complaint Resolution & Trend Analysis",
    organization: "LamiPak (Chinese-Indonesian Packaging Co.)",
    period: "July 2024 - December 2024",
    tag: "Enterprise RAG & Analytics",
    description: "Advanced AI-powered solution designed to manage and analyze customer complaints. Integrated tabular data from Excel sheets into SQL database with LangChain agent querying. Implemented a multi-modal RAG pipeline with Pinecone vector database to process PDFs, CSVs, and images for context-aware customer resolution.",
    techStack: [
      "React.js", "FastAPI", "LangChain Agents", "SQL", "OpenAI GPT-4",
      "Pinecone", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Docker", "AWS", "MLflow"
    ],
    metrics: [
      { label: "Vector Database", value: "Pinecone" },
      { label: "Data Formats", value: "PDF, CSV, Images" },
      { label: "MLOps", value: "MLflow + Actions" },
      { label: "Backend", value: "FastAPI + K8s" }
    ],
    architectureDetails: [
      {
        title: "Dynamic Agent Querying on SQL",
        desc: "LangChain agents dynamically transform user natural language queries into optimized SQL statements to aggregate historical customer complaints across countries, regions, and products."
      },
      {
        title: "Multi-Format RAG Pipeline",
        desc: "Embedded product specification sheets, defect images, and complaint PDFs into Pinecone, allowing support agents to pull accurate resolution steps instantly."
      },
      {
        title: "Trend Analysis & Automated Charting",
        desc: "Leveraged OpenAI Python interpreter with Matplotlib/Seaborn to generate on-the-fly trend visualizations and proactive alerts for recurring product defects."
      }
    ]
  },
  {
    id: "smart-lms",
    title: "Smart LMS for EdTech",
    subtitle: "AI-Driven Multilingual Learning Platform in 25 Languages",
    organization: "Vridhee Innovations Pvt Ltd",
    period: "April 2023 - June 2024",
    tag: "Fine-Tuning & EdTech",
    description: "Multilingual Learning Management System tailored for Class 6 to college students across 25 languages. Combines AI-explained concepts, real-time examples, interactive assignments, and a question bank strictly mapped to Bloom's Taxonomy cognitive levels.",
    techStack: [
      "React.js", "Node.js", "FastAPI", "MongoDB", "Mistral-Instruct", "Gemma",
      "Pinecone", "LanceDB", "Docker", "AWS", "TRL Library", "vLLM", "LlamaIndex"
    ],
    metrics: [
      { label: "Languages Supported", value: "25 Languages" },
      { label: "Pedagogical Model", value: "Bloom's Taxonomy" },
      { label: "Inference Engine", value: "vLLM" },
      { label: "Fine-Tuned Models", value: "Mistral & Gemma" }
    ],
    architectureDetails: [
      {
        title: "Fine-Tuning for Structured HTML & MCQs",
        desc: "Fine-tuned Mistral-instruct models to generate cleanly formatted HTML educational material and JSON-based MCQs classified into Knowledge, Comprehension, Application, Analysis, Synthesis, and Evaluation."
      },
      {
        title: "Multilingual Gemma Model Translation",
        desc: "Fine-tuned Gemma for accurate translation of complex STEM curriculum across 25 regional and international languages without loss of technical semantics."
      },
      {
        title: "Interactive Student Chat & Recommendations",
        desc: "React + Node.js chat interface with real-time NLP reasoning and personalized video recommendations matching concept bottlenecks."
      }
    ]
  },
  {
    id: "megatron-chatbot",
    title: "MegaTron - Enterprise Conversational Chatbot",
    subtitle: "High-Throughput Omnichannel Q&A System",
    organization: "ConvergeOne Inc., Minnesota, USA",
    period: "October 2021 - May 2022",
    tag: "NLP & High Throughput",
    description: "Smart conversational system providing automated customer support trained across 30+ transformer architectures. Implemented BART-large for conditional text summarization, Google REALM and RoBERTa for sentence clustering, speech recognition (ASR), and MongoDB cluster handling 2,000 requests/sec.",
    techStack: [
      "Python", "Flask", "BART-large", "RoBERTa", "Google REALM", "Automatic Speech Recognition (ASR)",
      "MongoDB m10/m20", "PyTorch", "Docker", "MLflow"
    ],
    metrics: [
      { label: "Peak Throughput", value: "2,000 req/s" },
      { label: "Models Evaluated", value: "30+ Transformers" },
      { label: "Evaluation Metrics", value: "ROUGE / BLEU" },
      { label: "Speech Engine", value: "Integrated ASR" }
    ],
    architectureDetails: [
      {
        title: "Model Exploration & Optimization",
        desc: "Tested 30+ transformer backends on SQuAD, NQ, TriviaQA, and ELI5 datasets; applied weight pruning and quantization for rapid inference."
      },
      {
        title: "Voice Input & ASR Integration",
        desc: "Integrated Automatic Speech Recognition (ASR) into the chat frontend to transcribe spoken customer issues directly into the intent classifier."
      }
    ]
  },
  {
    id: "battery-adr",
    title: "Automatic Defect Recognition (ADR) for Li-ion Batteries",
    subtitle: "High-Precision Computer Vision Inspection for Energy & Auto",
    organization: "Baker Hughes (GE Company), Bangalore",
    period: "October 2020 - August 2021",
    tag: "Computer Vision & Edge",
    description: "Deep learning computer vision system detecting micro-defects (cracks, partial cracks, tear drops, inclusions) in Lithium-ion batteries. Generated synthetic battery surface images with GANs and VAEs to augment rare defect classes, serving predictions via TorchServe.",
    techStack: [
      "PyTorch", "Faster R-CNN", "YOLO-v5", "Mask R-CNN", "U-Net",
      "GANs & VAEs", "OpenCV", "TorchServe", "Nvidia DGX GPUs"
    ],
    metrics: [
      { label: "Defect Types", value: "Cracks, Tears, Inclusions" },
      { label: "Data Augmentation", value: "GANs & VAEs" },
      { label: "Serving Stack", value: "TorchServe" },
      { label: "Compute Hardware", value: "Nvidia DGX" }
    ],
    architectureDetails: [
      {
        title: "Synthetic Data Generation",
        desc: "Synthesized rare MidTab surface defects using Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs) to balance heavily skewed inspection datasets."
      },
      {
        title: "Multi-Model Ensembling & Serving",
        desc: "Benchmarked Faster R-CNN against YOLO-v5 and Mask R-CNN; deployed the top-performing detector via PyTorch Lightning and TorchServe for live line demo."
      }
    ]
  },
  {
    id: "hands-safety",
    title: "Industrial Hand Detection & Machinery Safety System",
    subtitle: "Edge AI Protection for Waste Shredder Machinery",
    organization: "iNeuron Intelligence PVT LTD, Bangalore",
    period: "November 2019 - September 2020",
    tag: "Computer Vision & Edge",
    description: "Edge computer vision system deployed on Raspberry Pi and industrial embedded devices to prevent worker hand injuries in waste shredder machinery using real-time object detection with model quantization.",
    techStack: [
      "Detectron2", "Faster R-CNN", "YOLO-v3", "MobileNet SSD",
      "Raspberry Pi", "ROS", "OpenCV", "Docker", "Flask"
    ],
    metrics: [
      { label: "Hardware Target", value: "Raspberry Pi & Embedded" },
      { label: "Safety Latency", value: "Ultra-low millisecond" },
      { label: "Model Quantization", value: "High FPS Edge Inference" }
    ],
    architectureDetails: [
      {
        title: "Custom Data Collection & COCO Labeling",
        desc: "Captured worker hand images under challenging ambient factory conditions with custom Albumentations data augmentation and COCO format labeling."
      },
      {
        title: "Model Quantization & Hardware Interfacing",
        desc: "Quantized MobileNet SSD and YOLO models for high FPS inference on Raspberry Pi, interfacing directly with machine circuit breakers via GPIO & socket programming."
      }
    ]
  }
];

export const educationHistory = [
  {
    degree: "Masters in Computer Applications (MCA)",
    institution: "IGNOU Hyderabad",
    period: "Ongoing (Online)",
    focus: "Advanced Computer Science & Distributed Computing"
  },
  {
    degree: "Deep Learning with Computer Vision and Advanced NLP",
    institution: "iNeuron Technology, Bangalore",
    period: "June 2021",
    focus: "Deep Learning, Computer Vision, NLP, GANs, VAEs, Diffusion Models, LLMs, PyTorch, TensorFlow"
  },
  {
    degree: "Machine Learning Masters",
    institution: "iNeuron Technology, Bangalore",
    period: "September 2020",
    focus: "Python programming, Statistics, Exploratory Data Analysis, Machine Learning, MLOps, Cloud"
  },
  {
    degree: "Bachelor's in Mathematics (Hons.)",
    institution: "Magadh University, Bodh Gaya",
    period: "May 2015 - March 2019",
    focus: "Mathematics (Major), Physics, Chemistry - First Class with 68% Marks. Strong analytical and mathematical foundation for AI algorithms."
  }
];
