# Backend Architecture & Data Management
## Atomio Technologies Website

This document outlines the backend architecture, database design, API specifications, and data management strategies for the Atomio Technologies website.

## 🏗 Architecture Overview

### Technology Stack
- **Database**: Supabase (PostgreSQL with real-time capabilities)
- **Authentication**: Supabase Auth (for admin panel)
- **API**: Supabase REST API + Real-time subscriptions
- **File Storage**: Supabase Storage (for images, documents)
- **Edge Functions**: Supabase Edge Functions (for business logic)
- **CDN**: Supabase CDN for global asset delivery

### Deployment Architecture
```
Frontend (Vercel/Netlify) → Supabase Cloud → PostgreSQL Database
                          ↘ Edge Functions → External APIs
                          ↘ Storage Bucket → Static Assets
```

## 🗄 Database Schema

### Core Content Tables

#### services
```sql
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT,
  icon_name VARCHAR(50), -- Lucide icon name
  features JSONB DEFAULT '[]', -- Array of feature strings
  technologies JSONB DEFAULT '[]', -- Tech stack used
  pricing_model VARCHAR(50), -- 'custom', 'fixed', 'hourly'
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  status VARCHAR(20) DEFAULT 'active', -- 'active', 'inactive', 'coming_soon'
  meta_title VARCHAR(200),
  meta_description VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_services_status ON services(status);
CREATE INDEX idx_services_featured ON services(is_featured);
CREATE INDEX idx_services_order ON services(display_order);
```

#### projects
```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(200) UNIQUE NOT NULL,
  client_name VARCHAR(100),
  project_type VARCHAR(50) NOT NULL, -- 'client', 'product', 'design', 'internal'
  category VARCHAR(50) NOT NULL, -- 'web_app', 'mobile_app', 'ai_solution', 'design'
  short_description TEXT NOT NULL,
  full_description TEXT,
  challenge TEXT, -- Problem statement
  solution TEXT, -- How we solved it
  results TEXT, -- Outcomes and metrics
  image_url TEXT,
  gallery_images JSONB DEFAULT '[]', -- Array of image URLs
  technologies JSONB DEFAULT '[]', -- Tech stack used
  features JSONB DEFAULT '[]', -- Key features delivered
  project_url VARCHAR(500), -- Live project URL
  github_url VARCHAR(500), -- Repository URL (if applicable)
  case_study_url VARCHAR(500), -- Detailed case study link
  duration_months INTEGER, -- Project duration
  team_size INTEGER, -- Team members involved
  budget_range VARCHAR(50), -- '10k-25k', '25k-50k', etc.
  is_featured BOOLEAN DEFAULT false,
  is_public BOOLEAN DEFAULT true, -- Can be shown publicly
  display_order INTEGER DEFAULT 0,
  status VARCHAR(20) DEFAULT 'completed', -- 'completed', 'ongoing', 'paused'
  start_date DATE,
  end_date DATE,
  meta_title VARCHAR(200),
  meta_description VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_projects_type ON projects(project_type);
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_projects_featured ON projects(is_featured);
CREATE INDEX idx_projects_public ON projects(is_public);
CREATE INDEX idx_projects_status ON projects(status);
```

#### products
```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  tagline VARCHAR(200), -- Short catchy description
  short_description TEXT NOT NULL,
  full_description TEXT,
  problem_statement TEXT, -- What problem it solves
  key_features JSONB DEFAULT '[]', -- Array of feature objects
  benefits JSONB DEFAULT '[]', -- Array of benefit strings
  use_cases JSONB DEFAULT '[]', -- Array of use case scenarios
  tech_specs JSONB DEFAULT '{}', -- Technical specifications
  pricing JSONB DEFAULT '{}', -- Pricing structure
  demo_url VARCHAR(500), -- Live demo link
  signup_url VARCHAR(500), -- Registration/signup link
  documentation_url VARCHAR(500), -- API docs or user guide
  image_url TEXT, -- Product hero image
  gallery_images JSONB DEFAULT '[]', -- Screenshot gallery
  video_url VARCHAR(500), -- Product demo video
  is_featured BOOLEAN DEFAULT false,
  is_available BOOLEAN DEFAULT true, -- Available for purchase/use
  launch_date DATE,
  version VARCHAR(20) DEFAULT '1.0',
  status VARCHAR(20) DEFAULT 'active', -- 'active', 'beta', 'coming_soon', 'deprecated'
  meta_title VARCHAR(200),
  meta_description VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_products_status ON products(status);
CREATE INDEX idx_products_featured ON products(is_featured);
CREATE INDEX idx_products_available ON products(is_available);
```

