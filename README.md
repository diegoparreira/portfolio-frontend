# Portfolio Frontend - Modern React TypeScript Application

A modern, fully-featured portfolio website built with React, TypeScript, and Vite. This application includes a comprehensive admin panel for content management and follows modern development best practices.

## 🚀 Features

### Frontend Portfolio

- **Modern Design**: Clean, responsive design with Bootstrap integration
- **Project Showcase**: Interactive project cards with media carousels
- **Skills Display**: Visual skills section with favorite highlighting
- **Certifications**: Professional certifications with badge links
- **About Modal**: Personal information and contact details

### Admin Panel

- **Secure Authentication**: Environment-based login system
- **CRUD Operations**: Full create, read, update, delete for all content
- **Form Validation**: Comprehensive client-side validation
- **Unified Architecture**: Generic components reduce code duplication
- **Favorite Management**: Mark items as favorites with star toggle
- **Media Management**: Image and video URL handling
- **Responsive Interface**: Mobile-friendly admin interface

### Technical Excellence

- **TypeScript**: Full type safety throughout the application
- **Modular CSS**: Organized stylesheet architecture with design tokens
- **Error Boundaries**: Graceful error handling and recovery
- **Lazy Loading**: Performance-optimized admin routes
- **Testing**: Comprehensive test suite with Vitest
- **Code Quality**: ESLint, Prettier, and pre-commit hooks
- **Performance**: React.memo optimizations for list components

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, React Router
- **UI Framework**: Bootstrap 5, React Bootstrap
- **State Management**: TanStack Query (React Query)
- **Build Tool**: Vite
- **Testing**: Vitest, Testing Library
- **Code Quality**: ESLint, Prettier, Husky
- **Icons**: React Bootstrap Icons

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**

   ```bash
   # Copy the example environment file
   cp .env.example .env.local

   # Edit .env.local with your admin credentials
   VITE_ADMIN_USERNAME=your_admin_username
   VITE_ADMIN_PASSWORD=your_secure_password
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── admin/           # Admin panel components
│   │   ├── commons/     # Shared admin components
│   │   ├── projects/    # Project management
│   │   ├── skills/      # Skills management
│   │   └── certifications/ # Certification management
│   ├── commons/         # Global shared components
│   ├── hero/           # Landing section
│   ├── navbar/         # Navigation
│   └── footer/         # Footer section
├── contexts/           # React contexts (Auth)
├── styles/            # Modular CSS architecture
│   ├── variables.css  # Design tokens
│   ├── globals.css    # Global styles
│   ├── components/    # Component-specific styles
│   ├── layout/        # Layout styles
│   └── admin/         # Admin panel styles
├── types/             # TypeScript type definitions
├── api/               # API integration layer
└── test/              # Testing utilities
```

## 🎯 Available Scripts

### Development

- `npm run dev` - Start development server (Hot reload, debugging)
- `npm run build` - Build for production (Optimized, minified)
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and prepare for deployment

### Code Quality

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Testing

- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:ui` - Open test UI
- `npm run test:coverage` - Generate coverage report

## 🔧 Running the Application

### 🚀 Development Mode (Recommended for coding)

```bash
npm run dev
```

- **Hot reload** - Changes appear instantly
- **Source maps** - Easy debugging
- **Development optimizations**
- **Available at:** http://localhost:5173

### 🏗️ Production Preview (Test before deployment)

```bash
npm run build
npm run preview
```

- **Production build** - Optimized and minified
- **Real deployment conditions** - Matches live site
- **Performance testing** - Check load times
- **Available at:** http://localhost:4173

### ❌ Don't Open dist/index.html Directly

Opening the HTML file directly in your browser will cause CORS errors because:

- Modern apps require HTTP server (not file:// protocol)
- ES modules need proper MIME types
- Security restrictions block local file access

**Always use `npm run preview` to test production builds!**

## 🔐 Admin Panel

Access the admin panel at `/admin` with your configured credentials.

### Features:

- **Project Management**: Add, edit, delete projects with media support
- **Skills Management**: Manage technical skills with icons
- **Certification Management**: Handle professional certifications
- **Favorite System**: Mark important items as favorites
- **Form Validation**: Real-time validation with user feedback
- **Responsive Design**: Works on desktop and mobile devices

### Security:

- Environment-based authentication
- Session management with localStorage
- Input validation and sanitization
- Error boundaries for graceful failure handling

## 🧪 Testing

The project includes comprehensive testing:

- **Unit Tests**: Component testing with Testing Library
- **Integration Tests**: User interaction flows
- **Error Boundary Tests**: Error handling verification
- **Form Validation Tests**: Input validation testing

Run tests:

```bash
npm run test:run    # Single run
npm run test        # Watch mode
npm run test:ui     # Interactive UI
```

## 🎨 Styling Architecture

### Design System

- **CSS Custom Properties**: Centralized design tokens
- **Modular Structure**: Component-scoped styles
- **Responsive Design**: Mobile-first approach
- **Bootstrap Integration**: Enhanced with custom variables

### CSS Organization

```
styles/
├── variables.css     # Design tokens (colors, spacing, etc.)
├── globals.css       # Global styles and resets
├── main.css         # Main import file
├── components/      # Component-specific styles
├── layout/          # Layout and section styles
└── admin/           # Admin panel specific styles
```

## 🚀 Deployment

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Test the build locally**

   ```bash
   npm run preview
   ```

3. **Deploy to your hosting platform**
   - Serve the `dist` folder
   - Configure environment variables on your platform
   - Ensure SPA routing is properly configured

## 🔧 Configuration

### Environment Variables

- `VITE_ADMIN_USERNAME` - Admin panel username
- `VITE_ADMIN_PASSWORD` - Admin panel password
- `VITE_API_BASE_URL` - API base URL (future use)

### TypeScript Configuration

- Strict type checking enabled
- Path aliases configured
- Modern ES features supported

### Development Tools

- **Pre-commit Hooks**: Lint and format on commit
- **Editor Config**: Consistent formatting across editors
- **VS Code Settings**: Recommended extensions and settings

## 🤝 Contributing

1. **Code Quality**: All code must pass linting and formatting
2. **Testing**: New features require test coverage
3. **Documentation**: Update README for significant changes
4. **Commits**: Use conventional commit messages

## 📝 License

This project is private and proprietary.

## 🆘 Troubleshooting

### Common Issues:

1. **Port already in use**: Vite will automatically find an available port
2. **Build errors**: Run `npm run lint:fix` to fix code issues
3. **Test failures**: Check test setup and mock configurations
4. **Admin login issues**: Verify environment variables are set correctly

### Performance Tips:

- Use lazy loading for admin routes (already implemented)
- Optimize images and reduce bundle size
- Enable React.memo for frequently re-rendered components (implemented)
- Use React Query for efficient data fetching and caching
