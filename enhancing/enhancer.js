module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (isObject(item)) {
    if (item.enhancement < 20) {
      return { ...item, enhancement: (item.enhancement + 1) }
    } else {
      return { ...item, enhancement: 20 };
    };
  } else {
    throw ('Item must be an object');
  };
};

function fail(item) {
  if (isObject(item)) {
    if (item.enhancement < 15) {
      return { ...item, durability: (item.durability - 5) };
    } else if (item.enhancement === 15) {
      return { ...item, durability: (item.durability - 10) };
    } else if (item.enhancement >= 16) {
      return { ...item, durability: (item.durability - 10), enhancement: (item.enhancement - 1) };
    };
  } else {
    throw ('Item must be an object');
  };
};

function repair(item) {
  if (isObject(item)) {
    return { ...item, durability: 100 };
  } else {
    throw ('Item must be an object');
  };
};

function get(item) {
  if (isObject(item)) {
    if (item.enhancement === 0) {
      return { ...item };
    } else {
      return { ...item, name: `[+${item.enhancement}] ${item.name}` };
    };
  } else {
    throw ('Item must be an object');
  };
};

function isObject(item) {
  if (typeof(item) === "object" && item !== null && Array.isArray(item) === false) {
    return item;
  };
};