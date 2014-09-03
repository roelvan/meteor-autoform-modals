Package.describe({
  summary: "Create, update and delete collections with modals",
  version: "0.1",
  git: "https://github.com/yogiben/meteor-collection-modals"
});

Package.on_use(function (api) {

api.versionsFrom('METEOR@0.9.0');

 api.use(['jquery','templating','less','session','coffeescript','ui','aldeed:autoform@0.17.1','raix:handlebar-helpers@0.1.2'], 'client');
 
 api.add_files('lib/client/modals.html', 'client');
 api.add_files('lib/client/modals.coffee', 'client');
 api.add_files('lib/client/modals.less', 'client');

});