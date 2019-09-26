const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/" id="addPageForm">

    <div>
    <label for="name" class="col-sm-2 control-label">Page Author</label>
    <input id="name" name="name" type="text" class="form-control"/></div>

    <div>
      <label for="e mail" class="col-sm-2 control-label">Author Email</label>
      <input id="email" name="email" type="text" class="form-control"/>
    </div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div>
      <label for="content" class="col-sm-2 control-label">Page Content</label>
      <input type="text" id="content" name="content" class="form-control" />
    </div>

    <div>
      <label for="content" class="col-sm-2 control-label">Status</label>
      <input id="status" name="status" type="text" class="form-control"/>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>


`);
