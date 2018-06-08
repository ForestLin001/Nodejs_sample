import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

Template.listHead.events({
  'change .lists-type'(event, instance){
    const index = event.target.selectedIndex;
    Session.set('listType', index);
  }
});