---
sidebar_position: 100 
title: "What is GIT"
slug: "../../git"
---

> Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows. **Wikipedia**


## Setting up Git
To set up git, you need to do the following steps:

- Download and install the latest version of Git from [here](https://git-scm.com/downloads).
- [Set your username in Git](#setting-your-username-in-git).
- [Set your commit email address in Git](#setting-your-commit-email-address-in-git).

### Setting your username in Git
Git uses a username to associate commits with an identity. The Git username is not the same as your GitHub username. Changing the name associated with your Git commits using `git config` will only affect future commits and will not change the name used for past commits.

- First open your git bash, then set a git user name as follows: 
```shell title="Set Git username"
$ git config --global user.name "John Doe"
```
To confirm what you have set up, run this shell command: 
```shell title="Check Git username"
$ git config user.name
> John Doe
```
### Setting your commit email address in Git
Setting your commit email address in `Git`
```shell title="Set Git username"
$ git config user.email "email@example.com"
```
To confirm what you have set up, run this shell command: 
```shell title="Check Git username"
$ git config user.name
> John Doe
```
## Add user email address to your `GitHub` account
In GitHub, you can add as many email as you like to your account. By doing this step your commits get attributed to you and appear in your contributions graph. 

GitHub → Settings → Emails → Add email address

