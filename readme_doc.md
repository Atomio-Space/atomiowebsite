# Atomio Technologies Website

> **Empowering Business** - *We build the technology that drives your business forward.*

A modern, clean website for Atomio Technologies - a cutting-edge tech agency specializing in enterprise software solutions, AI development, and custom digital products.

## 🚀 Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd atomio-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠 Tech Stack

- **Frontend Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase
- **Fonts**: Orbitron (logo), Urbanist (content)
- **Deployment**: [To be determined]

## 📋 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components
│   ├── layout/         # Layout components (Header, Footer)
│   └── sections/       # Page sections (Hero, Services, etc.)
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── data/               # Static data and configurations
└── styles/             # Global styles and Tailwind config
```

## 🎨 Design System

### Color Palette

**Light Theme**
- `#FDFCF9` - Primary background
- `#F3F3EF` - Secondary background  
- `#EAECE9` - Tertiary background

**Dark Theme**
- `#202323` - Primary background
- `#181B1A` - Secondary background
- `#1F2121` - Tertiary background

**Brand Colors**
- `#194750` - Primary brand (logo)
- `#2BB9CC` - Secondary brand (accent)
- `#1F757E` - Tertiary brand (accent)

### Typography
- **Logo**: Orbitron (400-900 weight)
- **Content**: Urbanist (100-900 weight, italic variants)

### Design Principles
- Generous whitespace utilization
- Card corner radius: 10-30px
- Minimal color usage with strategic brand accent application
- Clean, modern aesthetic targeting enterprise clients

## 🏗 Features

### Core Pages
- **Homepage**: Hero, work showcase, services, clients, blog preview
- **About**: Company story, team, values
- **Services**: Detailed service offerings
- **Work/Portfolio**: Project case studies
- **Products**: Sema AI & Seamo showcases
- **Blog**: Tech insights and company updates
- **Contact**: Multi-channel contact options
- **Careers**: Open positions and company culture

### Special Pages
- **404 Error**: Creative not-found experience
- **Under Maintenance**: Engaging maintenance mode
- **Privacy Policy**: Data handling transparency
- **Terms of Service**: Usage agreements

### Key Components
- **Sticky Navigation**: Fixed header with smooth transitions
- **Typing Animation**: Dynamic technology showcase
- **Floating Cards**: Interactive project displays
- **Logo Scroller**: Client testimonial carousel
- **Theme Toggle**: Light/dark mode switching
- **Mobile Responsive**: Optimized for all devices

## 📊 Data Management

### Supabase Tables
- `services` - Service offerings and descriptions
- `projects` - Portfolio work and case studies
- `products` - Sema AI and Seamo product details
- `team_members` - Staff profiles and roles
- `blog_posts` - Articles and company updates
- `clients` - Client logos and testimonials
- `leads` - Contact form submissions
- `job_applications` - Career interest submissions

## 🎯 Target Audience

**Primary**: Enterprise decision-makers seeking technology solutions
**Secondary**: Startups and growing businesses needing digital transformation
**Tertiary**: Technical professionals interested in AI and software development

## 📈 Business Goals

1. **Lead Generation**: Convert visitors into qualified business leads
2. **Product Awareness**: Showcase Sema AI and Seamo capabilities
3. **Brand Authority**: Establish thought leadership in enterprise tech
4. **Talent Acquisition**: Attract top-tier technical talent
5. **Client Retention**: Strengthen relationships with existing clients

## 🔧 Development Guidelines

### Code Standards
- TypeScript strict mode enabled
- ESLint + Prettier configuration
- Component-driven architecture
- Custom hooks for business logic
- Responsive-first design approach

### Performance Targets
- Lighthouse score: 95+ across all metrics
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader optimization
- Color contrast validation

## 🚢 Deployment

### Environment Variables
```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_SITE_URL=your_domain
```

### Build Process
1. Run type checking: `npm run type-check`
2. Execute tests: `npm run test`
3. Build production: `npm run build`
4. Deploy to hosting platform

## 📞 Support

For development questions or technical support:
- **Development Team**: [team@atomiotechnologies.com]
- **Project Lead**: [lead@atomiotechnologies.com]
- **Repository Issues**: Use GitHub issues for bug reports

## 📄 License

Proprietary - Atomio Technologies. All rights reserved.

---

**Built with precision. Designed for impact. Engineered for enterprise.**