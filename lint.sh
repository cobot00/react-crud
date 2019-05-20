#!/bin/bash

echo 'CIRCLE_BRANCH: ' ${CIRCLE_BRANCH}
TARGET_BRANCH=${CIRCLE_BRANCH}

# masterブランチへのmerge時はチェックしない
if [ "$TARGET_BRANCH" = 'master' ]; then
  echo 'SKIP on merge into master'
  exit 0
fi

# ローカルでの実行用にカレントブランチをセットする
if [ "$TARGET_BRANCH" = '' ]; then
  TARGET_BRANCH=$(git rev-parse --abbrev-ref HEAD)
fi
echo 'TARGET_BRANCH: ' $TARGET_BRANCH

echo 'CIRCLE_BASE_BRANCH: ' ${CIRCLE_BASE_BRANCH}
BASE_BRANCH=${CIRCLE_BASE_BRANCH}

# ローカルでの実行時に環境変数をセットしていない時はmasterブランチと比較する
if [ "$BASE_BRANCH" = '' ]; then
  BASE_BRANCH=origin/master
fi
echo 'BASE_BRANCH: ' $BASE_BRANCH

files=$(git diff --name-only $TARGET_BRANCH $BASE_BRANCH | grep -E '.js$')

error=false
for file in ${files}; do
  ./node_modules/.bin/eslint ${file}
  result=$?
  if [ $result -ne 0 ]; then
    error=true
  fi
done

if $error; then
  exit 1
fi

exit 0