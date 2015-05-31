import Marty from 'marty';
import Constants from '../constants/constants';

class MapStore extends Marty.Store {
  constructor (options) {
    super(options);
    this.id = 'MapStore';
    this.state = {

    };
    this.handlers = {
      setDependencyReady: Constants.SET_DEPENDENCY_READY
    };
  }

  setDependencyReady (dependencyName, bool) {

  }
}

export default MapStore;