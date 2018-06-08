import { Mongo } from 'meteor/mongo';

const Lists = new Mongo.Collection('lists');

if(Meteor.isServer) {
  Meteor.publish('lists', function () {
    return Lists.find();
  });
}

Meteor.methods({
  'lists.insert'(text){
    Lists.insert({
      content: text,
      createdAt: new Date(),
      completed: false
    });
  },
  'lists.delete'(id){
    Lists.remove({_id: id});
  },
  'lists.update'(id,completed){
    Lists.update(id, {$set: {completed: completed}});
  }
});

export default Lists;