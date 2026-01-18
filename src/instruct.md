The Final Workflow Summary
1. **Video to Pixels**: Use YOLO to track players in the clip.

2. **Pixels to Pitch**: Apply the Homography Matrix to get real-world meter coordinates.

3. **Points to Curves**: Use the Spline Script above to turn the coordinate history into a smooth SVG path.

4. **Data Storage**: Save the final SVG strings and event tags (e.g., "Goal by Cambiasso") into a JSON file.

5. **Render**: Load that JSON into a web app using D3.js or SVG to draw the beautiful final graphic.