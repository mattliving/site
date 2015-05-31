import Marty from 'marty';
import Constants from '../constants/constants';

class ApplicationStore extends Marty.Store {
  constructor (options) {
    super(options);
    this.id = 'ApplicationStore';
    this.state = {
      dependencies: {}
    };
    this.handlers = {
      setDependencyReady: Constants.SET_DEPENDENCY_READY
    };
  }

  setDependencyReady (dependencyName, bool) {
    this.state.dependencies[dependencyName] = bool;
    this.hasChanged();
  }
}

export default ApplicationStore;