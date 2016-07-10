// require npm modules
var expect = require('chai').expect;
var sinon = require('sinon');

describe('JavaScript Mocha Boilerplate Test', function() {
  it('tests a boolean variable', function () {
    expect(<var>).to.be.true; // or
    expect(<var>).to.be.false;
  });

  it('tests an immutable variable', function () {
    expect(<var>).to.equal(val); // or 
    expect(<var>).to.not.equal(val);
  });
  
  it('tests a mutable object', function () {
    expect(<var>).to.eql(<array>); // or
    expect(<var>).to.not.eql(<array>);
  });
  
  it('tests an array', function () {
    expect(<array>).to.include(<item>); // or
    expect(<array>).to.not.include(<item>);
  });
  
  it('tests an existence of a variable', function () {
    expect(<var>).to.exist; // or
    expect(<var>).to.not.exist;
  });
  
  it('tests the data type of a variable', function () {
    expect(<var>).to.be.an('undefined'); // or
    expect(<var>).to.be.a('function'); // or
    expect(<array>).to.be.an.instanceof(Array); // or
    expect(<function>).to.be.an.instanceof(Function); // or many more ...
  });
  
  it('tests the numbers of function invocation', function () {
    var callback = sinon.spy();
    var closureSpy = closure(callback);
    closureSpy(); // simulate function call
    
    expect(callback).to.have.been.calledOnce; // or
    expect(callback).to.have.been.calledTwice; // or many more ...
  });
})
