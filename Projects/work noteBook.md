SkillSetu — Complete Project Blueprint & AI Development Prompt
Learn. Work. Grow.
Connecting learning, employment opportunities, and local services through one accessible platform.

!Project Status !Frontend !Backend !Languages !License

1. Project Overview

SkillSetu is a responsive, bilingual, full-stack web application designed to help people learn practical skills, discover employment opportunities, find local service providers, and connect with businesses.

The platform should support learners, freshers, job seekers, skilled workers, customers, and businesses through a unified, easy-to-use interface.

The word Setu means bridge. SkillSetu aims to bridge the gap between learning, practical experience, employment, and earning opportunities.

Main objectives
Help users discover structured learning paths and practical exercises.
Help freshers find jobs, internships, apprenticeships, and entry-level opportunities.
Help customers discover skilled service providers in their cities.
Help workers showcase their skills, experience, availability, and services.
Allow businesses to publish opportunities and manage applicants.
Provide a foundation for secure accounts, privacy, verification, and reporting.
Demonstrate practical full-stack web development skills through a documented, deployable project.
2. AI Development Instructions

Act as a senior full-stack web developer, UI/UX designer, database architect, accessibility specialist, and software tester.

Build SkillSetu as a clean, responsive, maintainable, secure, and portfolio-ready web application.

Follow these rules throughout development.

Code quality rules
Write readable, logically organized, production-minded code.
Use descriptive names for HTML elements, CSS classes, JavaScript functions, variables, database tables, and components.
Follow consistent naming conventions:
HTML classes: service-card, search-input
JavaScript functions: filterOpportunities(), saveLearningProgress()
Constants: DEFAULT_LANGUAGE, MAX_UPLOAD_SIZE
Database tables: profiles, learning_paths, applications
Add comments where they explain purpose, decisions, business rules, or non-obvious behavior.
Avoid unnecessary comments that merely repeat the code.
Avoid overly long functions, duplicated code, deeply nested conditions, and unnecessarily complicated abstractions.
Separate presentation, application logic, data access, configuration, and reusable components.
Use semantic HTML and accessible form controls.
Use CSS variables for colors, spacing, typography, shadows, and reusable design tokens.
Keep files focused on a single responsibility.
Use meaningful error messages and handle loading, success, empty, and failure states.
Never include real passwords, API secrets, private keys, or service-role credentials in frontend code.
Never pretend that a feature is connected to a backend if it is only a demonstration.
Avoid dead links, broken buttons, placeholder functionality presented as complete, and unnecessary dependencies.
Do not put the entire application into one enormous HTML, CSS, or JavaScript file.
How to work
Begin by reviewing the requirements, user journeys, architecture, and design system.
Create a clear implementation plan before writing substantial code.
Build the project in small, testable milestones.
Keep the code consistent with the existing folder structure.
Explain important architectural decisions briefly.
When changing a file, provide its complete updated contents or a clear, applicable patch.
Do not remove existing functionality without a good reason.
Test the actual implementation and report any incomplete features honestly.
Ask a question only when an essential decision cannot reasonably be made from the requirements. Otherwise, choose sensible defaults and document them.

Priority: Code readability, functional correctness, accessibility, security, and maintainability are more important than unnecessary visual effects or excessive abstraction.

3. Design References and Visual Direction

Use these websites as design inspiration, not as templates to copy.

Website	Reference area	What to learn from it
Biite	Navigation and services	Navigation structure, service discovery, grid-based layouts, and clear content grouping
Udemy	Homepage and learning experience	Strong hero section, search, course discovery, categories, and content hierarchy
Plumeform Pricing	Pricing and plan presentation	Pricing cards, feature comparisons, plan hierarchy, and calls to action

The references are inspiration only. Review their currently available designs when implementing the relevant sections.

Do not copy proprietary branding, text, source code, or assets.

Desired design style

Create a modern, trustworthy, welcoming, professional, and accessible design that works for both students and local service providers.

Use:

A clean, responsive navigation bar.
A visually strong homepage hero section.
A prominent search experience.
Organized service and learning category grids.
Consistent cards, buttons, badges, forms, and spacing.
Clear typography and strong visual hierarchy.
Subtle hover states and restrained animations.
High-quality, appropriately licensed images or locally stored project assets.
Responsive layouts for mobile, tablet, laptop, and desktop.
Accessible color contrast, visible keyboard focus, and reduced-motion support.

