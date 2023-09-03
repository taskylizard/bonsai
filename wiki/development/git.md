# Git

- [Lazygit](https://github.com/jesseduffield/lazygit) - Terminal UI for common git commands, personally my favorite tool.
- [github/gitignore](https://github.com/github/gitignore) - Useful `.gitignore` files for your projects
- [gitoxide](https://github.com/Byron/gitoxide) - Fast and lean reimplementation of `git` in rust. 
- [git-flow](https://github.com/nvie/gitflow)
- [pre-commit](https://github.com/pre-commit/pre-commit) - Manage git hooks for your projects, written in Python and has support for various languages.
- [Lucky Commit](https://github.com/not-an-aardvark/lucky-commit) - Customize your git commit hashes
- [git-annex](https://git-annex.branchable.com) - Track large files in your git repository.
- [git-secret](https://github.com/sobolevn/git-secret) - Store secrets and private data with PGP encryption.
- [git-branchless](https://github.com/arxanas/git-branchless) - Suite of tools for high-velocity, monorepo-scale workflow.
- [git-chglog](https://github.com/git-chglog/git-chglog) - Generate changelogs from commit messages.
- [git-sweep](https://github.com/arc90/git-sweep) - Clean up branches that have been merged into stable.
- [git-mask](https://github.com/AnalogJ/gitmask) - Anonymously contribute to projects, is a hosted service.
- [git-stack](https://github.com/gitext-rs/git-stack) - Stacked branch management.

## Build your own Git

- [DIY Git in Python](https://www.leshenko.net/p/ugit/)
- [codecrafters-io/build-your-own-x#build-your-own-git](https://github.com/codecrafters-io/build-your-own-x#build-your-own-git)

## Bidirectional syncing of repository

This is a guide on how to setup a bidirectional git mirror for a repository. This is also how this wiki is synced.

Say we have a repository on GitHub, now it needs to be mirrored to Gitea/GitLab/SourceHut or the other way around, that's bidirectional syncing.

This comes with it's own caveats though.

We change into a directory and clone the **bare** repository:

```bash
# ~/projects/sync
git clone --bare https://github.com/taskylizard/bonsai
mv bonsai.git bonsai
cd bonsai
```

Now we use this cloned bare directory for our syncing, we remove the origin remote and configure our upstream repository instead:

```bash
git remote remove origin
# These can be SSH remotes too
git remote add github https://github.com/taskylizard/bonsai.git
git remote add gitea https://git.bignutty.xyz/taskylizard/bonsai.git
```

Now the _actual_ syncing happens here:

```bash
#!/bin/bash

cd /home/tasky/projects/sync/bonsai
# Fetch all the remotes
git fetch --all -p
# And sync them.
git push github "refs/remotes/gitea/*:refs/heads/*" "refs/tags/*:refs/tags/*"
git push gitea "refs/remotes/github/*:refs/heads/*" "refs/tags/*:refs/tags/*"
echo "Synced successfully."
```

Now save and run this, setup a crontab to run every hour or a webhook thing (here be dragons!), whatever fits your boat.
