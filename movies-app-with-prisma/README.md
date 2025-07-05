# Movies App with Prisma

A modern, full-stack web application built with Next.js 15, React 19, and Prisma ORM for managing a personal movie collection. This project demonstrates server actions, database operations, and modern UI components with a clean, responsive design.

![Movies App](./public/film-slate.png)

## ✨ Features

- **🎬 Movie Management**: Add, view, edit, and delete movies with full CRUD operations
- **💾 Database Integration**: SQLite database with Prisma ORM for type-safe database operations
- **🎨 Modern UI**: Clean, responsive design with Tailwind CSS and Radix UI components
- **⚡ Server Actions**: Next.js 15 server actions for seamless form handling
- **🔧 Type Safety**: Full TypeScript support throughout the application
- **📱 Responsive Design**: Works perfectly on desktop and mobile devices
- **🎯 Real-time Updates**: Immediate UI updates after database operations

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Radix UI components
- **Database**: SQLite with Prisma ORM
- **Development**: ESLint, PostCSS

### Project Structure
```
movies-app-with-prisma/
├── prisma/
│   └── schema.prisma          # Database schema and Prisma configuration
├── src/
│   ├── app/                   # Next.js app directory (pages and layouts)
│   │   ├── actions/           # Server actions for database operations
│   │   ├── add-movie/         # Add movie form page
│   │   ├── all-movies/        # Movies listing page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── custom-components/ # Custom React components
│   │   └── ui/               # Reusable UI components (Radix UI)
│   ├── generated/             # Generated Prisma client
│   ├── lib/                   # Utility libraries
│   └── utils/                 # Utility functions (Prisma client)
├── public/                    # Static assets
└── package.json               # Project dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd movies-app-with-prisma
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   # Initialize Prisma and create database
   npx prisma migrate dev --name init
   
   # Generate Prisma client
   npx prisma generate
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

The application uses a simple but effective Movie model:

```prisma
model Movie {
  id          String   @id @default(uuid())
  title       String
  description String
  image       String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

### Database Operations

The app includes comprehensive CRUD operations:

- **Create**: Add new movies with title, description, and image URL
- **Read**: Display all movies in a responsive grid layout
- **Update**: Edit movie details through a modal dialog
- **Delete**: Remove movies with confirmation

## 🎯 Key Components

### Server Actions (`src/app/actions/index.ts`)
- `createMovie`: Handles movie creation with form data
- `deleteMovie`: Removes movies by ID
- `editMovie`: Updates existing movie information

### Custom Components (`src/components/custom-components/page.tsx`)
- **ShowMovie**: Displays individual movie cards with edit/delete functionality
- **Movie Dialog**: Modal for editing movie details
- **Responsive Grid**: Clean layout for movie display

### Pages
- **Home Page**: Landing page with navigation to add/view movies
- **Add Movie**: Form for creating new movie entries
- **All Movies**: Grid view of all stored movies

## 🛠️ Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Database Commands
```bash
npx prisma migrate dev    # Create and apply migrations
npx prisma generate      # Generate Prisma client
npx prisma studio        # Open Prisma Studio (database GUI)
```

### Environment Variables
Create a `.env` file in the root directory:
```env
DATABASE_URL="file:./dev.db"
```

## 🎨 UI/UX Features

- **Responsive Design**: Works seamlessly across all device sizes
- **Smooth Animations**: Hover effects and transitions for better UX
- **Modal Dialogs**: Clean editing interface with Radix UI
- **Form Validation**: Client and server-side validation
- **Loading States**: Optimistic updates for better perceived performance

## 🔧 Customization

### Adding New Fields
1. Update the Prisma schema in `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name add_new_field`
3. Update the forms and components to include the new field

### Styling
- Modify `src/app/globals.css` for global styles
- Use Tailwind classes for component-specific styling
- Customize Radix UI components in `src/components/ui/`

### Database Provider
To switch from SQLite to another database:
1. Update the `provider` in `prisma/schema.prisma`
2. Update the `DATABASE_URL` in your `.env`
3. Run `npx prisma migrate reset`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
- **Railway**: Supports SQLite and PostgreSQL
- **Netlify**: Static hosting with serverless functions
- **AWS**: Use RDS for database and Vercel for frontend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Prisma](https://prisma.io/) for the type-safe database toolkit
- [Radix UI](https://www.radix-ui.com/) for accessible UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS framework

---

**Happy coding! 🎬✨**
