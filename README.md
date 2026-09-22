# Shriman Narayan - AI Engineer Portfolio

A modern, high-performance, and responsive personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**. 

Configured for **100% Free deployment on Render** as a **Static Site** (zero cold starts, global CDN, and automatic SSL).

---

## 🚀 Quick Start (Run Locally)

From this directory (`/Users/shriman/Desktop/portfolio`):

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to preview your portfolio live with Hot Module Replacement (HMR).

### 3. Test Production Build
```bash
npm run build
npm run preview
```

---

## 🌐 How to Deploy for Free on Render (3 Minutes)

Render offers **completely free hosting** for static sites with unlimited bandwidth and zero spin-down latency.

### Step 1: Push this code to a GitHub repository
```bash
git init
git add .
git commit -m "Initial commit of Shriman Narayan AI Engineer Portfolio"
git branch -M main
# Create an empty repo on your GitHub (e.g. github.com/student-shriman/portfolio)
git remote add origin https://github.com/student-shriman/portfolio.git
git push -u origin main
```

### Step 2: Create a New Static Site on Render
1. Go to [https://dashboard.render.com](https://dashboard.render.com) and log in (or sign up with your GitHub account).
2. Click the **"New +"** button at the top right and select **"Static Site"**.
3. Choose your **`portfolio`** repository.

### Step 3: Configure Settings
Fill in the following:
* **Name**: `shriman-narayan-portfolio` (or your choice)
* **Branch**: `main`
* **Build Command**: `npm run build`
* **Publish Directory**: `dist`

*(Alternatively, because `render.yaml` is included in this repository, Render can auto-detect these settings via Blueprint!)*

### Step 4: Click "Create Static Site"
Render will automatically build your site and deploy it to a free custom URL (e.g., `https://shriman-narayan-portfolio.onrender.com`) with automated free SSL within 60 seconds!

Whenever you push new commits to GitHub, Render will automatically rebuild and redeploy your portfolio.

---

## 🛠 Project Structure & Easy Customization

All your profile details, contact information, project case studies, and career timelines are centralized in a single file:

```
portfolio/
├── render.yaml                 # Render Blueprint configuration
├── package.json
├── vite.config.js
├── tailwind.config.js
├── index.html
└── src/
    ├── App.jsx                 # Page layout
    ├── index.css               # Tailwind CSS & theme styling
    ├── data/
    │   └── portfolioData.js    # 👈 EDIT ALL YOUR INFO, PROJECTS & LINKS HERE
    └── components/
        ├── Navbar.jsx          # Top navigation & quick actions
        ├── Hero.jsx            # Headline, metrics & CTAs
        ├── About.jsx           # Bio & core pillars
        ├── Skills.jsx          # Categorized technical skill pills & search
        ├── Projects.jsx        # Project case studies & architecture deep dive modal
        ├── Experience.jsx      # Work experience timeline
        ├── Education.jsx       # Academic background & credentials
        ├── Contact.jsx         # 1-click email copy & contact form
        └── Footer.jsx          # Bottom bar & back to top
```

To update any content in the future, simply edit `src/data/portfolioData.js`!
