# Contributing

## General Workflow

1. Fork the organization's repo.
1. Clone to local Workspace.
1. Add an 'upstream' remote, pointing to organization repo.
1. Create a new issue, including a description in the title.
1. Rebase from upstream staging.
1. Create a feature branch on local workstation. (Ex: issue-5)
1. Make commits to your feature branch. Prefix each commit like so:
  - (feat) Add a new feature
  - (fix) Fix bug [Fixes #0]
  - (docs) Change documentation
  - (style) Change formatting, add missing semicolons, etc; no code change
  - (refactor) Refactor production code
  - (test) Add missing tests, refactor tests; no production code change
  - (chore) Update grunt tasks, etc; no production code change
1. Squash commits using an interactive rebase.
1. When you've finished with your fix or feature, rebase from upstream staging into your branch.
1. Push feature branch to forked repo.
1. Submit a pull request to staging branch, not directly to master. Include a description of your changes.
1. Your pull request will be reviewed by another maintainer. The point of code
   reviews is to help keep the codebase clean and of high quality, and equally
   as important, to help you grow as a programmer. If your code reviewer
   requests you make a change you don't understand, ask them why they requested the change.
1. Fix any issues raised by your code reviwer, and push your fixes as a single new commit.
1. Once the pull request has been reviewed, it will be merged by another member of the team. Do not merge your own commits.
1. Rebase from upstream staging to local master.
1. Delete feature branch from local workstation.

## Detailed Workflow

### Fork the repo

Use github’s interface to make a fork of the repo, then add that repo as an upstream remote:

```
git remote add upstream https://github.com/hrr16-enterprise/hrr16-enterprise.git
```

### Create a new issue, including a description in the title

In order to start the coding process, you need to start by creating an [issue](https://github.com/hrr16-enterprise/hrr16-enterprise/issues). 
Include in the title a brief description relating to the topic of the issue.

### Rebase from upstream staging

Before making any branches, you should first pull down, using a rebase, any changes from the organization's staging branch:

```
git pull --rebase upstream staging
```

### Create a feature branch on local workstation

Your branch should follow this naming convention: issue-5

``` bash

# Creates your branch and brings you there
git checkout -b `your-branch-name`
```

### Make commits to your feature branch.

Prefix each commit like so
  - (feat) Add a new feature
  - (fix) Fix bug [Fixes #0]
  - (docs) Change documentation
  - (style) Change formatting, add missing semicolons, etc; no code change
  - (refactor) Refactor production code
  - (test) Add missing tests, refactor tests; no production code change
  - (chore) Update grunt tasks, etc; no production code change

Make changes and commits on your branch, and make sure that you
only make changes that are relevant to this branch. If you find
yourself making unrelated changes, consider making a new issue 
and going through the workflow for those changes.

#### Commit Message Guidelines

- Commit messages should be written in the present tense with the first letter capitalized; e.g. "Fix continuous
  integration script".
- The first line of your commit message should be a brief summary of what the
  commit changes. Aim for about 70 characters max. Remember: This is a summary,
  not a detailed description of everything that changed.
- If you want to explain the commit in more depth, following the first line should
  be a blank line and then a more detailed description of the commit. This can be
  as detailed as you want, so dig into details here and keep the first line short.
- Read more about making great commit messages here:
  http://karma-runner.github.io/0.8/dev/git-commit-msg.html

### Squash commits using an interactive rebase

In order to keep the commit history slim, squash your commits into a single commit using an interactive rebase.
You can start the process by checking your git commit history and copying the hash of the commit
immediately preceding the first commit of your feature:

```
git log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
```
(It may be helpful to store the command as an alias on your git config.)

Once you've retrieved the hash of the commit, start the interactive rebase:

```
git rebase -i 'hash-of-preceding-commit'
```
In this new menu, for the first commit, change the 'pick' to 'reword.' For the other commits, 
change the 'pick' to 'fixup.' Using the 'reword' command will allow you to redo the commit message for the
specific commit. When prompted, write a new commit message, following the commit message guidelines. 

### Rebase upstream changes into your branch

Once you are done making changes, you can begin the process of getting
your code merged into the main repo. Step 1 is to rebase upstream
changes on upstream's staging branch into your local workstation by running this command
from your branch:

```bash
git pull --rebase upstream staging
```

This will start the rebase process. <strong>You must commit all of your changes</strong>
before doing this. If there are no conflicts, this should roll all
of your changes back on top of the changes from upstream, leading to a
nice, clean, and linear commit history.

If there are conflicting changes, git will log error messages part way
through the rebasing process. Git will pause rebasing to allow you to sort
out the conflicts. You do this the same way you solve merge conflicts,
by checking all of the files git says have been changed in both histories
and picking the versions you want. Be aware that these changes will show
up in your pull request, so try to incorporate upstream changes as much
as possible.

You pick a file by `git add`ing it - you do not make commits during a
rebase.

Once you are done fixing conflicts for a specific commit, run:

```bash
git rebase --continue
```

This will continue the rebasing process. Once you are done fixing all
conflicts you should run the existing tests to make sure you didn’t break
anything, then run your new tests (there are new tests, right?) and
make sure they also pass.

If rebasing broke anything, fix it, then repeat the above process until nothing is broken and all the tests pass.

### Push feature branch to forked repo

The next step is to push your feature branch to your forked repo. To do this, run the following code:
```
git push origin 'your-branch-name'
```

### Make a pull request

Make a clear pull request from your fork and branch to the upstream staging
branch, detailing exactly what changes you mad. The clearer your pull request is,
the faster you can get your changes incorporated into this repo.

The title of your pull request should be the same as your commit message.

In the body of the pull request, start out with 'Closes #5.' In this example, #5 is the issue number.
After this, make a new line and write details about what changes you made.

At least one other person MUST give your changes a code review, and once
they are satisfied they will merge your changes into upstream. Alternatively,
they may have some requested changes. You should make more commits to your
branch to fix these, then follow this process again from rebasing onwards.

Once you get back to this point, make a comment requesting further review and
someone will look at your code again. If they like it, it will get merged,
else, just repeat again.

### Rebase from upstream staging to local master

After your pull request is merged, run another rebase from the upstream's staging
branch, however, this time you will rebase to your local master branch.

Once the rebase is complete, delete the feature branch from your local workstation:

```
git branch -d 'your-branch-name'
```

Thanks for contributing!

### Guidelines

1. Uphold the current code standard:
    - Keep your code [DRY][].
    - Follow [STYLE-GUIDE.md](STYLE-GUIDE.md)
1. Run the [tests][] before submitting a pull request.
1. Tests are very, very important. Submit tests if your pull request contains
   new, testable behavior.
1. Your pull request is comprised of a single ([squashed][]) commit.

## Checklist:

This is just to help you organize your process

- [ ] Did I make a work branch off local master after rebasing?
- [ ] Did I follow the correct naming convention for my branch?
- [ ] Is my branch focused on a single main change?
 - [ ] Do all of my changes directly relate to this change?
 - [ ] Did I squash my commits into a single commit?
- [ ] Did I rebase from the upstream staging branch after I finished all my work?
- [ ] Did I write a clear pull request message detailing what changes I made?
- [ ] Did I get a code review?
 - [ ] Did I make any requested changes from that code review?

If you follow all these guidelines and make good changes, you should have
no problem getting your changes merged into the repo.
