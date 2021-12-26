---
sidebar_position: 2 
---

# Introduction
Redux as predictable state container for JavaScript/TypeScript apps, helps writing apps to behave consistently, and being able to run in different environments (client, server, and native) as well as to test them easier. Redux can be used with React.

<a className="rm-a" href="https://redux.js.org/tutorials/quick-start">Read More</a><br /><br />


Briefly, Redux can be introduced as follows:
> It operates as a integrated store for state that requires it to be managed throughout the whole application, with methods to make sure that the state can merely be updated in a predictable manner. Redux is controlling and updating application state by the use of events known as "actions". 

## Redux Installation for existing applications
For writing Redux logic, Redux Toolkit is required that can be obtained from the following instruction in your app's root command line:

```bash
yarn add @reduxjs/toolkit
```
## Redux Installation for new applications
A React app integrated with Redux will be created as follows:

### Redux + JavaScript template
```bash
npx create-react-app my-app --template redux
```

### Redux + TypeScript template
```bash
npx create-react-app my-app --template redux-typescript
```
