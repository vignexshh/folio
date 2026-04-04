const fs = require("fs");
const path = require("path");

// Replace the unquoted <angle> syntax with a quoted version so PostCSS can parse @property blocks.
(() => {
  const filePath = path.join(
    process.cwd(),
    "node_modules",
    "lightswind",
    "lightswindv1.0.css",
  );

  if (!fs.existsSync(filePath)) {
    return;
  }

  const content = fs.readFileSync(filePath, "utf8");
  const patched = content.replace(
    /syntax: <angle>;?/g,
    'syntax: "<angle>";',
  );

  if (patched === content) {
    return;
  }

  fs.writeFileSync(filePath, patched, "utf8");
  process.stdout.write("patched lightswindv1.0.css\n");
})();
