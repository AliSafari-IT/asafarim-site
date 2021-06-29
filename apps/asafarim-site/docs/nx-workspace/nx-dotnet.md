---
sidebar_position: 3
---
# NxDotnet

## Adding .NET to Nx workspace
🔎 Nx is a set of Extensible Dev Tools for Monorepos and NxDotnet is one of the many plugins of Nx, which add capabilities for developing dotnet applications such as generating applications, libraries, etc as well as the devtools to test, and build projects as well.

## Installing NxDotnet
After creating an Nx workspace ([check here to see how to create an Nx workspace](/docs/nx-workspace/nx-basics#how-to-set-up-an-nx-workspace)), open a command line interface (CLI) like Windows ***PowerShell*** inside your existing workspace and run the command below to add .Net capabilities to your workspace.
```bash
yarn add @nx-dotnet/core
```
### Generate an application
To generate an application run:
```bash
nx g @nx-dotnet/core:app my-app
```
### Generate a library
To generate a library run:
```bash
nx g @nx-dotnet/core:lib my-lib
```
## Serve generated application locally
For a dev server, run the command below. This command can automatically reload if any of source file changes by watching for file changes and rebuilding the project.
```bash
nx serve my-app
```
## Build the project
To build the project run: 
```bash
nx build my-app
```
and for a production build, run:
```bash
nx build my-app --prod
```
## Dependency diagram
In order to see dependency diagaram of your application(s) and lib(s), run the command below:
```bash
nx dep-graph
```
