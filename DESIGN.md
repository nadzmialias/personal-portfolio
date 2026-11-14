
# Personal Portfolio Design System

## 1. Project Identity

Project: Nadzmi Personal Portfolio

Purpose:
Showcase academic projects, technical skills,
education, work experience, and personal qualities.

Audience:
- University lecturers
- Internship recruiters
- Potential employers

Design Direction:
Dark Developer Workspace

Personality:
- Professional
- Technical
- Minimal
- Personal
- Content-focused

## 2. Colour Palette

| Role | Hex |
|---|---|
| Background | #171B19 |
| Surface | #252B27 |
| Primary text | #EEECE6 |
| Secondary text | #C0C6BE |
| Accent | #D5B778 |
| Interactive borders | #88948A |

Rules:
- Use graphite for the main background.
- Use warm white for headings and body text.
- Use muted gold for important actions and focus.
- Do not apply accent colours everywhere.
- Maintain WCAG AA contrast requirements.
- Use text labels alongside colour-based feedback.

## 3. Typography

Heading font:
Segoe UI, system-ui, sans-serif

Body font:
Segoe UI, system-ui, sans-serif

Code font:
Consolas, monospace

Typography Scale:
- H1: clamp(2.5rem, 5vw, 4.5rem)
- H2: clamp(1.75rem, 3vw, 2.5rem)
- H3: 1.5rem
- Body: 1rem
- Small text: 0.875rem

Line Height:
- Headings: 1.15
- Body: 1.6

Rules:
- Keep headings descriptive and readable.
- Use monospace only for code-related content.
- Avoid excessive uppercase text.
- Maintain a clear heading hierarchy.

## 4. Layout and Spacing

Approach:
Mobile-first responsive design.

Maximum content width:
1120px

Reading content width:
Approximately 70 characters.

Spacing scale:
8px, 16px, 24px, 32px, 48px, 64px

Layout rules:
- Use consistent page margins.
- Use CSS Grid and Flexbox when appropriate.
- Allow layouts to adapt to available width.
- Avoid unnecessary nested containers.
- Give featured projects more visual emphasis.

## 5. Navigation

Planned pages:
- Home
- About
- Education
- Projects
- Experience
- Skills
- Contact

Rules:
- Display only links to existing pages.
- Keep navigation consistent.
- Clearly identify the active page.
- Use a responsive menu on smaller screens.
- Support keyboard navigation.

## 6. Components

Buttons:
- Primary: gold background, dark text.
- Secondary: transparent with visible border.
- Minimum touch target: 44px.
- Include hover and focus states.

Project sections:
- Show actual project information.
- Include technologies and responsibilities.
- Use real screenshots when available.
- Use clearly labelled placeholders otherwise.

Cards:
- Use only when grouping related information.
- Avoid repeated decorative icons.
- Keep borders, spacing, and typography consistent.

## 7. Interaction and Motion

- Keep interactions simple and predictable.
- Provide feedback for user actions.
- Use subtle transitions when meaningful.
- Respect prefers-reduced-motion.
- Avoid unnecessary animations.
- All interactive elements must work.

## 8. Accessibility

- Follow WCAG AA colour contrast.
- Use semantic HTML elements.
- Provide visible keyboard focus.
- Provide alternative text for meaningful images.
- Keep navigation keyboard accessible.
- Support mobile and desktop layouts.
- Avoid horizontal scrolling.

## 9. Anti-Slop Guidelines

- No fabricated achievements or statistics.
- No generic decorative developer terminals.
- No unnecessary gradients or glowing elements.
- No fake testimonials.
- No inactive buttons or broken links.
- No meaningless animations.
- No decorative elements without purpose.
- Use content-specific visual design.

## 10. HCI Principles

Consistency:
Reuse typography, colour, spacing, and navigation.

Visibility:
Make important information easy to discover.

Feedback:
Communicate interaction results clearly.

User Control:
Allow visitors to navigate freely.

Accessibility:
Support different screen sizes and input methods.

## 11. Design Priorities

1. Content clarity
2. Accessibility
3. Navigation usability
4. Responsive design
5. Visual consistency
6. Purposeful interactions
7. Personal identity


## 12. Header Design

Header Structure:
- Left: Personal brand (nadzmi alias)
- Centre: Primary navigation
- Right: Theme toggle

Navigation:
- Home
- About
- Education & Experience
- Projects
- Skills
- Contact

Design Rules:
- Dark charcoal header background
- Bold, text-based personal branding
- Muted navigation text
- Gold underline for the active page
- Subtle bottom border
- No unnecessary decorative icons

Responsive Behaviour:
- Desktop: Horizontal navigation
- Mobile: Collapsible navigation
- Minimum touch target: 44px
- Keyboard-accessible controls

Theme Toggle:
- Dark mode is the default
- Light mode will be implemented later
- Toggle must be fully functional before display


## 13. Theme System

Supported Themes:
- Dark (default)
- Light

Implementation:
- CSS custom properties for theme colours
- JavaScript for theme switching
- localStorage to remember user preference

Theme Toggle:
- Located on the right side of the header
- Moon icon represents dark mode
- Sun icon represents light mode
- Native button supports keyboard interaction
- Accessible label describes the next action

Design Rules:
- Both themes must remain accessible
- Maintain consistent layout and spacing
- No unnecessary theme transition animations
- Avoid hardcoded colours in shared components
- Hide the toggle if JavaScript is unavailable


## 14. Mobile Navigation

Layout:
- Desktop: Horizontal navigation
- Mobile: Collapsible navigation panel
- Brand remains visible at all screen sizes

Breakpoint:
- Initial breakpoint: 54rem
- Adjust based on actual content and testing

Interactions:
- Menu button opens and closes navigation
- Escape closes the expanded menu
- Navigation closes after selecting a link
- Menu resets when viewport changes

Accessibility:
- Native HTML button
- aria-controls connects button and panel
- aria-expanded reflects menu state
- Visible keyboard focus indicator
- Minimum target height of 44px
- Navigation remains accessible without JavaScript

Anti-Slop:
- No unnecessary animation
- No extra libraries
- No decorative menu elements without purpose
- All navigation links must work
