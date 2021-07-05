---
sidebar_position: 15500 
title: "Overwriting local with remote repo"
slug: "../overwriting-local-repo"
---
## How to overwrite local repository with remote repo
:::warning Note: Beware of what happens if you perform the following commands
-   Files that are tracked by Git such as uploaded user contents will not be affected.
-   All local changes <u>will be lost</u>.
-   Non-pushed local commits <u>will be lost</u>.
:::
```bash title="Git-Pull forcefully"
git fetch --all
// To backup current branch
git branch backup-master
git reset --hard origin/master  // or git reset --hard origin/<branch_name>
```
## Resetting to the remote tracking branch
By using `git reset` ***--keep*** as follows:
```bash
git fetch
git reset --keep origin/$(git rev-parse --abbrev-ref HEAD) 
```
## Resetting all local changes
By using `git reset` ***--hard*** as follows:
```bash
git fetch
git reset --hard origin/$(git rev-parse --abbrev-ref HEAD) # To remove all not committed changes!
git clean -fd         # To remove all untracked (non-git) files and folders!
git pull
```
:::warning
Warning: if you don't have your data/files committed yet, note that the commands above can result in loss of them all! Backup your whole repository folder before taking the actions.
:::
## 