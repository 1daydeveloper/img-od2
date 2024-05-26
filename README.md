# img-od2

## Description
**img-od2** is an image manipulation site that allows users to resize, compress, and manipulate images. This project is built with Node.js and uses Express for the server-side framework and EJS for templating.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Development](#development)
  - [Production](#production)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation
To get started with this project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/1daydeveloper/img-od2.git
    ```
2. Navigate to the project directory:
    ```bash
    cd img-od2
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

### Development
To run the project in development mode with automatic restarting using Nodemon:
```bash
npm run dev
```
This will start the server and watch for any changes in the source files, restarting the server when changes are detected.

### Production
To run the project in production mode:
```bash
npm start
```
This will start the server without watching for file changes.

## Scripts
The following scripts are available in the project:

- `start`: Starts the server in production mode using the `main` script defined in the `package.json`.
- `dev`: Starts the server in development mode using Nodemon to watch for file changes.
- `test`: A placeholder for test scripts, currently exits with an error.

## Dependencies
The project relies on the following dependencies:

- `ejs`: ^3.1.10
- `express`: ^4.19.2

Development dependencies include:

- `nodemon`: ^3.1.1

## Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on [GitHub](https://github.com/1daydeveloper/img-od2).

## License
This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

---

For more information, visit the [homepage](https://github.com/1daydeveloper/img-od2#readme) or check out the [issues](https://github.com/1daydeveloper/img-od2/issues) page for ongoing discussions.