#!/usr/bin/env bash
# rewrite-commits.sh — Rewrite all commit messages to Conventional Commits
#
# Usage:
#   chmod +x scripts/rewrite-commits.sh
#   ./scripts/rewrite-commits.sh            # full rewrite
#   ./scripts/rewrite-commits.sh --dry-run   # preview only
#
# Requires: git >= 2.0
# Safety: creates branch backup-original before any destructive operation

set -euo pipefail

DRY_RUN="${1:-}"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MAPPING_FILE="$REPO_ROOT/.commit-history-rewrite.md"

echo "============================================"
echo " HeyTrama — Commit History Rewrite"
echo "============================================"
echo ""

# --- Step 1: Verify repository ---
if ! git rev-parse --git-dir > /dev/null 2>&1; then
  echo "ERROR: Not inside a Git repository."
  exit 1
fi

if [ ! -f "$MAPPING_FILE" ]; then
  echo "ERROR: Mapping file not found at $MAPPING_FILE"
  exit 1
fi

TOTAL_COMMITS=$(git rev-list --count --all 2>/dev/null || echo "unknown")
echo "  Repository: $(basename $(git rev-parse --show-toplevel))"
echo "  Commits found: $TOTAL_COMMITS"
echo "  Mapping file: $MAPPING_FILE"
echo ""

# --- Step 2: Backup ---
if [ "$DRY_RUN" != "--dry-run" ]; then
  if git rev-parse --verify backup-original > /dev/null 2>&1; then
    echo "  [SKIP] backup-original branch already exists."
    echo "         Delete with: git branch -D backup-original"
    echo ""
  else
    echo "  [BACKUP] Creating branch: backup-original"
    git branch backup-original
    echo ""
  fi
fi

# --- Step 3: Generate mapping snippet for filter-branch ---
# Build a heredoc with case entries: SHA) echo "new message" ;;
# Parse lines like "xxxxxxx → new message"
MAPPING_SNIPPET="$REPO_ROOT/.git/.msg-filter-map.sh"
grep -E '^[a-f0-9]{7} → ' "$MAPPING_FILE" | sed -E 's/^([a-f0-9]{7}) → (.*)/\1) echo "\2" ;;/' > "$MAPPING_SNIPPET"
MAPPED_COUNT=$(wc -l < "$MAPPING_SNIPPET" | tr -d ' ')
echo "  [BUILD] $MAPPED_COUNT commit mappings generated."
echo ""

# --- Step 4: Dry-run preview ---
echo "  [PREVIEW] Commit changes on main branch:"
echo "  -----------------------------------------"
echo ""

git log --reverse --format="%h %s" main | while IFS= read -r line; do
  SHORT_HASH="${line:0:7}"
  OLD_MSG="${line:8}"
  NEW_MSG=$(grep "^$SHORT_HASH)" "$MAPPING_SNIPPET" | sed -E 's/^[a-f0-9]{7}\) echo "//;s/" ;;$//' 2>/dev/null || echo "")
  if [ -n "$NEW_MSG" ]; then
    echo "  $SHORT_HASH  $OLD_MSG"
    echo "         → $NEW_MSG"
    echo ""
  else
    echo "  $SHORT_HASH  $OLD_MSG  (unchanged)"
    echo ""
  fi
done

if [ "$DRY_RUN" = "--dry-run" ]; then
  echo "  [DRY RUN] No changes were made."
  echo "  Run without --dry-run to execute."
  echo ""
  rm -f "$MAPPING_SNIPPET"
  exit 0
fi

# --- Step 5: Confirm ---
echo "  -----------------------------------------"
echo "  WARNING: This rewrites ALL commit SHAs."
echo "  Backup saved in branch: backup-original"
echo ""
read -rp "  Type 'yes' to continue: " CONFIRM
echo ""

if [ "$CONFIRM" != "yes" ]; then
  echo "  [ABORT] No changes made."
  echo "  Restore with: git checkout backup-original && git branch -f main backup-original"
  rm -f "$MAPPING_SNIPPET"
  exit 0
fi

# --- Step 6: Execute filter-branch ---
echo "  [REWRITE] Running git filter-branch --msg-filter ..."
echo "  (This may take a few minutes...)"
echo ""

FILTER_SCRIPT="
  case \"\$GIT_COMMIT\" in
$(cat "$MAPPING_SNIPPET")
    *) cat ;;
  esac
"

git filter-branch -f --msg-filter "$FILTER_SCRIPT" -- --all

rm -f "$MAPPING_SNIPPET"

echo ""
echo "  [DONE] Commit messages rewritten."
echo ""

# --- Step 7: Verify ---
echo "  [VERIFY] First 5 commits on main:"
git log --oneline main | head -5
echo ""
echo "  [VERIFY] Last 5 commits on main:"
git log --oneline main | tail -5
echo ""

# --- Step 8: Summary ---
echo "============================================"
echo " Summary"
echo "============================================"
echo ""
echo "  Backup branch:  backup-original"
echo "  Restore:        git checkout backup-original && git branch -f main backup-original"
echo ""
echo "  Push (destructive):"
echo "    git push -f origin main"
echo "    git push -f origin --all"
echo "    git push -f origin --tags"
echo ""
echo "  Commit validation setup:"
echo "    npm install --save-dev @commitlint/cli @commitlint/config-conventional husky"
echo "    npx husky install"
echo "    npx husky add .husky/commit-msg 'npx --no -- commitlint --edit \"\$1\"'"
echo ""
echo "  ⚠️  All SHAs changed. Notify collaborators before force-pushing."
echo ""
