const enhancer = require('./enhancer.js');

describe('Repair Item', () => {
  it('Resets durability to 100', () => {
    const item = {
      name: "Item Name",
      durability: 50,
      enhancement: 10
    };

    const repair = enhancer.repair(item);

    expect(repair.name).toBe(item.name);
    expect(repair.durability).toBe(100);
    expect(repair.enhancement).toBe(item.enhancement);
  });

  it('Throws error if item is not an object', () => {
    expect(() => enhancer.repair(undefined)).toThrow();
    expect(() => enhancer.repair(null)).toThrow();
    expect(() => enhancer.repair(NaN)).toThrow();
    expect(() => enhancer.repair(['Item Name', 50, 15])).toThrow();
    expect(() => enhancer.repair("Name, Durability, Enhancement")).toThrow();
    expect(() => enhancer.repair(50)).toThrow();
  });

  // it('Throws an error if item does not contain name, durability, or enhancement', () => {
  //   expect(() => enhancer.repair({ name: 'Item Name' })).toThrow();
  //   expect(() => enhancer.repair({ durability: 50 })).toThrow();
  //   expect(() => enhancer.repair({ enhancement: 10 })).toThrow();
  //   expect(() => enhancer.repair({ name: 'Item Name', durability: 50 })).toThrow();
  //   expect(() => enhancer.repair({ name: 'Item Name', enhancement: 10 })).toThrow();
  //   expect(() => enhancer.repair({ durability: 50, enhancement: 10 })).toThrow();
  // });

  // it('Throws an error if item name is not a string', () => {
  //   expect(() => enhancer.repair({ name: 10, durability: 50, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.repair({ name: null, durability: 50, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.repair({ name: NaN, durability: 50, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.repair({ name: undefined, durability: 50, enhancement: 10 })).toThrow();
  // });

  // it('Throws an error if durability and enhancement are not integers', () => {
  //   expect(() => enhancer.repair({ name: 'Item Name', durability: '50', enhancement: 10 })).toThrow();
  //   expect(() => enhancer.repair({ name: 'Item Name', durability: 50, enhancement: '10' })).toThrow();
  //   expect(() => enhancer.repair({ name: 'Item Name', durability: '50', enhancement: '10' })).toThrow();
  //   expect(() => enhancer.repair({ name: 'Item Name', durability: null, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.repair({ name: 'Item Name', durability: 50, enhancement: null })).toThrow();
  //   expect(() => enhancer.repair({ name: 'Item Name', durability: NaN, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.repair({ name: 'Item Name', durability: 50, enhancement: NaN })).toThrow();
  //   expect(() => enhancer.repair({ name: 'Item Name', durability: undefined, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.repair({ name: 'Item Name', durability: 50, enhancement: undefined })).toThrow();
  // });
});

