#!/bin/bash

# Portfolio Local Development Server
# Start the server with: ./start.sh

PORT=8000

echo "🚀 Starting Portfolio Website..."
echo "📂 Server running at: http://localhost:$PORT"
echo "📄 Open: http://localhost:$PORT"
echo ""
echo "Press Ctrl+C to stop the server"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Start local dev server with clean URL support
python3 "$(dirname "$0")/server.py"
