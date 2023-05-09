---
sidebar_position: 18550 
title: "Rollback to a previous state"
slug: "../rollback-commit"
---

## Reverting a Git repository to an earlier commit
:::warning Caution! 
This command might cause losing commit history. To be on the safe side, have a backup of your git repo first.
:::

### Method 1: `git reset`
When you don't want to keep the newer commit(s), go with the `--hard` flag:
```bash
git reset --hard CommitId && git clean -f
```
Get the commit Id by running the `git reflog` command.
By now, you are done with your lical repository. Then, for updating your remote repository run the git command below:
```bash
git push -f
```

If the goal is to uncommit the last commit, then just use this command:
```bash
git reset HEAD~
```


### Method 2 `git revert`
Revert is the command to rollback the commits. To revert a particular commit, or a set of commits.
```bash
git revert --no-commit CommitId..HEAD
git commit
```
In this command, you will need to include enough of the sha to identify the commit as unique among that repository: e.g. `git revert f688f767`. By using `reflog` you can have access to the list of commits and their SHAs.
This will return everything from the HEAD back to the commit hash, meaning it will restore that commit state in the working tree as if every commit after the reverting commit had been walked back. You can then commit the current tree, and it will create a brand new commit essentially the same to the commit you "reverted" to.
The `--no-commit` flag lets git revert all the commits at once- otherwise you'll be prompted for a message for each commit in the range, littering your history with unnecessary new commits.

Other common gitrevisions are branch names followed by `~`. For example, `git revert master~3` is 3 commits behind the head commit on the `master` branch.
If you don’t wish to change your commmit message, skip it by including the `--no-edit` flag before the gitrevision:
```bash
git revert --no-edit master~3
```
### Reverting multiple commits
Just use `..` between two gitrevisions:
```bash
git revert HEAD~4..HEAD~2
```
This will revert 3 commits: commit #2, #3 and #4.

