import Marty from 'marty';
import Constants from '../constants/constants';

class PhotoCollectionStore extends Marty.Store {
  constructor (options) {
    super(options);
    this.id = 'PhotoCollectionStore';
    this.state = {
      users: {}
    };
    this.handlers = {
      setAlbumsForUser: Constants.RECEIVE_ALBUMS_FOR_USER
    };
  }

  setAlbumsForUser (userId, albums) {
    this.state.users[userId].albums = albums;
    this.hasChanged();
  }
}

export default PhotoCollectionStore;
