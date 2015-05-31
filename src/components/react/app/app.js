'use strict';

import Marty from 'Marty';
import React from 'react/addons';
import {RouteHandler} from 'react-router';

require('./normalize.css');
require('./app.less');

let App = React.createClass({

  componentWillMount () {
    window.fbAsyncInit = () => {
      FB.init({
        appId: '1658745387693458',
        version : 'v2.3',
        xfbml : true
      });
      this.app.applicationActions.setDependencyReady('fb-sdk', true);
    };
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },

  render () {
    return (
      <div className='container'>
        <div
          className='fb-like'
          data-share='true'
          data-width='450'
          data-show-faces='true'>
        </div>
        <RouteHandler/>
      </div>
    );
  }
});

export default Marty.createContainer(App, {
  listenTo: 'applicationStore',
  pending () {
    return this.done({
      loading: true
    });
  }
});
