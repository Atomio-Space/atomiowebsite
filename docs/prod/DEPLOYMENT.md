# Deployment Guide - Atomio Technologies Website

## Netlify Deployment Instructions

### Prerequisites
- GitHub repository with the code
- Netlify account

### Step-by-Step Deployment

1. **Connect Repository to Netlify**
   - Log in to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose your Git provider (GitHub, GitLab, etc.)
   - Select the `atomiowebsite` repository

2. **Configure Build Settings**
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`

3. **Environment Variables** (if needed)
   - Add any environment variables in Netlify dashboard
   - Go to Site settings > Environment variables
   - Example variables:
     ```
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     VITE_SITE_URL=your_domain
     ```

4. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site
   - The build process will use the `netlify.toml` configuration

### Build Configuration

The `netlify.toml` file in the frontend directory contains:
- Build settings (base directory, build command, publish directory)
- SPA redirect rules for React Router
- Security headers
- Cache control settings
- Environment-specific configurations

### Custom Domain (Optional)
1. Go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS settings as instructed by Netlify

### Continuous Deployment
- Netlify automatically deploys when you push to the main branch
- Deploy previews are created for pull requests
- Branch deploys can be configured for other branches

### Troubleshooting

**Build Fails:**
- Check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

**404 Errors on Routes:**
- The `_redirects` file and `netlify.toml` redirects handle SPA routing
- Ensure these files are properly configured

**Environment Variables:**
- Make sure all required environment variables are set in Netlify
- Variables must be prefixed with `VITE_` for Vite to include them

### Performance Optimization
- The build includes automatic code splitting
- Static assets are cached for 1 year
- HTML files are not cached to ensure updates are immediate

### Security
- Security headers are automatically applied
- HTTPS is enforced by default on Netlify
