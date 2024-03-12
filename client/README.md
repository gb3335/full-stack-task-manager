# Full-Stack Task Manager - Client

This is the client-side application for the Full-Stack Task Manager project. It allows users to create, update, and delete tasks. Users can also filter tasks by status.

## Project Structure

The project has the following file structure:

```
full-stack-task-manager
└── client
    ├── public
    │   └── index.html
    ├── src
    │   ├── components
    │   │   ├── TaskForm.js
    │   │   ├── TaskList.js
    │   │   └── Filter.js
    │   ├── App.js
    │   └── index.js
    ├── package.json
    └── README.md
```

- `public/index.html`: Entry point of the client-side application.
- `src/components/TaskForm.js`: React component for creating a new task.
- `src/components/TaskList.js`: React component for displaying a list of tasks.
- `src/components/Filter.js`: React component for filtering tasks by status.
- `src/App.js`: Main component of the client-side application.
- `src/index.js`: Entry point of the client-side application.
- `package.json`: Configuration file for npm.
- `README.md`: Documentation for the client-side application.

## Getting Started

To run the client-side application, follow these steps:

1. Install the dependencies by running `npm install` in the `client` directory.
2. Start the development server by running `npm start`.
3. Open your browser and navigate to `http://localhost:3000` to access the application.

## Additional Notes

- This application uses React as the front-end framework.
- The client-side application communicates with the server-side API to perform CRUD operations on tasks.
- Styling can be customized in the `src/App.css` file or by using a CSS preprocessor.
- The application is responsive and works well on both desktop and mobile devices.

For more information about the server-side application and the project as a whole, please refer to the [server/README.md](../server/README.md) file.

This file is intentionally left blank.