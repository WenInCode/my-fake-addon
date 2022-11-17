import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FakeButton extends Component {
  @action
  handleClick() {
    console.log('You clicked this button, didn\'t you?');
  }
}
