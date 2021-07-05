---
sidebar_position: 18500 
title: "Remove last changes"
slug: "../deserialization"
---

## How to remove changes since last git commit
:::warning
`git clean` deletes all your untracked files/directories permanantly. Backup your whole repository folder before taking the actions.
:::
- To clean your local working directory by resetting every part of the repository just to the last committed state, try the command below:
```bash
git reset --hard
```
Then for removing untracked files from the working tree, we use `git clean` command as follows:
```bash
git clean -fd
```
where `-d` is to let git to recurse into untracked directories and `-f`is the flag `--force`, allowing you to order Git "Just do it anyway"! 

:::tip git-clean SYNOPSIS:
```git clean [-d] [-f] [-i] [-n] [-q] [-e <pattern>] [-x | -X] [--] <path>…​```

If any paths are specified, then `-d` is irrelevant. Hence, when any optional `<path>...` arguments are given, only those paths are being affected.
::: 

## Git-Clean interactive mode
using the flag `--interactive` or shortly ***-i***, takes you into its interactive command loop by showing you what would be done/cleaned interactively.

 *** Interactive subcommands ***
	- 1: clean
	- 2: filter by pattern
	- 3: select by numbers
	- 4: ask each
	- 5: quit
	- 6: help
    - What now> 1
In this mode you will be prompte with `"What now> "`.

## Dry run
In order to removed all untracked files/folders from your working tree such as a settings folder of your IDE, 'dry run' can come to the rescue by using the `--dry-run` flag or shortly ***-n***. This option will check what the git command is about to do, before actually doing so.

```bash title="Git clean with dry run to remove any changes occured since last commit"
git clean -d -f -n
```
::: 


