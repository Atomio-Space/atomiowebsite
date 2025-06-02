# Frontend Design System
## Atomio Technologies Website

This document outlines the complete design system, user interface specifications, and frontend implementation guidelines for the Atomio Technologies website.

## 🎨 Visual Identity

### Brand Essence
**Mission**: Empowering businesses through cutting-edge technology solutions
**Personality**: Professional, innovative, trustworthy, forward-thinking
**Voice**: Confident, clear, solution-oriented, technically sophisticated

### Logo Specifications
- **Primary**: "atomio" in lowercase
- **Font**: Orbitron Bold
- **Color**: #194750
- **Usage**: Always maintain adequate whitespace, never distort proportions
- **Minimum size**: 120px width for digital, 1 inch for print

## 🌈 Color System

### Light Theme Palette
```css
:root {
  --bg-primary: #FDFCF9;    /* Main background - warm white */
  --bg-secondary: #F3F3EF;  /* Card backgrounds - light sage */
  --bg-tertiary: #EAECE9;   /* Subtle sections - muted green */
}
```

### Dark Theme Palette
```css
:root[data-theme="dark"] {
  --bg-primary: #202323;    /* Main background - deep charcoal */
  --bg-secondary: #181B1A;  /* Card backgrounds - darker sage */
  --bg-tertiary: #1F2121;   /* Subtle sections - muted dark */
}
```

### Brand Colors
```css
:root {
  --brand-primary: #194750;   /* Deep teal - authority, trust */
  --brand-secondary: #2BB9CC; /* Bright cyan - innovation, energy */
  --brand-tertiary: #1F757E;  /* Medium teal - balance, growth */
}
```

### Semantic Colors
```css
:root {
  --text-primary: #1A1A1A;     /* Main text - high contrast */
  --text-secondary: #666666;   /* Secondary text - medium contrast */
  --text-muted: #999999;       /* Tertiary text - low contrast */
  --success: #10B981;          /* Success states */
  --warning: #F59E0B;          /* Warning states */
  --error: #EF4444;            /* Error states */
}
```

## 📝 Typography

### Font Loading
```html
<!-- Orbitron for brand/logo -->
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet">

<!-- Urbanist for all content -->
<link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
```

### Type Scale
```css
/* Headings - Urbanist */
.heading-xl { font-size: 4rem; font-weight: 700; line-height: 1.1; }      /* 64px */
.heading-lg { font-size: 3rem; font-weight: 700; line-height: 1.15; }     /* 48px */
.heading-md { font-size: 2.25rem; font-weight: 600; line-height: 1.2; }   /* 36px */
.heading-sm { font-size: 1.875rem; font-weight: 600; line-height: 1.25; } /* 30px */
.heading-xs { font-size: 1.5rem; font-weight: 600; line-height: 1.3; }    /* 24px */

/* Body Text - Urbanist */
.body-xl { font-size: 1.25rem; line-height: 1.6; }  /* 20px */
.body-lg { font-size: 1.125rem; line-height: 1.6; } /* 18px */
.body-md { font-size: 1rem; line-height: 1.6; }     /* 16px */
.body-sm { font-size: 0.875rem; line-height: 1.5; } /* 14px */
.body-xs { font-size: 0.75rem; line-height: 1.4; }  /* 12px */

/* Logo - Orbitron */
.logo { font-family: 'Orbitron', monospace; font-weight: 700; }
```

## 🏗 Layout System

### Grid Structure
```css
/* Container sizes */
.container-xs { max-width: 1024px; }  /* Small sections */
.container-sm { max-width: 1200px; }  /* Standard content */
.container-md { max-width: 1400px; }  /* Wide layouts */
.container-lg { max-width: 1600px; }  /* Full-width sections */

/* Spacing scale */
.space-xs { padding: 1rem; }      /* 16px */
.space-sm { padding: 2rem; }      /* 32px */
.space-md { padding: 4rem; }      /* 64px */
.space-lg { padding: 6rem; }      /* 96px */
.space-xl { padding: 8rem; }      /* 128px */
```

### Responsive Breakpoints
```css
/* Mobile first approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

## 🎯 Component Library

### Navigation Header
```typescript
interface HeaderProps {
  variant: 'light' | 'dark';
  isScrolled: boolean;
}

// Specifications:
// - Height: 80px
// - Background: Translucent with backdrop blur
// - Logo: Left aligned, 32px height
// - Navigation: Right aligned, horizontal
// - Mobile: Hamburger menu, slide-out drawer
```

### Hero Section
```typescript
interface HeroProps {
  title: string;
  subtitle: string;
  typingWords: string[];
  ctaButton?: ButtonProps;
}

// Specifications:
// - Full viewport height
// - Center-aligned content
// - Typing animation for technology words
// - Minimal, impactful design
```

### Project Cards
```typescript
interface ProjectCardProps {
  title: string;
  category: 'client' | 'product' | 'design';
  image: string;
  description: string;
  tags: string[];
  link: string;
}

