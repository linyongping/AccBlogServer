'use strict';

module.exports = app => {
  class session extends app.Controller {
    *create() {
      // const { ctx, service } = this;
      // this.ctx.body = ctx.request.body;
    }
  }
  return session;
};