Define the final colors, typography, icon style, border radius, shadows, and spacing system in a centralized design system. Do not choose unrelated styles independently for each page.

Do not invent a pricing model or charge users without establishing a business requirement. If pricing is included, clearly distinguish illustrative plans from actual commercial offers.

4. Brand Identity and Core Messaging
Brand name

SkillSetu

Main slogan

Learn. Work. Grow.

Suggested supporting message

Learn practical skills, discover meaningful opportunities, and connect with people who need your services.

Homepage headline direction

Build a prominent hero section that immediately explains the platform's value.

Suggested copy:

Learn new skills. Find opportunities. Build your future.

Supporting text:

Explore practical learning paths, discover jobs and internships, and connect with skilled professionals and local businesses—all in one place.

Primary call to action: Explore Opportunities

Secondary call to action: Start Learning

Include a search field that helps users search for skills, jobs, services, or locations.

The exact copy may be refined to fit the final visual design, but the central message and slogan must remain clear.

5. User Types and Permissions

Support the following user categories.

Role	Main capabilities
Learner	Explore learning paths, complete tasks, save resources, and track progress
Job seeker	Browse opportunities, save listings, and submit applications
Service provider	Create a provider profile, list skills, manage availability, and respond to inquiries
Business	Publish job opportunities or service requests and manage applicants
Moderator	Review reports and moderate inappropriate or suspicious listings
Administrator	Manage platform configuration and authorized administrative functions

A user may need more than one capability. Design the data model so that role assignment and permissions are explicit rather than relying on frontend visibility alone.

Use backend authorization to enforce permissions.

6. Website Sitemap and Required Pages

Create the following page structure.

text
skillsetu/
├── index.html
├── pages/
│   ├── learn.html
│   ├── opportunities.html
│   ├── services.html
│   ├── provider.html
│   ├── opportunity.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── business.html
│   └── safety.html
├── css/
│   ├── style.css
│   ├── components.css
│   ├── pages.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── config.js
│   ├── i18n.js
│   ├── data/
│   │   └── demo-data.js
│   ├── services/
│   │   ├── auth.js
│   │   ├── learning.js
│   │   ├── opportunities.js
│   │   └── providers.js
│   └── components/
│       ├── navigation.js
│       ├── cards.js
│       └── forms.js
├── assets/
│   ├── images/
│   └── icons/
├── supabase/
│   ├── migrations/
│   └── seed.sql
├── tests/
├── .env.example
├── .gitignore
├── README.md
└── PROJECT_PROMPT.md


This is the initial architecture. Additional files may be introduced when justified, such as application, inquiry, reporting, translation, testing, or database utilities.

Do not create empty files simply to match the tree. Each file must have a clear responsibility.

Page 1: Homepage — index.html

Include:

Responsive navigation and mobile menu.
SkillSetu branding and the slogan “Learn. Work. Grow.”
Hero headline and supporting description.
Search for skills, jobs, internships, and services.
Prominent cards for Learn, Find Work, and Find Services.
Featured learning paths.
Recent or recommended opportunities.
Popular service categories.
A call to action for businesses and employers.
How SkillSetu works.
Trust, privacy, and safety information.
English/Hindi language switch.
Footer with useful navigation, contact information, and policies.

The homepage should guide first-time visitors toward a meaningful action without overwhelming them.

Page 2: Learning — pages/learn.html

Include:

Searchable learning paths.
Categories such as web development, programming, photography, video editing, computer fundamentals, and other practical skills.
Filters for level, duration, and category.
Learning cards with descriptions, prerequisites, estimated duration, and difficulty level.
Learning path detail sections or reusable detail views.
Objectives, learning resources, and practical exercises.
Task checklists and progress indicators.
Save or resume functionality for authenticated users.
Empty, loading, and error states.

Learning progress must be saved to the backend when connected. A demonstration version must clearly identify locally simulated progress.

Page 3: Opportunities — pages/opportunities.html

Support:

Jobs.
Internships.
Apprenticeships.
Entry-level positions.
Other clearly categorized professional opportunities.

Each listing should display, where available:

Job or opportunity title.
Organization or employer.
Location.
Remote, hybrid, or on-site arrangement.
Experience requirements.
Required skills.
Compensation or stipend, when provided.
Employment type and duration.
Listing date and application deadline.
Application instructions.
Listing status.

