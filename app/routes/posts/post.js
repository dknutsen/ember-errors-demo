import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model(params) {
    return hash({
      post: this.store.findRecord('post', params.post_id)
    });
  },

  actions: {
    error() {
      console.log('caught a wild error');
      return true;
    }
  }
});
