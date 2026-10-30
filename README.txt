MEHRAN ULLAH — PERSONAL PORTFOLIO
=================================

FILES
- index.html: page structure and portfolio content
- style.css: responsive purple theme, layout, animation and transitions
- script.js: mobile menu, scroll reveal, progress bar, contact email behavior

HOW TO VIEW
1. Keep all three files in the same folder.
2. Double-click index.html to open it in a modern browser.
3. Internet is needed for the Google Fonts; the site otherwise works locally.

PERSONALIZE BEFORE PUBLISHING
1. PHOTO: In index.html, find <div class="photo-placeholder">. Replace that block with:
   <div class="photo-placeholder"><img src="assets/mehran.jpg" alt="Mehran Ullah"></div>
   Create an assets folder, add your image as mehran.jpg, and add this CSS:
   .photo-placeholder img { width:100%; height:100%; object-fit:cover; object-position:center; }
2. EMAIL: Replace hello@mehranullah.com in index.html and script.js with your real email.
3. WHATSAPP: Replace 923000000000 in the wa.me link with your country code and number, digits only.
4. SOCIAL LINKS: Replace the LinkedIn and Facebook placeholder URLs with your profile URLs.
5. PROJECTS: Replace sample project descriptions with your real work, screenshots, and verified outcomes.
6. SKILL BARS: The displayed percentages are illustrative; adjust or remove them to reflect your experience.

CONTACT FORM
The form uses a mailto link: it opens the visitor's default email application with a prepared message. It does not send data to a server. For a hosted form that submits directly, connect a form service or backend.

The site is plain HTML, CSS, and JavaScript—no build step or dependencies required.
