# Landing-DigitalCard AI Coding Instructions

## Project Overview
A responsive landing page for **Digital Card do Brasil** — a company offering personalized identification solutions (badges, cards, stamps, RFID cards) based in Ponta Grossa, Brazil. Built with vanilla JavaScript, Bootstrap 3, and jQuery for compatibility and simplicity.

## Architecture & Structure

### Technology Stack
- **Frontend**: Bootstrap 3, jQuery 1.12.4, Owl Carousel (testimonials), SlickNav (mobile menu)
- **No build tools**: Pure HTML/CSS/JS delivered as static files — changes require direct file edits
- **Language**: Portuguese (pt-BR) content throughout

### Key Components
1. **Header** (`index.html` lines 33-99): Logo, WhatsApp contact link, navigation menu
2. **Banner** (`index.html` lines 108-132): Hero section with service list and CTA
3. **Services** (`index.html` lines 239-391): 9 product/service cards (crachás, cartões, carimbos, RFID, etc.)
4. **Testimonials** (`index.html` lines 393-438): Owl Carousel slider (2 columns responsive)
5. **Contact** (`index.html` lines 440-474): Address, phone, email, embedded Google Map
6. **Footer** (`index.html` lines 506-511): Attribution to Lucas S. Firak
7. **Floating WhatsApp Button** (`index.html` lines 498-503): Fixed position CTA at bottom-right

### Code Organization
- `index.html`: Single-page structure with 7 main sections
- `css/custom.css`: 1,301 lines of custom styling (extends Bootstrap)
- `js/function.js`: 50 lines of jQuery initialization
- `css/*.css`: Bootstrap, Font Awesome, Owl Carousel, and icon fonts
- Commented-out sections: Web hosting, pricing (legacy template content)

## Critical Development Patterns

### Scroll Navigation
- Menu links use `href="#section-id"` anchors — JavaScript captures clicks and animates scroll
- jQuery handles smooth scroll to `data-target` sections (see `function.js` lines 9-18)
- **Mobile**: SlickNav responsive menu auto-hides on navigation

### WhatsApp Integration
- **Direct links**: `http://wa.me/5542999001750` (hardcoded phone number)
- Used in 4 places: header, banner CTA, services section, floating button
- **Pattern**: All external links include `target="_blank" rel="noopener noreferrer"`

### Responsive Design
- Owl Carousel switches 1→2 columns at 768px breakpoint
- Bootstrap grid: col-md-*, col-sm-6 usage
- **Floating WhatsApp button**: 60px on desktop, 55px on mobile

### jQuery Dependencies
- `jquery-1.12.4.min.js` (old version — no polyfills, document.ready style)
- Loaded first; all other scripts depend on `$` (jQuery)
- `$(window).load()` for preloader fade (legacy approach vs modern)

### CSS Customization Strategy
- `custom.css` overrides Bootstrap defaults via specificity, not inheritance
- Color scheme: #ff8100 (orange selection), #25d366 (WhatsApp green)
- Font: Poppins (Google Fonts, loaded in `<head>`)
- Icon fonts: Font Awesome (contact icons), Pe Icon (legacy), Flaticon (unused mostly)

## Common Editing Tasks

### Update Service/Product Listing
Edit `index.html` lines 270-361 (Services section):
```html
<div class="col-md-4 col-sm-6">
  <div class="service-box">
    <div class="icon-box"><i class="fa fa-ICON"></i></div>
    <h3>Title</h3>
    <p>Description</p>
  </div>
</div>
```
- Keep 3-column grid on desktop (`col-md-4`)
- Use Font Awesome icon classes from [fontawesome.io/icons](https://fontawesome.io/icons)

### Update Testimonials
Edit `index.html` lines 411-436 (Owl Carousel items):
```html
<div class="item">
  <div class="testimonial-box">
    <div class="testimonial-msg"><p>Quote</p></div>
    <div class="testimonial-author"><h3>Name</h3></div>
  </div>
</div>
```
- No changes to carousel config needed unless adjusting `items: 2` or breakpoints

### Modify Contact Information
- Phone: Update `5542999001750` in `href="http://wa.me/..."`
- Email: `support-box` div in lines 450-468
- Address: Google Maps iframe in lines 456-457 (must update `pb` parameter)

### Style Adjustments
Changes go in `css/custom.css`:
- **Colors**: Search for `#ff8100` or `#25d366` and replace
- **Spacing**: Modify padding/margin in section classes (`.banner-desc`, `.service-box`, etc.)
- **Buttons**: `.btn-custom` class (approx. line 180+)

## Performance & Browser Support

### Load Waterfall (Optimized)
1. CSS files (parallel): Bootstrap, Font Awesome, custom
2. jQuery + dependencies (sequential)
3. `function.js` (init on DOM ready)
4. Images lazy-loaded by browser

### Known Limitations
- jQuery 1.12.4 is EOL — no ES6 support, no modern utilities
- No minification of `function.js` or optimization pipeline
- Google Maps iframe embedded inline (page weight)
- **IE 9 support**: HTML5 shim/Respond.js polyfills included (lines 32-36)

### Preloader
- `js/function.js` line 7: `$(window).load()` waits for all images
- CSS animation in `custom.css` (loading dots)
- **Note**: Preloader may stall on slow image loads

## Contact & Metadata

### Site Metadata (Update for SEO)
- `<title>`: Line 11
- `<meta description>`: Line 6 (currently empty)
- `<meta keywords>`: Line 7 (currently empty)
- Favicon: `images/Logo 1.png` (line 10)

### Developer Credit
Footer line 510: "Desenvolvido por Lucas S. Firak | +55 42 999 359 359"

## Deployment Notes
- **Static hosting**: No backend required; serve via GitHub Pages, Netlify, or CDN
- **No build step**: Direct file uploads work
- **Git tracking**: `.git/` folder present; commit changes normally
