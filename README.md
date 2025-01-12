# Tree CMS - Content Management System

A modern content management system for managing audiobooks, ebooks, and podcasts. Built with React, TypeScript, and Tailwind CSS.

## Features

- Multi-role authentication system
- Department-based access control
- Content upload and management
  - Audiobooks
  - E-books
  - Podcasts
- Super admin dashboard for content oversight
- File preview and editing capabilities
- Activity tracking and monitoring

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## Getting Started

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/tree-cms.git
\`\`\`

2. Install dependencies:
\`\`\`bash
cd tree-cms
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

## Build for Production

To create a production build:

\`\`\`bash
npm run build
\`\`\`

The build output will be in the \`dist\` directory.

## Project Structure

\`\`\`
src/
├── components/
│   ├── admin/           # Admin-specific components
│   ├── upload/          # Upload-related components
│   └── ...             # Other components
├── data/               # Data and mock databases
├── types/              # TypeScript type definitions
└── utils/             # Utility functions
\`\`\`

## Contributing

1. Fork the repository
2. Create your feature branch: \`git checkout -b feature/amazing-feature\`
3. Commit your changes: \`git commit -m 'Add some amazing feature'\`
4. Push to the branch: \`git push origin feature/amazing-feature\`
5. Open a Pull Request

## License

MIT License - See LICENSE file for details