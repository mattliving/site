import Marty from 'marty';
import when from 'when';

class PhotoCollectionApi extends Marty.HttpStateSource {

  get baseUrl () {
    let appState = this.app.applicationStore.getState();
    return 'https://graph.facebook.com/' + appState.graphApiVersion + '/' + appState.graphApiVersion;
  }

  getAlbums () {
    return this.request({ url: '?fields=albums{name,cover_photo,location,place}' }).then((res) => {console.log(res); return res.body;});
  }

  request (options) {

  }
}

export default PhotoCollectionApi;