Add search, category filters, location filters, experience filters, sorting, and clear empty states.

Never invent salary information, employer verification, or job legitimacy.

Page 4: Services — pages/services.html

Build a grid-based service discovery experience inspired by the service layout of Biite.

Include categories such as:

Plumbing.
Electrical work.
Cleaning.
Cooking and catering.
Photography.
Video editing.
Graphic design.
Web development.
Computer support.
Repair and maintenance.
Other locally relevant services.

Include:

Search by service or skill.
City and service-area filters.
Category cards with appropriate icons or images.
Provider cards.
Availability information.
Service descriptions.
Experience claims and listed skills.
Inquiry and report controls.

Where appropriate, support customer preferences such as provider gender, subject to applicable law, privacy, and operational feasibility.

Page 5: Provider Profile — pages/provider.html

Create a reusable provider detail page that displays:

Public display name.
Profile image, if provided.
Skills and service categories.
Service area.
Experience and qualifications claimed by the provider.
Portfolio or work samples, where available.
Availability.
Languages spoken, if voluntarily provided.
Verification status, accurately explained.
Inquiry or contact options that protect personal information.
A report-listing control.

Do not publicly expose identity documents, private contact details, or internal verification records.

Page 6: Opportunity Details — pages/opportunity.html

Include:

Opportunity title and organization.
Full description.
Responsibilities and requirements.
Required skills.
Work location and arrangement.
Compensation, if known.
Duration and deadline, where applicable.
Application instructions.
Save and apply actions.
Employer information and applicable verification indicators.
Report-listing control.

Validate eligibility and required application fields before submission.

Page 7: Login — pages/login.html

Include:

Email and password fields.
Password visibility control.
Input validation.
Clear error and success messages.
Forgot-password flow.
Link to registration.
English/Hindi labels.

Use Supabase Authentication for real authentication when configured. Do not implement insecure authentication by storing plaintext passwords in browser storage.

Page 8: Registration — pages/register.html

Include:

Name or public display name.
Email.
Password and confirmation.
Preferred language.
City, where relevant.
Initial account type or intended activity.
Privacy notice and applicable consent.
Input validation and clear error messages.

Allow users to choose additional roles through an appropriate profile or account-management flow where supported.

Page 9: Dashboard — pages/dashboard.html

Create a dashboard that adapts to the signed-in user's permissions.

Include:

Profile information.
Saved learning paths and opportunities.
Learning progress.
Submitted applications and statuses.
Provider listings and customer inquiries.
Business listings and applicant management.
Relevant account settings.
Empty, loading, success, and error states.

Do not expose another user's private records or show irrelevant management actions.

Page 10: Business Portal — pages/business.html

Include:

Business profile and basic organization information.
Create and edit job opportunities.
Create and manage service requests.
View submitted applications.
Update listing status.
Manage applicant information according to permissions.
Respond to relevant service inquiries.
Close or archive listings.

Validate all submitted content and enforce permissions on the backend.

Page 11: Safety — pages/safety.html

Explain:

How to identify suspicious opportunities.
How to report a listing or user.
How verification statuses work.
How user information is protected.
How to avoid payment scams and misleading offers.
What information should not be shared publicly.
How reports are reviewed and resolved.
Platform limitations and appropriate disclaimers.

Never claim that a user or listing is verified unless a real verification process supports that claim.

7. Navigation and Reusable Components

Build a consistent navigation system across all pages.

Suggested desktop navigation:

Home.
Learn.
Find Work.
Services.
For Businesses.
Language switch.
Login or account menu.
A prominent primary action, where appropriate.

On mobile, use an accessible collapsible menu.

Build reusable components for:

Navigation and footer.
Buttons and links.
Search fields.
Filters and sorting controls.
Learning cards.
Opportunity cards.
Service category cards.
Provider cards.
Forms and validation messages.
Status labels.
Progress indicators.
Confirmation messages.
Empty states.
Loading indicators.
Report controls.

Use shared components rather than duplicating similar HTML and JavaScript across pages.

Keep components simple and avoid introducing a large component framework unless there is a clear technical reason.

8. English and Hindi Language Support

Implement English/Hindi language switching throughout the interface.

