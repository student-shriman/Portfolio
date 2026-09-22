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
    { name: "Generative AI & Agentic Architectures", desc: "Multi-agent systems, Tool-based reasoning, Dynamic routing & Sequential handoffs" },
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
    problemStatement: "Processing and standardizing heterogeneous clinical trial data across 40+ international medical registries is traditionally slow, manual, error-prone, and fraught with naming ambiguities (such as distinguishing CROs from academic medical institutions). The objective was to build a resilient, fully asynchronous, production-grade AI system that ingests raw registry data, extracts specialized clinical entities with high confidence and sentence-level grounding, executes hybrid normalization, and operates with comprehensive PromptOps and cost observability.",
    overview: "Built a production-grade asynchronous multi-agent LLM pipeline to process clinical trial data from 40+ global registries. Designed agentic workflows with extraction, hybrid matching (exact + vector search), and LLM-based reasoning using sequential handoffs. Enabled parallel processing (30–35 records), implemented PromptOps with Langfuse, and deployed scalable APIs using FastAPI, Docker, and AWS EC2 with robust error handling and secure access.",
    
    technologiesUsed: [
      { category: "Backend / APIs", details: "FastAPI for building scalable APIs and orchestrating asynchronous multi-agent workflows" },
      { category: "LLM / AI Models", details: "OpenAI GPT-4o mini, OpenAI GPT-4.1 for entity extraction and taxonomy matching; OpenAI & Claude models for advanced reasoning and re-ranking" },
      { category: "Agent Framework", details: "OpenAI Agents SDK for building multi-agent pipelines with tool chaining and handoffs" },
      { category: "Vector Database", details: "Qdrant for hybrid retrieval (dense + sparse search) and semantic matching" },
      { category: "Parsing & Data Processing", details: "BeautifulSoup (bs4) for HTML/XML parsing and structured data extraction from heterogeneous registry sources" },
      { category: "Async Processing", details: "Python async/await for concurrent execution, enabling parallel processing of 30–35 records" },
      { category: "PromptOps & Observability", details: "Langfuse for prompt versioning, tracing, and token/cost monitoring" },
      { category: "External Tools Integration", details: "Web search tools for validating and classifying ambiguous entities (e.g., CRO vs institution)" },
      { category: "Authentication & Security", details: "JWT / OAuth-based authentication for securing API access and controlling pipeline usage" },
      { category: "Containerization", details: "Docker for packaging and deployment" },
      { category: "Cloud & Deployment", details: "Amazon EC2 for hosting and scaling backend services" },
      { category: "System Design Features", details: "Multi-agent orchestration, hierarchical handoffs, hybrid retrieval pipelines, structured logging, error handling, and retry mechanisms" }
    ],

    specifications: [
      {
        section: "1. Data Ingestion & Processing",
        points: [
          "Built a centralized retrieval pipeline to fetch clinical trial data using registry identifiers (e.g., NCT IDs) from 40+ global registries.",
          "Processed heterogeneous data formats (XML, JSON, HTML) and implemented registry-specific parsing using BeautifulSoup to extract structured content."
        ]
      },
      {
        section: "2. LLM-Based Entity Extraction",
        points: [
          "Developed an LLM-driven extraction system to identify entities such as Sponsors, Collaborators, CROs, Facilities, Indications, and Subject Types.",
          "Enabled context-aware extraction with sentence-level grounding, confidence scoring, and explainable reasoning outputs."
        ]
      },
      {
        section: "3. Agentic Workflow & Orchestration",
        points: [
          "Designed a multi-agent pipeline with sequential handoffs: Extraction agent → entity identification, Matching agent → fast-path resolution, Fallback agent → deep reasoning and semantic matching.",
          "Implemented tool-based orchestration with async execution to optimize performance and modularity."
        ]
      },
      {
        section: "4. Hybrid Matching & Retrieval System",
        points: [
          "Engineered a multi-stage normalization pipeline: exact string matching, historical auto-correction logic, hybrid dense + sparse vector search in Qdrant.",
          "Applied LLM-based re-ranking and reasoning for best match selection with justification and alternative suggestions."
        ]
      },
      {
        section: "5. Async Processing & Performance Optimization",
        points: [
          "Built a fully asynchronous pipeline using Python async/await, enabling parallel processing of 30–35 records concurrently.",
          "Optimized system for latency vs accuracy trade-offs using fast-path and fallback agent strategies."
        ]
      },
      {
        section: "6. Prompt Engineering & Observability",
        points: [
          "Implemented prompt versioning per registry and entity type to handle structural variability.",
          "Integrated observability using Langfuse for LLM tracing, token usage monitoring, and cost optimization."
        ]
      },
      {
        section: "7. Backend, Deployment & Security",
        points: [
          "Developed backend APIs using FastAPI and deployed services using Docker and AWS EC2.",
          "Implemented secure API access with JWT/OAuth and designed an ID-based controlled input system.",
          "Ensured reliability through error handling, retries, logging, and status tracking."
        ]
      },
      {
        section: "8. System Impact & Scalability",
        points: [
          "Enabled automated processing of large-scale clinical trial data, reducing manual effort and improving data standardization.",
          "Designed a scalable, production-ready GenAI system supporting downstream analytics and client applications."
        ]
      }
    ],

    additionalHighlights: [
      "Implemented hierarchical agent routing with conditional handoffs, enabling efficient task delegation across extraction and matching stages.",
      "Designed system to balance cost, latency, and accuracy by combining fast-path matching with fallback reasoning workflows.",
      "Integrated tool-based validation (web search) to improve classification accuracy of ambiguous entities (e.g., CRO vs institution).",
      "Ensured high system reliability through end-to-end tracing, structured logging, and failure handling across pipeline stages.",
      "Built a modular and extensible architecture, allowing easy onboarding of new registries, entity types, and workflows.",
      "Designed workflows to minimize redundant LLM calls, optimizing token usage and reducing operational costs.",
      "Implemented graceful degradation strategies, ensuring partial results are returned even in case of downstream failures.",
      "Enabled dynamic pipeline execution based on data quality and intermediate results, improving robustness across diverse inputs.",
      "Improved data consistency and normalization quality across multi-source datasets with varying formats and standards.",
      "Designed system with scalability in mind, supporting increasing data volume and concurrent processing requirements.",
      "Applied structured output handling to ensure consistent downstream consumption and API compatibility.",
      "Facilitated easy debugging and monitoring through traceable pipeline stages and detailed execution logs.",
      "Implemented standardized output schemas to maintain consistency across different entity types and registries.",
      "Improved system maintainability through modular code design and reusable components.",
      "Designed system to handle partial data availability, ensuring continuity in processing even with incomplete inputs.",
      "Designed workflows to handle variability in input data without impacting output consistency.",
      "Assisted in identifying performance bottlenecks and optimizing pipeline components accordingly.",
      "Built system components with a focus on extensibility and future enhancements.",
      "Ensured clear separation between data processing layers, improving readability and maintainability.",
      "Enabled efficient handling of multiple entity types within a unified pipeline architecture.",
      "Designed system to support continuous improvements without major architectural changes."
    ],

    metrics: [
      { label: "Global Registries", value: "40+" },
      { label: "Concurrent Records", value: "30-35" },
      { label: "Multi-Agent Handoffs", value: "3 Agents" },
      { label: "Observability", value: "Langfuse Traced" }
    ],

    techStack: [
      "FastAPI", "OpenAI GPT-4o mini", "OpenAI GPT-4.1", "Claude 3.5 Sonnet",
      "OpenAI Agents SDK", "Qdrant Vector DB", "BeautifulSoup (bs4)",
      "Python AsyncIO", "Langfuse", "Docker", "AWS EC2", "JWT / OAuth"
    ]
  },
  {
    id: "lamipak-chatbot",
    title: "Customer Support Management System & RAG Platform",
    subtitle: "Enterprise Complaint Resolution, SQL Querying & Trend Analytics",
    organization: "LamiPak (Chinese-Indonesian Packaging Co. Ltd.)",
    period: "July 2024 - December 2024",
    tag: "Enterprise RAG & Analytics",
    problemStatement: "Lami Packaging Co. Ltd. managed massive volumes of customer complaint records across countries, regions, and products stored across disparate Excel sheets and unstructured documents. Customer service teams struggled with slow issue resolution, lack of contextual history, and inability to analyze macro-trends in product defects in real-time. The goal was to centralize complaint data into SQL, build dynamic natural language query capabilities using LangChain agents, and deploy a multi-format RAG pipeline with Pinecone to deliver precise, context-aware responses and actionable trend analytics.",
    overview: "The Customer Support Management System is an advanced AI-powered solution designed to manage and analyze customer complaints for Lami Packaging Co. Ltd. The project involved integrating tabular data of customer complaints, categorized by country, region, product, and customer from Excel sheets into a SQL database. Using LangChain agents, the system enabled efficient data retrieval to answer user queries, generate actionable insights, perform trend analysis, and visualize data through dynamic charts. Additionally, a RAG pipeline was implemented with Pinecone as the vector database, allowing the system to process multi-format data files, including PDFs, CSVs, and images, to deliver precise and context-aware responses.",

    technologiesUsed: [
      { category: "Frontend", details: "React.js for creating user interfaces and visualizations" },
      { category: "Backend / APIs", details: "FastAPI (Python) for API development, LangChain agents for workflow orchestration and data extraction" },
      { category: "Database", details: "SQL for storing customer complaints, tabular data integration from CSV files into SQL for centralized access" },
      { category: "AI / NLP Models", details: "OpenAI GPT-4 for data analysis and generating responses, LangChain agents for query processing and retrieval" },
      { category: "Python Libraries", details: "Pandas and NumPy for data manipulation, Matplotlib and Seaborn for trend visualization, Pypdf for PDF parsing" },
      { category: "Vector Databases", details: "Pinecone for vector embeddings and RAG pipeline to process and retrieve multi-format data" },
      { category: "Data Processing Workflow", details: "LangChain agents for retrieving tabular data, GPT-4 for analysis, and OpenAI interpreter for graph plotting with Matplotlib and Seaborn" },
      { category: "Deployment", details: "Docker for containerization, Kubernetes for orchestration and scaling, ensuring smooth deployment and scalability" },
      { category: "MLOps Tools", details: "GitHub Actions for CI/CD pipelines, MLflow for model tracking and experimentation, and Jenkins for automating deployment workflows" },
      { category: "Cloud Services", details: "AWS for hosting databases, managing scalable infrastructure, and deploying the application seamlessly" }
    ],

    specifications: [
      {
        section: "1. Data Integration & Management",
        points: [
          "Integrated customer complaints data from Excel sheets into a centralized SQL database, categorized by country, region, product, and customer.",
          "Developed automated workflows for data retrieval, ensuring seamless access to historical customer interaction data."
        ]
      },
      {
        section: "2. AI & NLP Integration",
        points: [
          "Implemented LangChain agents for dynamic query processing, enhancing the system's ability to retrieve insights from structured data.",
          "Leveraged OpenAI GPT-4 for data analysis and response generation, providing context-aware, accurate answers to customer queries.",
          "Integrated a Retrieval-Augmented Generation (RAG) pipeline with Pinecone as the vector database, enabling multi-format data handling (PDFs, CSVs, images) and delivering precise responses."
        ]
      },
      {
        section: "3. Data Analysis & Trend Visualization",
        points: [
          "Utilized Pandas and NumPy for data manipulation, ensuring efficient handling of large datasets.",
          "Designed and implemented Matplotlib and Seaborn visualizations to analyze and display customer complaint trends, providing actionable insights for decision-makers."
        ]
      },
      {
        section: "4. Backend & API Development",
        points: [
          "Developed and maintained backend services using FastAPI for efficient API development and integration.",
          "Orchestrated workflows with LangChain agents, ensuring smooth data extraction and query processing across the platform."
        ]
      },
      {
        section: "5. Frontend & User Interface Development",
        points: [
          "Designed user interfaces using React, HTML, and JavaScript, allowing end-users to interact seamlessly with the platform and visualize data trends."
        ]
      },
      {
        section: "6. Cloud & Deployment",
        points: [
          "Deployed the system on AWS, leveraging cloud infrastructure for scalable database management and hosting.",
          "Used Docker for containerization and Kubernetes for orchestration, ensuring the system could scale to meet demand."
        ]
      },
      {
        section: "7. MLOps & CI/CD",
        points: [
          "Managed CI/CD pipelines using GitHub Actions to automate the deployment process.",
          "Utilized MLflow for model tracking, experimentation, and version control, ensuring model performance consistency.",
          "Automated deployment workflows using Jenkins, streamlining the release cycle."
        ]
      },
      {
        section: "8. Cross-Functional Collaboration",
        points: [
          "Worked closely with cross-functional teams to ensure the system met the client's operational and business needs.",
          "Provided regular updates and insights to Lami Packaging Co. Ltd., ensuring the platform delivered value through enhanced issue resolution and data-driven decisions."
        ]
      },
      {
        section: "9. Customer Insight & Decision Support",
        points: [
          "Empowered the client with data-driven insights that improved decision-making and enhanced operational efficiency by providing real-time, actionable reports and visualizations.",
          "Delivered in-depth trend analysis on customer complaints, allowing the client to identify recurring issues and focus on areas for improvement.",
          "Enabled proactive customer support by flagging potential problems before they escalate, ensuring quicker resolution times and better customer satisfaction.",
          "Assisted in improving the overall support experience by integrating advanced analytics into the platform, ensuring that both customers and support teams benefit from faster issue resolutions.",
          "Ensured the system's capability to handle multi-format data seamlessly, enabling contextual support responses based on historical data, reducing escalations and manual interventions.",
          "Continuously optimized the AI-driven system, ensuring that it adapted to emerging patterns in customer feedback."
        ]
      },
      {
        section: "10. Customer Support & Troubleshooting",
        points: [
          "Provided hands-on assistance to customers and support agents, ensuring they could easily navigate and utilize the system for efficient issue resolution.",
          "Analyzed customer feedback on the platform's effectiveness, continuously identifying opportunities for enhancements and better user experience.",
          "Offered troubleshooting support by addressing and resolving any technical challenges or issues faced by end-users."
        ]
      },
      {
        section: "11. Continuous Improvement & System Updates",
        points: [
          "Led the process of regular system maintenance and improvements, ensuring that all components functioned optimally.",
          "Identified areas for improvement in both AI-driven insights and customer support workflows, proposing updates to enhance system performance.",
          "Coordinated with product teams and stakeholders to ensure the platform evolved alongside new technological advancements.",
          "Implemented an agile feedback loop, working closely with the client to test new features and iterations."
        ]
      },
      {
        section: "12. Reporting & Metrics Management",
        points: [
          "Managed the generation of detailed reports and key performance indicators (KPIs) related to customer complaints, support interactions, and system usage.",
          "Established reporting frameworks that allowed Lami Packaging Co. Ltd. to track the effectiveness of customer support initiatives.",
          "Presented insights and reports regularly to the management team, helping them make informed decisions about resource allocation and process improvements."
        ]
      }
    ],

    additionalHighlights: [
      "Enabled context-aware retrieval across heterogeneous multi-format files (PDF, CSV, images) using Pinecone vector DB.",
      "Combined dynamic SQL generation with Python code execution for on-the-fly chart generation using Matplotlib and Seaborn.",
      "Automated deployment pipelines with GitHub Actions, MLflow model tracking, and Jenkins continuous integration.",
      "Directly reduced customer complaint escalation rates and accelerated mean time to resolution (MTTR)."
    ],

    metrics: [
      { label: "Vector Database", value: "Pinecone" },
      { label: "Data Formats", value: "PDF, CSV, Images" },
      { label: "MLOps", value: "MLflow + Actions" },
      { label: "Cloud Infra", value: "AWS + K8s" }
    ],

    techStack: [
      "React.js", "FastAPI", "LangChain Agents", "SQL Database",
      "OpenAI GPT-4", "Pinecone Vector DB", "Pandas", "NumPy",
      "Matplotlib", "Seaborn", "Pypdf", "Docker", "Kubernetes", "AWS", "MLflow", "Jenkins"
    ]
  },
  {
    id: "smart-lms",
    title: "Smart LMS for EdTech",
    subtitle: "AI-Driven Multilingual Learning Management Platform in 25 Languages",
    organization: "Vridhee Innovations Pvt Ltd, Hyderabad",
    period: "April 2023 - June 2024",
    tag: "Fine-Tuning & EdTech",
    problemStatement: "Educational content across Class 6 to college levels often faces severe language barriers, static non-interactive textbooks, and lack of alignment with pedagogical benchmarks such as Bloom's Taxonomy. The objective was to build a comprehensive, AI-driven educational platform supporting 25 languages that dynamically generates real-time explanations, solved exercises, interactive assignments, and cognitive-tier question banks with low-latency LLM inference.",
    overview: "Smart LMS is an AI-driven multilingual Learning Management System (LMS) tailored for students from Class 6 to college level. Our platform delivers comprehensive educational content in 25 languages, combining AI-explained concepts, real-time examples, interactive assignments, solved exercises, and a diverse question bank aligned with Bloom's Taxonomy. This breaks language barriers, offering personalized learning experiences and fostering academic excellence globally.",

    technologiesUsed: [
      { category: "Frontend", details: "React for building dynamic and interactive user interfaces; HTML and JavaScript for markup and client-side scripting" },
      { category: "Backend / APIs", details: "Node.js for server-side JavaScript runtime; FastAPI (Python) for building efficient and modern web APIs" },
      { category: "Database", details: "MongoDB for scalable and flexible NoSQL database storage" },
      { category: "AI / NLP Models", details: "ChatGPT for conversational AI and natural language processing; LLMs for advanced text generation; Mistral-instruct for specialized AI models tailored for educational content; Gemma for multilingual translation" },
      { category: "Python Libraries", details: "NLTK (Natural Language Toolkit) for NLP tasks; PyTorch for building and training deep learning models" },
      { category: "Vector Databases", details: "Pinecone for building real-time vector search applications; LanceDB for distributed vector database management and retrieval" },
      { category: "Containerization", details: "Docker for containerizing applications and facilitating deployment" },
      { category: "Cloud Services", details: "AWS (Amazon Web Services) for scalable cloud infrastructure and services" },
      { category: "Additional Tools / Frameworks", details: "Ollama for AI-driven educational content generation; vLLM for optimizing language models; Langchain for model orchestration; LlamaIndex for indexing and retrieval of educational resources; TRL library for fine-tuning" }
    ],

    specifications: [
      {
        section: "1. Project Leadership & Documentation",
        points: [
          "Led the Smart LMS portal project, overseeing end-to-end development and implementation.",
          "Prepared High-Level Documents (HLD) and Low-Level Documents (LLD) outlining project architecture, requirements, and specifications.",
          "Developed roadmaps for project milestones, timelines, and deliverables, ensuring strict alignment with organizational goals."
        ]
      },
      {
        section: "2. Knowledge Transfer (KT) & Team Collaboration",
        points: [
          "Provided Knowledge Transfer (KT) sessions to developers, imparting expertise in LLM fine-tuning and vector indexing.",
          "Collaborated with cross-functional teams to ensure alignment and coordination throughout the development lifecycle."
        ]
      },
      {
        section: "3. Research & Development (R&D) for Advanced AI Models",
        points: [
          "Conducted R&D to enhance Large Language Model performance for educational content generation and optimization.",
          "Fine-tuned LLMs for HTML-based content generation and JSON-based Multiple-Choice Questions (MCQs) generation leveraging Bloom's Taxonomy."
        ]
      },
      {
        section: "4. AI-Driven Content Generation",
        points: [
          "Leveraged ChatGPT and Gemini AI models to generate explanations, real-life examples, and assignments for each subject and topic.",
          "Generated questions based on Bloom's Taxonomy categories (Knowledge, Comprehension, Application, Analysis, Synthesis, Evaluation) to assess diverse cognitive levels."
        ]
      },
      {
        section: "5. Fine-Tuned AI Models for Text Generation & Translation",
        points: [
          "Fine-tuned Mistral-based model for HTML format text generation, enabling optimized content rendering within the Smart LMS portal.",
          "Fine-tuned Gemma model for multilingual language translation, facilitating content accessibility across 25 languages."
        ]
      },
      {
        section: "6. Chat Interface for Student Interaction",
        points: [
          "Developed a chat interface using React.js and Node.js, enabling students to ask questions, seek clarifications, and interact with AI-generated content.",
          "Integrated natural language processing (NLP) capabilities to facilitate conversational interactions and provide personalized responses."
        ]
      },
      {
        section: "7. Video Recommendations for Enhanced Learning",
        points: [
          "Implemented a feature to recommend videos related to topics and concepts in each subject, providing students with additional resources to enhance understanding."
        ]
      },
      {
        section: "8. Technology Stack & Deployment Architecture",
        points: [
          "Frontend developed with React.js for interactive visualization of educational content and real-time chat functionalities.",
          "Backend APIs implemented with Node.js to handle chat interactions and FastAPI for Python AI integration.",
          "Leveraged TRL library, vLLM, and LangChain to load and orchestrate fine-tuned AI models, optimizing content generation and translation processes."
        ]
      },
      {
        section: "9. Assignment Generation & Visualization",
        points: [
          "Implemented AI-driven assignment generation based on curriculum and Bloom's Taxonomy categories.",
          "Rendered AI-generated content in HTML format within the React-based frontend for intuitive visualization and interaction."
        ]
      },
      {
        section: "10. Scalability & Performance Optimization",
        points: [
          "Ensured high scalability and throughput using Node.js and FastAPI for efficient data processing and real-time interactions.",
          "Deployed using Docker containers on AWS cloud infrastructure."
        ]
      },
      {
        section: "11. User Interface Design & Accessibility",
        points: [
          "Developed a modern and intuitive user interface using React.js, enhancing student user experience and accessibility.",
          "Implemented HTML-based visualization techniques to present educational materials effectively on-screen."
        ]
      },
      {
        section: "12. MLflow for MLOps and CI/CD",
        points: [
          "Implemented MLflow for efficient MLOps, enabling model versioning, experiment tracking, and reproducibility.",
          "Incorporated CI/CD practices for seamless deployment and updates of the chatbot system, ensuring continuous integration and delivery."
        ]
      }
    ],

    additionalHighlights: [
      "Supported 25 regional and international languages without semantic translation degradation.",
      "Strict pedagogical mapping to all 6 Bloom's Taxonomy cognitive levels.",
      "High-throughput LLM serving optimized via vLLM inference engine.",
      "Dual vector database architecture utilizing Pinecone and LanceDB for fast similarity search."
    ],

    metrics: [
      { label: "Languages Supported", value: "25 Languages" },
      { label: "Pedagogical Framework", value: "Bloom's Taxonomy" },
      { label: "Serving Engine", value: "vLLM Inference" },
      { label: "Models Fine-Tuned", value: "Mistral & Gemma" }
    ],

    techStack: [
      "React.js", "Node.js", "FastAPI", "MongoDB", "Mistral-Instruct", "Gemma",
      "ChatGPT", "Gemini AI", "Pinecone", "LanceDB", "Docker", "AWS",
      "vLLM", "TRL Library", "LangChain", "LlamaIndex", "MLflow"
    ]
  },
  {
    id: "megatron-chatbot",
    title: "MegaTron - Omnichannel Industry Conversational Chatbot",
    subtitle: "High-Throughput Enterprise Conversational System with Speech & IR",
    organization: "ConvergeOne Inc., Minnesota, USA",
    period: "October 2021 - May 2022",
    tag: "NLP & High Throughput",
    problemStatement: "Enterprise customer service desks across industries face high query concurrency (thousands of hits per second), requiring automated intent classification, natural text summarization, speech-to-text conversion, and intelligent retrieval over massive knowledge bases with minimal response latency.",
    overview: "To build a smart Conversational system or Chatbot, which provides support services and can be trained by itself across any industry or domain. Explored and tested over 30 Transformer-based architectures, finalizing a fine-tuned BART-large model for summarization and translation, coupled with Google REALM and RoBERTa for sentence clustering, integrated Automatic Speech Recognition (ASR), and MongoDB m10/m20 instances scaling to 2,000 hits per second.",

    technologiesUsed: [
      { category: "Core Technologies", details: "Deep learning, NLP, Web scraping, FastAPI, Flask, Transformers, BERT, GPT, ALBERT, RoBERTa, DistilBERT, BART-large, ASR, PyTorch" },
      { category: "Information Retrieval", details: "Google REALM and RoBERTa for sentence clustering and contextual summarization" },
      { category: "Speech Integration", details: "Automatic Speech Recognition (ASR) for voice input processing and speech-to-text conversion" },
      { category: "Databases", details: "MongoDB m10 & m20 instances handling high throughput up to 2,000 hits per second; MySQL" },
      { category: "Optimization & Evaluation", details: "Weight pruning and model quantization for faster inference; ROUGE, BLEU, and METEOR evaluation metrics" },
      { category: "MLOps & CI/CD", details: "MLflow for model versioning, experiment tracking, and reproducibility; Docker containerization" }
    ],

    specifications: [
      {
        section: "1. Conversational Data Preparation & Intent Classification",
        points: [
          "Prepared conversational data from Skype support services and performed rigorous preprocessing steps.",
          "Classified customer data into required intents for effective conversational interaction."
        ]
      },
      {
        section: "2. AI Model Exploration & Testing",
        points: [
          "Explored and benchmarked over 30 Transformer-based models for designing a robust Question-Answer generation system."
        ]
      },
      {
        section: "3. AI Model Selection & Fine-Tuning",
        points: [
          "Finalized a pre-trained BART-large model for Language Translation and Conditional Text Summarization, enabling accurate answer generation within the Q&A system."
        ]
      },
      {
        section: "4. Information Retrieval Systems Implementation",
        points: [
          "Implemented information retrieval systems such as Google REALM and RoBERTa for sentence clustering and contextual summarization."
        ]
      },
      {
        section: "5. Dataset Exploration & Training",
        points: [
          "Explored multiple open-domain Question Answering datasets including SQuAD, SQuAD v2, NQ (Natural Questions), TriviaQA, Beer QA, and ELI5 for training."
        ]
      },
      {
        section: "6. Speech Recognition & API Integration",
        points: [
          "Implemented Automatic Speech Recognition (ASR) for voice input processing and audio-to-text conversion directly in the chatbot UI.",
          "Integrated Language APIs, Location APIs, and Web Scraping APIs for enhanced barrier reduction."
        ]
      },
      {
        section: "7. Performance Evaluation & Model Optimization",
        points: [
          "Evaluated generation quality using ROUGE scores, BLEU, and METEOR metrics.",
          "Applied model compression techniques such as Pruning and Quantization to optimize Large Language Models for faster inferencing."
        ]
      },
      {
        section: "8. Backend Architecture & High Throughput",
        points: [
          "Developed backend services using Flask and FastAPI for high-throughput deployment.",
          "Integrated MongoDB m10 & m20 instances to handle high-throughput data processing supporting up to 2,000 hits per second."
        ]
      },
      {
        section: "9. MLOps & Continuous Delivery",
        points: [
          "Implemented MLflow for efficient MLOps, enabling model versioning, experiment tracking, and reproducibility.",
          "Incorporated CI/CD practices for seamless deployment and updates of the chatbot system."
        ]
      },
      {
        section: "10. Industry Integration & Domain Versatility",
        points: [
          "Designed the chatbot architecture to be domain-agnostic, easily plugged into any industry customer support ecosystem."
        ]
      }
    ],

    additionalHighlights: [
      "Benchmark testing across 30+ transformer models including BERT, ALBERT, RoBERTa, DistilBERT, and BART.",
      "Quantization and weight pruning drastically lowered inference latency.",
      "Scalable database cluster architected to handle up to 2,000 queries per second.",
      "Multimodal input support with voice transcription via ASR."
    ],

    metrics: [
      { label: "Peak Throughput", value: "2,000 req/s" },
      { label: "Models Evaluated", value: "30+ Transformers" },
      { label: "Benchmark Datasets", value: "SQuAD, NQ, TriviaQA" },
      { label: "Voice Support", value: "Integrated ASR" }
    ],

    techStack: [
      "Python", "FastAPI", "Flask", "BART-large", "RoBERTa", "Google REALM",
      "ASR (Speech-to-Text)", "Transformers", "PyTorch", "MongoDB m10/m20",
      "MySQL", "Docker", "MLflow"
    ]
  },
  {
    id: "battery-adr",
    title: "Automatic Defect Recognition (ADR) for Li-ion Batteries",
    subtitle: "High-Precision Computer Vision Micro-Defect Inspection System",
    organization: "Baker Hughes - GE Company, Bangalore",
    period: "October 2020 - August 2021",
    tag: "Computer Vision & Edge",
    problemStatement: "In the energy and electric vehicle automotive domains, Lithium-ion batteries must meet zero-tolerance safety tolerances. Micro-defects such as internal cracks, partial cracks, tear drops, and chemical inclusions can cause catastrophic thermal runaways. Manual human inspection is unable to detect microscopic anomalies at production line speeds, and physical defect samples are scarce, leading to skewed training data.",
    overview: "Built an Automatic Defect Recognition (ADR) System for inspecting and detecting all possible microscopic internal defects inside Lithium-ion batteries using deep learning computer vision. Generated synthetic defect images of Battery MidTab Surfaces using GANs and VAEs to overcome data scarcity, developed an end-to-end training and inference pipeline with PyTorch Lightning, and served real-time predictions using TorchServe on Nvidia DGX GPU infrastructure.",

    technologiesUsed: [
      { category: "Deep Learning & Vision", details: "Deep learning, Computer vision, PyTorch, PyTorch Lightning, TorchServe, Faster R-CNN, YOLO-v5, Mask R-CNN, U-Net, OpenCV, Mon.Ai" },
      { category: "Synthetic Data Generation", details: "Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs) for synthesizing MidTab surface defects" },
      { category: "Data Augmentation", details: "Albumentations library for rigorous industrial environmental condition simulation" },
      { category: "Hardware & Acceleration", details: "Nvidia DGX GPUs for accelerated deep model training and high-throughput inference" },
      { category: "Deployment", details: "TorchServe serving pipeline for live demonstration and industrial integration" }
    ],

    specifications: [
      {
        section: "1. Comprehensive Defect Modeling",
        points: [
          "Addressed all critical defect classes: Cracks, Partial Cracks, Tear Drops, and Inclusions on lithium-ion battery cells.",
          "Prepared highly accurate labeled image datasets for supervised training."
        ]
      },
      {
        section: "2. Synthetic Image Generation with Generative AI",
        points: [
          "Generated realistic synthetic images of Battery MidTab Surface defects using GANs (Generative Adversarial Networks) and VAEs (Variational Autoencoders) to solve class imbalance."
        ]
      },
      {
        section: "3. Algorithm Exploration & Benchmarking",
        points: [
          "Conducted deep R&D experimenting with Faster R-CNN, YOLO-v5, Single Shot MultiBox Detectors (SSDs), and Mask R-CNN.",
          "Explored medical/industrial imaging tools including Mon.Ai and Albumentations for image transformations."
        ]
      },
      {
        section: "4. Training & Inference Serving Pipeline",
        points: [
          "Engineered an end-to-end training and inference pipeline using PyTorch Lightning.",
          "Packaged and served models via TorchServe to serve as a real-time demo inspection tool for the organization and client stakeholders."
        ]
      },
      {
        section: "5. Leadership & Knowledge Transfer",
        points: [
          "Provided comprehensive Knowledge Transfer (KT) sessions to team members and client-side engineering leads.",
          "Led technical implementation across a 20-member engineering team."
        ]
      }
    ],

    additionalHighlights: [
      "Pioneered generative synthetic data augmentation for rare industrial defect classes.",
      "High-precision localization of sub-millimeter microscopic battery defects.",
      "Production-ready serving architecture built on TorchServe and PyTorch Lightning.",
      "Optimized for high-throughput automated factory conveyor belts."
    ],

    metrics: [
      { label: "Defect Types", value: "Cracks, Tears, Inclusions" },
      { label: "Data Augmentation", value: "GANs & VAEs" },
      { label: "Model Serving", value: "TorchServe" },
      { label: "Compute Hardware", value: "Nvidia DGX GPUs" }
    ],

    techStack: [
      "PyTorch", "PyTorch Lightning", "Faster R-CNN", "YOLO-v5",
      "Mask R-CNN", "U-Net", "TorchServe", "GANs & VAEs", "OpenCV",
      "Albumentations", "Mon.Ai", "Nvidia DGX GPUs"
    ]
  },
  {
    id: "hands-safety",
    title: "Industrial Hand Detection & Worker Machinery Safety System",
    subtitle: "Real-Time Embedded Computer Vision Safety Protection",
    organization: "iNeuron Intelligence PVT LTD, Bangalore",
    period: "November 2019 - September 2020",
    tag: "Computer Vision & Edge",
    problemStatement: "Heavy industrial waste shredder machinery poses extreme physical hazards to factory workers. Accidental hand contact with shredder blades results in catastrophic, irreversible injuries. Existing mechanical guards were inadequate for manual sorting workflows. The goal was to engineer a real-time, low-latency computer vision safety barrier deployed directly on edge devices (Raspberry Pi) that detects human hands entering dangerous threshold zones and trips the machine's electrical emergency breakers within milliseconds.",
    overview: "Built a vision-based safety solution for a waste shredding plant to save workers' hands from high-speed shredder blades. Captured worker hand imagery under extreme lighting and dust conditions, performed augmentations, trained quantized Faster R-CNN, YOLO-v3, and MobileNet SSD models, and deployed on Raspberry Pi boards interfacing directly with machine circuitry via socket programming and ROS.",

    technologiesUsed: [
      { category: "Computer Vision & Modeling", details: "Detectron2, MM_Detection, Faster R-CNN, YOLO-v3, MobileNet SSD, OpenCV, PyTorch" },
      { category: "Annotation & Augmentation", details: "CVAT, LabelImg in COCO format, Albumentations library for factory environmental simulation" },
      { category: "Embedded Systems & IoT", details: "Raspberry Pi boards, ROS (Robot Operating System), Socket programming, GPIO machine circuit breakers" },
      { category: "Inference Acceleration", details: "Model quantization and pruning to achieve high FPS inference on low-power edge hardware" },
      { category: "Deployment & APIs", details: "Flask API for model serving, Docker containerization, Nvidia Tesla V100 for model training" }
    ],

    specifications: [
      {
        section: "1. Field Data Collection & COCO Annotation",
        points: [
          "Collected worker hand images directly at the shredder plant, accounting for variable factory lighting, shadows, dust, and working gloves.",
          "Performed rigorous data augmentation with the Albumentations library.",
          "Labeled training images in COCO format using the LabelImg tool."
        ]
      },
      {
        section: "2. Algorithm Exploration & Benchmarking",
        points: [
          "Benchmarked multiple state-of-the-art architectures: Faster R-CNN, YOLO-v3, and MobileNet SSD for detecting hands accurately under occlusion."
        ]
      },
      {
        section: "3. Edge Quantization for Real-Time FPS",
        points: [
          "Performed model quantization to maximize inference FPS on low-power hardware, ensuring near-instantaneous emergency trip response."
        ]
      },
      {
        section: "4. Camera Exploration & Sensor Integration",
        points: [
          "Evaluated and deployed multiple industrial camera variants to ensure reliable optical coverage of the hazardous shredder intake area."
        ]
      },
      {
        section: "5. Embedded Hardware & Machine Interfacing",
        points: [
          "Utilized Raspberry Pi boards with socket programming and ROS to bridge the computer vision detector directly with the machine's electrical trip circuit.",
          "Handled on-site installation of embedded hardware and validated real-time safety response on client premises."
        ]
      },
      {
        section: "6. Image Processing & API Serving",
        points: [
          "Leveraged OpenCV for image filtering, contrast adjustment, and bounding box visualization.",
          "Deployed a lightweight Flask API for object detector telemetry and status monitoring."
        ]
      }
    ],

    additionalHighlights: [
      "Hardware-in-the-loop safety cutoff system saving workers from severe factory accidents.",
      "Quantized neural networks running real-time on edge Raspberry Pi boards.",
      "Robust detection across diverse lighting, gloves, and occlusions in harsh factory environments.",
      "Direct integration with mechanical machine breakers via low-level GPIO sockets."
    ],

    metrics: [
      { label: "Target Hardware", value: "Raspberry Pi & Edge" },
      { label: "Inference Speed", value: "High FPS Quantized" },
      { label: "Safety Cutoff", value: "Low-Latency Millisecond" },
      { label: "Models Benchmarked", value: "YOLO, SSD, R-CNN" }
    ],

    techStack: [
      "Computer Vision", "Detectron2", "Faster R-CNN", "YOLO-v3",
      "MobileNet SSD", "Raspberry Pi", "ROS", "OpenCV",
      "Socket Programming", "Docker", "Flask", "Nvidia Tesla V100"
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
