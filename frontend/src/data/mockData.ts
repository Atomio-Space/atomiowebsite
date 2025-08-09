// Mock data to simulate Supabase tables
// Following the schema from BACKEND.md

// Services data
export const services = [
  {
    id: "1",
    name: "Custom Software Development",
    slug: "custom-software-development",
    short_description: "Tailored software solutions that scale with your business needs.",
    full_description: "Our custom software development service creates bespoke applications designed specifically for your unique business challenges. We deliver scalable, maintainable, and secure software that grows with your organization.",
    icon_name: "Code",
    features: ["Full-stack development", "Cloud architecture", "API integration", "DevOps implementation"],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    pricing_model: "custom",
    is_featured: true,
    display_order: 1,
    status: "active"
  },
  {
    id: "2",
    name: "AI & LLM Solutions",
    slug: "ai-llm-solutions",
    short_description: "Intelligent automation and language processing for modern businesses.",
    full_description: "Harness the power of artificial intelligence and large language models to transform your business processes. We build custom AI solutions that automate tasks, generate insights, and create new opportunities for innovation.",
    icon_name: "Brain",
    features: ["Custom LLM integration", "Intelligent automation", "Data analysis", "Predictive modeling"],
    technologies: ["OpenAI", "LangChain", "Python", "TensorFlow", "PyTorch"],
    pricing_model: "custom",
    is_featured: true,
    display_order: 2,
    status: "active"
  },
  {
    id: "3",
    name: "IT Support and Consulting",
    slug: "it-support-consulting",
    short_description: "Comprehensive IT support and strategic technology consulting for growing businesses.",
    full_description: "Our IT support and consulting services provide businesses with reliable technical support, strategic technology planning, and expert guidance to optimize their IT infrastructure. We ensure your technology works seamlessly so you can focus on growing your business.",
    icon_name: "Settings",
    features: ["24/7 technical support", "Strategic IT planning", "System optimization"],
    technologies: ["Microsoft 365", "Network Management", "Security Solutions", "Backup Systems", "Help Desk"],
    pricing_model: "fixed",
    is_featured: true,
    display_order: 3,
    status: "active"
  },
  {
    id: "4",
    name: "Data Engineering",
    slug: "data-engineering",
    short_description: "Turn your data into a competitive advantage with robust data pipelines and analytics.",
    full_description: "Our data engineering services help you collect, process, and analyze large volumes of data to drive business decisions. We build scalable data pipelines, warehouses, and analytics platforms that turn raw data into actionable insights.",
    icon_name: "Database",
    features: ["Data pipeline development", "ETL processes", "Data warehousing", "Business intelligence"],
    technologies: ["Apache Spark", "Airflow", "Snowflake", "dbt", "Tableau"],
    pricing_model: "fixed",
    is_featured: false,
    display_order: 4,
    status: "active"
  },
  {
    id: "5",
    name: "Digital Transformation",
    slug: "digital-transformation",
    short_description: "Comprehensive strategies to modernize your business for the digital age.",
    full_description: "Our digital transformation service provides end-to-end guidance for organizations looking to modernize their technology stack, processes, and culture. We help you navigate the complexities of digital evolution with strategic roadmaps and implementation support.",
    icon_name: "Zap",
    features: ["Technology assessment", "Roadmap development", "Process optimization", "Change management"],
    technologies: ["Agile methodologies", "DevOps", "Cloud migration", "Legacy modernization"],
    pricing_model: "custom",
    is_featured: false,
    display_order: 5,
    status: "active"
  }
];

// Products data
export const products = [
  {
    id: "1",
    name: "Sema AI",
    slug: "sema-ai",
    tagline: "Breaking language barriers in real-time",
    short_description: "Advanced language translation powered by cutting-edge AI technology.",
    full_description: "Sema AI is a revolutionary language translation platform that leverages the latest advancements in artificial intelligence to provide fast, accurate, and contextually aware translations for businesses operating globally.",
    problem_statement: "Global businesses struggle with accurate, real-time translation that preserves industry-specific terminology and context.",
    key_features: [
      { title: "Real-time Translation", description: "Instant translation across 100+ languages" },
      { title: "Context Awareness", description: "Industry-specific terminology and context preservation" },
      { title: "API Integration", description: "Seamless integration with existing systems through robust APIs" },
      { title: "Custom Vocabulary", description: "Train the system with your organization's specific terminology" }
    ],
    benefits: [
      "Expand global reach without language barriers",
      "Improve international customer experience",
      "Streamline multilingual content management",
      "Reduce translation costs by up to 60%"
    ],
    image_url: "https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    is_featured: true,
    is_available: true,
    status: "active"
  },
  {
    id: "2",
    name: "Seamo",
    slug: "seamo",
    tagline: "Project management tailored for marine research",
    short_description: "Specialized project management tools designed for marine scientists and researchers.",
    full_description: "Seamo is the first comprehensive project management platform built specifically for marine research organizations. It combines traditional project management capabilities with specialized tools for oceanographic data collection, analysis, and collaboration.",
    problem_statement: "Marine research teams lack specialized tools that combine project management with scientific data handling capabilities.",
    key_features: [
      { title: "Research Workflows", description: "Streamlined research project management with custom workflows" },
      { title: "Data Collection", description: "Integrated tools for oceanographic data collection and organization" },
      { title: "Collaboration Tools", description: "Secure sharing and collaboration features for research teams" },
      { title: "Grant Management", description: "Track funding, expenses, and reporting requirements" }
    ],
    benefits: [
      "Increase research efficiency by 40%",
      "Improve data quality and reproducibility",
      "Enhance collaboration across international research teams",
      "Simplify compliance with funding agency requirements"
    ],
    image_url: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    is_featured: true,
    is_available: true,
    status: "active"
  }
];



