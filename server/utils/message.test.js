var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
      //call generate message with 2 values
      var response = generateMessage('Jonathan', 'test message');
      expect(response.from).toBe('Jonathan');
      expect(response.text).toBe('test message');
      expect(response.createdAt).toBeA('number');
      //assert from match value passed in
    });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Jonathan';
    var latitude = 34.0499262;
    var longitude = -84.31776060000001;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    // pass in from, latitude, longitude
    var response = generateLocationMessage(from, latitude, longitude);
    // assert from is correct
    expect(response.createdAt).toBeA('number');
    expect(response).toInclude({from, url});
  });
});