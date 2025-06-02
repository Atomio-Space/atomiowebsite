# ✨ Customer Stories Section Specification

> **Purpose:**  
> Highlight real customer testimonials to build credibility, trust, and social proof. This section will feature rotating testimonial “cards” tied to brand logos in a horizontal carousel. When a user focuses or clicks on a brand logo, the testimonial content fades to that brand’s story.  

---

## 📐 1. Section Overview

- **Section Name:** `Customer Stories`
- **Badge (Above Title):** `Meet our customers`  
  - Style: Rounded pill (e.g., `bg-lime-400 text-black px-4 py-1 rounded-full text-sm`)  
  - Alignment: Centered horizontally above the section title

- **Title:** `Customer stories`  
  - Style: Large, bold, centered (e.g., `text-4xl font-semibold text-gray-900 text-center`)

- **Background Container:**  
  - Light-blue/white background (e.g., `bg-blue-50`)  
  - Rounded corners (e.g., `rounded-2xl`)  
  - Soft drop-shadow (e.g., `shadow-md`)  
  - Generous vertical padding (e.g., `py-12`), horizontal padding on desktop (e.g., `px-6 lg:px-16`)

---

## 🗂 2. Functional Requirements

1. **Testimonial Display Area (Upper Portion)**  
   - Should occupy ~70% of the container’s vertical space.  
   - Centered quote text area (max-width for readability).  
   - “Read story” CTA button beneath the quote.  
   - Author avatar (circular), name (bold), and role (subtle, muted color) below the button.
   - Quote text and author elements should fade in/out on testimonial change.

2. **Brand Carousel (Lower Portion)**  
   - Full-width row containing clickable brand logos.  
   - Each logo occupies an equal column (flex: 1).  
   - Vertical separators (thin divider lines) between each logo container.  
   - On hover/focus: subtle scale-up or opacity change.  
   - “Active” logo (centered or clicked) triggers the testimonial fade change to that brand’s content.
   - Carousel scroll effect: horizontally scrolling slider with left/right nav arrows (desktop).  
   - On mobile: swipe-enabled carousel (no arrows, use dots or edge swipes).  

3. **Interactions & Animations**  
   - **Initial Load:** Display first testimonial (e.g., “Parahelp” example).  
   - **Carousel Autoplay (Optional):** After a configurable interval (e.g., 8–10 seconds), shift the carousel one logo to the left and fade in the next testimonial.  
   - **Logo Click/Focus:** Immediately fade out current testimonial text and fade in the selected brand’s testimonial.  
   - **Active State Styling:** The logo whose testimonial is visible should appear with slightly higher opacity or a subtle underline/border.  

4. **Responsive Behavior**  
   - **Desktop (≥ 1024px):**  
     - Two-tier layout: quote + author in upper half; brand carousel in lower half.  
     - Horizontal brand carousel with visible left/right navigation arrows.  
   - **Tablet (≥ 640px & < 1024px):**  
     - Stack quote and author with slightly reduced padding.  
     - Brand logos in scrollable horizontal band (arrows optional).  
   - **Mobile (< 640px):**  
     - Vertically stacked:  
       1. Badge  
       2. Title  
       3. Testimonial card (quote, button, author)  
       4. Brand carousel (swipeable, single row)  
     - Logos displayed in a centered, scroll-snap container (no divider lines, or very subtle).

---

## 🎨 3. Visual & Style Guidelines

1. **Color Palette (Atomio Brand-Aligned)**  
   - **Background:** `bg-blue-50` or `#EEF8FE`  
   - **Text (Primary):** `text-gray-900`  
   - **Text (Secondary/Subheading):** `text-gray-600`  
   - **Button (CTA):** `bg-blue-600 text-white hover:bg-blue-700`  
   - **Badge Background:** `bg-lime-400 text-black`  
   - **Divider Lines:** `bg-gray-200` (1px wide)

2. **Typography**  
   - **Badge:** `text-sm font-medium uppercase tracking-wide`  
   - **Section Title:** `text-4xl font-semibold`  
   - **Quote Text:**  
     - Font Size: `text-xl lg:text-2xl`  
     - Line-height: `leading-relaxed`  
     - Font Style: `italic` or regular with quotes (`“  ”`)  
   - **Author Name:** `text-lg font-semibold text-gray-900`  
   - **Author Role:** `text-sm text-gray-600`

3. **Spacing & Layout**  
   - Outer container padding: `py-12 lg:py-16 px-6 lg:px-16`  
   - Quote container max-width: `max-w-3xl mx-auto`  
   - Vertical spacing between quote / button: `mt-6`  
   - Author block spacing: `mt-8 flex flex-col items-center`  
   - Brand row height: `h-24` (adjust for logo proportions)  
   - Each logo container: `flex-1 flex items-center justify-center`  

4. **Avatar Styling**  
   - Container: `w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm`  
   - Position: Centered below button, with negative margin if layering is desired (e.g., `-mt-8`)

---

## 🗄 4. Content Data & CMS Integration

1. **Data Structure (JSON / CMS Schema)**

   ```jsonc
   [
     {
       "id": "parahelp",
       "brandName": "Parahelp",
       "quote": "Parahelp has transformed our CX org overnight. I'm amazed at how indistinguishable the Parahelp agent is from a human agent. So far, I can count the number of customers who asked if it’s a bot on one hand.",
       "readStoryUrl": "/testimonials/parahelp",
       "author": {
         "name": "Eli Winderbaum",
         "role": "Head of Customer Experience",
         "avatar": "/images/avatars/eli-winderbaum.jpg"
       },
       "logoUrl": "/images/logos/parahelp-logo.svg"
     },
     {
       "id": "captions",
       "brandName": "Captions",
       "quote": "“Caption’s platform accelerated our content team’s workflows by 3×. The AI-driven summarization and auto-timelining features are incredible.”",
       "readStoryUrl": "/testimonials/captions",
       "author": {
         "name": "Sandra Choi",
         "role": "Content Director",
         "avatar": "/images/avatars/sandra-choi.jpg"
       },
       "logoUrl": "/images/logos/captions-logo.svg"
     },
     {
       "id": "perplexity",
       "brandName": "Perplexity",
       "quote": "“With Perplexity’s real-time query interface, our support agents resolve tickets 40% faster. The context-aware responses are unbelievably precise.”",
       "readStoryUrl": "/testimonials/perplexity",
       "author": {
         "name": "Amit Patel",
         "role": "VP of Support",
         "avatar": "/images/avatars/amit-patel.jpg"
       },
       "logoUrl": "/images/logos/perplexity-logo.svg"
     },
     {
       "id": "framer",
       "brandName": "Framer",
       "quote": "“Framer’s design-to-code pipeline became our go-to prototyping tool. We shipped new features twice as fast, maintaining pixel-perfect fidelity.”",
       "readStoryUrl": "/testimonials/framer",
       "author": {
         "name": "Lucia Martinez",
         "role": "Lead Product Designer",
         "avatar": "/images/avatars/lucia-martinez.jpg"
       },
       "logoUrl": "/images/logos/framer-logo.svg"
     },
     {
       "id": "replit",
       "brandName": "Replit",
       "quote": "“Our developer onboarding time dropped by 60% after moving to Replit for sandboxed code environments. The instant feedback loop is a game-changer.”",
       "readStoryUrl": "/testimonials/replit",
       "author": {
         "name": "Jamal Rivers",
         "role": "Engineering Manager",
         "avatar": "/images/avatars/jamal-rivers.jpg"
       },
       "logoUrl": "/images/logos/replit-logo.svg"
     }
   ]
```