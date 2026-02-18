# Kenya Industrial Research Homes (KIRH) Website

A modern, accessible, and compassionate website for Kenya Industrial Research Homes - an organization dedicated to empowering Persons with Disabilities through quality care, innovation, and community integration.

## 🌟 Features

### Design & User Experience
- **Human-centered Design**: Warm, uplifting interface with soft color palette
- **Fully Accessible**: WCAG 2.1 Level AA compliant with comprehensive accessibility features
- **Responsive**: Mobile-first design that works seamlessly on all devices
- **Smooth Animations**: Gentle Framer Motion animations for enhanced user experience
- **Clean Typography**: Inter and Poppins fonts for optimal readability

### Technical Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: Optimized metadata and semantic HTML

### Pages Included

1. **Homepage**
   - Hero section with compelling CTAs
   - "What We Do" value propositions
   - Impact statistics
   - Why choose KIRH section
   - Featured callouts

2. **About Us**
   - Organization story
   - Vision and mission statements
   - Core values showcase
   - Leadership team profiles
   - Care & support specialists

3. **Services**
   - Personal & daily living support
   - Emotional & social support services
   - Professional & ethical standards
   - Person-centered approach

4. **Empowerment & Innovation Hub**
   - Personal skill building programs
   - Peer mentorship opportunities
   - Technology & innovation training
   - Program benefits and success stories

5. **Impact**
   - Quantitative impact statistics
   - Testimonials from community
   - Before/after transformation stories
   - Measurable outcomes

6. **Contact & Partners**
   - Contact information and form
   - Multiple inquiry types
   - Partnership showcase
   - Interactive map placeholder

7. **Legal Pages**
   - Privacy Policy
   - Terms of Service
   - Accessibility Statement

### Accessibility Features
- ✅ Keyboard navigation support
- ✅ Screen reader compatible with ARIA labels
- ✅ High contrast color ratios
- ✅ Skip to main content link
- ✅ Semantic HTML structure
- ✅ Focus indicators for interactive elements
- ✅ Alt text for all images
- ✅ Accessible forms with proper labels

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
KIRH Website/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About Us page
│   ├── accessibility/            # Accessibility statement
│   ├── contact/                  # Contact & Partners page
│   ├── empowerment/              # Empowerment Hub page
│   ├── impact/                   # Impact page
│   ├── privacy/                  # Privacy policy
│   ├── services/                 # Services page
│   ├── terms/                    # Terms of service
│   ├── layout.tsx                # Root layout with navigation
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/
│   ├── layout/                   # Layout components
│   │   ├── Navbar.tsx           # Main navigation
│   │   └── Footer.tsx           # Site footer
│   ├── ui/                       # Reusable UI components
│   │   ├── HeroSection.tsx      # Hero banner
│   │   ├── ValueCard.tsx        # Value proposition cards
│   │   ├── ServiceCard.tsx      # Service detail cards
│   │   ├── TeamCard.tsx         # Team member profiles
│   │   ├── TestimonialCard.tsx  # Testimonial display
│   │   ├── StatsBlock.tsx       # Statistics showcase
│   │   ├── CTASection.tsx       # Call-to-action sections
│   │   └── ContactForm.tsx      # Contact form
│   └── sections/                 # Page sections
│       └── InfoSection.tsx      # Information sections
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
└── package.json                  # Dependencies
```

## 🎨 Color Palette

### Primary (Blue)
- Used for main CTAs, links, and primary accents
- Conveys trust and professionalism

### Secondary (Green)
- Used for success states and growth-related content
- Represents hope and progress

### Warm (Orange/Peach)
- Used for highlights and emotional warmth
- Adds compassion and friendliness

## 🔧 Customization

### Update Content
Content is embedded directly in page components for easy editing. Navigate to the relevant page file in the `app/` directory to update text, add images, or modify layouts.

### Modify Styles
- Global styles: `app/globals.css`
- Theme colors: `tailwind.config.ts`
- Component-specific styles: Inline Tailwind classes

### Add New Pages
1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Update navigation in `components/layout/Navbar.tsx`

## 📧 Contact Information

For questions about this website or KIRH services:
- **Email**: info@kirh.co.ke
- **Phone**: 0700 045 294
- **Address**: South B, Nairobi, Kenya
- **Website**: [https://kirh.co.ke](https://kirh.co.ke)

## 🙏 Acknowledgments

Built with care for Kenya Industrial Research Homes to support their mission of empowering Persons with Disabilities through compassionate care and innovative opportunities.

---

**Note**: This website prioritizes accessibility, inclusivity, and user dignity in every design decision. All features have been implemented with WCAG guidelines and best practices in mind.
