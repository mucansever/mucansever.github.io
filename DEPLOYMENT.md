# Deployment Guide

This guide explains how to deploy your React portfolio website to various platforms.

## 🚀 GitHub Pages Deployment

### Option 1: Using the Deploy Script

1. **Build and Deploy**:
   ```bash
   npm run deploy
   ```

   This script will:
   - Build the project
   - Force add the dist folder to git
   - Commit the changes
   - Push to the gh-pages branch

2. **Configure GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "Deploy from a branch"
   - Select "gh-pages" branch
   - Save the settings

### Option 2: Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Create gh-pages branch**:
   ```bash
   git checkout -b gh-pages
   git add dist -f
   git commit -m "deploy"
   git push origin gh-pages
   ```

3. **Configure GitHub Pages** (same as above)

## 🌐 Other Deployment Options

### Netlify

1. **Connect your GitHub repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy automatically** on every push to main branch

### Vercel

1. **Import your GitHub repository** to Vercel
2. **Framework preset**: Vite
3. **Build command**: `npm run build`
4. **Output directory**: `dist`
5. **Deploy automatically** on every push

### AWS S3 + CloudFront

1. **Build the project**: `npm run build`
2. **Upload dist folder** to S3 bucket
3. **Configure CloudFront** for CDN
4. **Set up custom domain** (optional)

## 🔧 Environment Variables

If you need to add environment variables:

1. **Create `.env` file**:
   ```env
   VITE_API_URL=your_api_url
   VITE_ANALYTICS_ID=your_analytics_id
   ```

2. **Access in components**:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

## 📱 Custom Domain

To use a custom domain:

1. **Add CNAME file** in the `public` folder:
   ```
   yourdomain.com
   ```

2. **Configure DNS** to point to your hosting provider

3. **Update base URL** in `vite.config.ts` if needed:
   ```typescript
   export default defineConfig({
     base: '/',
     // ... other config
   })
   ```

## 🚨 Troubleshooting

### Build Errors

- **TypeScript errors**: Run `npm run build` to see detailed errors
- **Missing dependencies**: Run `npm install` to install missing packages
- **Port conflicts**: Change port in `vite.config.ts` or kill conflicting processes

### Deployment Issues

- **404 errors**: Ensure base URL is configured correctly
- **Missing assets**: Check that all static files are in the `public` folder
- **Routing issues**: Consider using HashRouter for GitHub Pages

### Performance

- **Large bundle size**: Check for unused dependencies
- **Slow loading**: Optimize images and use lazy loading
- **SEO issues**: Add meta tags and proper titles

## 📊 Analytics and Monitoring

### Google Analytics

1. **Add tracking code** to `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **Track page views** in React components:
   ```typescript
   useEffect(() => {
     gtag('config', 'GA_MEASUREMENT_ID', {
       page_path: window.location.pathname,
     });
   }, []);
   ```

## 🔒 Security

- **HTTPS**: Always use HTTPS in production
- **Content Security Policy**: Add CSP headers if needed
- **Environment variables**: Never commit sensitive data to git

## 📈 Performance Optimization

1. **Code splitting**: Use React.lazy() for route-based splitting
2. **Image optimization**: Compress images and use modern formats
3. **Caching**: Set appropriate cache headers
4. **CDN**: Use a CDN for static assets

---

For more help, check the [Vite documentation](https://vitejs.dev/guide/deploy.html) or [React deployment guide](https://create-react-app.dev/docs/deployment/).
