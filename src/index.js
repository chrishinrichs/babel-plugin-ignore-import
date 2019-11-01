const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare(() => {
  return {
    name: 'ignore-import',
    visitor: {
      ImportDeclaration(path, state) {
        const { pathRegex } = state.opts;
        if (pathRegex && pathRegex.test(path.node.source.value)) {
          path.remove();
        }
      }
    }
  };
});
