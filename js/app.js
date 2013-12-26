App = Ember.Application.create({
	LOG_TRANSITIONS: true,
	LOG_TRANSITIONS_INTERNAL: true,
	LOG_VIEW_LOOKUPS: true,
	LOG_ACTIVE_GENERATION: true});

Ember.onerror = function(error) {
  Em.$.ajax('/error-notification', 'POST', {
    stack: error.stack,
    otherInformation: 'exception message'
  });
}

App.Router.map(function() {
	this.route("ssApps", {path: "/"}, function() {
  		this.resource("ssApp", {path:":name"}, function(){
  			this.resource("ssMenus",{path:"menus"}, function (){
  				this.resource("ssMenu",{path:":name"}, function(){
  					this.resource("ssMenuItems",{path:"menu"}, function(){
  						this.resource("ssMenuItem", {path: ":menuID"}, function(){
  							this.resource("ssActions", {path: "actions"}, function(){
  								this.resource("ssAction", {path: "actionID"})
  							})
  						})
  					})
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

App.ColorPicker = Em.View.extend({
  classNames: 'input-append color',
  attributeBindings: ['name', 'value'],
  value: '',
  template: Ember.Handlebars.compile('{{view Ember.TextField valueBinding="this.value"}}<span class="add-on"><i {{bindAttr style="view.iStyle"}}></i></span>'),
  iStyle: function() {
    return "background-color:" + this.get('value');
  }.property('value'),
  didInsertElement: function() {
    $('#bgColor').colorpicker({format: "rgba"});
    $('#color').colorpicker({format: "rgba"});
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

App.SsActionList = EmberFire.ObjectArray.extend({
  firebaseURI: "https://menutest.firebaseio.com/",

  init: function(){
    var firebase = new Firebase(this.get('firebaseURI'));
    this.set('ref', firebase);
    this._super();
  }
});


App.SSMENUITEMS = [
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
        ];

App.SSDEFAULTMENU = [{name: "Top", menuItems: App.SSMENUITEMS}];

App.SsAppsRoute = Ember.Route.extend({
  model: function() {
    return App.SsAppList.create();
  },
  renderTemplate: function(controller, model){
		
		this.render('ssApps');
	}
});

App.SsAppsController = Ember.ArrayController.extend({
	item: {name: "unnamed app", menus: App.SSDEFAULTMENU},
	ssApps: function(){
    	return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      		content: this.get('content'),
      		sortProperties: ['name'],
      		sortAscending: false
    	});
  	}.property('content'),
  	actions: {
          new: function(){this.pushObject(this.get('item'));}
  	}
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
	item: {name: "unnamed menu", menuItems: App.SSMENUITEMS},
  ssMenus: function(){
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      content: this.get('content'),
      sortProperties: ['name'],
      sortAscending: false
    });
  }.property('content'),
  actions: {
          new: function(){this.pushObject(this.get("item"));}
  }
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
	currentPage: 0,
  ssMenus: function(){
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      content: this.get('content'),
      sortProperties: ['name'],
      sortAscending: false
    });
  }.property('content'),
  actions: {
  	pageUp: function() { this.incrementProperty('currentPage')},
  	pageDown: function() {this.decrementProperty('currentPage')},
    new: function(){this.pushObject(this.get("item"))}
  }
});


App.SelectedSsMenuItemController = Ember.ObjectController.extend({
	model: null
});

App.SsMenuItemView = Ember.View.extend({
  didInsertElement: function(){
    var self = this;
    var thisOffset = this.$().offset();
    var itemOffset = this.$('.ssMenuItem').offset();
    this.$('.ssMenuItem').draggable({
      grid:[175,45], 
      stop: function(event, ui){
        var controller = self.get('controller');
        controller.move(Math.floor(ui.position.top / 45), Math.floor(ui.position.left / 175));
      },
      containment:'#ssEditor'/*,
      helper: function(){
        return self.$('.ssMenuItem');
      }//,*/
      //cursorAt: {top: itemOffset.top - thisOffset.top, left: itemOffset.left - thisOffset.left}
    });
  }
});


App.SsMenuItemController = Ember.ObjectController.extend({
  needs: ["selected_ssMenuItem", "ssMenuItems", "ssActions"],
  left: "0px",
  top: 1,
  align: "left",
  rowOffset: 45,
  border: "0px none black",
  opacity: 1,
  columnOffset: "175px",
  onCurrentPage: function(){
  	return this.get('controllers.ssMenuItems.currentPage') == this.get('page')
  }.property('page','controllers.ssMenuItems.currentPage'),
	ssActions: function(){
  	var model = this.get('model'),
  	ref = model.get('ref');
  	return EmberFire.ObjectArray.create({ref: ref.child('actions')});
  	},
  	ssActions: function(){
  	var model = this.get('model'),
  	ref = model.get('ref');
  	return EmberFire.ObjectArray.create({ref: ref.child('actions')});
  },
  menuStyle: function() {
  	var string;
  	if(this.get('column') == 1){
  		this.left = this.columnOffset;
  		this.align = "right";
  	};
  	if(!this.get('visibility')){
  	this.set('visibility', 'visible');
  	}
  	
  	if(this.get('visibility') == "hidden"){
  		this.border = "2px solid red";
  		this.opacity = 0.1;
  	};
  	this.top = (this.rowOffset * this.get('row'))+"px";
		string = 'border:'+ this.get('border')+
  		";opacity:"+ this.get('opacity')+
  		";text-align:"+ this.get('align')+
  		";left:" + this.get('left')+
  		";top:" + this.get('top')+
  		";color:rgba("+ this.get('color.r')+","+this.get('color.g')+","+this.get('color.b')+","+this.get('color.a')+")"+
  		";background-color:rgba("+ this.get('bgColor.r')+","+this.get('bgColor.g')+","+this.get('bgColor.b')+","+this.get('bgColor.a')+");"
  	return string;
	}.property('column', 'border', 'opacity', 'align', 'left', 'top'),
  selected: function(){
    return this.get('controllers.selected_ssMenuItem.model') === this.get('model');
  }.property('controllers.selected_ssMenuItem.model', 'model'),
  move: function(row, column){
    var model = this.get('model');
    model.set('row', row);
    model.set('column', column);
  },
  actions: {
    select: function(){
      var model = this.get('model');
      this.set('controllers.selected_ssMenuItem.model', model);
    this.set('controllers.ssActions.content', this.ssActions());

    }
  }
});



App.SsActionsController = Ember.ArrayController.extend({
  ssActions: function(){
    return Ember.ArrayProxy.create(
      {content: this.get('content')});
  }.property('content'),
  actions: {
  }
});


App.SelectedSsActionController = Ember.ObjectController.extend({
	model: null
});

App.SsActionController = Ember.ObjectController.extend({
  needs: ["selected_ssAction"],
  selected: function(){
    return this.get('controllers.selected_ssAction.model') === this.get('model');
  }.property('controllers.selected_ssAction.model', 'model'),
  actions: {
    select: function(){
      var model = this.get('model');
      this.set('controllers.selected_ssAction.model', model);
    }
  }
});