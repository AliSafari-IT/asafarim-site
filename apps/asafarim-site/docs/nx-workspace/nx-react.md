---
sidebar_position: 2
---
# Nx and React

Nx is a smart and extensible build framework to help you develop, test, build, and scale with React and React frameworks like Gatsby, Next.js, Docusaurus, ... and React Native.

## Create a React Workspace with Nx
By running the following command in your Terminal or Command prompt:
```bash title="Create nx workspace"
npx create-nx-workspace --preset=react
```
## Create an application
```bash title="Create react app: this command creates a new React app named todos"
nx generate application todos
```
Running the generate command above will add two projects to your workspace:

- A React application
- E2E tests for the React application

![React Apps](/img/react-app-folders.png)
## Serve application
Now that the application is set up, you can run it locally via:
```bash
npx nx serve todos
```
