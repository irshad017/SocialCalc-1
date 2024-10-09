---

# SocialCalc

SocialCalc is a web-based spreadsheet application that enables real-time collaboration, allowing users to work together on spreadsheets simultaneously. This project combines the functionalities of social interaction, enabling users to share their work, collaborate in real-time, and discuss changes as they happen.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Real-Time Collaboration:** Multiple users can work on the same spreadsheet simultaneously, with updates appearing in real-time..
- **Social Interaction:** Share your spreadsheet with others, and engage in discussions about the data and changes.
- **User Authentication:** Secure login and registration system to protect user data.

## Technologies Used

- **Frontend:**
  - React.js
  - Tailwind CSS
  - JavaScript (ES6+)
  - WebSockets (for real-time updates)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (for storing user data, spreadsheets, and version history)

- **Authentication:**
  - JSON Web Tokens (JWT)
  - bcrypt (for password hashing)

## Installation

To run SocialCalc locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Priyesh1311421/SocialCalc.git
   cd SocialCalc
   ```

2. **Install dependencies for both frontend and backend:**

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Add your own mongo db url:**

   Locate server.js file in backend folder and your own mongodb url in line number 15.
   

   `
5. **Run the application:**

   ```bash
   # Start the backend server
   cd backend
   npm run dev

   # Start the frontend server
   cd ../frontend
   npm start
   ```

   The application will be available at `http://localhost:5000`.

## Usage

- **Create Spreadsheets:** Start a new spreadsheet or open an existing one.
- **Collaborate in Real-Time:** Invite others to collaborate on your spreadsheet, with updates appearing live.
- **Engage Socially:** Share your spreadsheet with others and discuss changes in real-time through the built-in commenting system.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or want to reach out, you can contact me at:

- **Email:** irshadhussain7881@gmail.com
