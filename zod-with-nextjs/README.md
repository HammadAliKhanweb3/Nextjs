# Zod with Next.js - Form Validation Demo

A modern web application demonstrating robust form validation using Zod schema validation library with Next.js 15, React Hook Form, and TypeScript. This project showcases best practices for form handling, validation, and user experience in React applications.

## ✨ Features

- **🔒 Robust Validation**: Comprehensive form validation using Zod schemas
- **🎯 Type Safety**: Full TypeScript integration with Zod inference
- **⚡ React Hook Form**: Efficient form state management and performance
- **🎨 Modern UI**: Clean, responsive design with Radix UI components
- **📱 Responsive Design**: Works seamlessly across all device sizes
- **🔍 Real-time Validation**: Instant feedback on form input errors
- **🛡️ Server Actions**: Next.js 15 server actions for form processing
- **🎪 Custom Validation Rules**: Advanced validation patterns and constraints

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 15, React 19, TypeScript
- **Form Management**: React Hook Form with Zod resolver
- **Validation**: Zod schema validation library
- **Styling**: Tailwind CSS 4, Radix UI components
- **Development**: ESLint, PostCSS

### Project Structure
```
zod-with-nextjs/
├── src/
│   ├── app/                   # Next.js app directory (pages and layouts)
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Main signup form page
│   ├── actions/               # Server actions for form processing
│   ├── components/
│   │   └── ui/               # Reusable UI components (Radix UI)
│   └── lib/                   # Utility libraries
├── schema/                    # Zod validation schemas
├── public/                    # Static assets
└── package.json               # Project dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd zod-with-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Form Validation Schema

The application implements a comprehensive signup form with the following validation rules:

### Name Validation
- Minimum 2 characters
- Maximum 50 characters
- Only letters and spaces allowed
- Regex pattern: `/^[a-zA-Z\s]+$/`

### Email Validation
- Must be a valid email format
- Only Gmail and Yahoo domains allowed
- Custom refinement for domain restrictions

### Password Validation
- Minimum 8 characters
- Maximum 20 characters
- Must contain at least one uppercase letter
- Must contain at least one lowercase letter
- Must contain at least one number
- Must contain at least one special character (`@$!%*?&`)

```typescript
export const signupSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

  email: z
    .string()
    .email("Invalid email address")
    .refine((val) => val.endsWith("@gmail.com") || val.endsWith("@yahoo.com"), {
      message: "Only Gmail and Yahoo emails are allowed",
    }),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)"),
});
```

## 🎯 Key Components

### Form Implementation (`src/app/page.tsx`)
- **React Hook Form Integration**: Efficient form state management
- **Zod Resolver**: Type-safe validation with real-time feedback
- **Radix UI Components**: Accessible form controls and labels
- **Error Handling**: Comprehensive error display and user feedback

### Server Actions (`src/actions/index.ts`)
- **Form Processing**: Server-side validation and data handling
- **Type Safety**: Zod inference for runtime type checking
- **Error Response**: Structured error handling and user feedback

### Validation Schema (`schema/index.ts`)
- **Custom Validation Rules**: Advanced validation patterns
- **Type Inference**: Automatic TypeScript type generation
- **Error Messages**: User-friendly validation error messages

## 🛠️ Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Form Validation Flow
1. **Client-side Validation**: Real-time validation using Zod schemas
2. **Form Submission**: React Hook Form handles form state
3. **Server-side Validation**: Additional validation in server actions
4. **Error Handling**: Comprehensive error display and user feedback

## 🎨 UI/UX Features

- **Real-time Validation**: Instant feedback on form input errors
- **Accessible Forms**: Radix UI components for better accessibility
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Clean Interface**: Modern, minimalist design with Tailwind CSS
- **Error States**: Clear visual feedback for validation errors
- **Loading States**: Optimistic updates for better perceived performance

## 🔧 Customization

### Adding New Validation Rules
1. Update the Zod schema in `schema/index.ts`
2. Add new validation rules using Zod methods
3. Update form components to include new fields
4. Test validation with various input scenarios

### Styling Customization
- Modify `src/app/globals.css` for global styles
- Use Tailwind classes for component-specific styling
- Customize Radix UI components in `src/components/ui/`

### Form Field Addition
1. Add new field to the Zod schema
2. Update the form component with new FormField
3. Add corresponding server action handling
4. Test validation and error handling

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push
4. No additional configuration needed

### Other Platforms
- **Netlify**: Static hosting with form handling
- **Railway**: Full-stack deployment
- **AWS**: Use Amplify for easy deployment

## 📚 Learning Resources

### Zod Documentation
- [Zod Official Docs](https://zod.dev/) - Complete Zod documentation
- [Zod with React Hook Form](https://react-hook-form.com/docs/useform) - Integration guide
- [TypeScript with Zod](https://zod.dev/?id=typescript) - Type safety examples

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - Official Next.js docs
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions) - Server actions guide
- [React Hook Form](https://react-hook-form.com/) - Form library documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Zod](https://zod.dev/) for the amazing schema validation library
- [React Hook Form](https://react-hook-form.com/) for efficient form management
- [Radix UI](https://www.radix-ui.com/) for accessible UI components
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS framework

---

**Happy coding! 🔒✨**
