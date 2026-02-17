"""Local dev server with clean URL support (matches .htaccess rewrite rules)."""

import http.server
import os

ROOT = os.path.dirname(os.path.abspath(__file__))


class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_GET(self):
        # Strip query string for file lookup
        path = self.path.split("?")[0].split("#")[0]

        # If path has no extension and no file exists, try .html
        if "." not in os.path.basename(path):
            html_path = os.path.join(ROOT, path.lstrip("/") + ".html")
            if os.path.isfile(html_path):
                self.path = path + ".html"

        return super().do_GET()


if __name__ == "__main__":
    PORT = 8000
    with http.server.HTTPServer(("", PORT), CleanURLHandler) as httpd:
        print(f"Serving at http://localhost:{PORT}")
        httpd.serve_forever()
