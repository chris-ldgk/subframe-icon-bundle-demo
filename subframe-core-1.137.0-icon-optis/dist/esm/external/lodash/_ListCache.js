import { _ as _listCacheClear } from './_listCacheClear.js';
import { _ as _listCacheDelete } from './_listCacheDelete.js';
import { _ as _listCacheGet } from './_listCacheGet.js';
import { _ as _listCacheHas } from './_listCacheHas.js';
import { _ as _listCacheSet } from './_listCacheSet.js';

var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

var _ListCache = ListCache;

export { _ListCache as _ };
