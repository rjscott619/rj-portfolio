# 🔑 How to Update OpenAI API Key in Render

## 🎯 Quick Steps

### 1️⃣ Access Render Dashboard
1. Go to **https://dashboard.render.com**
2. Sign in with your GitHub account

### 2️⃣ Find Your Service
1. Click on **"rj-portfolio-backend"** (or your service name)
2. You'll see your service dashboard

### 3️⃣ Update Environment Variable
1. Click on **"Environment"** tab (left sidebar)
2. Scroll down to find **`OPENAI_API_KEY`**
3. Click **"Edit"** or the pencil icon next to it
4. **Replace** the old key with your new API key
5. Click **"Save Changes"**

### 4️⃣ Restart Service
Render will automatically restart your service when you save environment variables. Wait 1-2 minutes for the redeploy to complete.

## ✅ Verify It Works

Test your backend:
```bash
curl https://rj-portfolio-backend.onrender.com/api/health
```

Should return: `{"ok":true}`

## 📸 Visual Guide

```
Render Dashboard
├── Your Services
│   └── rj-portfolio-backend (click this)
│       ├── Logs
│       ├── Metrics
│       ├── Environment ← CLICK HERE
│       │   └── OPENAI_API_KEY → Edit
│       ├── Settings
│       └── Shell
```

## 🔄 Alternative Method: Via Settings

You can also update it through:
1. Go to **Settings** tab
2. Scroll to **"Environment Variables"** section
3. Find `OPENAI_API_KEY`
4. Click **"Edit"**
5. Update the value
6. Save

## ⚠️ Important Notes

- **Format**: Your key should start with `sk-` and be ~51 characters
- **Security**: Never commit API keys to GitHub
- **Redeploy**: Changes take effect immediately after saving
- **Free Tier**: Service may take 30-60 seconds to spin up

## 🆘 Troubleshooting

### Key not working?
1. Check you copied the entire key (no extra spaces)
2. Verify key is active at https://platform.openai.com/account/api-keys
3. Check Render logs for errors

### Service not restarting?
1. Go to **"Events"** tab to see deployment status
2. Check **"Logs"** tab for any errors
3. Try manually clicking **"Manual Deploy"** button

## 🔗 Quick Links

- **Render Dashboard**: https://dashboard.render.com
- **OpenAI Keys**: https://platform.openai.com/account/api-keys
- **Service URL**: https://rj-portfolio-backend.onrender.com

