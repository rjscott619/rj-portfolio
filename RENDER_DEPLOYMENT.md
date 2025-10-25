# 🚀 Deploying Backend to Render

This guide will help you deploy your Express backend to Render so your GitHub Pages site can communicate with it.

## 📋 Prerequisites

- GitHub account with your repository pushed
- Render account (free at [render.com](https://render.com))
- OpenAI API key

## 🔧 Step-by-Step Instructions

### 1️⃣ Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account
3. Connect your GitHub account to Render

### 2️⃣ Deploy Backend Service

1. **Click "New +"** → **"Web Service"**
2. **Connect your repository**: `rjscott619/rj-portfolio`
3. **Configure settings**:
   - **Name**: `rj-portfolio-backend`
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Root Directory**: `server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. **Add Environment Variable**:
   - Key: `OPENAI_API_KEY`
   - Value: Your OpenAI API key
5. **Click "Create Web Service"**

### 3️⃣ Update Client Configuration

After Render deploys your backend, you'll get a URL like:
`https://rj-portfolio-backend.onrender.com`

Update your client to use this URL:

1. **Create a `.env` file** in the `client` directory:
   ```bash
   cd client
   echo "VITE_API_URL=https://rj-portfolio-backend.onrender.com" > .env
   ```

2. **Or update directly in code** (temporary solution):
   Edit `client/src/config.js`:
   ```javascript
   const API_BASE_URL = 'https://rj-portfolio-backend.onrender.com';
   ```

3. **Rebuild and redeploy**:
   ```bash
   cd client
   npm run build
   npm run deploy
   ```

### 4️⃣ Copy Files to Render

The PDF and summary files need to be uploaded to Render:

**Option A: Upload via Render Dashboard**
1. Go to your Render service dashboard
2. Use the "Shell" tab to access your instance
3. Upload files using `scp` or file upload feature

**Option B: Store in GitHub (Recommended)**
The files are already in your GitHub repo, so Render will have access to them automatically.

### 5️⃣ Verify Deployment

1. **Test backend URL**: Visit `https://rj-portfolio-backend.onrender.com/api/pdf-text`
2. **Test GitHub Pages**: Visit `https://rjscott619.github.io/rj-portfolio/`
3. **Test chat functionality**: Try asking a question in the chat interface

## 🔍 Troubleshooting

### Backend not responding?
- Check Render logs: Go to your service → "Logs" tab
- Verify environment variables are set correctly
- Ensure `npm start` is working in the server directory

### CORS errors?
- Backend already has `cors()` enabled
- Check that your frontend URL is allowed

### PDF not loading?
- Verify file paths in Render match your local setup
- Check that PDF files are in the correct directory

## 📝 Notes

- **Free tier**: Render has a free tier with some limitations (spins down after inactivity)
- **Environment variables**: Set `OPENAI_API_KEY` in Render dashboard (Settings → Environment)
- **Updates**: Push to GitHub to trigger automatic deployment on Render

## 🎯 Quick Commands

```bash
# Deploy backend (after configuring in Render dashboard)
git push origin main

# Update frontend with new backend URL
cd client
npm run build
npm run deploy
```

## 🔗 Resources

- [Render Documentation](https://render.com/docs)
- [Render Web Services](https://render.com/docs/web-services)
- [GitHub Pages](https://pages.github.com/)

