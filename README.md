# N's - Modern Responsive Website

A modern, responsive website built with React and Vite, featuring a clean design and excellent user experience across all devices.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, modern design with smooth animations and transitions
- **Component-Based Architecture**: Modular React components for easy maintenance and scalability
- **Performance Optimized**: Fast loading times with optimized assets and code splitting
- **Accessibility**: Built with accessibility in mind, including proper ARIA labels and keyboard navigation
- **Cross-Browser Compatible**: Works seamlessly across all modern browsers

## 📱 Sections

1. **Header**: Fixed navigation with mobile menu
2. **Hero**: Eye-catching hero section with call-to-action buttons
3. **About**: Company information with statistics and features
4. **Services**: Service offerings with pricing cards
5. **Portfolio**: Project showcase with filtering functionality
6. **Contact**: Contact form with company information
7. **Footer**: Comprehensive footer with links and newsletter signup

## 🛠️ Technologies Used

- **React 19**: Latest version of React for building user interfaces
- **Vite**: Fast build tool and development server
- **CSS3**: Modern CSS with Flexbox and Grid layouts
- **JavaScript ES6+**: Modern JavaScript features
- **Responsive Design**: Mobile-first approach with CSS media queries

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Services.jsx    # Services section
│   ├── Portfolio.jsx   # Portfolio section
│   ├── Contact.jsx     # Contact section
│   └── Footer.jsx      # Footer component
├── styles/             # CSS stylesheets
│   ├── Header.css      # Header styles
│   ├── Hero.css        # Hero styles
│   ├── About.css       # About styles
│   ├── Services.css    # Services styles
│   ├── Portfolio.css   # Portfolio styles
│   ├── Contact.css     # Contact styles
│   └── Footer.css      # Footer styles
├── assets/             # Static assets
├── App.jsx             # Main App component
├── App.css             # Global styles
├── main.jsx            # Application entry point
└── index.css           # Base styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 🎨 Customization

### Colors
The website uses a modern color palette:
- Primary Blue: `#2563eb`
- Secondary Purple: `#667eea` to `#764ba2`
- Accent Gold: `#ffd700`
- Text Colors: `#1f2937`, `#6b7280`
- Background: `#ffffff`, `#f8fafc`

### Typography
- Font Family: Inter (Google Fonts)
- Font Weights: 300, 400, 500, 600, 700, 800

### Responsive Breakpoints
- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: 768px - 1024px
- Large Desktop: > 1024px

## 📱 Responsive Features

- **Mobile-First Design**: Built with mobile-first approach
- **Flexible Grid System**: CSS Grid and Flexbox for responsive layouts
- **Touch-Friendly**: Optimized for touch interactions on mobile devices
- **Readable Typography**: Scalable font sizes for all screen sizes
- **Optimized Images**: Responsive images that scale appropriately

## 🔧 Development

### Adding New Components

1. Create a new component in the `src/components/` directory
2. Create corresponding CSS file in `src/styles/`
3. Import and use the component in `App.jsx`

### Styling Guidelines

- Use CSS custom properties for consistent theming
- Follow BEM methodology for CSS class naming
- Use CSS Grid and Flexbox for layouts
- Implement responsive design with mobile-first approach

### Performance Optimization

- Lazy load components when needed
- Optimize images and assets
- Use CSS animations instead of JavaScript when possible
- Minimize bundle size with code splitting

## 🌟 Features in Detail

### Header Component
- Fixed navigation with smooth scrolling
- Mobile hamburger menu
- Responsive logo and navigation items
- Backdrop blur effect

### Hero Section
- Gradient background with animated elements
- Call-to-action buttons
- Floating cards with animations
- Responsive typography

### About Section
- Company information with statistics
- Feature cards with hover effects
- Responsive grid layout
- Animated statistics

### Services Section
- Service cards with pricing
- Hover animations and transitions
- Feature lists with checkmarks
- Call-to-action section

### Portfolio Section
- Project filtering functionality
- Technology tags
- Responsive grid layout
- Project cards with hover effects

### Contact Section
- Contact form with validation
- Company information display
- Social media links
- Responsive form layout

### Footer Component
- Multi-column layout
- Newsletter signup
- Social media links
- Copyright information

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: hello@ns.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using React and Vite
