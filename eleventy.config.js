import { execFileSync } from 'node:child_process';

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    assets: 'assets',
    CNAME: 'CNAME',
    'favicon.ico': 'favicon.ico',
  });

  eleventyConfig.addWatchTarget('src/css/');
  eleventyConfig.on('eleventy.before', () => {
    execFileSync(
      'bun',
      [
        'build',
        'src/css/index.css',
        '--minify',
        '--external',
        '/assets/*',
        '--outfile',
        '_site/assets/css/index.css',
      ],
      { stdio: 'inherit' },
    );
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
}
