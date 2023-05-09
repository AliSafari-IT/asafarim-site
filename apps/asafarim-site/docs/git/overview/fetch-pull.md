---
sidebar_position: 6500 
title: "Git Fetch vs Git Pull"
slug: "../fetchpull"
---

## `git fetch` vs `git pull`
From the Git documentation:
> In its default mode, git pull is shorthand for *git fetch* followed by *git merge FETCH_HEAD*.

When using `pull`, git aims at **merging**. Thus Git will merge any pulled commits into the involved branch. This operation is performed without giving you the chance to review the changes initially. 

But when you `fetch`, git saves every commit from the remote branch that are not yet in your local repo. Nonetheless, `fetch` operation does not merge them with your active branch → it separates them from your local development. This is mainly useful if you need to update your repository without updating your files. Hence, to incorporate the commits by updating your local files within your current branch, you are required to use `merge` after that *git fetch*.