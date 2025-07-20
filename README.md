# 4 Seasons Property Services LLC - Website

A modern, professional website for 4 Seasons Property Services LLC, offering comprehensive landscaping, construction, and property maintenance services.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Functional estimate request form with validation
- **FAQ Section**: Interactive accordion-style frequently asked questions
- **Service Showcase**: Detailed information about all services offered
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Enhanced user experience with smooth page navigation

## Services Offered

- **Lawn Care**: Professional lawn maintenance, mowing, edging, and seasonal care
- **Retaining Walls**: Custom retaining wall construction and erosion control
- **Concrete Work**: Driveways, patios, walkways, and decorative concrete
- **Landscaping**: Complete landscape design and installation

## Contact Information

- **Phone**: 724-344-3640
- **Email**: austinlembo@gmail.com
- **Business Hours**: 
  - Monday - Friday: 8:00 AM - 6:00 PM
  - Saturday: 9:00 AM - 4:00 PM
  - Sunday: Closed

## How to Run Locally

### Option 1: Simple HTTP Server (Recommended)

1. **Open Command Prompt/Terminal**
   - Press `Win + R`, type `cmd`, and press Enter (Windows)
   - Or open Terminal (Mac/Linux)

2. **Navigate to the project directory**
   ```bash
   cd "C:\Users\chase\Desktop\4 Seasons LLC"
   ```

3. **Start a local server**
   
   **Using Python (if installed):**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js (if installed):**
   ```bash
   npx http-server -p 8000
   ```
   
   **Using PHP (if installed):**
   ```bash
   php -S localhost:8000
   ```

4. **Open your browser**
   - Go to: `http://localhost:8000`
   - The website should now be running locally!

### Option 2: Live Server Extension (VS Code)

1. **Install VS Code** (if not already installed)
2. **Install Live Server Extension**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Install the extension by Ritwick Dey
3. **Open the project folder in VS Code**
4. **Right-click on `index.html`**
5. **Select "Open with Live Server"**
6. **The website will open in your default browser**

### Option 3: Direct File Opening

1. **Navigate to the project folder**
2. **Double-click on `index.html`**
3. **The website will open in your default browser**

*Note: Some features may not work properly when opening the file directly due to browser security restrictions.*

## Project Structure

```
4 Seasons LLC/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization

### Adding Images
To add your own images:

1. **Create an `images` folder** in the project directory
2. **Add your images** to the folder
3. **Update the HTML** to reference your images:

```html
<!-- Replace placeholder images with your own -->
<img src="images/your-image.jpg" alt="Description">
```

### Updating Content
- **Business Information**: Edit contact details in `index.html`
- **Services**: Modify service descriptions in the services section
- **FAQ**: Add or modify questions in the FAQ section
- **Styling**: Customize colors and layout in `styles.css`

### Color Scheme
The current color scheme uses:
- **Primary Green**: `#4a7c59`
- **Dark Green**: `#2c5530`
- **Light Gray**: `#f8f9fa`
- **Text Gray**: `#666`

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Internet Explorer 11+

## Form Functionality

The contact form currently simulates submission. To make it fully functional:

1. **Backend Integration**: Connect to a server-side language (PHP, Node.js, etc.)
2. **Email Service**: Integrate with services like SendGrid, Mailgun, or SMTP
3. **Database**: Store form submissions in a database if needed

## Performance Features

- **Optimized Images**: Use compressed images for faster loading
- **Minified CSS/JS**: Consider minifying files for production
- **CDN Resources**: Font Awesome and Google Fonts loaded from CDN
- **Lazy Loading**: Images can be lazy-loaded for better performance

## SEO Features

- **Meta Tags**: Proper title and description tags
- **Semantic HTML**: Proper heading structure and semantic elements
- **Alt Text**: Ready for image alt attributes
- **Structured Data**: Can be enhanced with JSON-LD schema

## Future Enhancements

- **Image Gallery**: Add a photo gallery of completed projects
- **Blog Section**: Add a blog for landscaping tips and company updates
- **Online Booking**: Integrate online scheduling system
- **Customer Reviews**: Add testimonials and review system
- **Service Calculator**: Add pricing calculator for estimates
- **Social Media Integration**: Enhanced social media links and feeds

## Support

For technical support or questions about the website, contact the developer or refer to the documentation.

---

**4 Seasons Property Services LLC** - Professional landscaping and construction services you can trust. 