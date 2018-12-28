function filterComments(list, path, _remove) {
  return list.filter(o => o.type.toLowerCase() !== _remove);
}

function getRemoveType(remove) {
  if (remove === 'all') return 'all';
  if (remove === 'block' || remove.toLowerCase() === 'commentblock') return 'commentblock';
  if (remove === 'line' || remove.toLowerCase() === 'commentline') return 'commentline';
  throw new Error("The 'remove' option must be undefiend, 'none', 'all', 'block', or 'line'.");
}

export default function ({ types: t }) {
  return {
    name: 'remove-comments',
    visitor: {
      Program(path, { opts: { remove = 'none' } } = {}) {
        if (remove === 'none') return;
        const _remove = getRemoveType(remove);
        path.traverse({
          enter(path) {
            const leadingCommentsList = path.node.leadingComments || [];
            const trailingCommentsList = path.node.trailingComments || [];
            if (leadingCommentsList.length > 0 || trailingCommentsList.length > 0) {
              if (_remove === 'all') {
                t.removeComments(path.node);
              } else {
                // t.removeComments是清空全部注释，并不能区分去掉哪种注释
                // t.removeComments(path.node);
                path.node.leadingComments = filterComments(leadingCommentsList, path, _remove);
                path.node.trailingComments = filterComments(trailingCommentsList, path, _remove);
              }
            }
          },
        });
      },
    },
  };
}