### Team & Company Tables

#### team_members
```sql
CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(100) NOT NULL,
  role VARCHAR(100) NOT NULL,
  department VARCHAR(50), -- 'engineering', 'design', 'business', 'marketing'
  bio TEXT,
  expertise JSONB DEFAULT '[]', -- Array of skills/expertise
  avatar_url TEXT,
  linkedin_url VARCHAR(500),
  github_url VARCHAR(500),
  twitter_url VARCHAR(500),
  website_url VARCHAR(500),
  is_featured BOOLEAN DEFAULT false, -- Show on about page
  is_active BOOLEAN DEFAULT true,
  join_date DATE,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_team_active ON team_members(is_active);
CREATE INDEX idx_team_featured ON team_members(is_featured);
CREATE INDEX idx_team_department ON team_members(department);
```

#### clients
```sql
CREATE TABLE clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name VARCHAR(200) NOT NULL,
  logo_url TEXT,
  website_url VARCHAR(500),
  industry VARCHAR(100),
  company_size VARCHAR(50), -- 'startup', 'small', 'medium', 'enterprise'
  testimonial TEXT, -- Client testimonial
  testimonial_author VARCHAR(100), -- Person who gave testimonial
  testimonial_position VARCHAR(100), -- Their job title
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  project_count INTEGER DEFAULT 0,
  relationship_start DATE,
  is_featured BOOLEAN DEFAULT false, -- Show in testimonials
  is_active BOOLEAN DEFAULT true, -- Current client
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_clients_featured ON clients(is_featured);
CREATE INDEX idx_clients_active ON clients(is_active);
CREATE INDEX idx_clients_industry ON clients(industry);
```

### Content Management Tables

#### blog_posts
```sql
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(300) NOT NULL,
  slug VARCHAR(300) UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT, -- Full blog content (Markdown)
  featured_image_url TEXT,
  author_id UUID REFERENCES team_members(id),
  category VARCHAR(50), -- 'tech', 'business', 'ai', 'case_study'
  tags JSONB DEFAULT '[]', -- Array of tag strings
  reading_time INTEGER, -- Estimated minutes
  is_published BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false, -- Featured on homepage
  views_count INTEGER DEFAULT 0,
  likes_count INTEGER DEFAULT 0,
  published_at TIMESTAMP WITH TIME ZONE,
  seo_title VARCHAR(200),
  seo_description VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_blog_published ON blog_posts(is_published);
CREATE INDEX idx_blog_featured ON blog_posts(is_featured);
CREATE INDEX idx_blog_category ON blog_posts(category);
CREATE INDEX idx_blog_author ON blog_posts(author_id);
CREATE INDEX idx_blog_published_date ON blog_posts(published_at DESC);
```

### Lead Management Tables

#### leads
```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(200) NOT NULL,
  company VARCHAR(200),
  phone VARCHAR(50),
  job_title VARCHAR(100),
  message TEXT NOT NULL,
  service_interest VARCHAR(100), -- Which service they're interested in
  project_budget VARCHAR(50), -- Budget range
  project_timeline VARCHAR(50), -- When they want to start
  how_heard_about_us VARCHAR(100), -- Marketing attribution
  lead_source VARCHAR(50) DEFAULT 'website', -- 'website', 'referral', 'social'
  status VARCHAR(20) DEFAULT 'new', -- 'new', 'contacted', 'qualified', 'converted', 'lost'
  priority VARCHAR(20) DEFAULT 'medium', -- 'low', 'medium', 'high'
  assigned_to UUID REFERENCES team_members(id),
  notes TEXT, -- Internal notes
  follow_up_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_priority ON leads(priority);
CREATE INDEX idx_leads_assigned ON leads(assigned_to);
CREATE INDEX idx_leads_source ON leads(lead_source);
CREATE INDEX idx_leads_created ON leads(created_at DESC);
```

