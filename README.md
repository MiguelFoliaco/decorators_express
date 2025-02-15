# Node.js Express API with Decorators

Welcome to the **Node.js Express API with Decorators** project! This repository demonstrates how to use decorators to simplify the creation of APIs in Express.

Check out the live demo on [CodeSandbox](https://codesandbox.io/p/github/MiguelFoliaco/decorators_express/main).

## Features

- **Easy API creation**: Simplify your API routes using decorators.
- **Express integration**: Leverage the power of Express.js with a clean and modular approach.
- **TypeScript support**: Take advantage of TypeScript decorators for a better development experience.

## Getting Started

Follow these instructions to get your local development environment set up.

### Prerequisites

- Node.js
- Yarn (or npm)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/MiguelFoliaco/decorators_express.git
   cd decorators_express
   ```

2. Install dependencies:
   ```sh
   yarn install
   ```

### Running the Server

Start the HTTP server by running:
```sh
yarn start
```

The server will run at `http://localhost:8080`.

## Usage

### Creating Routes with Decorators

To create a new route, simply use the `@Route` decorator.

Example:
```typescript
import { Controller, Get, Post } from 'decorators-express';

@Controller('/users')
class UserController {
  @Get('/')
  getAllUsers(req, res) {
    res.send('Get all users');
  }

  @Post('/')
  createUser(req, res) {
    res.send('Create user');
  }
}
```

### Adding Middlewares

You can also add middlewares using decorators.

Example:
```typescript
import { Controller, Get, Middleware } from 'decorators-express';

@Controller('/auth')
class AuthController {
  @Get('/login')
  @Middleware(authMiddleware)
  login(req, res) {
    res.send('User login');
  }
}
```

## Resources

- [CodeSandbox Documentation](https://codesandbox.io/docs)
- [CodeSandbox Community](https://codesandbox.community)

Feel free to explore the project on [CodeSandbox](https://codesandbox.io/p/github/MiguelFoliaco/decorators_express/main) and see it in action!

---

Happy coding! 🚀