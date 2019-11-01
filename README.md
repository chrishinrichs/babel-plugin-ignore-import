# babel-plugin-ignore-import
Babel plugin to ignore import statements that match a particular string. This plugin will completely remove the `import` line from the file if the path matches the passed regular expression string.

Usage:

{
  plugins: [
    ["ignore-import", {
      pathPattern: "path/to/remove"
    }]
  ]
}