describe('Enhancement Success', () => {
  it('Adds one to enhancement', () => {
    const item = {
      name: "Item Name",
      durability: 50,
      enhancement: 10
    };

    const succeed = enhancer.succeed(item);

    expect(succeed.name).toBe(item.name);
    expect(succeed.durability).toBe(item.durability);
    expect(succeed.enhancement).toBe(11);
  });

  it('Prevents enhancement from going over 20', () => {
    const item = {
      name: "Item Name",
      durability: 50,
      enhancement: 20
    };

    const succeed = enhancer.succeed(item);

    expect(succeed.name).toBe(item.name);
    expect(succeed.durability).toBe(item.durability);
    expect(succeed.enhancement).toBe(20);
  });

  it('Throws error if item is not an object', () => {
    expect(() => enhancer.succeed(undefined)).toThrowError('Item must be an object');
    expect(() => enhancer.succeed(null)).toThrowError('Item must be an object');
    expect(() => enhancer.succeed(NaN)).toThrowError('Item must be an object');
    expect(() => enhancer.succeed(['Item Name', 50, 15])).toThrowError('Item must be an object');
    expect(() => enhancer.succeed("Name, Durability, Enhancement")).toThrowError('Item must be an object');
    expect(() => enhancer.succeed(50)).toThrowError('Item must be an object');
  });

  // it('Throws an error if item does not contain name, durability, or enhancement', () => {
  //   expect(() => enhancer.succeed({ name: 'Item Name' })).toThrow();
  //   expect(() => enhancer.succeed({ durability: 50 })).toThrow();
  //   expect(() => enhancer.succeed({ enhancement: 10 })).toThrow();
  //   expect(() => enhancer.succeed({ name: 'Item Name', durability: 50 })).toThrow();
  //   expect(() => enhancer.succeed({ name: 'Item Name', enhancement: 10 })).toThrow();
  //   expect(() => enhancer.succeed({ durability: 50, enhancement: 10 })).toThrow();
  // });

  // it('Throws an error if item name is not a string', () => {
  //   expect(() => enhancer.succeed({ name: 10, durability: 50, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.succeed({ name: null, durability: 50, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.succeed({ name: NaN, durability: 50, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.succeed({ name: undefined, durability: 50, enhancement: 10 })).toThrow();
  // });

  // it('Throws an error if durability and enhancement are not integers', () => {
  //   expect(() => enhancer.succeed({ name: 'Item Name', durability: '50', enhancement: 10 })).toThrow();
  //   expect(() => enhancer.succeed({ name: 'Item Name', durability: 50, enhancement: '10' })).toThrow();
  //   expect(() => enhancer.succeed({ name: 'Item Name', durability: '50', enhancement: '10' })).toThrow();
  //   expect(() => enhancer.succeed({ name: 'Item Name', durability: null, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.succeed({ name: 'Item Name', durability: 50, enhancement: null })).toThrow();
  //   expect(() => enhancer.succeed({ name: 'Item Name', durability: NaN, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.succeed({ name: 'Item Name', durability: 50, enhancement: NaN })).toThrow();
  //   expect(() => enhancer.succeed({ name: 'Item Name', durability: undefined, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.succeed({ name: 'Item Name', durability: 50, enhancement: undefined })).toThrow();
  // });
});

describe('Enhancement Failure', () => {
  it('Decreases durability by 5', () => {
    const item = {
      name: "Item Name",
      durability: 50,
      enhancement: 10
    };

    const fail = enhancer.fail(item);

    expect(fail.name).toBe(item.name);
    expect(fail.durability).toBe(45);
    expect(fail.enhancement).toBe(item.enhancement);
  });

  it('Decreases durability by 10 when enhancement is 15', () => {
    const item = {
      name: "Item Name",
      durability: 50,
      enhancement: 15
    };

    const fail = enhancer.fail(item);

    expect(fail.name).toBe(item.name);
    expect(fail.durability).toBe(40);
    expect(fail.enhancement).toBe(item.enhancement);
  });

  it('Decreases durability by 10 and enhancement by 1 when enhancement is 16 or more', () => {
    const item = {
      name: "Item Name",
      durability: 50,
      enhancement: 18
    };

    const fail = enhancer.fail(item);

    expect(fail.name).toBe(item.name);
    expect(fail.durability).toBe(40);
    expect(fail.enhancement).toBe(17);
  });

  it('Throws error if item is not an object', () => {
    expect(() => enhancer.fail(undefined)).toThrow();
    expect(() => enhancer.fail(null)).toThrow();
    expect(() => enhancer.fail(NaN)).toThrow();
    expect(() => enhancer.fail(['Item Name', 50, 15])).toThrow();
    expect(() => enhancer.fail("Name, Durability, Enhancement")).toThrow();
    expect(() => enhancer.fail(50)).toThrow();
  });

  // it('Throws an error if item does not contain name, durability, or enhancement', () => {
  //   expect(() => enhancer.fail({ name: 'Item Name' })).toThrow();
  //   expect(() => enhancer.fail({ durability: 50 })).toThrow();
  //   expect(() => enhancer.fail({ enhancement: 10 })).toThrow();
  //   expect(() => enhancer.fail({ name: 'Item Name', durability: 50 })).toThrow();
  //   expect(() => enhancer.fail({ name: 'Item Name', enhancement: 10 })).toThrow();
  //   expect(() => enhancer.fail({ durability: 50, enhancement: 10 })).toThrow();
  // });

  // it('Throws an error if item name is not a string', () => {
  //   expect(() => enhancer.fail({ name: 10, durability: 50, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.fail({ name: null, durability: 50, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.fail({ name: NaN, durability: 50, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.fail({ name: undefined, durability: 50, enhancement: 10 })).toThrow();
  // });

  // it('Throws an error if durability and enhancement are not integers', () => {
  //   expect(() => enhancer.fail({ name: 'Item Name', durability: '50', enhancement: 10 })).toThrow();
  //   expect(() => enhancer.fail({ name: 'Item Name', durability: 50, enhancement: '10' })).toThrow();
  //   expect(() => enhancer.fail({ name: 'Item Name', durability: '50', enhancement: '10' })).toThrow();
  //   expect(() => enhancer.fail({ name: 'Item Name', durability: null, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.fail({ name: 'Item Name', durability: 50, enhancement: null })).toThrow();
  //   expect(() => enhancer.fail({ name: 'Item Name', durability: NaN, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.fail({ name: 'Item Name', durability: 50, enhancement: NaN })).toThrow();
  //   expect(() => enhancer.fail({ name: 'Item Name', durability: undefined, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.fail({ name: 'Item Name', durability: 50, enhancement: undefined })).toThrow();
  // });
});

