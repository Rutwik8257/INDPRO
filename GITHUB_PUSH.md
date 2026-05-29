# 📤 Push to GitHub Guide

## Step 1: Verify Sensitive Data is Protected

Before pushing, make sure:
- ✅ `.env` files are in `.gitignore`
- ✅ No credentials in code
- ✅ `.env.example` has placeholders only

## Step 2: Initialize Git Repository

```bash
cd c:\Users\rutwik\OneDrive\Desktop\INDPRO_Assignment
git init
```

## Step 3: Add Remote Repository

```bash
git remote add origin https://github.com/Rutwik8257/INDPRO.git
```

## Step 4: Stage Files

```bash
git add .
```

## Step 5: Commit Changes

```bash
git commit -m "Initial commit: Task Manager Application with drag-and-drop"
```

## Step 6: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

## Step 7: Verify on GitHub

1. Go to https://github.com/Rutwik8257/INDPRO
2. Check that `.env` files are NOT visible
3. Verify README.md displays correctly
4. Check all source files are present

## Step 8: Update README with Live Links

After deployment, update README.md with:
- Frontend deployment link
- Backend deployment link

## Important Notes

⚠️ **Before pushing:**
- Your actual `.env` file will NOT be pushed (it's in .gitignore)
- Only `.env.example` will be pushed (with placeholders)
- Keep your local `.env` file safe with real credentials

⚠️ **After pushing:**
- Your MongoDB credentials remain on your local machine only
- When deploying, add environment variables in hosting platform
- Never share your `.env` file publicly

## If You Accidentally Pushed Credentials

1. **Immediately change your MongoDB password**
2. **Generate new JWT secret**
3. **Remove the file from Git history:**
   ```bash
   git filter-branch --force --index-filter \
   "git rm --cached --ignore-unmatch backend/.env" \
   --prune-empty --tag-name-filter cat -- --all
   ```
4. **Force push:**
   ```bash
   git push origin --force --all
   ```

---

Ready to push! 🚀
