
var assert = require('assert');
var mod = require('./exo2Conditions.js');

it("Est Pair ?", function () {
  try
  {
    assert.equal( typeof(mod.test1), "boolean" );
    assert.equal( mod.test1, false );
    assert.equal( typeof(mod.test2), "boolean" );
    assert.equal( mod.test2, true );
  }
  catch (error)
  {
    printMessage('Attention', 'revoyez la déclaration de votre fonction majorite');
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
