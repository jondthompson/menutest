App = Ember.Application.create({
	LOG_TRANSITIONS: true,
	LOG_TRANSITIONS_INTERNAL: true,
	LOG_VIEW_LOOKUPS: true,
	LOG_ACTIVE_GENERATION: true});

App.Router.map(function() {
	this.route("ssApps", {path: "/"}, function() {
  		this.resource("ssApp", {path:":name"}, function(){
  			this.resource("ssMenus",{path:"menus"}, function (){
  				this.resource("ssMenu",{path:":name"}, function(){
  					this.resource("ssMenuItems",{path:"menu"}, function(){
  						this.resource("ssMenuItem", {path: ":menuID"});
  					});
  				})
  			})
		})
	})
});

Handlebars.registerHelper("debug", function(optionalValue) {
  console.log("Current Context");
  console.log("====================");
  console.log(this);
 
  if (optionalValue) {
    console.log("Value");
    console.log("====================");
    console.log(optionalValue);
  }
});

App.SsAppList = EmberFire.ObjectArray.extend({
  firebaseURI: "https://menutest.firebaseio.com/",

  init: function(){
    var firebase = new Firebase(this.get('firebaseURI'));
    this.set('ref', firebase);
    this._super();
  }
});

App.SsMenuList = EmberFire.ObjectArray.extend({
  firebaseURI: "https://menutest.firebaseio.com/",

  init: function(){
    var firebase = new Firebase(this.get('firebaseURI'));
    this.set('ref', firebase);
    this._super();
  }
});

App.SsAppList.InjectFixtures = function(){
  var list = App.SsAppList.create();
  list.pushObjects(App.SSAPP_FIXTURES);
};



App.SSAPP_FIXTURES = [
	{name: "unnamed app1", menus: App.SSMENU_FIXTURES},
	{name: "unnamed app2", menus: App.SSMENU_FIXTURES}
];

App.SSMENU_FIXTURES = [
	{name: "Top", menu: [
    	{ id:"0",text: "0-0", page: 0, row: 0, column: 0, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"hidden"},
        { id: 1, text: "0-1", page: 0, row: 1, column: 0, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"hidden"},
        { id: 2, text: "0-2", page: 0, row: 2, column: 0, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"hidden"},
        { id: 3, text: "0-3", page: 0, row: 3, column: 0, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"hidden"},
        { id: 4, text: "0-4", page: 0, row: 4, column: 0, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"hidden"},
        { id: 5, text: "0-5", page: 0, row: 5, column: 0, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"hidden"},
        { id: 6, text: "0-6", page: 0, row: 6, column: 0, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"visible"},
        { id: 7, text: "0-7", page: 0, row: 7, column: 0, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"visible"},
        { id: 8, text: "0-8", page: 0, row: 8, column: 0, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"hidden"},
        { id: 9, text: "1-0", page: 0, row: 0, column: 1, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"hidden"},
        { id: 10,text: "1-1", page: 0, row: 1, column: 1, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"hidden"},
        { id: 11,text: "1-2", page: 0, row: 2, column: 1, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"hidden"},
        { id: 12,text: "1-3", page: 0, row: 3, column: 1, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"hidden"},
        { id: 13,text: "1-4", page: 0, row: 4, column: 1, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"hidden"},
        { id: 14,text: "1-5", page: 0, row: 5, column: 1, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"hidden"},
        { id: 15,text: "1-6", page: 0, row: 6, column: 1, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"hidden"},
        { id: 16,text: "1-7", page: 0, row: 7, column: 1, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"hidden"},
        { id: 17,text: "1-8", page: 0, row: 8, column: 1, color: {r:0,g:0,b:0,a:255}, bgColor: {r:208,g:208,b:208,a:255}, actions: [{action:3}], visibility:"hidden"}
	]}
];

App.SsAppsRoute = Ember.Route.extend({
  model: function() {
    return App.SsAppList.create();
  },
  renderTemplate: function(controller, model){
		
		this.render('ssApps');
	}
});

App.SsAppsController = Ember.ArrayController.extend({
  ssApps: function(){
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      content: this.get('content'),
      sortProperties: ['name'],
      sortAscending: false
    });
  }.property('content')
});


App.SelectedSsAppController = Ember.ObjectController.extend({
	model: null,
	menus: function(){
		var model = this.get('model'),
		ref = model.get('ref');
	
		return EmberFire.ObjectArray.create({ ref: ref.child('menus')});
	},
	actions: {

  }
});

App.SsAppController = Ember.ObjectController.extend({
  needs: ["selected_ssApp", 'ssMenus'],
	menus: function(){
		var model = this.get('model'),
		ref = model.get('ref');
	
		return EmberFire.ObjectArray.create({ ref: ref.child('menus')});
	},
  selected: function(){
    return this.get('controllers.selected_ssApp.model') === this.get('model');
  }.property('controllers.selected_ssApp.model', 'model'),
  actions: {
    select: function(){
      var model = this.get('model'),
      menusObj = model.get('menus');
      this.set('controllers.selected_ssApp.model', model);
      
    	this.set('controllers.ssMenus.content', this.menus());
    }
  }
});

App.SsMenusController = Ember.ArrayController.extend({
  ssMenus: function(){
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      content: this.get('content'),
      sortProperties: ['name'],
      sortAscending: false
    });
  }.property('content')
});



App.SelectedSsMenuController = Ember.ObjectController.extend({
	model: null
});

App.SsMenuController = Ember.ObjectController.extend({
  needs: ["selected_ssMenu", "ssMenuItems"],
  menuItems: function(){
  	var model = this.get('model'),
  	ref = model.get('ref');
  	return EmberFire.ObjectArray.create({ref: ref.child('menuItems')});
  },
  selected: function(){
    return this.get('controllers.selected_ssMenu.model') === this.get('model');
  }.property('controllers.selected_ssMenu.model', 'model'),
  actions: {
    select: function(){
      var model = this.get('model');
      this.set('controllers.selected_ssMenu.model', model);
    this.set('controllers.ssMenuItems.content', this.menuItems());
    }
  }
});

App.SsMenuItemsController = Ember.ArrayController.extend({
  ssMenus: function(){
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      content: this.get('content'),
      sortProperties: ['name'],
      sortAscending: false
    });
  }.property('content')
});


App.SelectedSsMenuItemController = Ember.ObjectController.extend({
	model: null
});

App.SsMenuItemController = Ember.ObjectController.extend({
  needs: ["selected_ssMenuItem"],
  selected: function(){
    return this.get('controllers.selected_ssMenuItem.model') === this.get('model');
  }.property('controllers.selected_ssMenuItem.model', 'model'),
  actions: {
    select: function(){
      var model = this.get('model');
      this.set('controllers.selected_ssMenuItem.model', model);
    }
  }
});