#### career_applications
```sql
CREATE TABLE career_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(200) NOT NULL,
  phone VARCHAR(50),
  position_interest VARCHAR(100) NOT NULL,
  experience_level VARCHAR(50), -- 'junior', 'mid', 'senior', 'lead'
  current_company VARCHAR(200),
  linkedin_url VARCHAR(500),
  portfolio_url VARCHAR(500),
  github_url VARCHAR(500),
  resume_url TEXT, -- Stored in Supabase Storage
  cover_letter TEXT,
  skills JSONB DEFAULT '[]', -- Array of skills
  availability VARCHAR(50), -- 'immediate', '2_weeks', '1_month', '3_months'
  salary_expectation VARCHAR(100),
  remote_preference VARCHAR(50), -- 'remote', 'hybrid', 'onsite', 'flexible'
  status VARCHAR(20) DEFAULT 'submitted', -- 'submitted', 'reviewing', 'interview', 'hired', 'rejected'
  notes TEXT, -- Internal notes
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_careers_status ON career_applications(status);
CREATE INDEX idx_careers_position ON career_applications(position_interest);
CREATE INDEX idx_careers_experience ON career_applications(experience_level);
CREATE INDEX idx_careers_created ON career_applications(created_at DESC);
```

## 🔐 Security & Authentication

### Row Level Security (RLS) Policies

```sql
-- Enable RLS on sensitive tables
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Public read access for content tables
CREATE POLICY "Public read access" ON services FOR SELECT USING (status = 'active');
CREATE POLICY "Public read access" ON projects FOR SELECT USING (is_public = true AND status = 'completed');
CREATE POLICY "Public read access" ON products FOR SELECT USING (status = 'active');
CREATE POLICY "Public read access" ON blog_posts FOR SELECT USING (is_published = true);
CREATE POLICY "Public read access" ON team_members FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access" ON clients FOR SELECT USING (is_active = true);

-- Admin full access (authenticated users with admin role)
CREATE POLICY "Admin full access" ON services FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin full access" ON projects FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin full access" ON products FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin full access" ON blog_posts FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin full access" ON team_members FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin full access" ON clients FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin full access" ON leads FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admin full access" ON career_applications FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- Public insert access for forms
CREATE POLICY "Public insert leads" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert applications" ON career_applications FOR INSERT WITH CHECK (true);
```

### API Security
- **Rate Limiting**: Implement rate limiting on form submissions
- **Input Validation**: Strict validation on all user inputs
- **CORS Configuration**: Restrict to specific domains
- **SQL Injection Prevention**: Use parameterized queries
- **XSS Protection**: Sanitize all user-generated content

## 📡 API Endpoints & Functions

### Core Content APIs

#### Services API
```typescript
// GET /rest/v1/services
interface ServiceResponse {
  id: string;
  name: string;
  slug: string;
  short_description: string;
  full_description?: string;
  icon_name: string;
  features: string[];
  technologies: string[];
  is_featured: boolean;
  display_order: number;
}

// Usage: Fetch services for homepage and services page
```

#### Projects API
```typescript
// GET /rest/v1/projects
interface ProjectResponse {
  id: string;
  title: string;
  slug: string;
  client_name?: string;
  project_type: 'client' | 'product' | 'design' | 'internal';
  category: string;
  short_description: string;
  image_url?: string;
  technologies: string[];
  features: string[];
  is_featured: boolean;
  status: string;
}

// Query parameters:
// ?project_type=eq.client - Filter by type
// ?is_featured=eq.true - Featured projects only
// ?limit=4 - Limit results for homepage
```

#### Products API
```typescript
// GET /rest/v1/products
interface ProductResponse {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  short_description: string;
  key_features: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  demo_url?: string;
  signup_url?: string;
  image_url?: string;
  is_featured: boolean;
  status: string;
}
```

### Edge Functions

#### Contact Form Handler
```typescript
// functions/contact-form/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

interface ContactFormData {
  full_name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  service_interest?: string;
  project_budget?: string;
  how_heard_about_us?: string;
}

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    // Validate required fields
    if (!formData.full_name || !formData.email || !formData.message) {
      return new Response('Missing required fields', { status: 400 });
    }

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    // Insert lead into database
    const { data, error } = await supabase
      .from('leads')
      .insert([{
        ...formData,
        lead_source: 'website',
        status: 'new',
        priority: formData.project_budget?.includes('50k+') ? 'high' : 'medium'
      }])
      .select();

    if (error) {
      console.error('Database error:', error);
      return new Response('Failed to submit form', { status: 500 });
    }

    // Send notification email (integrate with your email service)
    await sendNotificationEmail(formData);

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Thank you for your inquiry. We\'ll get back to you within 24 hours.' 
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return new Response('Internal server error', { status: 500 });
  }
});
```

