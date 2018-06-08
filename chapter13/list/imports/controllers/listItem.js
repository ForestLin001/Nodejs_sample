import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import Lists from './../models/index';

Template.listItem.events({
  'click .delete'(){
    Meteor.call('lists.delete',this._id);
  },
});