describe('Get Item', () => {
  it('Returns item without change when enhancement is 0', () => {
    const item = {
      name: "Item Name",
      durability: 50,
      enhancement: 0
    };

    const get = enhancer.get(item);

    expect(get.name).toBe(item.name);
    expect(get.durability).toBe(item.durability);
    expect(get.enhancement).toBe(item.enhancement);
  });

  it('Updates item name', () => {
    const item = {
      name: "Item Name",
      durability: 50,
      enhancement: 5
    };

    const get = enhancer.get(item);

    expect(get.name).toBe(`[+${item.enhancement}] ${item.name}`);
    expect(get.durability).toBe(item.durability);
    expect(get.enhancement).toBe(item.enhancement);
  });

  it('Throws error if item is not an object', () => {
    expect(() => enhancer.get(undefined)).toThrow();
    expect(() => enhancer.get(null)).toThrow();
    expect(() => enhancer.get(NaN)).toThrow();
    expect(() => enhancer.get(['Item Name', 50, 15])).toThrow();
    expect(() => enhancer.get("Name, Durability, Enhancement")).toThrow();
    expect(() => enhancer.get(50)).toThrow();
  });

  // it('Throws an error if item does not contain name, durability, or enhancement', () => {
  //   expect(() => enhancer.get({ name: 'Item Name' })).toThrow();
  //   expect(() => enhancer.get({ durability: 50 })).toThrow();
  //   expect(() => enhancer.get({ enhancement: 10 })).toThrow();
  //   expect(() => enhancer.get({ name: 'Item Name', durability: 50 })).toThrow();
  //   expect(() => enhancer.get({ name: 'Item Name', enhancement: 10 })).toThrow();
  //   expect(() => enhancer.get({ durability: 50, enhancement: 10 })).toThrow();
  // });

  // it('Throws an error if item name is not a string', () => {
  //   expect(() => enhancer.get({ name: 10, durability: 50, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.get({ name: null, durability: 50, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.get({ name: NaN, durability: 50, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.get({ name: undefined, durability: 50, enhancement: 10 })).toThrow();
  // });

  // it('Throws an error if durability and enhancement are not integers', () => {
  //   expect(() => enhancer.get({ name: 'Item Name', durability: '50', enhancement: 10 })).toThrow();
  //   expect(() => enhancer.get({ name: 'Item Name', durability: 50, enhancement: '10' })).toThrow();
  //   expect(() => enhancer.get({ name: 'Item Name', durability: '50', enhancement: '10' })).toThrow();
  //   expect(() => enhancer.get({ name: 'Item Name', durability: null, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.get({ name: 'Item Name', durability: 50, enhancement: null })).toThrow();
  //   expect(() => enhancer.get({ name: 'Item Name', durability: NaN, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.get({ name: 'Item Name', durability: 50, enhancement: NaN })).toThrow();
  //   expect(() => enhancer.get({ name: 'Item Name', durability: undefined, enhancement: 10 })).toThrow();
  //   expect(() => enhancer.get({ name: 'Item Name', durability: 50, enhancement: undefined })).toThrow();
  // });
});