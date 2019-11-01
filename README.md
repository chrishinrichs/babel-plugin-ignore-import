# babel-plugin-ignore-import
Babel plugin to ignore import statements that match a particular regex. This plugin will completely remove the `import` line from the file if the path matches the passed regular expression.

Usage:

{
  plugins: [
    ['ignore-import', {
      pathRegex: /path\/to\/ignore/
    }]
  ]
}
