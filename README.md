# My Node.js Application

This is a simple Node.js application that demonstrates the use of Express.js with custom middleware and routing.

## Project Structure

```
my-node-app
├── src
│   ├── app.js          # Entry point of the application
│   ├── routes
│   │   └── index.js    # Route definitions
│   ├── middleware
│   │   └── logger.js    # Custom middleware for logging
├── package.json         # NPM configuration file
└── README.md            # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd my-node-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run the following command:

```
node src/app.js
```

The application will be running on `http://localhost:3000`.

## Middleware

The application includes a custom logging middleware that logs the request method and URL for each incoming request.

## Routes

The application defines various routes in the `src/routes/index.js` file. You can add more routes as needed.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.