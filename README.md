# Figma Landing Page Assignment

A responsive landing page built with Next.js and Tailwind CSS, replicating the exact design from the provided Figma file.

## 🎨 Design Features

- **MacBook Pro Frame**: Dark gradient background with realistic MacBook Pro 16" frame
- **Profile Widget**: Interactive tabs (About Me, Experiences, Recommended) with smooth transitions
- **Gallery Widget**: Image grid with navigation arrows and "Add Image" functionality
- **Responsive Design**: Optimized for laptop screens (768px+)
- **Exact UI Replication**: Matching colors, shadows, padding, margins, and interactions

## 🚀 Technologies Used

- **Next.js 16.0.0** - React framework
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Plus Jakarta Sans & Poppins** - Custom fonts matching Figma design

## 📋 Features Implemented

### Profile Widget
- ✅ Three clickable tabs: About Me, Experiences, Recommended
- ✅ Smooth tab switching with visual feedback
- ✅ Content area with scrollable text
- ✅ Exact styling matching Figma design

### Gallery Widget
- ✅ 4-image grid layout (2x2 with first image spanning 2x2)
- ✅ Navigation arrows (left/right)
- ✅ "Add Image" button with glassmorphism effect
- ✅ Responsive grid layout

### Layout & Design
- ✅ MacBook Pro frame with exact dimensions and shadows
- ✅ Dark gradient background (`#373E44` to `#191B1F`)
- ✅ Left side empty as per requirements
- ✅ Right side widgets with proper alignment
- ✅ Responsive design for laptop screens (768px+)

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd figma-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 768px  
- **Laptop**: 768px+ (primary target)
- **Desktop**: 1024px+

## 🎯 Design Accuracy

The implementation matches the Figma design with:
- Exact color values and gradients
- Precise shadow effects and blur filters
- Matching typography (Plus Jakarta Sans & Poppins)
- Correct spacing, padding, and margins
- Interactive elements with proper hover states
- Glassmorphism effects on buttons

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
figma-landing-page/
├── src/
│   └── app/
│       ├── components/
│       │   ├── ProfileWidget.tsx
│       │   └── GalleryWidget.tsx
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── public/
│   └── images/
└── package.json
```

## 🌐 Deployment

The project is ready for deployment on platforms like:
- Vercel
- Netlify
- Render
- Any platform supporting Next.js

## 📝 Notes

- Images are currently using placeholder gradients matching the Figma design
- All interactions and effects are implemented as specified
- The design is fully responsive for laptop screens and above
- Left side remains empty as per assignment requirements