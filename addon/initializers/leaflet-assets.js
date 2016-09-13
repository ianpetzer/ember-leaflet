/* global L */

export function initialize( /* container, application */ ) {
  if (typeof L !== 'undefined') {
    L.Icon.Default.imagePath = '/assets/images';
  }

}

export default {
  name: 'leaflet-assets',
  initialize: initialize
};