#### Career Application Handler
```typescript
// functions/career-application/index.ts
serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const formData = await req.formData();
    const applicationData = {
      full_name: formData.get('full_name') as string,
      email: formData.get('email') as string,
      position_interest: formData.get('position_interest') as string,
      // ... other fields
    };

    // Handle file upload (resume)
    const resumeFile = formData.get('resume') as File;
    let resume_url = null;
    
    if (resumeFile) {
      const fileName = `resumes/${Date.now()}-${resumeFile.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('applications')
        .upload(fileName, resumeFile);
      
      if (!uploadError) {
        resume_url = uploadData.path;
      }
    }

    // Insert application
    const { data, error } = await supabase
      .from('career_applications')
      .insert([{ ...applicationData, resume_url }])
      .select();

    if (error) {
      return new Response('Failed to submit application', { status: 500 });
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Application submitted successfully!' 
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });

  } catch (error) {
    return new Response('Internal server error', { status: 500 });
  }
});
```

## 📊 Content Management Strategy

### Admin Dashboard Requirements
```typescript
interface AdminDashboard {
  // Content Management
  services: CRUD_Operations;
  projects: CRUD_Operations;
  products: CRUD_Operations;
  blog_posts: CRUD_Operations;
  team_members: CRUD_Operations;
  
  // Lead Management
  leads: {
    view: LeadListView;
    filter: LeadFilters;
    export: ExportFunction;
    assign: AssignmentFunction;
  };
  
  // Analytics
  analytics: {
    leads_by_source: Chart;
    conversion_rates: Metrics;
    popular_services: Chart;
    blog_performance: Table;
  };
}
```

### Content Workflows
1. **Blog Publishing**: Draft → Review → Publish → Promote
2. **Project Showcase**: Complete → Document → Review → Publish
3. **Service Updates**: Update → Review → Deploy → Announce
4. **Lead Processing**: Receive → Qualify → Assign → Follow-up

## 🔄 Data Synchronization

### Real-time Features
```typescript
// Blog post views tracking
const { data, error } = await supabase
  .from('blog_posts')
  .update({ views_count: views_count + 1 })
  .eq('id', postId);

// Real-time lead notifications
const leadSubscription = supabase
  .channel('leads')
  .on('postgres_changes', 
    { event: 'INSERT', schema: 'public', table: 'leads' },
    (payload) => {
      // Notify admin team of new lead
      sendSlackNotification(payload.new);
    }
  )
  .subscribe();
```

### Background Jobs
```typescript
// Weekly blog performance report
export async function weeklyBlogReport() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('title, views_count, likes_count, created_at')
    .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))
    .order('views_count', { ascending: false });

  // Generate and send report
  await sendReportEmail(posts);
}

// Monthly client satisfaction survey
export async function clientSatisfactionSurvey() {
  const { data: clients } = await supabase
    .from('clients')
    .select('company_name, testimonial_author, email')
    .eq('is_active', true)
    .is('rating', null);

  // Send satisfaction surveys
  for (const client of clients) {
    await sendSurveyEmail(client);
  }
}
```

## 📈 Analytics & Monitoring

### Performance Metrics
```sql
-- Lead conversion tracking
CREATE VIEW lead_conversion_metrics AS
SELECT 
  DATE_TRUNC('month', created_at) as month,
  lead_source,
  COUNT(*) as total_leads,
  COUNT(CASE WHEN status = 'converted' THEN 1 END) as converted_leads,
  ROUND(
    COUNT(CASE WHEN status = 'converted' THEN 1 END)::decimal / 
    COUNT(*)::decimal * 100, 2
  ) as conversion_rate
FROM leads 
GROUP BY DATE_TRUNC('month', created_at), lead_source
ORDER BY month DESC, conversion_rate DESC;

-- Service popularity tracking
CREATE VIEW service_interest_metrics AS
SELECT 
  service_interest,
  COUNT(*) as inquiry_count,
  AVG(CASE 
    WHEN project_budget = '10k-25k' THEN 17500
    WHEN project_budget = '25k-50k' THEN 37500
    WHEN project_budget = '50k-100k' THEN 75000
    WHEN project_budget = '100k+' THEN 150000
    ELSE 10000
  END) as avg_project_value
