#!/bin/sh
# 快速创建新文章

if [ -z "$1" ]; then
    echo "Usage: sh newpost.sh <filename>"
    exit 1
fi

FILENAME="$1"
DATE=$(date +%Y-%m-%d)
TARGET="src/content/posts/${FILENAME}.md"

if [ -e "$TARGET" ]; then
    echo "Error: File $TARGET already exists"
    exit 1
fi

cat > "$TARGET" << EOF
---
title: "$FILENAME"
published: ${DATE}
description: ''
image: ''
tags: []
category: ''
draft: false
lang: ''
---

EOF

echo "Post created: $TARGET"
