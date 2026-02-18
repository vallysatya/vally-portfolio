# 🚀 Portfolio Deployment Guide

## Quick Steps to Share Your Portfolio

### Option 1: GitHub Pages (Recommended - Free & Easy)

#### Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon → **"New repository"**
3. Name it: `portfolio` or `vally-portfolio`
4. Make it **Public**
5. **Don't** initialize with README (we already have files)
6. Click **"Create repository"**

#### Step 2: Upload Your Files to GitHub
**Method A: Using GitHub Desktop (Easiest)**
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in with your GitHub account
3. Click **"File"** → **"Add Local Repository"**
4. Navigate to: `c:\Users\bharg\OneDrive\Desktop\IA Marketing\Vally Portfolio`
5. Click **"Publish repository"** → Select your new repo → **"Publish"**

**Method B: Using Command Line**
```powershell
cd "c:\Users\bharg\OneDrive\Desktop\IA Marketing\Vally Portfolio"
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```
(Replace `YOUR_USERNAME` with your GitHub username)

#### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** section (left sidebar)
4. Under **"Source"**, select **"Deploy from a branch"**
5. Select branch: **"main"**
6. Select folder: **"/ (root)"**
7. Click **"Save"**
8. Wait 1-2 minutes, then visit: `https://YOUR_USERNAME.github.io/portfolio/`

**Your portfolio URL will be:** `https://YOUR_USERNAME.github.io/portfolio/`

---

### Option 2: Netlify (Alternative - Also Free)

1. Go to [Netlify.com](https://www.netlify.com) and sign up (free)
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag and drop your entire portfolio folder
4. Your site will be live instantly at: `https://random-name.netlify.app`
5. You can customize the URL in settings

---

## 📝 Adding to LinkedIn

### Step 1: Add to Your LinkedIn Profile
1. Go to [LinkedIn.com](https://www.linkedin.com)
2. Click on your **profile**
3. Scroll to **"Featured"** section (or add it if not visible)
4. Click **"+"** → **"Add link"**
5. Paste your portfolio URL: `https://YOUR_USERNAME.github.io/portfolio/`
6. Title: **"AI/ML Engineer Portfolio"**
7. Description: **"Showcasing my work in LLMs, RAG systems, and production AI applications"**
8. Click **"Save"**

### Step 2: Add to Your LinkedIn About Section
Add this line to your LinkedIn "About" section:
```
View my portfolio: https://YOUR_USERNAME.github.io/portfolio/
```

### Step 3: Add to Your LinkedIn Contact Info
1. Go to your profile → **"Contact info"** (pencil icon)
2. Under **"Websites"**, click **"Add website"**
3. Label: **"Portfolio"**
4. URL: `https://YOUR_USERNAME.github.io/portfolio/`
5. Click **"Save"**

---

## 📄 Adding to Your Resume

### Option 1: Add a "Portfolio" Section
Add this section near the top (after contact info):

```
PORTFOLIO
https://YOUR_USERNAME.github.io/portfolio/
```

### Option 2: Add to Contact Information
Add it to your header section:

```
Vally Satya
AI/ML Engineer
San Francisco, CA | +1 (469) 755-3319 | vallyskadambari@gmail.com
Portfolio: https://YOUR_USERNAME.github.io/portfolio/ | LinkedIn: www.linkedin.com/in/vallysatya
```

### Option 3: Add to Projects Section
Under each project, add:
```
GitHub: [link] | Live Demo: https://YOUR_USERNAME.github.io/portfolio/
```

---

## 🔗 Custom Domain (Optional - Advanced)

If you want a custom domain like `vallysatya.com`:
1. Buy a domain from Namecheap, Google Domains, or similar
2. In GitHub Pages settings, add your custom domain
3. Update DNS records as instructed by GitHub

---

## ✅ Quick Checklist

- [ ] Create GitHub repository
- [ ] Upload portfolio files
- [ ] Enable GitHub Pages
- [ ] Test your portfolio URL
- [ ] Add link to LinkedIn profile
- [ ] Add link to LinkedIn contact info
- [ ] Add link to resume
- [ ] Share with friends/colleagues!

---

## 🆘 Troubleshooting

**Portfolio not loading?**
- Wait 2-3 minutes after enabling GitHub Pages
- Check that your `index.html` is in the root folder
- Make sure repository is Public

**404 Error?**
- Verify the repository name matches the URL
- Check GitHub Pages settings → Source branch is correct

**Need help?**
- GitHub Pages docs: https://docs.github.com/en/pages
- Check repository settings → Pages section for any errors

---

**Your portfolio will be live at:** `https://YOUR_USERNAME.github.io/portfolio/`

Replace `YOUR_USERNAME` with your actual GitHub username!
