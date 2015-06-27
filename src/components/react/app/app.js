'use strict';

import Marty from 'Marty';
import React from 'react/addons';
import Header from '../header/header';
import Timeline from '../timeline/timeline';
import PhotoCollection from '../photoCollection/photoCollection';
import {RouteHandler} from 'react-router';
import events from '../../../data/events.js';

require('./normalize.css');
require('./app.less');

let App = React.createClass({

  componentWillMount () {
    // window.fbAsyncInit = () => {
    //   let appState = this.app.applicationStore.getState();
    //   FB.init({
    //     appId: appState.fbAppId,
    //     version: appState.fbGraphApiVersion,
    //     status: true,
    //     xfbml: false
    //   });
    //   this.app.applicationActions.setDependencyReady('fb-sdk', true);
    // };
    // (function(d, s, id){
    //   var js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) {return;}
    //   js = d.createElement(s); js.id = id;
    //   js.src = '//connect.facebook.net/en_US/sdk.js';
    //   fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'));
  },

  render () {
    return (
      <div className='container'>
        <Header title='Mattliving' subtitle='software engineer'></Header>
        <Timeline events={events}></Timeline>
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
