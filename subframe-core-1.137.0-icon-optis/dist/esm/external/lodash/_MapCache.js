import { _ as _mapCacheClear } from './_mapCacheClear.js';
import { _ as _mapCacheDelete } from './_mapCacheDelete.js';
import { _ as _mapCacheGet } from './_mapCacheGet.js';
import { _ as _mapCacheHas } from './_mapCacheHas.js';
import { _ as _mapCacheSet } from './_mapCacheSet.js';

var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

var _MapCache = MapCache;

export { _MapCache as _ };
