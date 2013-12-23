App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
//   this.resource('index', function() {
//   	this.resource('ssApp', function() {
//   		this.resource('ssMenuList', function() {
//   			this.resource('ssMenu', {'path': '/:menu_id'});
//   		});
//   	});
// });
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return  EmberFire.Array.create({
			ref: new Firebase("https://stickshift.firebaseio.com/jt-test-ember/")
  		})
	},
	renderTemplate: function(controller, model){
		
		this.render('index');
	
		this.render('ssApp', {
			outlet: 'ssApp',
			into: 'index'
		});
	
		this.render('ssMenuList', {
			outlet: 'ssMenuList',
			into: 'index'
		});
	
		this.render('ssMenu', {
			outlet: 'ssMenu',
			into: 'index'
		});
	}
});

//  App.SsAppRoute = Ember.Route.extend({
//  	model: function() {
//  		return EmberFire.Object.create({
//  			ref: new Firebase( controllers.post.model.ref.child(name);
//  		})


App.IndexController = Ember.ArrayController.extend({
	itemController: 'ssApp'
});

App.SsAppController = Ember.ObjectController.extend({
	needs: 'index',
	menus: EmberFire.Array.create({
		ref: new Firebase("https://stickshift.firebaseio.com/jt-test-ember/"+appID+"/menus/")
	})
});

App.SsMenuListController = Ember.ArrayController.extend({
	needs: "ssApp",
	ssApp: Em.computed.alias("controllers.ssApp"),
	itemController: "ssMenu",
	init: function (menusArray) {
		contents: menusArray
	}
	
});

App.SsMenuController = Ember.ObjectController.extend({
	needs: "ssMenuList",
	ssMenu: Ember.computed.alias("controllers.ssMenu")
});

App.SsApp = Ember.Object.extend({
	name: "hi",
	id: "hi",
	menus: {}
});

App.SsMenu = Ember.Object.extend({
	name: "",
	id: "",
	menu: [],
	actions: {
	
	},
	init: function (menu){
		this.name = menu.name;
		this.id = menu.id;
		this.menu = this.unpackMenu(menu.menu);
	},
	unpackMenu: function(menu){
		var menuArray;
		for (var i in menu){
			menuArray.add(new App.SsRow(menu[i]));
		}
	}
});

App.SsRow = Ember.Object.extend({
	id: 0,
	text: "",
	page: 0,
	row: 0,
	column: 0,
	color: {r:0,g:0,b:0,a:255},
	bgColor: {r:208,g:208,b:208,a:255},
	actions: [{action:3}],
	visibility: "hidden",
	init: function(row){
		this.id = row.id;
		this.text = row.text;
		this.page = row.page;
		this.column = row.column;
		this.color = row.color;
		this.bgColor = row.bgColor;
		this.actions = row.actions;
		this.visibility = row.visibility;
	}
});