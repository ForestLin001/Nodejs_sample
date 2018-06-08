import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
/*import Lists from './../models/index';*/

Template.listInput.events({
  'submit form'(event){
    event.preventDefault();
    const text = event.target.text.value;
    if(text.trim().length > 0) {
      Meteor.call('lists.insert', text);
      event.target.text.value = '';
    }
  },
});