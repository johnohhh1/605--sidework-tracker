# Chili's Sidework Tracker

A digital task management system for restaurant cleaning and maintenance verification.

## Features

- ✅ **Role-based task management** (Prep & Dish, Line Cook, Janitorial, Server/Bar/To-Go/Busser, Runner & QA, Host)
- ✅ **Smart scheduling** - Automatically loads correct daily and weekly tasks based on day/shift selection
- ✅ **Bilingual support** - Full English/Spanish interface
- ✅ **Visual task tracking** - Green checkmarks for completed, red X for incomplete tasks
- ✅ **Email verification** - Sends completion reports to management
- ✅ **Mobile-friendly** - Works on phones, tablets, and computers
- ✅ **Offline-capable** - Tasks can be completed without internet, email sent when reconnected

## Quick Start

### Option 1: Local Development
```bash
# Clone or download this project
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Option 2: Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Chili's Sidework Tracker"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/chilis-sidework-tracker.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy" (no configuration needed!)
   - Your app will be live at: `https://your-app-name.vercel.app`

### Option 3: Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to [netlify.com/drop](https://netlify.com/drop)
3. Get instant live URL

## Project Structure

```
chilis-sidework-tracker/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── App.js             # Main React component
│   ├── App.css            # Tailwind CSS imports
│   └── index.js           # React entry point
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── README.md             # This file
```

## How It Works

1. **Team member selects role** → Loads role-specific tasks
2. **Selects day of week** → Adds weekly sparkle tasks for that day
3. **Selects shift** (AM/PM/Double) → Shows appropriate daily tasks
4. **Enters name** → For verification tracking
5. **Completes checklist** → Click to toggle green/red, add optional reasons
6. **Submits verification** → Opens email with detailed report

## Email Integration

When team members complete their tasks and click "Submit Verification", the app:
- Opens their default email app
- Pre-fills email to: `chilks605recognition@gmail.com`
- Includes complete verification report with:
  - Team member name & role
  - Day & shift
  - Timestamp
  - ✅ Completed tasks (green)
  - ❌ Incomplete tasks with reasons (red)
  - Completion percentage

## Customization

### Adding New Tasks
Edit the `taskData` object in `src/App.js` to add/modify tasks for any role.

### Changing Email Address
Update the email address in the `generateEmail` function in `src/App.js`.

### Styling Changes
Modify colors and styles in `tailwind.config.js` or add custom CSS to `src/App.css`.

### Adding New Languages
Add new language objects to the `translations` object in `src/App.js`.

## Technical Details

- **Framework:** React 18
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Build Tool:** Create React App
- **Deployment:** Vercel/Netlify ready

## Browser Support

- Chrome/Edge/Safari/Firefox (modern versions)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Works offline for task completion, syncs email when reconnected

## Support

For technical issues or feature requests, check the GitHub repository or contact the development team.

---

**Built for Chili's Restaurant Management**