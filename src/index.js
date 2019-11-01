const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare(() => {
  return {
    name: 'ignore-import',
    visitor: {
      ImportDeclaration(path, state) {
        const { pathPattern } = state.opts;
        if (pathPattern && (new RegExp(pathPattern)).test(path.node.source.value)) {
          path.remove();
        }
      }
    }
  };
});
