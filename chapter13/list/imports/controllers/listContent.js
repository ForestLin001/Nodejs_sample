import { Meteor } from'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import Lists from './../models/index';
import '../views/listContent.html';

Template.listContent.helpers({
  lists(){
    const listType = Session.get('listType');
    if(listType){
      if(listType === 1){
        return Lists.find({completed: true}, {sort: {createdAt: -1}})
      } else if(listType === 2) {
        return Lists.find({completed: false}, {sort: {createdAt: -1}})
      }
    }
    return Lists.find({},{sort:{createdAt: -1}});
  }
});

Template.listContent.events({
  'change .listContainer li'(event){
    Meteor.call('lists.update', this._id, !this.completed);
  }
});

Template.body.onCreated(function() {
  Meteor.subscribe('tasks');
});