// Blog posts data
export const blogPosts = [
  {
    id: "1",
    title: "The Future of Enterprise AI: Beyond the Hype",
    slug: "future-of-enterprise-ai",
    excerpt: "Examining how enterprises are implementing AI beyond the initial hype cycle to create lasting business value.",
    content: "This is a placeholder for the full blog content.",
    featured_image_url: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author_id: "1",
    category: "ai",
    tags: ["enterprise-ai", "machine-learning", "digital-transformation"],
    reading_time: 8,
    is_published: true,
    is_featured: true,
    published_at: "2023-11-15T08:00:00Z"
  },
  {
    id: "2",
    title: "Building Resilient Cloud Architectures",
    slug: "resilient-cloud-architectures",
    excerpt: "Learn the key principles for designing cloud systems that can withstand failures and maintain performance under stress.",
    content: "This is a placeholder for the full blog content.",
    featured_image_url: "https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author_id: "2",
    category: "tech",
    tags: ["cloud-architecture", "reliability-engineering", "devops"],
    reading_time: 10,
    is_published: true,
    is_featured: true,
    published_at: "2023-10-22T08:00:00Z"
  },
  {
    id: "3",
    title: "The Rise of Specialized AI Models in Business",
    slug: "specialized-ai-models",
    excerpt: "Why businesses are moving away from general-purpose AI to domain-specific models trained on their unique data.",
    content: "This is a placeholder for the full blog content.",
    featured_image_url: "https://images.unsplash.com/photo-1677442135066-8ca12e376a3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author_id: "1",
    category: "ai",
    tags: ["specialized-ai", "industry-specific-models", "enterprise-ai"],
    reading_time: 7,
    is_published: true,
    is_featured: false,
    published_at: "2023-09-05T08:00:00Z"
  }
];

// Clients data
export const clients = [
  {
    id: "1",
    company_name: "TechGlobal",
    logo_url: "https://via.placeholder.com/150x50.png?text=TechGlobal",
    industry: "Technology",
    testimonial: "Atomio transformed our data infrastructure, enabling us to process customer insights 10x faster.",
    testimonial_author: "Sarah Chen",
    testimonial_position: "CTO",
    is_featured: true
  },
  {
    id: "2",
    company_name: "FinSecure",
    logo_url: "https://via.placeholder.com/150x50.png?text=FinSecure",
    industry: "Finance",
    testimonial: "The custom AI solution developed by Atomio has reduced our transaction fraud by 60% in just three months.",
    testimonial_author: "Michael Rodriguez",
    testimonial_position: "Head of Security",
    is_featured: true
  },
  {
    id: "3",
    company_name: "HealthPlus",
    logo_url: "https://via.placeholder.com/150x50.png?text=HealthPlus",
    industry: "Healthcare",
    testimonial: "Working with Atomio on our secure patient platform was seamless. They understood our complex requirements from day one.",
    testimonial_author: "Dr. Amara Johnson",
    testimonial_position: "Innovation Director",
    is_featured: true
  },
  {
    id: "4",
    company_name: "RetailNow",
    logo_url: "https://via.placeholder.com/150x50.png?text=RetailNow",
    industry: "Retail",
    testimonial: "Atomio's customer service AI has transformed how we engage with customers, handling 70% of inquiries automatically.",
    testimonial_author: "Thomas White",
    testimonial_position: "VP of Customer Experience",
    is_featured: false
  },
  {
    id: "5",
    company_name: "ManufactureX",
    logo_url: "https://via.placeholder.com/150x50.png?text=ManufactureX",
    industry: "Manufacturing",
    testimonial: "The cloud migration led by Atomio reduced our infrastructure costs by 40% while improving system reliability.",
    testimonial_author: "Lisa Montgomery",
    testimonial_position: "CIO",
    is_featured: true
  }
];

