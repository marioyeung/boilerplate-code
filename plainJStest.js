// require npm modules
var expect = require('chai').expect;
var sinon = require('sinon');

describe('JavaScript Mocha Boilerplate Test', function() {
  it('boolean variable', function () {
    expect(var).to.be.true; // or
    expect(var).to.be.false;
  });

  it('immutable variable', function () {
    expect(var).to.equal(val); // or 
    expect(var).to.not.equal(val);
  });
  
  it('mutable object', function () {
    expect(var).to.eql(arr); // or
    expect(var).to.not.eql(arr);
  });
  
  it('array', function () {
    expect(arr).to.include(item); // or
    expect(arr).to.not.include(item);
  });
  
  it('', function () {
    expect(var).to.exist; // or
    expect(var).to.not.exist;
  });
  
  it('test data type', function () {
    expect(var).to.be.an('undefined'); // or
    expect(var).to.be.a('function'); // or
    expect(arr).to.be.an.instanceof(Array); // or
    expect(func).to.be.an.instanceof(Function); // or many more ...
  });
  
  it('function invocation', function () {
    var callback = sinon.spy();
    var closureSpy = closure(callback);
    closureSpy(); // simulate function call
    
    expect(callback).to.have.been.calledOnce; // or
    expect(callback).to.have.been.calledTwice; // or many more ...
  });
})
