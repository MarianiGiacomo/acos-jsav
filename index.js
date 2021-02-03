const Type = function() {}

Type.addToHead = function(params){
    return `
    <link rel="stylesheet" href="/static/jsav/JSAV.css" type="text/css" />
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
    <script src="/static/jsav/jquery.transit.js"></script>
    <script src="/static/jsav/raphael.js"></script>
    <script src="/static/jsav/JSAV-min.js"></script>
    `
}

Type.addToBody = function(params){
    return ''
}

Type.initialize = function(req, params, handlers, cb) {

    // Initialize the content type
    params.headContent += Type.addToHead(params);
    params.bodyContent += Type.addToBody(params);
  
    // Initialize the content package
    handlers.contentPackages[req.params.contentPackage].initialize(req, params, handlers, function() {
      cb();
    });
};

Type.register = function(handlers, app, conf) {
    handlers.contentTypes.jsav = Type;
};
  
Type.namespace = 'jsav';
Type.installedContentPackages = [];
Type.packageType = 'content-type';

Type.meta = {
    'name': 'jsav',
    'shortDescription': 'Content type for jsav exercises',
    'description': '',
    'author': 'Giacomo Mariani',
    'license': 'MIT',
    'version': '0.1.0',
    'url': 'https://github.com/MarianiGiacomo/acos-jsav'
};

module.exports = Type;