Requirements
Centralize translations in js/i18n.js or an appropriate translation module.
Use stable translation keys instead of scattering translated strings across the application.
Translate navigation, buttons, form labels, validation messages, filters, status labels, and primary content.
Ensure the selected language is applied consistently across pages.
Preserve the user's preference between visits using a suitable, privacy-conscious approach.
Use appropriate Unicode Hindi text and verify rendering.
Ensure both languages work on mobile and desktop.
Provide an understandable fallback when a translation is missing.

Do not translate identifiers, database column names, or programming syntax.

Use a clear language-switching control labelled English / हिन्दी.

9. Search, Filters, and Interactive Features

The initial frontend should provide working interactions for:

Searching learning paths.
Filtering opportunities.
Filtering service providers.
Searching by city or service area.
Sorting listings.
Opening detail pages.
Saving learning paths or opportunities.
Checking off practical learning tasks.
Displaying progress.
Submitting and validating forms.
Reporting listings.
Switching languages.
Navigating responsively on mobile.

Use realistic demonstration data for the prototype.

When backend integration is complete, replace demo-data operations with proper database queries and authenticated actions.

Keep demo and production modes clearly separated. Never make mock results appear to be live listings.

10. Technology Stack

Use the following stack unless a documented technical constraint requires a change.

Frontend
HTML5 for semantic structure.
CSS3 for layout, responsive design, and visual styling.
Vanilla JavaScript for application logic and interactions.
Bootstrap where it improves consistency and development speed.
Canvas only where a meaningful feature requires it, such as a drawing or visual interaction.
AngularJS is part of the developer's prior learning experience, but it is not required for this project.

Prefer one consistent frontend approach instead of mixing unrelated frameworks.

Backend and database

Use Supabase for:

PostgreSQL database.
Authentication.
Row Level Security (RLS).
Authorized database access.
Optional file storage for approved profile and portfolio uploads.

Use Supabase's supported JavaScript client through a clearly organized data-access layer.

Development and delivery
Git and GitHub for version control.
SQL migrations and seed data.
Automated tests for critical functionality.
A documented deployment process.
Environment configuration through .env.example and deployment settings.
Configuration rules
Keep public configuration separate from application logic.
Frontend Supabase configuration may contain the project URL and publishable/anonymous key intended for client use.
Never expose the Supabase service-role key or other privileged credentials in browser code.
Do not commit real .env files or secrets.
Document the setup and required environment variables.
11. Core Database Design

Establish the schema before implementing backend-dependent features.

Use PostgreSQL data types, primary keys, foreign keys, timestamps, indexes, constraints, and appropriate deletion behavior.

The following entities form the initial data model.

Entity	Purpose
profiles	Public profile information, preferred language, and relevant account metadata
user_roles	Authorized role assignments
learning_paths	Skills, levels, duration, objectives, prerequisites, and resources
learning_tasks	Individual lessons, exercises, and completion criteria
learning_progress	Per-user learning progress
opportunities	Jobs, internships, apprenticeships, and other listings
applications	Applicant, opportunity, submission time, and application status
service_categories	Available service categories
provider_profiles	Provider skills, experience claims, service area, and availability
provider_services	Services offered by each provider
service_inquiries	Customer requests and provider responses
verification_records	Restricted verification status metadata and audit information
reports	Reported listings or concerns, review status, and resolution metadata

Additional tables may be needed for businesses, saved items, messages, file metadata, audit logs, or moderation workflows. Add them only when required by the actual user journeys.

Database requirements
Use stable primary keys, preferably UUIDs where appropriate.
Use foreign keys to preserve relationships.
Add timestamps for record creation and relevant updates.
Define allowed status values and validation constraints.
Index common search, filter, relationship, and authorization columns.
Avoid storing duplicate data unnecessarily.
Store private and public profile data according to their different access requirements.
Use migrations for schema changes.
Provide realistic but fictional seed data.
Document relationships and important business rules.
Security and Row Level Security

Enable RLS on all tables that contain user data or otherwise require access restrictions.

Define and test policies so that:

Users can update only the records they are authorized to manage.
Users can view their own applications and private dashboard data.
Businesses can manage only their authorized listings and related applications.
Providers can manage their own provider profiles and service listings.
Public users can read only information intentionally published for public discovery.
Moderators and administrators receive only explicitly authorized privileges.
Verification records and private application data are not publicly accessible.
Client-side role labels never substitute for backend permission checks.

Do not trust user-editable metadata as the sole source of authorization.

12. Authentication, Forms, and File Uploads
Authentication

