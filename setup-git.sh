#!/usr/bin/env bash
# Initialise this folder as a git repo and make the first commit.
# Run from inside v2/ on your Mac terminal:
#
#   cd ~/Desktop/personal-website/v2
#   bash setup-git.sh
#
# Then follow the GitHub steps printed at the end.

set -euo pipefail

# Clean up any partial git state from earlier sandbox attempts
if [ -d .git ]; then
  echo "Removing partial .git directory…"
  rm -rf .git
fi

git init -b main
git config user.name  "Sirius Zhang"
git config user.email "yuz047@outlook.com"

git add .
git commit -m "Initial commit: v2 site for Sirius Zhang

Editorial site positioning around trading, risk, AI, and data.

- 5 top-level pages: home, work, writing, cv, contact
- 13 long-form articles under writing/
- 3 work project pages
- Single consolidated stylesheet (assets/style.css)
- Inter Tight display + Inter body + JetBrains Mono micro-type
- Warm paper background, deep navy accent
- README.md and WRITING_STYLE_GUIDE.md document the design system
- All article components unified (.references, .related, .series-nav,
  .series-card, .topic-stack, .hero-figure, .note, .matrix, .inline-code)"

echo ""
echo "✓ Local repo created. Files in commit:"
git ls-files | wc -l | sed 's/^ */   /'
git log --oneline

cat <<'NEXT'

────────────────────────────────────────────────────────
NEXT — create the GitHub repo and push:

1. Open https://github.com/new
   - Owner: yuz047
   - Repository name: yuz047.github.io      (REQUIRED — this exact name
                                              makes GitHub serve it at
                                              https://yuz047.github.io/)
   - Visibility: Public or Private
   - DO NOT check "Add a README", "Add .gitignore", or "Add license"
     (you already have all three locally)
   - Click "Create repository"

2. Back in this terminal, copy-paste:

     git remote add origin git@github.com:yuz047/yuz047.github.io.git
     git push -u origin main

   If you're using HTTPS instead of SSH:
     git remote add origin https://github.com/yuz047/yuz047.github.io.git
     git push -u origin main

3. Done. Visit https://github.com/yuz047/yuz047.github.io to confirm.

To serve the site for free on GitHub Pages:
   Settings → Pages → Source: Deploy from branch → main / (root) → Save
   Your site will be live at https://yuz047.github.io/
────────────────────────────────────────────────────────
NEXT
