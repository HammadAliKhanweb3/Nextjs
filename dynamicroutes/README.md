# Dynamic Routes Project

A Next.js application that demonstrates dynamic routing with movies and users functionality.

## Features

- Dynamic routing for movies and users
- TypeScript support
- Tailwind CSS for styling
- Modern Next.js App Router architecture
- RESTful API endpoints
- Client-side and server-side components

## Tech Stack

- Next.js 15.3.3
- React 19
- TypeScript
- Tailwind CSS
- ESLint for code linting

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build and Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Root page
│   ├── movies/           # Movie routes
│   │   ├── [id]/         # Dynamic movie pages
│   │   └── route.ts      # Movie API routes
│   ├── users/            # User routes
│   ├── new-page/         # Additional pages
│   ├── old-page/         # Legacy pages
│   └── not-found.tsx     # 404 error page
├── db.ts                 # Database configuration
└── globals.css           # Global styles
```

## API Routes

The application includes RESTful API endpoints for movies and users:

- Movies API: `/api/movies`
- User API: `/api/users`

## Development Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Creates a production build
- `npm run start`: Starts the production server
- `npm run lint`: Runs ESLint for code linting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- Built with Next.js and TypeScript
- Styled with Tailwind CSS
- Inspired by modern web development practices

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