// Specifications:
// - Border radius: 20px
// - Hover animations with Framer Motion
// - Aspect ratio: 4:3
// - Overlay on hover with project details
```

### Service Highlights
```typescript
interface ServiceProps {
  icon: ReactElement;
  title: string;
  description: string;
  features: string[];
}

// Specifications:
// - Grid layout: 2x3 on desktop, 1x6 on mobile
// - Consistent card heights
// - Hover effects with subtle color changes
```

### Floating Work Section
```typescript
interface WorkSectionProps {
  projects: ProjectCardProps[];
  categories: string[];
  showAll: boolean;
}

// Specifications:
// - Floating card design with shadow
// - Tabbed filtering system
// - Grid: 2x2 project preview
// - "View All" text button (no borders)
```

## 🎭 Animation Guidelines

### Framer Motion Configurations
```typescript
// Page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Card hover effects
const cardHover = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 300 }
};

// Typing animation
const typingContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

### Animation Principles
- **Duration**: 200-400ms for micro-interactions
- **Easing**: Use spring physics for natural feel
- **Stagger**: 100ms delay between grouped elements
- **Reduce motion**: Respect user preferences

## 📱 Responsive Design

### Mobile Strategy
- **Content Priority**: Essential information first
- **Touch Targets**: Minimum 44px for interactive elements
- **Navigation**: Collapsible hamburger menu
- **Cards**: Single column layout with full-width cards
- **Typography**: Slightly larger base size for readability

### Tablet Considerations
- **Grid Systems**: 2-column layouts where appropriate
- **Navigation**: Maintain horizontal layout
- **Cards**: Maintain aspect ratios, reduce gaps
- **Content**: Optimize line lengths for reading

### Desktop Enhancements
- **Hover States**: Rich interactions and previews
- **Cursor Changes**: Indicate interactive elements
- **Keyboard Navigation**: Full tab order support
- **Multi-column**: Utilize screen real estate effectively

## 🎨 Creative Whitespace Usage

### Vertical Rhythm
```css
/* Section spacing */
.section-padding { padding: 6rem 0; }
.section-compact { padding: 4rem 0; }
.section-spacious { padding: 8rem 0; }

/* Element margins */
.mb-rhythm { margin-bottom: 1.5rem; }
.mb-section { margin-bottom: 3rem; }
.mb-large { margin-bottom: 4rem; }
```

### Content Breathing Room
- **Line spacing**: 1.6 for body text, 1.2 for headings
- **Paragraph gaps**: 1.5rem between paragraphs
- **Section separation**: 6rem minimum between major sections
- **Card padding**: 2rem internal padding for comfortable reading

## 🎪 Interactive Elements

### Button Variations
```css
/* Primary CTA */
.btn-primary {
  background: var(--brand-primary);
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 200ms ease;
}

/* Secondary actions */
.btn-secondary {
  background: transparent;
  color: var(--brand-primary);
  border: 2px solid var(--brand-primary);
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
}

/* Text buttons */
.btn-text {
  background: none;
  color: var(--brand-secondary);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 4px;
}
```

### Form Elements
```css
.form-input {
  background: var(--bg-secondary);
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 1rem;
  font-size: 1rem;
  transition: all 200ms ease;
}

.form-input:focus {
  border-color: var(--brand-secondary);
  outline: none;
  box-shadow: 0 0 0 3px rgba(43, 185, 204, 0.1);
}
```

## 🏆 Best Practices

### Performance Optimization
- **Image Loading**: Lazy loading with intersection observer
- **Font Display**: Use `font-display: swap` for custom fonts
- **Critical CSS**: Inline above-the-fold styles
- **Bundle Splitting**: Separate vendor and application code

### Accessibility Standards
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Focus Indicators**: Visible focus states for keyboard navigation
- **Alt Text**: Descriptive alternative text for all images
- **Semantic HTML**: Proper heading hierarchy and landmark elements

### SEO Considerations
- **Meta Tags**: Dynamic title and description per page
- **Open Graph**: Social media preview optimization
- **Structured Data**: Schema markup for business information
- **Core Web Vitals**: Optimize for Google's performance metrics

## 🔧 Implementation Notes

### CSS Architecture
- **Utility Classes**: Tailwind for spacing, sizing, colors
- **Components**: CSS modules for complex component styles
- **Global Styles**: Minimal global overrides and resets
- **Custom Properties**: CSS variables for theming

### Component Structure
```typescript
// Standard component pattern
interface ComponentProps {
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
  children?: ReactNode;
}

export const Component: FC<ComponentProps> = ({
  variant = 'default',
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
};
```

This design system ensures consistency, scalability, and maintainability while delivering a premium user experience that reflects Atomio Technologies' commitment to excellence.