# 🔧 Git Commands Reference

Quick reference for common Git commands to update your project.

## 📝 Basic Workflow

### 1️⃣ Check Status
```bash
git status
```
Shows which files have been modified.

### 2️⃣ Add Files
```bash
# Add specific file
git add filename.js

# Add all changes
git add .

# Add specific directory
git add client/
```

### 3️⃣ Commit Changes
```bash
git commit -m "Your descriptive message here"
```

### 4️⃣ Push to GitHub
```bash
git push origin main
```

## 🚀 Complete Workflow (Most Common)

```bash
# 1. Check what changed
git status

# 2. Add all changes
git add .

# 3. Commit with message
git commit -m "Update: description of changes"

# 4. Push to GitHub
git push origin main
```

## 📋 One-Liner Commands

### Add, Commit, and Push in One Command
```bash
git add . && git commit -m "Your message" && git push origin main
```

### Add Only Specific Files
```bash
git add file1.js file2.js && git commit -m "Update specific files" && git push origin main
```

## 🔍 Useful Commands

### View Recent Commits
```bash
git log --oneline -5
```

### View Changes in File
```bash
git diff filename.js
```

### View All Branches
```bash
git branch -a
```

### Pull Latest Changes from GitHub
```bash
git pull origin main
```

## 📦 For Your Project

### Update Client and Deploy
```bash
cd client
npm run build
npm run deploy
```

### Push Changes to Main Branch
```bash
git add .
git commit -m "Update client changes"
git push origin main
```

## 🎯 Quick Copy-Paste Templates

### Template 1: Small Update
```bash
git add . && git commit -m "Small fixes" && git push origin main
```

### Template 2: Feature Update
```bash
git add . && git commit -m "Add new feature: description" && git push origin main
```

### Template 3: Bug Fix
```bash
git add . && git commit -m "Fix: description of bug fix" && git push origin main
```

### Template 4: Documentation Update
```bash
git add . && git commit -m "Update documentation" && git push origin main
```

## ⚠️ Important Notes

- **Always check status first**: `git status` before committing
- **Write clear commit messages**: Describe what changed and why
- **Push regularly**: Keep your GitHub repo up to date
- **Don't commit node_modules**: Use `.gitignore` to exclude it

## 🆘 If Something Goes Wrong

### Undo Last Commit (Before Push)
```bash
git reset --soft HEAD~1
```

### Discard Changes to File
```bash
git checkout -- filename.js
```

### Discard All Changes
```bash
git reset --hard HEAD
```

## 📚 More Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

