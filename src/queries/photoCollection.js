import Marty from 'marty';

class PhotoCollectionQueries extends Marty.Queries {

  getAlbums() {
    this.app.photoCollectionApi.getAlbums().then((res) => {
      if (res.status === 200) {
        this.dispatch(this.app.photoCollectionActions.RECEIVE_ALBUMS, res.body);
      } else {
        this.dispatch(this.app.photoCollectionActions.RECEIVE_ALBUMS_FAILED);
      }
    }).catch((err) => this.dispatch(this.app.photoCollectionActions.RECEIVE_ALBUMS_FAILED, err));
  }
}

export default PhotoCollectionQueries;
