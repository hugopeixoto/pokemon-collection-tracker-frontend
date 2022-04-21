import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class LoginController extends Controller {
  @service auth;

  @action
  login(e) {
    e.preventDefault();

    this.auth.password = e.target.elements['password'].value;
  }
}
