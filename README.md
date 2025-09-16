# The Wild Aura

A modern cabin rental platform built with Next.js 14, featuring user authentication, booking management, and a seamless reservation system.

## Features

### 🏕️ Core Functionality
- **Cabin Browsing**: View detailed cabin information with high-quality images and amenities
- **Advanced Filtering**: Filter cabins by guest capacity and preferences
- **Interactive Date Selection**: Calendar-based booking with availability checking
- **Real-time Pricing**: Dynamic price calculation with discounts and total costs
- **Booking Management**: Create, edit, and cancel reservations

### 🔐 Authentication & User Management
- **Google OAuth Integration**: Secure sign-in with NextAuth.js v5
- **User Profiles**: Manage personal information and preferences
- **Guest Database**: Automatic guest record creation and management
- **Protected Routes**: Middleware-based route protection for authenticated users

### 🎨 User Experience
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Loading States**: Skeleton screens and spinners for better UX
- **Optimistic Updates**: Instant UI feedback for deletions and updates
- **Form Validation**: Client and server-side validation for all forms
- **Error Handling**: Comprehensive error pages and user feedback

### 📊 Admin Features
- **Reservation Management**: View and manage all bookings
- **Cabin Information API**: RESTful API endpoints for cabin data
- **Database Integration**: Full CRUD operations with Supabase

## Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Date Handling**: date-fns
- **UI Components**: Custom components with React

### Backend
- **Database**: Supabase (PostgreSQL)
- **Authentication**: NextAuth.js v5 with Google Provider
- **Server Actions**: Next.js server actions for form handling
- **API Routes**: RESTful endpoints for external integrations

### Development
- **Language**: JavaScript
- **Package Manager**: npm
- **Version Control**: Git

## Project Structure

```
app/
├── _components/         # Reusable UI components
│   ├── Cabin.jsx       # Individual cabin display
│   ├── DateSelector.js # Calendar booking interface
│   ├── Navigation.js   # Site navigation with auth
│   └── ...
├── _lib/               # Utility functions and services
│   ├── actions.js      # Server actions
│   ├── auth.js         # Authentication configuration
│   ├── data-service.js # Database operations
│   └── supabase.js     # Supabase client
├── _styles/            # Global styles
├── context/            # React context providers
├── api/                # API routes
│   ├── auth/          # NextAuth.js endpoints
│   └── cabins/        # Cabin data endpoints
├── cabins/            # Cabin-related pages
├── account/           # User dashboard and settings
└── login/             # Authentication pages
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- Google OAuth credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd the-wild-aura-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure environment variables**
   ```env
   # Supabase
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key

   # NextAuth.js
   AUTH_SECRET=your_secret_key
   AUTH_GOOGLE_ID=your_google_client_id
   AUTH_GOOGLE_SECRET=your_google_client_secret
   ```

5. **Set up the database**
    - Create tables in Supabase for cabins, bookings, and guests
    - Configure Row Level Security (RLS) policies
    - Import sample cabin data

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Database Schema

### Key Tables
- **cabins**: Cabin information (name, capacity, price, images)
- **bookings**: Reservation data (dates, guests, status)
- **guests**: User profiles linked to authentication

### Relationships
- Guests can have multiple bookings
- Each booking is associated with one cabin
- Foreign key constraints ensure data integrity

## Key Features Implementation

### Booking System
- Date range selection with conflict detection
- Dynamic pricing based on nights and discounts
- Form validation and error handling
- Confirmation and management workflow

### Authentication Flow
- Google OAuth with automatic guest creation
- Session management with database integration
- Protected routes and middleware
- Conditional UI rendering based on auth state

### State Management
- React Context for booking state
- Optimistic updates for better UX
- Form state handling with server actions
- Real-time UI updates

## API Endpoints

### Public Endpoints
- `GET /api/cabins/[cabinid]` - Get cabin details and availability

### Protected Endpoints
All booking operations require authentication:
- Create, update, and delete reservations
- User profile management
- Booking history access

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `.next` folder to your hosting platform
3. Ensure environment variables are configured

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SUPABASE_URL` | Supabase project URL | Yes |
| `SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `AUTH_SECRET` | NextAuth.js secret | Yes |
| `AUTH_GOOGLE_ID` | Google OAuth client ID | Yes |
| `AUTH_GOOGLE_SECRET` | Google OAuth client secret | Yes |


## Acknowledgments

- NextAuth.js for authentication solutions
- Supabase for backend infrastructure
- Tailwind CSS for styling system
- Vercel for hosting platform