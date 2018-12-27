function filterComments(list, path, remove) {
  return list.filter(o => o.type.toLowerCase() !== remove.toLowerCase());
}

export default function ({ types: t }) {
  return {
    name: 'remove-comments',
    visitor: {
      Program(path, { opts: { remove = 'all' } } = {}) {
        if (remove === 'none') return;
        path.traverse({
          enter(path) {
            const leadingCommentsList = path.node.leadingComments || [];
            const trailingCommentsList = path.node.trailingComments || [];
            if (leadingCommentsList.length > 0 || trailingCommentsList.length > 0) {
              if (remove === 'all') {
                t.removeComments(path.node);
              } else {
                // t.removeComments是清空全部注释，并不能区分去掉哪种注释
                // t.removeComments(path.node);
                path.node.leadingComments = filterComments(leadingCommentsList, path, remove);
                path.node.trailingComments = filterComments(trailingCommentsList, path, remove);
              }
            }
          },
        });
      },
    },
  };
}
