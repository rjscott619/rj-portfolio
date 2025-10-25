# 🔑 OpenAI API Key Issue - Fix Required

## Problem
Your OpenAI API key is returning a 401 error: "Incorrect API key provided"

## Current Key Status
- Key type: Project key (`sk-proj-`)
- Key length: 164 characters
- Ends with: `kjYA`
- Status: ❌ Invalid or Expired
- Direct API test: ❌ Failed with 401 error

## Solutions

### Option 1: Get a New API Key (Recommended)
1. Go to https://platform.openai.com/account/api-keys
2. Click "Create new secret key"
3. Copy the new key (should be ~51 characters starting with `sk-`)
4. Update your `.env` file:
   ```bash
   cd server
   echo 'OPENAI_API_KEY=sk-YOUR_NEW_KEY_HERE' > .env
   ```

### Option 2: Check for Key Corruption
The key might have gotten corrupted. Try:
1. Check your OpenAI dashboard for the correct key
2. If using a project key (`sk-proj-`), make sure it's the full key
3. Keys starting with `sk-proj-` are project-specific and should be ~164 characters, but yours seems invalid

### Option 3: Verify API Access
1. Log into https://platform.openai.com/
2. Check your account status
3. Ensure you have API credits/quota
4. Check if the key has been revoked

## Test Your New Key
```bash
# Restart server
cd server
node index.js

# Test in another terminal
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"test"}]}'
```

## Expected Response
```json
{"reply":"Hello! How can I help you today?"}
```

## Common Issues
- ❌ Key too long (164 chars) → Should be ~51-52 chars
- ❌ Missing key → Add to `.env` file
- ❌ Wrong format → Should start with `sk-`
- ❌ Expired key → Get new key from dashboard
- ❌ No API credits → Add payment method

