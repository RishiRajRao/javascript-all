class LRUCache {
  constructor(capacity) {
    this.cache = [];
    this.capacity = capacity;
  }

  isExistIndex(key) {
    return this.cache.findIndex((item) => item.key === key);
  }

  get(key) {
    const idx = this.isExistIndex(key);
    if (idx !== -1) {
      const [item] = this.cache.splice(idx, 1);
      this.cache.unshift(item);
      return item.value;
    } else {
      return -1;
    }
  }

  put(item) {
    const idx = this.isExistIndex(item.key);
    if (idx !== -1) {
      this.cache.splice(idx, 1);
    } else if (this.capacity === this.cache.length) {
      this.cache.pop();
    }

    this.cache.unshift(item);
  }
}

const cache = new LRUCache(3);

cache.put({ key: 1, value: 10 });
cache.put({ key: 2, value: 20 });
cache.put({ key: 3, value: 30 });

console.log("cache1=", cache);
console.log(cache.get(2));
console.log("cache2=", cache);
