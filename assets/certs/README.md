# Certificate Images

Place your certificate image files here.

Current expected filenames (referenced in index.html):
- `nism-ra.jpg`       → SEBI NISM Research Analyst certificate (NISM-Series-XV)
- `nism-investor.jpg` → SEBI NISM Investor certificate

How to add:
1. Export/screenshot your certificate as a JPG or PNG
2. Name it as above and drop it in this folder
3. If you want a different filename, update the `data-cert="..."` attribute
   on the matching cert-card in index.html

To make any other cert card clickable, just add:
  data-cert="assets/certs/your-file.jpg"
to the <div class="cert-card"> tag in index.html.
