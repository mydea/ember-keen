import AjaxService from 'ember-ajax/services/ajax';

/**
 * A service extending ember-ajax to include Keen.IO specific connection settings.
 *
 * @namespace EmberKeen.Service
 * @class KeenAjax
 * @extends EmberAjax.Service.Ajax
 * @public
 */
export default AjaxService.extend({

  /**
   * The base URL for the Keen.IO API.
   *
   * @property host
   * @type {String}
   * @override
   * @public
   */
  host: 'https://api.keen.io',

  /**
   * The namespace for API requests.
   *
   * @property namespace
   * @type {String}
   * @override
   * @public
   */
  namespace: '3.0/projects',

  /**
   * Override the post method to always use JSON content type.
   *
   * @method post
   * @param {string} url
   * @param {Object} options
   * @override
   * @returns {PromiseObject}
   * @public
   */
  post(url, options) {
    options = options || {};

    if (typeof options.dataType === 'undefined') {
      options.dataType = 'json';
    }

    if (typeof options.contentType === 'undefined') {
      options.contentType = 'application/json; charset=utf-8';
    }

    if (typeof options.data === 'object' && options.contentType === 'application/json; charset=utf-8') {
      options.data = JSON.stringify(options.data);
    }

    return this._super(url, options);
  }

});