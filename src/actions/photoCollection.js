import Marty from 'marty';
import Constants from '../constants/constants';

class PhotoCollectionActionCreators extends Marty.ActionCreators {
  setPhotosForUser (userId) {
    this.dispatch(Constants.SET_PHOTOS_FOR_USER, userId);
  }
}

export default PhotoCollectionActionCreators;