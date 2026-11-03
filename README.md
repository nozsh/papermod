prod:

```bash
# install
git submodule add -b based --depth=1 https://github.com/nozsh/papermod.git themes/PaperMod
```

```bash
# if reclone
git submodule update --init --recursive
```

dev:

```bash
# update (pull) main
git checkout master && git pull upstream master && git push origin master

# merge into custom
git checkout based && git merge master
```
