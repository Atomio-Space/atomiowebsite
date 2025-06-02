# Our Work Section - Design Specification

## 🎯 Section Overview
The "Our Work" section showcases Atomio Technologies' portfolio through an elegant floating card design that filters and displays projects in a clean, professional layout.

## 🏗 Layout Structure

### Container Layout
```
Section Container (Full Width)
└── Content Wrapper (max-width: 1200px, centered)
    └── Floating Card (elevated, rounded corners)
        ├── Header Area (tabs + title)
        ├── Project Grid (2x2 layout)
        └── Footer Area (View All button)
```

## 🎨 Visual Design

### Floating Card Specifications
- **Background**: `var(--bg-secondary)` with subtle shadow
- **Border Radius**: `24px` (following 10-30px range from design system)
- **Shadow**: `0 20px 40px rgba(25, 71, 80, 0.08)` for floating effect
- **Padding**: `3rem` (48px) internal spacing
- **Max Width**: `1000px`
- **Margin**: `4rem auto` (centered with generous spacing)

### Card Header Layout
```
┌─────────────────────────────────────────────────────┐
│  "Our Work"        [All] [Client] [Products] [Design] │
│  (left aligned)                    (right aligned)    │
└─────────────────────────────────────────────────────┘
```

- **Title**: "Our Work" - Urbanist Bold, 2.25rem (36px), `var(--text-primary)`
- **Tab Container**: Right-aligned horizontal list
- **Tab Spacing**: 2rem gap between tabs

### Tab Design
```css
.work-tab {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  font-weight: 600;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 200ms ease;
  border-radius: 12px;
}

.work-tab.active {
  color: var(--brand-primary);
  background: rgba(25, 71, 80, 0.08);
}

.work-tab:hover:not(.active) {
  color: var(--brand-secondary);
  background: rgba(43, 185, 204, 0.05);
}
```

### Project Grid Layout
```
┌─────────────┬─────────────┐
│   Project   │   Project   │
│      1      │      2      │
├─────────────┼─────────────┤
│   Project   │   Project   │
│      3      │      4      │
└─────────────┴─────────────┘
```

- **Grid**: CSS Grid, 2 columns × 2 rows
- **Gap**: `2rem` (32px) between cards
- **Aspect Ratio**: 4:3 for each project card
- **Responsive**: Single column on mobile

## 🎴 Project Card Design

### Card Structure
```
┌─────────────────────────────┐
│                             │
│        Project Image        │
│                             │
├─────────────────────────────┤
│  Client Name    [Category]  │
│  Project Title              │
│  Brief description text...  │
│                             │
│  [Tech] [Stack] [Tags]      │
└─────────────────────────────┘
```

### Card Specifications
```css
.project-card {
  background: var(--bg-primary);
  border-radius: 16px;
  overflow: hidden;
  transition: all 300ms ease;
  border: 1px solid rgba(25, 71, 80, 0.1);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(25, 71, 80, 0.15);
  border-color: var(--brand-secondary);
}
```

### Card Content Layout
- **Image Area**: 
  - Height: `180px`
  - Background: Gradient overlay on placeholder
  - Object-fit: `cover`
  
- **Content Padding**: `1.5rem` (24px)
  
- **Client/Category Header**:
  - Client name: `var(--text-secondary)`, 14px, medium weight
  - Category badge: `var(--brand-secondary)`, 12px, pill shape
  
- **Project Title**: 
  - Urbanist Semi-bold, 18px, `var(--text-primary)`
  - Margin: `0.5rem 0`
  
- **Description**: 
  - 14px, `var(--text-secondary)`
  - Line height: 1.5
  - Max 2 lines with ellipsis
  
- **Tech Tags**:
  - Small pills: 12px font, `var(--bg-tertiary)` background
  - `0.5rem` padding, `8px` border radius
  - Max 3 tags visible

## 🎛 Tab Filtering System

### Tab Categories
1. **All** - Shows all project types (default active)
2. **Client Projects** - `project_type: 'client'`
3. **Products** - `project_type: 'product'` 
4. **Design** - `project_type: 'design'`

### Filter Animation
```typescript
// Framer Motion variants
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  }
};
```

## 🔗 View All Button

### Button Design
```css
.view-all-button {
  background: none;
  border: none;
  color: var(--brand-secondary);
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: all 200ms ease;
}

.view-all-button::after {
  content: '→';
  margin-left: 0.5rem;
  transition: transform 200ms ease;
}

.view-all-button:hover {
  color: var(--brand-primary);
}

.view-all-button:hover::after {
  transform: translateX(4px);
}
```

### Button Positioning
- **Location**: Bottom-right of floating card
- **Alignment**: Right-aligned
- **Margin**: `2rem 0 0 0` (top spacing from grid)
- **Text**: "View All Projects" with arrow icon

## 📱 Responsive Behavior

### Desktop (1024px+)
- Full 2×2 grid layout
- All tabs visible horizontally
- Hover effects enabled

### Tablet (768px - 1023px)
- 2×2 grid maintained
- Reduced card gaps: `1.5rem`
- Floating card padding: `2rem`

### Mobile (< 768px)
- Single column grid (1×4)
- Tabs become scrollable horizontal
- Card padding: `1.5rem`
- Title and tabs stack vertically
- Project cards maintain aspect ratio

## 🎬 Animations & Interactions

### Card Hover Effects
1. **Lift Animation**: `translateY(-8px)` with spring easing
2. **Shadow Enhancement**: Deeper shadow on hover
3. **Border Glow**: Subtle border color change
4. **Image Scale**: Slight zoom on project image

### Tab Switching Animation
1. **Active State**: Smooth background fill
2. **Content Transition**: Fade out → filter → fade in
3. **Stagger Effect**: Cards animate in with 100ms delay

### Loading States
```typescript
// Skeleton cards while filtering
const SkeletonCard = () => (
  <div className="animate-pulse">
    <div className="bg-gray-200 h-[180px] rounded-t-lg"></div>
    <div className="p-6 space-y-3">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  </div>
);
```

## 🎯 Data Integration

### Mock Data Structure
```typescript
// In mockData.ts
export const projects = [
  {
    id: "1",
    title: "E-commerce Platform",
    client_name: "RetailCorp",
    project_type: "client",
    category: "web_app",
    short_description: "Full-stack e-commerce solution with advanced analytics",
    image_url: "/placeholder-project-1.jpg",
    technologies: ["React", "Node.js", "PostgreSQL"],
    is_featured: true
  },
  // ... more projects
];

// Filtering function
export async function getProjectsByType(type?: string) {
  await new Promise(resolve => setTimeout(resolve, 100));
  
  if (!type || type === 'all') {
    return projects.filter(p => p.is_featured).slice(0, 4);
  }
  
  return projects
    .filter(p => p.project_type === type && p.is_featured)
    .slice(0, 4);
}
```

This design creates a sophisticated, professional showcase that positions Atomio Technologies as a premium technology partner while maintaining the clean, minimal aesthetic throughout.