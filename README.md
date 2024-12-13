# TMDbApp

TMDbApp is a web application built using Next.js, React, and various development tools. This README provides an overview of the technologies used, as well as instructions on how to set up, run, and develop the project.

## Technologies Used

### Frontend

- **Next.js**: A React framework for server-side rendering and static site generation.
- **React**: A JavaScript library for building user interfaces.
- **ReactDOM**: The entry point to the DOM and server renderers for React.

### Development Tools

- **TypeScript**: A superset of JavaScript that adds static typing.
- **ESLint**: A tool for identifying and fixing linting errors in JavaScript code.
- **Prettier**: A code formatter to ensure consistent code style.
- **Jest**: A JavaScript testing framework for writing and running tests.
- **React Testing Library**: A set of helpers for testing React components.

## Project Setup

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (preferably the latest LTS version).

### Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/alexnogueira4/tmdbapp.git
   cd tmdbapp
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

### Environment Variables

To run the project, you need to configure environment variables. Copy the .env.example file to .env and update the NEXT_PUBLIC_API_KEY with your TMDB API key.

```
cp .env.example .env
```

Then, open the .env file and set your TMDB API key:

```
NEXT_PUBLIC_API_KEY=your_tmdb_api_key
```

### Running the Application

#### Development Mode:

```
npm run dev
```

This command starts the development server with Turbopack for fast refresh and rebuilds.

### Code Quality

#### Linting:

```
npm run lint
```

This command runs ESLint to analyze your code for potential errors and coding style issues.

#### Formatting:

```
npm run format
```

This command runs Prettier to format your code according to the defined style rules.

### Testing

#### Run Tests:

```
npm run test
```

This command runs Jest in watch mode, which is useful during development to see instant feedback on your tests.

#### Run Tests in CI Mode:

```
npm run test:ci
```

This command runs Jest in continuous integration mode, suitable for running in CI/CD pipelines.

### Project Structure

- **pages/**: Contains Next.js pages.
- **components/**: Reusable React components.
- **styles/**: CSS and styling files.
- **\_\_tests\_\_/**: Contains test files for your components.

### Configuration

#### ESLint

The ESLint configuration is extended from eslint-config-next and includes eslint-config-prettier to disable ESLint rules that might conflict with Prettier.

#### Prettier

Prettier is configured to format code on every run of the format script.

#### Jest

Jest is configured with jest-environment-jsdom to test React components in a DOM-like environment.