Implement:

Registration.
Login and logout.
Session handling.
Password reset.
Authentication-state handling.
Protected dashboard routes or pages.
Appropriate access-denied states.

Use Supabase Authentication instead of inventing a custom password-storage system.

Form validation

Validate important input both in the browser and on the server or database where appropriate.

Handle:

Missing required fields.
Invalid email addresses.
Incorrect formats.
Oversized input.
Invalid listing dates or deadlines.
Unauthorized modifications.
Duplicate or conflicting submissions.
Database errors.

Display helpful messages without revealing sensitive internal information.

File uploads

If profile images or portfolios are supported:

Restrict file types and file sizes.
Use appropriate storage policies.
Validate uploads and permissions.
Avoid exposing private files through public URLs.
Document retention and deletion behavior where applicable.
13. Safety, Privacy, and Trust

SkillSetu connects people and opportunities, so safety must be part of the architecture rather than a decorative page.

Implement:

Listing and profile reporting.
Clear verification definitions.
Moderation status and resolution workflows.
Privacy-conscious contact options.
Protection against unauthorized access.
Safe handling of user-submitted text.
Appropriate validation and error handling.
Protection against spam and repeated submissions where feasible.
Clear notices about the limits of verification and platform responsibility.

Never publicly expose identity documents, authentication tokens, passwords, private contact information, or sensitive verification data.

Do not claim that a listing is legitimate simply because it exists on the platform.

Document any safety features that remain manual or incomplete.

14. Development Roadmap

Build the project in the following phases.

Phase 1 — Planning and architecture

Tasks:

Confirm requirements and user journeys.
Finalize the sitemap.
Establish design tokens and UI conventions.
Define the database relationships.
Identify authentication and authorization boundaries.
Set up Git and the project structure.

Acceptance criteria: The architecture, core user journeys, naming conventions, and implementation plan are documented.

Phase 2 — Responsive frontend

Tasks:

Build the homepage and navigation.
Implement reusable components.
Create learning, opportunities, services, and detail pages.
Build login, registration, dashboard, business, and safety interfaces.
Implement English/Hindi switching.
Add responsive styling and accessibility features.

Acceptance criteria: Primary pages work on mobile and desktop, navigation is functional, and both languages are usable.

Phase 3 — Interactive prototype

Tasks:

Add search and filters.
Connect demo data.
Implement category navigation.
Add form validation.
Add saving and learning progress demonstrations.
Implement loading, empty, success, and error states.

Acceptance criteria: Main user journeys can be demonstrated without relying on dead links or inert controls.

Phase 4 — Database and authentication

Tasks:

Configure Supabase.
Create SQL migrations and seed data.
Implement authentication.
Enable and test RLS.
Add authorized data-access functions.
Connect profiles and learning progress.

Acceptance criteria: Users can authenticate, access permitted records, and cannot access restricted data.

Phase 5 — Core application functionality

Tasks:

Connect learning paths and tasks.
Connect opportunities and applications.
Connect provider profiles and services.
Connect inquiries and business workflows.
Implement saving and dashboard functionality.
Add report submission and moderation support.

Acceptance criteria: The main user journeys work against the database with test accounts and realistic sample data.

Phase 6 — Testing and safety

Tasks:

Test validation and error handling.
Test authentication and permissions.
Test RLS policies using different user roles.
Test responsive layouts.
Test language switching.
Test accessibility and keyboard navigation.
Review privacy and reporting workflows.

Acceptance criteria: Critical tests pass, unauthorized access is prevented, and known limitations are documented.

Phase 7 — Deployment and documentation

Tasks:

Configure deployment.
Set environment variables securely.
Publish the application.
Update the README.
Add screenshots and setup instructions.
Document the database schema and architecture.
Provide test instructions and a deployment checklist.

Acceptance criteria: The deployed demo is accessible, configuration is documented, and another developer can reproduce the setup.

15. Testing Requirements

Create a tests/ directory for automated and manual test documentation.

Cover the following areas:

Area	Required checks
Navigation	Internal links, page transitions, mobile menu
Search	Matching results, no-results states, case handling
Filters	Correct categories, locations, and combined filters
Forms	Required fields, invalid values, success and error handling
Authentication	Registration, login, logout, session behavior, password reset
Authorization	Access restrictions for each user role
Database	Constraints, relationships, and migration consistency
RLS	Unauthorized reads, writes, and cross-user access
Learning	Task completion and progress persistence
Applications	Valid submissions and correct application ownership
Services	Provider editing, inquiries, and reporting
Internationalization	English/Hindi switching and missing translations
Accessibility	Keyboard use, labels, focus, contrast, and reduced motion
Responsive design	Mobile, tablet, and desktop layouts
Security	Secret exposure, unsafe input handling, and private data exposure

Do not mark a test as passed unless it has actually been run and its result supports that claim.

16. GitHub Documentation Requirements

Create a professional README.md that includes:

Project title and slogan.
Short description.
Problem statement and objectives.
Feature list.
Screenshots or a visual preview.
Technology stack.
Project architecture.
Folder structure.
Prerequisites.
Installation and local setup.
Supabase configuration.
Database migrations and seed instructions.
Environment variables.
How to run tests.
Deployment instructions.
Security and privacy notes.
Known limitations.
Future improvements.
Author and contact links, if provided.
License, once selected.

Use readable Markdown headings, concise paragraphs, tables where useful, and properly fenced code blocks.

Do not include personal contact details unless explicitly provided for publication.

Keep the README synchronized with the actual implementation.

17. Developer Profile and Portfolio Context

The project is being developed by Shanu Kayda, a BCA graduate from DAVV, Indore, Madhya Pradesh.

The developer's educational background includes 10+2 with Physics, Chemistry, Mathematics, and Biology, with 82.75%.

Previously studied technologies and subjects include:

HTML and CSS.
JavaScript.
Bootstrap.
AngularJS.
PHP and Java.
Computer networks.
Database management systems.
Computer fundamentals.
Discrete mathematics.
Operating systems.
Cloud computing.

Additional skills and interests include:

Photography and camera handling.
Video editing.
Git and GitHub.
Practical web development and portfolio projects.

Use this information only where relevant, such as an optional author section or portfolio presentation. Do not insert the developer's personal educational details into the main SkillSetu product experience.

The project should demonstrate practical skills through readable code, sound architecture, useful functionality, documentation, and testing.

18. Final Acceptance Checklist

Use this checklist to track actual completion. A requirement should be checked only after it has been implemented and verified.

Planning and design
Product goals and user journeys documented.
Sitemap and architecture established.
Design system and reference analysis completed.
Naming conventions and code standards documented.
Frontend
Responsive homepage and navigation.
Learning pages and learning cards.
Opportunity listings and details.
Service discovery and provider profiles.
Login and registration interfaces.
User and business dashboards.
Safety and reporting interfaces.
Reusable components and consistent styling.
English/Hindi language switching.
Accessibility and responsive behavior verified.
Interactions
Search and filters work.
Forms validate input.
Learning tasks and progress work.
Saved items work.
Application flows work.
Service inquiries work.
Reporting flow works.
Loading, empty, success, and error states are implemented.
Backend and security
Supabase configuration documented.
Database migrations created.
Seed data added.
Authentication implemented.
RLS enabled and tested.
User roles and permissions enforced.
Applications and inquiries connected.
Sensitive records protected.
Secrets excluded from version control.
Quality and delivery
Automated or documented tests created.
Critical test cases executed.
Mobile and desktop layouts verified.
README completed.
Screenshots added.
Deployment instructions tested.
Live demo published.
Known limitations documented.
19. Instructions for Starting Development

Start by reviewing this complete specification.

Then:

Summarize the project architecture and identify any important assumptions.
Propose a clean design system inspired by the supplied references.
Confirm the folder structure and responsibilities of each file.
Establish the database schema and security boundaries before implementing backend-dependent features.
Build the homepage and reusable frontend components first.
Implement the remaining pages in logical groups.
Add functional interactions using realistic demo data.
Connect Supabase authentication, database queries, and RLS policies.
Test the principal user journeys and security boundaries.
Complete the README, setup instructions, and deployment documentation.

For each milestone, report:

Files created or changed.
Features implemented.
Important design or architecture decisions.
Tests performed and their results.
Setup steps or configuration required.
Incomplete features and known limitations.
The next recommended milestone.

Do not attempt to generate the entire production application in one enormous, unreviewable code dump.

Final goal: Deliver a professional, understandable, responsive, bilingual, secure, and portfolio-ready SkillSetu application that follows the slogan:

Learn. Work. Grow.

Build it with clarity, consistency, and purpose.