// Team members data
export const teamMembers = [
  {
    id: "1",
    full_name: "Alex Morgan",
    role: "CEO & Founder",
    department: "executive",
    bio: "Alex has over 15 years of experience in enterprise software development and AI research. Prior to founding Atomio, he led engineering teams at Microsoft and Google.",
    expertise: ["Enterprise Architecture", "AI Strategy", "Team Leadership", "Product Vision"],
    avatar_url: "https://randomuser.me/api/portraits/men/32.jpg",
    is_featured: true
  },
  {
    id: "2",
    full_name: "Sophia Chen",
    role: "CTO",
    department: "engineering",
    bio: "Sophia is an AI researcher turned technology leader with a Ph.D. in Machine Learning from Stanford. She oversees all technical strategy and implementation at Atomio.",
    expertise: ["Machine Learning", "Natural Language Processing", "Distributed Systems", "Research"],
    avatar_url: "https://randomuser.me/api/portraits/women/44.jpg",
    is_featured: true
  },
  {
    id: "3",
    full_name: "Marcus Johnson",
    role: "Head of AI Solutions",
    department: "engineering",
    bio: "Marcus specializes in developing custom AI solutions for enterprise clients, with expertise in LLMs and computer vision systems.",
    expertise: ["Large Language Models", "Computer Vision", "Deployment Architecture", "AI Ethics"],
    avatar_url: "https://randomuser.me/api/portraits/men/22.jpg",
    is_featured: true
  },
  {
    id: "4",
    full_name: "Priya Sharma",
    role: "Lead Data Engineer",
    department: "engineering",
    bio: "Priya has designed and implemented data pipelines for Fortune 500 companies, specializing in real-time analytics and data warehousing.",
    expertise: ["Data Architecture", "ETL Pipelines", "Big Data", "Data Governance"],
    avatar_url: "https://randomuser.me/api/portraits/women/29.jpg",
    is_featured: true
  }
];

// Data fetching functions that simulate Supabase calls
export async function getServices() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return services.filter(service => service.status === 'active');
}

export async function getFeaturedServices() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return services.filter(service => service.is_featured && service.status === 'active');
}



export async function getProducts() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return products.filter(product => product.status === 'active');
}

export async function getFeaturedProducts() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return products.filter(product => product.is_featured && product.status === 'active');
}

export async function getFeaturedBlogPosts() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return blogPosts.filter(post => post.is_published && post.is_featured);
}

export async function getFeaturedClients() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return clients.filter(client => client.is_featured);
}

export async function getFeaturedTeamMembers() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return teamMembers.filter(member => member.is_featured);
}

// Customer Stories data
export const customerStories = [
  {
    id: "laxmi-group",
    brandName: "Laxmi Group",
    quote: "Atomio's expertise in web development has been instrumental in establishing our digital presence. Their understanding of the construction industry and attention to detail is exceptional.",
    readStoryUrl: "/testimonials/laxmi-group",
    author: {
      name: "Rajesh Laxmi",
      role: "Managing Director",
      avatar: "/images/avatars/rajesh-laxmi.jpg"
    },
    logoUrl: "/images/logos/laxmi-group-logo.svg"
  },
  {
    id: "eacon",
    brandName: "Eacon",
    quote: "From website development to custom software solutions, Atomio has transformed our business operations. Their comprehensive approach to digital transformation is remarkable.",
    readStoryUrl: "/testimonials/eacon",
    author: {
      name: "Sarah Mitchell",
      role: "Operations Director",
      avatar: "/images/avatars/sarah-mitchell.jpg"
    },
    logoUrl: "/images/logos/eacon-logo.svg"
  },
  {
    id: "growth-agric",
    brandName: "Growth Agric",
    quote: "Atomio didn't just build us a website - they provided complete digital infrastructure including email setup and domain management. Perfect for a growing startup like ours.",
    readStoryUrl: "/testimonials/growth-agric",
    author: {
      name: "Adebayo Ogundimu",
      role: "Founder & CEO",
      avatar: "/images/avatars/adebayo-ogundimu.jpg"
    },
    logoUrl: "/images/logos/growth-agric-logo.svg"
  },
  {
    id: "safeharbor",
    brandName: "SafeHarbor",
    quote: "Atomio delivered a complete brand transformation - from logo design to website development and ongoing tech support. Their expertise in HSE consulting industry is evident.",
    readStoryUrl: "/testimonials/safeharbor",
    author: {
      name: "Michael Thompson",
      role: "Principal Consultant",
      avatar: "/images/avatars/michael-thompson.jpg"
    },
    logoUrl: "/images/logos/safeharbor-logo.svg"
  },
  {
    id: "amara",
    brandName: "Amara Nursing Home",
    quote: "Working with Atomio from Seattle to Nairobi was seamless. They handled everything from website development to technical infrastructure setup with professionalism.",
    readStoryUrl: "/testimonials/amara",
    author: {
      name: "Dr. Patricia Williams",
      role: "Registered Nurse & Director",
      avatar: "/images/avatars/patricia-williams.jpg"
    },
    logoUrl: "/images/logos/amara-logo.svg"
  },
  {
    id: "chanilall-partnership",
    brandName: "Chanilall Partnership",
    quote: "Atomio's migration of our 21GB email data to MS365 was flawless. Their technical expertise and project management made the transition completely seamless.",
    readStoryUrl: "/testimonials/chanilall-partnership",
    author: {
      name: "Priya Chanilall",
      role: "Managing Partner",
      avatar: "/images/avatars/priya-chanilall.jpg"
    },
    logoUrl: "/images/logos/chanilall-partnership-logo.svg"
  }
];

export async function getCustomerStories() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return customerStories;
}