FROM leads 
WHERE service_interest IS NOT NULL
GROUP BY service_interest
ORDER BY inquiry_count DESC;
```

### Monitoring Setup
```typescript
// Database performance monitoring
export async function monitorDatabaseHealth() {
  const queries = [
    'SELECT COUNT(*) FROM leads WHERE created_at > NOW() - INTERVAL \'24 hours\'',
    'SELECT COUNT(*) FROM blog_posts WHERE is_published = true',
    'SELECT COUNT(*) FROM projects WHERE status = \'completed\'',
  ];

  const results = await Promise.all(
    queries.map(query => supabase.rpc('execute_sql', { query }))
  );

  // Log metrics to monitoring service
  console.log('Daily metrics:', results);
}
```

## 🚀 Deployment & DevOps

### Environment Configuration
```bash
# Production Environment Variables
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Email Service (Optional - for notifications)
SMTP_HOST=smtp.your-email-service.com
SMTP_PORT=587
SMTP_USER=your-email@atomiotechnologies.com
SMTP_PASS=your-app-password

# Slack Integration (Optional - for lead notifications)
SLACK_WEBHOOK_URL=https://hooks.slack.com/your-webhook

# Analytics (Optional)
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Database Migrations
```sql
-- Migration: Add search functionality
ALTER TABLE blog_posts ADD COLUMN search_vector tsvector;

CREATE INDEX idx_blog_search ON blog_posts USING gin(search_vector);

CREATE OR REPLACE FUNCTION update_blog_search_vector()
RETURNS TRIGGER AS $
BEGIN
  NEW.search_vector := to_tsvector('english', 
    COALESCE(NEW.title, '') || ' ' || 
    COALESCE(NEW.excerpt, '') || ' ' || 
    COALESCE(array_to_string(NEW.tags, ' '), '')
  );
  RETURN NEW;
END;
$ LANGUAGE plpgsql;

CREATE TRIGGER update_blog_search_trigger
  BEFORE INSERT OR UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_blog_search_vector();
```

### Backup Strategy
```typescript
// Automated daily backups
export async function createDatabaseBackup() {
  const timestamp = new Date().toISOString().split('T')[0];
  const backupName = `atomio-backup-${timestamp}`;
  
  // Supabase automatically handles database backups
  // But we can export critical data for additional safety
  const criticalTables = ['services', 'projects', 'products', 'leads'];
  
  for (const table of criticalTables) {
    const { data } = await supabase.from(table).select('*');
    await uploadBackupFile(`${backupName}-${table}.json`, JSON.stringify(data));
  }
}
```

## 🔧 Development Workflow

### Local Development Setup
```bash
# 1. Clone and setup
git clone <repo-url>
cd atomio-website
npm install

# 2. Environment setup
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# 3. Database setup
npx supabase init
npx supabase start
npx supabase db reset

# 4. Start development
npm run dev
```

### Data Seeding
```typescript
// seed-data.ts - Initial data for development
export const seedData = {
  services: [
    {
      name: "Custom Software Development",
      slug: "custom-software-development",
      short_description: "Tailored software solutions that scale with your business needs.",
      icon_name: "code",
      features: ["Full-stack development", "Cloud architecture", "API integration"],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      is_featured: true,
      display_order: 1
    },
    {
      name: "AI & LLM Solutions",
      slug: "ai-llm-solutions", 
      short_description: "Intelligent automation and language processing for modern businesses.",
      icon_name: "brain",
      features: ["Custom LLM integration", "Intelligent automation", "Data analysis"],
      technologies: ["OpenAI", "LangChain", "Python", "TensorFlow"],
      is_featured: true,
      display_order: 2
    },
    // ... more services
  ],
  
  products: [
    {
      name: "Sema AI",
      slug: "sema-ai",
      tagline: "Breaking language barriers in real-time",
      short_description: "Advanced language translation powered by cutting-edge AI technology.",
      key_features: [
        { title: "Real-time Translation", description: "Instant translation across 100+ languages" },
        { title: "Context Awareness", description: "Industry-specific terminology and context" },
        { title: "API Integration", description: "Easy integration with existing systems" }
      ],
      is_featured: true,
      status: "active"
    },
    {
      name: "Seamo",
      slug: "seamo",
      tagline: "Project management tailored for marine research",
      short_description: "Specialized project management tools designed for marine scientists and researchers.",
      key_features: [
        { title: "Research Workflows", description: "Streamlined research project management" },
        { title: "Data Collection", description: "Integrated data collection and analysis" },
        { title: "Collaboration Tools", description: "Team collaboration for research projects" }
      ],
      is_featured: true,
      status: "active"
    }
  ]
};
```

This comprehensive backend architecture ensures scalable, secure, and maintainable data management for the Atomio Technologies website, supporting both current needs and future growth.