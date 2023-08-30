# Git

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
