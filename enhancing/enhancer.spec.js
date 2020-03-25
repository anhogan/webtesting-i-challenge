const enhancer = require('./enhancer.js');

describe('Repair Item', () => {
  it.todo('Resets durability to 100', () => {

  });

  it.todo('Returns item name and enhancement without change', () => {

  });

  it('Throws error if item is not an object', () => {
    expect(() => enhancer.repair(undefined)).toThrow();
    expect(() => enhancer.repair(null)).toThrow();
    expect(() => enhancer.repair(NaN)).toThrow();
    expect(() => enhancer.repair(['Item Name', 50, 15])).toThrow();
    expect(() => enhancer.repair("Name, Durability, Enhancement")).toThrow();
    expect(() => enhancer.repair(50)).toThrow();
  });

  it('Throws an error if item does not contain name, durability, or enhancement', () => {
    expect(() => enhancer.repair({ name: 'Item Name' })).toThrow();
    expect(() => enhancer.repair({ durability: 50 })).toThrow();
    expect(() => enhancer.repair({ enhancement: 10 })).toThrow();
    expect(() => enhancer.repair({ name: 'Item Name', durability: 50 })).toThrow();
    expect(() => enhancer.repair({ name: 'Item Name', enhancement: 10 })).toThrow();
    expect(() => enhancer.repair({ durability: 50, enhancement: 10 })).toThrow();
  });
});

describe('Enhancement Success', () => {
  it.todo('Adds one to enhancement', () => {

  });

  it.todo('Prevents enhancement from going over 20', () => {

  });

  it.todo('Returns item name and durability without change', () => {

  });

  it('Throws error if item is not an object', () => {
    expect(() => enhancer.succeed(undefined)).toThrow();
    expect(() => enhancer.succeed(null)).toThrow();
    expect(() => enhancer.succeed(NaN)).toThrow();
    expect(() => enhancer.succeed(['Item Name', 50, 15])).toThrow();
    expect(() => enhancer.succeed("Name, Durability, Enhancement")).toThrow();
    expect(() => enhancer.succeed(50)).toThrow();
  });

  it('Throws an error if item does not contain name, durability, or enhancement', () => {
    expect(() => enhancer.succeed({ name: 'Item Name' })).toThrow();
    expect(() => enhancer.succeed({ durability: 50 })).toThrow();
    expect(() => enhancer.succeed({ enhancement: 10 })).toThrow();
    expect(() => enhancer.succeed({ name: 'Item Name', durability: 50 })).toThrow();
    expect(() => enhancer.succeed({ name: 'Item Name', enhancement: 10 })).toThrow();
    expect(() => enhancer.succeed({ durability: 50, enhancement: 10 })).toThrow();
  });
});

describe('Enhancement Failure', () => {
  it.todo('Decreases durability by 5', () => {

  });

  it.todo('Decreases durability by 10 when enhancement is 15', () => {

  });

  it.todo('Decreases durability by 10 when enhancement is 16 or more', () => {

  });

  it.todo('Decreases enhancement by 1', () => {

  });

  it.todo('Returns item name and enhancement without change', () => {

  });

  it.todo('Returns item name without change', () => {

  });

  it('Throws error if item is not an object', () => {
    expect(() => enhancer.fail(undefined)).toThrow();
    expect(() => enhancer.fail(null)).toThrow();
    expect(() => enhancer.fail(NaN)).toThrow();
    expect(() => enhancer.fail(['Item Name', 50, 15])).toThrow();
    expect(() => enhancer.fail("Name, Durability, Enhancement")).toThrow();
    expect(() => enhancer.fail(50)).toThrow();
  });

  it('Throws an error if item does not contain name, durability, or enhancement', () => {
    expect(() => enhancer.fail({ name: 'Item Name' })).toThrow();
    expect(() => enhancer.fail({ durability: 50 })).toThrow();
    expect(() => enhancer.fail({ enhancement: 10 })).toThrow();
    expect(() => enhancer.fail({ name: 'Item Name', durability: 50 })).toThrow();
    expect(() => enhancer.fail({ name: 'Item Name', enhancement: 10 })).toThrow();
    expect(() => enhancer.fail({ durability: 50, enhancement: 10 })).toThrow();
  });
});

describe('Get Item', () => {
  it.todo('Returns item without change when enhancement is 0', () => {

  });

  it.todo('Returns item durability and enhancement without change', () => {

  });

  it.todo('Updates item name', () => {

  });

  it('Throws error if item is not an object', () => {
    expect(() => enhancer.get(undefined)).toThrow();
    expect(() => enhancer.get(null)).toThrow();
    expect(() => enhancer.get(NaN)).toThrow();
    expect(() => enhancer.get(['Item Name', 50, 15])).toThrow();
    expect(() => enhancer.get("Name, Durability, Enhancement")).toThrow();
    expect(() => enhancer.get(50)).toThrow();
  });

  it('Throws an error if item does not contain name, durability, or enhancement', () => {
    expect(() => enhancer.get({ name: 'Item Name' })).toThrow();
    expect(() => enhancer.get({ durability: 50 })).toThrow();
    expect(() => enhancer.get({ enhancement: 10 })).toThrow();
    expect(() => enhancer.get({ name: 'Item Name', durability: 50 })).toThrow();
    expect(() => enhancer.get({ name: 'Item Name', enhancement: 10 })).toThrow();
    expect(() => enhancer.get({ durability: 50, enhancement: 10 })).toThrow();
  });
});