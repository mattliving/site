import Marty from 'marty';
import Constants from '../constants/constants';

class PhotoCollectionStore extends Marty.Store {
  constructor (options) {
    super(options);
    this.id = 'PhotoCollectionStore';
    this.state = {
      albums: []
    };
    this.handlers = {

    };
  }

  getAlbums () {
    return this.fetch({
      id: 'albums',
      locally: () => this.filter(this.state.albums),
      remotely: () => photoCollectionQueries.getAlbums()
    });
  }

  filter (albums) {
    return albums;
  }
}

export default PhotoCollectionStore;
