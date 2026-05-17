# Push v2/ to GitHub — three commands

I prepared the commit but the sandbox file system blocks git from holding its index lock, so the final `init / commit / push` has to happen from your Mac terminal. It takes about 60 seconds.

## 1. Open Terminal and run

```bash
cd ~/Desktop/personal-website/v2
bash setup-git.sh
```

This will:
- delete any partial `.git/` from my failed attempt,
- run `git init`, `git add .`, `git commit` with a real first-commit message,
- print the next steps.

You should see **37 files committed** and one initial commit in the log.

## 2. Create the GitHub repo

Open <https://github.com/new>

- **Owner:** `yuz047`
- **Repository name:** `yuz047.github.io`  ← this exact name is required for GitHub's user-pages convention. It makes the site auto-serve at `https://yuz047.github.io/` with no subpath.
- **Description:** *Trading, risk, AI, and data — Sirius Zhang's personal site.*
- **Visibility:** Public (required for free GitHub Pages on a personal account).
- **Do not** tick "Add a README", "Add .gitignore", or "Add license" — those are already in the commit.
- Click **Create repository**.

## 3. Connect and push

GitHub will show you the commands. Copy the SSH (or HTTPS) variant:

```bash
git remote add origin git@github.com:yuz047/yuz047.github.io.git
git push -u origin main
```

Or with HTTPS:

```bash
git remote add origin https://github.com/yuz047/yuz047.github.io.git
git push -u origin main
```

That's it — your repo is live at `https://github.com/yuz047/yuz047.github.io`.

## Bonus — turn on GitHub Pages

Because the repo is named `yuz047.github.io`, GitHub auto-serves it as your user page. In **Settings → Pages**:

1. **Source:** Deploy from a branch
2. **Branch:** `main` / `/ (root)` → **Save**

Within a minute the site is live at:

```
https://yuz047.github.io/
```

(Not `/yuz047.github.io/` — the user-page repo's URL is the bare domain.)

Custom domain (e.g. `yuz047.com`) goes in the same Pages settings page — add the domain, then set a DNS `CNAME` record pointing to `yuz047.github.io`.

## If you'd rather not run the script

Run these by hand from inside `v2/`:

```bash
cd ~/Desktop/personal-website/v2
rm -rf .git
git init -b main
git config user.name  "Sirius Zhang"
git config user.email "yuz047@outlook.com"
git add .
git commit -m "Initial commit: v2 site for Sirius Zhang"
git remote add origin git@github.com:yuz047/yuz047.github.io.git
git push -u origin main
```

## A backup if the local commit ever gets lost

I also exported the commit as a git bundle here:

```
~/Library/Application Support/Claude/local-agent-mode-sessions/…/outputs/personal-website-v2.bundle
```

You can recreate the repo from it at any time:

```bash
mkdir restored-v2 && cd restored-v2
git clone /path/to/personal-website-v2.bundle .
```
