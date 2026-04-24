import fs from "fs";
import path from "path";

const dir = "./plugins";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".js"));

const links = files
  .map(f => `<li><a href="./${f}">${f}</a></li>`)
  .join("\n");

const html = `<!DOCTYPE html>
<html>
<body>
  <h1>Plugins</h1>
  <ul>
    ${links}
  </ul>
</body>
</html>`;

fs.writeFileSync(path.join(dir, "index.html"), html);