var expect = require('expect');

var {generateMessage} = require('./message');

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