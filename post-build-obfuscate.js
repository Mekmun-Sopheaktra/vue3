import { promises as fs } from 'fs';
import { minify } from 'html-minifier-terser';

async function minifyHtml() {
  try {
    // Read the built HTML file
    const htmlFilePath = 'dist/index.html';
    const htmlContent = await fs.readFile(htmlFilePath, 'utf8');

    // Minify/Obfuscate the HTML
    const minifiedHtml = await minify(htmlContent, {
      collapseWhitespace: true,
      removeComments: true,
      minifyJS: true,
      minifyCSS: true,
    });

    // Write the minified HTML back to the file
    await fs.writeFile(htmlFilePath, minifiedHtml, 'utf8');
    console.log('HTML file minified and obfuscated successfully.');
  } catch (err) {
    console.error('Error during HTML minification:', err);
  }
}

minifyHtml();
