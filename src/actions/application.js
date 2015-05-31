import Marty from 'marty';
import Constants from '../constants/constants';

class ApplicationActions extends Marty.ActionCreators {
  setDependencyReady (dependencyName, bool) {
    this.dispatch(Constants.SET_DEPENDENCY_READY, dependencyName, bool);
  }
}

export default ApplicationActions;