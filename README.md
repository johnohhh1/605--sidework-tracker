# 605's Sidework Tracker

A digital task management system for restaurant cleaning and maintenance verification.

## Features

- ✅ **Role-based task management** (Prep & Dish, Line Cook, Janitorial, Server/Bar/To-Go/Busser, Runner & QA, Host)
- ✅ **Smart scheduling** - Automatically loads correct daily and weekly tasks based on day/shift selection
- ✅ **Bilingual support** - Full English/Spanish interface
- ✅ **Visual task tracking** - Green checkmarks for completed, red X for incomplete tasks
- ✅ **Email verification** - Sends completion reports to management via EmailJS
- ✅ **Mobile-friendly** - Works on phones, tablets, and computers
- ✅ **Production-ready** - Zero security vulnerabilities

## Quick Start

### Local Development
```bash
# Install dependencies
npm install

# Start development server (opens at http://localhost:3000)
npm start
# or
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```


## Project Structure

```
chilis-sidework-tracker/
├── public/              # Static assets
├── src/
│   ├── app.jsx         # Main React component with all task data
│   ├── app.css         # Tailwind CSS imports
│   └── index.jsx       # React entry point
├── index.html          # Main HTML template
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.cjs  # PostCSS configuration
└── README.md           # This file
```

## How It Works

1. **Team member selects role** → Loads role-specific tasks
2. **Selects day of week** → Adds weekly sparkle tasks for that day
3. **Selects shift** (AM/PM/Double) → Shows appropriate daily tasks
4. **Enters name** → Simple text input for verification tracking
5. **Completes checklist** → Click to toggle green/red, add optional reasons
6. **Submits verification** → Sends email via EmailJS with detailed report

## Email Integration

This app uses **EmailJS** for reliable email delivery. When team members complete their tasks and click "Submit Verification", the app:
- Sends email directly via EmailJS service
- Falls back to mailto if EmailJS is unavailable
- Sends to: `chilis605recognition@gmail.com`
- Includes complete verification report with:
  - Team member name & role
  - Day & shift
  - Timestamp
  - ✅ Completed tasks (green)
  - ❌ Incomplete tasks with reasons (red)
  - Completion percentage

## Customization

### Adding New Tasks
Edit the `taskData` object in `src/app.jsx` to add/modify tasks for any role.

### Changing Email Address
Update the email address in the `generateEmail` function in `src/app.jsx`.

### Styling Changes
Modify colors and styles in `tailwind.config.js` or add custom CSS to `src/app.css`.

### Adding New Languages
Add new language objects to the `translations` object in `src/app.jsx`.

## Technical Details

- **Framework:** React 18
- **Build Tool:** Vite 7 (fast, modern, secure)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Email Service:** EmailJS
- **Security:** 0 vulnerabilities
- **Deployment:** Netlify/Static hosting ready

## Browser Support

- Chrome/Edge/Safari/Firefox (modern versions)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

## Available Scripts

- `npm start` - Start development server
- `npm run dev` - Same as start
- `npm run build` - Build for production (outputs to `/build` folder)
- `npm run preview` - Preview production build locally

## Support

For technical issues or feature requests, check the GitHub repository or contact the development team.

---

**Built for 605's Restaurant Management**
