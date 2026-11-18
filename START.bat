@echo off
rem Starts a local server for the prototype and opens it in the default browser.
cd /d "%~dp0prototype"
start "" http://localhost:8765/index.html
python -m http.server 8765
