#!/bin/bash

# Start the Astro dev server and open Chrome
# This script starts the development server and automatically opens the site in Chrome

echo "Starting Astro development server..."

# Start the dev server in the background
npm run dev &
DEV_SERVER_PID=$!

# Wait for the server to be ready
echo "Waiting for server to start..."
max_attempts=30
attempt=0

while [ $attempt -lt $max_attempts ]; do
  if curl -s http://localhost:4322 > /dev/null 2>&1; then
    echo "Server is ready!"
    break
  fi
  attempt=$((attempt + 1))
  sleep 1
done

if [ $attempt -eq $max_attempts ]; then
  echo "Server failed to start within 30 seconds"
  kill $DEV_SERVER_PID 2>/dev/null
  exit 1
fi

# Open Chrome with the local development URL
echo "Opening Chrome..."
if command -v open > /dev/null 2>&1; then
  # macOS
  open -a "Google Chrome" http://localhost:4322
elif command -v google-chrome > /dev/null 2>&1; then
  # Linux with google-chrome
  google-chrome http://localhost:4322 &
elif command -v chrome > /dev/null 2>&1; then
  # Linux with chrome
  chrome http://localhost:4322 &
else
  echo "Chrome not found. Please open http://localhost:4322 manually"
fi

echo ""
echo "Development server is running at http://localhost:4322"
echo "Press Ctrl+C to stop the server"
echo ""

# Bring the dev server process to foreground
wait $DEV_SERVER_PID
