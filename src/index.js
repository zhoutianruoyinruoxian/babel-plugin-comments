function filterComments(list, path, type) {
  return list.filter(o => o.type.toLowerCase() !== type.toLowerCase());
}

export default function ({ types: t }) {
  return {
    name: 'remove-comments',
    visitor: {
      Program(path, { opts: { type = 'all' } } = {}) {
        path.traverse({
          enter(path) {
            const leadingCommentsList = path.node.leadingComments || [];
            const trailingCommentsList = path.node.trailingComments || [];
            if (leadingCommentsList.length > 0 || trailingCommentsList.length > 0) {
              if (type === 'none') return;
              if (type === 'all') {
                t.removeComments(path.node);
              } else {
                // t.removeComments是清空全部注释，并不能区分去掉哪种注释
                // t.removeComments(path.node);
                path.node.leadingComments = filterComments(leadingCommentsList, path, type);
                path.node.trailingComments = filterComments(trailingCommentsList, path, type);
              }
            }
          },
        });
      },
    },
  };
}
