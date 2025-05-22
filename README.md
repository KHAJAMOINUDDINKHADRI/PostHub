# PostHub

A modern ReactJS application for browsing and creating posts using the JSONPlaceholder API.

## Features

- Browse posts from the JSONPlaceholder API
- View detailed information about individual posts
- Create new posts via a form with validation
- Search and filter existing posts
- Responsive design that works on all device sizes
- Modern UI with smooth animations

## Technology Stack

- **Frontend**: React with TypeScript
- **Routing**: React Router
- **Styling**: TailwindCSS with shadcn/ui components
- **Form Handling**: React Hook Form with Zod validation
- **API**: JSONPlaceholder

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/KHAJAMOINUDDINKHADRI/PostHub.git
cd posthub
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to development server

## Building for Production

```bash
npm run build
# or
yarn build
```

This will create a `dist` folder with optimized production build.


## API Integration

This project uses the JSONPlaceholder API:

- GET `/posts` - Fetch all posts
- GET `/posts/{id}` - Fetch a specific post
- POST `/posts` - Create a new post

Note: JSONPlaceholder is a fake API for testing and prototyping. New posts are not persisted on the server but are simulated in the application.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
