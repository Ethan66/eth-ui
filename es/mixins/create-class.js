var ELEMENT = '--';

var join = function join(name, type) {
  return type ? name + ELEMENT + type : name;
};

var prefix = function prefix(name, extra) {
  if (typeof extra === 'string') {
    return join(name, extra);
  }

  if (Array.isArray(extra)) {
    return extra.map(function (item) {
      return prefix(name, item);
    });
  }

  var obj = {};
  Object.keys(extra).map(function (item) {
    if (item.includes('lnzi-common')) {
      obj[item] = extra[item];
      return;
    }

    obj[name + ELEMENT + item] = extra[item];
  });
  return obj;
};

export default {
  methods: {
    createClass: function createClass(type, extra) {
      var name = this.$options.name;

      if (type && typeof type !== 'string') {
        extra = type;
        type = '';
      }

      type = join(name, type);
      return extra ? [type, prefix(type, extra)] : type;
    }
  }
};