#!/bin/bash

# Portfolio Local Development Server
# Start the server with: ./start.sh

PORT=8000

echo "🚀 Starting Portfolio Website..."
echo "📂 Server running at: http://localhost:$PORT"
echo "📄 Open: http://localhost:$PORT/index.html"
echo ""
echo "Press Ctrl+C to stop the server"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Start Python HTTP server
python3 -m http.server $PORT
