# Portfolio outcomes

## 1. Semantic, responsive multi-page portfolio
- [x] Create a multi-page personal portfolio website for presenting projects, with Home, Projects, and Contact pages.
- [x] Use modern semantic HTML5 structure, including `header`, `nav`, `main`, `section`, and `footer` elements.
- [x] Include shared multi-page navigation and footer with clear current-page indication, logical tab order, and skip navigation support.
- [x] Use responsive layouts across mobile, tablet, and desktop, with readable typography, sufficient contrast, visible focus states, and no hover-only access to content.
- [x] Use supplied personal and project details; omit information that was not provided rather than inventing biography, accomplishments, contact information, dates, or project outcomes.

## 2. Accessible interaction and contact options
- [x] Implement ARIA labels and roles for screen readers where appropriate; rely on semantic elements and accessible names, and mark the active page with `aria-current="page"`.
- [x] Provide clear, accessible links to the owner's GitHub and LinkedIn profiles; do not display a form that cannot deliver messages.
- [x] All interactive elements must work with a keyboard; preserve visible `:focus-visible` outlines; do not use hover as the only way to reveal content or actions.
- [x] Interactive links must have visible keyboard focus indicators and descriptive labels.

## 3. SEO-ready page content and metadata
- [x] Provide optimized, SEO-friendly metadata; each page has meaningful initial HTML content, a unique page title and description, heading hierarchy, canonical-ready metadata, and sensible social-sharing metadata without inventing a public domain or personal data.
- [x] Include usable links between pages, descriptive page titles and descriptions, and relevant social metadata in the initial HTML.
- [x] Target Lighthouse Accessibility and SEO scores of 100 while treating this as a target, not a guarantee.

## 4. Subtle motion and reduced-motion behavior
- [x] Animate navigation underline or text color on hover, keep a clearly visible keyboard-focus indicator, and identify the current page with `aria-current="page"` where appropriate; do not rely on color alone for important states.
- [x] If a hero entrance effect is used, fade the main heading and introduction into view, optionally with a small upward movement; keep it short and unobtrusive; do not hide essential content while waiting; the page remains usable with animation disabled.
- [x] On pointer hover, move a project card upward by only a few pixels and optionally soften or increase its shadow; keep all text and links available without hovering and provide equivalent focus styling.
- [x] Use subtle transitions for interactive elements and show a clear focus state on every link and button.
- [x] Respect `prefers-reduced-motion: reduce`; avoid flashing, rapid movement, distracting looping motion, large parallax, and inaccessible autoplay; keep content available without animation.
- [x] Test that the layout works on desktop, mobile, and browser zoom.

## 5. Verification and honest delivery
- [x] Check keyboard navigation with Tab, Shift+Tab, Enter, and Space where applicable, and check reduced-motion behavior.
- [x] Check all three pages for accessibility and SEO as far as practical; Lighthouse 100 is a target, not a guarantee.
- [x] Do not imply that this site sends email; provide the existing social contact links instead.
