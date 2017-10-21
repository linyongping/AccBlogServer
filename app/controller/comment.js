'use strict';

module.exports = app => {
  class comment extends app.Controller {
    *show() {
      const { ctx, service } = this;
      const commentList = yield service.comment.show(ctx.params.id);
      ctx.body = { commentList };
    }
    *create() {
      const { ctx, service } = this;
      const createRule = {
        content: {
          type: 'string',
        },
        time: {
          type: 'string',
        },
        articleId: {
          type: 'string',
        },
      };
      ctx.validate(createRule);
      const id = ctx.session.id || '5964b5c24789e316dc50ca99';
      const res = yield service.comment.create(
        Object.assign(ctx.request.body, {
          user: id,
        }),
      );
      ctx.body = { id: res._id };
      ctx.status = 201;
    }
  }
  return comment;
};
