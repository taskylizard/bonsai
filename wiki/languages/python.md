# Python

[Ruff](https://beta.ruff.rs/docs/) and [Pyright](https://microsoft.github.io/pyright/) are pretty good for editoring tool, probably the best you can get.
Now, with Ruff for linting and Pyright for static analysis, you should be good to go. Use [Black](https://black.readthedocs.io/en/stable) for **opinionated** formatting. [Darker](https://github.com/akaihola/darker) may also be useful for specific usecases.

[pyenv](https://github.com/pyenv/pyenv), [pipenv](https://github.com/pypa/pipenv) or [virtualenv](https://github.com/pypa/virtualenv) are recommended for provisioning local development enviorments. The former two can also manage installed Python versions. [Or maybe you don't need virtualenvs.](https://frostming.com/2021/01-22/introducing-pdm/)

[PDM](https://github.com/pdm-project/pdm) is excellent for managing dependencies, if you missed `pnpm` in Node.js land, this is it.

Need project management? [Hatch](https://hatch.pypa.io/) may be useful to try.

## Tooling
- [Ruff](https://docs.ruff.rs/docs)
- [Pyright](https://microsoft.github.io/pyright/)
- [PDM](https://github.com/pdm-project/pdm)
