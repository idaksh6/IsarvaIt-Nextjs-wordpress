# Deployment Guide - Isarva AI Chatbot

## 📋 Prerequisites
- GitHub account with repository: https://github.com/idaksh6/Isarva-AI-Chatbot
- Vercel account (sign up at vercel.com)
- OpenAI API Key
- Supabase project credentials

## 🚀 Step 1: Push Code to GitHub

```bash
cd "H:\nextjs-new\my-app"
git add -A
git commit -m "Production ready chatbot with full website crawling"
git push origin main
```

## ⚙️ Step 2: Deploy to Vercel

1. **Connect GitHub Repository**
   - Go to https://vercel.com/new
   - Import your repository: `idaksh6/Isarva-AI-Chatbot`
   - Select the repository

2. **Configure Build Settings**
   - Framework Preset: **Next.js**
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Add Environment Variables**
   Click "Environment Variables" and add these:

   ```
   OPENAI_API_KEY=sk-your-actual-key-here
   SUPABASE_URL=https://zqamsvgrvllrmdaekqfb.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your-actual-service-role-key
   WEBSITE_URL=https://your-vercel-url.vercel.app
   ```

   ⚠️ **Important**: Use your ACTUAL API keys, not placeholders!

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (~2-3 minutes)
   - Copy your production URL (e.g., `https://your-app.vercel.app`)

## 🕷️ Step 3: Web Scraping Strategy

**⚠️ IMPORTANT: Do NOT use Vercel Cron Jobs for scraping**

### Why Not Cron Jobs?
- Vercel functions can't access `http://localhost:3000`
- Scraping should be done when content changes, not on schedule
- Local scraping is more reliable and faster

### ✅ Recommended Approach: Local Scraping

**Option A: Scrape Production Site Locally (RECOMMENDED)**

1. Update your `.env.local` with production URL:
   ```bash
   WEBSITE_URL=https://your-vercel-url.vercel.app
   ```

2. Run ingestion locally:
   ```bash
   npm run ingest
   ```

   This will:
   - ✅ Crawl your LIVE production website (59 pages)
   - ✅ Extract all content
   - ✅ Upload to Supabase database
   - ✅ Make chatbot instantly smarter

3. **When to re-run:**
   - After adding new blog posts
   - After updating service/product pages
   - After any content changes
   - Manually, whenever needed

**Option B: Scrape Localhost Before Deployment**

1. Keep `WEBSITE_URL=http://localhost:3000` in `.env.local`
2. Run `npm run dev` to start local server
3. Run `npm run ingest` to scrape localhost
4. Then deploy to Vercel

## 🔄 Step 4: Update Environment Variable

After deployment, update the `WEBSITE_URL` in Vercel:

1. Go to your Vercel project → Settings → Environment Variables
2. Edit `WEBSITE_URL`
3. Set it to: `https://your-actual-vercel-url.vercel.app`
4. Redeploy if needed

## ✅ Step 5: Test Your Chatbot

1. Visit your production URL
2. Open the chatbot
3. Test with these questions:
   - "Hi" (should get greeting)
   - "What services do you provide?" (should get cached/AI response)
   - "Tell me about your products" (should get accurate info)

## 📊 Monitoring

### Check if Data is Ingested
1. Open Supabase Dashboard
2. Go to Table Editor → `documents`
3. Should see ~6,500 rows from 59 pages

### Check Caching
1. Ask the same question twice
2. Second response should be instant (from cache)
3. Check browser console for "Cache hit" messages

## 🔧 Troubleshooting

**Chatbot shows "API Key missing"**
- Check Vercel environment variables are set correctly
- Redeploy after adding env vars

**No responses about website content**
- Run `npm run ingest` locally with production URL
- Check Supabase `documents` table has data

**Slow responses**
- First query hits OpenAI (normal)
- Subsequent similar queries use cache (instant)

## 🎯 Production Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel deployed successfully
- [ ] Environment variables added to Vercel
- [ ] Website data ingested to Supabase
- [ ] Chatbot tested on production
- [ ] Cache working (test repeated questions)
- [ ] Greetings working instantly
- [ ] Services/Products info accurate

## 💡 Best Practices

1. **Run ingestion locally** - Don't use Vercel cron
2. **Update after content changes** - Re-run ingestion when you publish new content
3. **Monitor costs** - Check OpenAI usage, cache reduces API calls by 70-90%
4. **Test thoroughly** - Ask various questions to verify accuracy

## 🚨 Important Notes

- ⚠️ Never commit `.env.local` to Git (it's in .gitignore)
- ✅ Keep `.env.example` updated for reference
- 🔒 Service Role Key has admin access - keep it secret
- 💰 Monitor OpenAI usage to control costs
- 📈 Cache auto-saves responses, making chatbot smarter over time

---

**Need Help?**
- Check Vercel deployment logs
- Check Supabase database tables
- Review browser console for errors
