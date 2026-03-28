# CodeSolution Website

A modern, high-converting website for CodeSolution - a full-service tech company offering end-to-end digital solutions.

## Features

- **Modern UI/UX** - Clean, responsive design with smooth animations
- **SEO Optimized** - Built with Next.js for optimal search engine performance
- **Lead Capture** - Contact form with Google Sheets integration
- **Mobile-First** - Fully responsive across all devices

## Pages

- **Home** - Hero section, services overview, testimonials, CTA
- **About Us** - Company story, vision, mission, team
- **Services** - Detailed breakdown of all service offerings
- **Technologies** - Tech stack showcase
- **Portfolio** - Case studies and past work
- **Contact** - Lead capture form

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Google Sheets Integration

To enable lead capture to Google Sheets:

### Step 1: Create a Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Replace the code with:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.email,
    data.phone,
    data.company,
    data.service,
    data.budget || '',
    data.timeline || '',
    data.description
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Deploy as Web App (Execute as: Me, Access: Anyone)
5. Copy the Web App URL

### Step 2: Configure Environment Variable

Create a `.env.local` file in the project root:

```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### Step 3: Set Up Google Sheet

Create a Google Sheet with these column headers:
- Timestamp
- Name
- Email
- Phone
- Company
- Service
- Budget
- Timeline
- Description

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the .next folder
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── technologies/     # Technologies page
│   ├── portfolio/        # Portfolio page
│   ├── contact/          # Contact page
│   └── api/
│       └── submit-lead/  # Lead submission API
├── components/
│   ├── home/             # Home page components
│   ├── layout/           # Header, Footer
│   └── ui/               # Reusable UI components
└── lib/
    ├── constants.ts      # Site content & data
    └── utils.ts          # Utility functions
```

## Customization

- **Content**: Edit `src/lib/constants.ts` for services, team, testimonials
- **Styling**: Modify `src/app/globals.css` and Tailwind classes
- **Components**: Update components in `src/components/`

## License

MIT License
