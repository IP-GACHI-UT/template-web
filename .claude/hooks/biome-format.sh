#!/usr/bin/env bash
# PostToolUse hook: Auto-format with Biome after Edit/Write
# stdin receives JSON with tool_input.file_path

FILE_PATH=$(node -p "JSON.parse(require('fs').readFileSync(0,'utf8')).tool_input?.file_path||''" 2>/dev/null)

if [ -n "$FILE_PATH" ] && [[ "$FILE_PATH" =~ \.(tsx?|jsx?|json|css|mjs)$ ]]; then
  npx @biomejs/biome check --fix "$FILE_PATH" 2>/dev/null || true
fi
