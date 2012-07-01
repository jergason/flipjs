(function () {
  "use strict";
  
  var assert = require('assert')
    , flip = require('../flip')
    ;

  describe('dıʃɟ', function () {
    it('takes a string and flips it', function () {
      var input = 'A hill of beans is a wonderful thing.'
        , output = flip(input)
        ;

      assert.equal(output, '˙ƃuıɥʇ ʃnɟɹǝpuoʍ ɐ sı suɐǝq ɟo ʃʃıɥ ∀', 'Did not flip correctly!');
    });

    it('returns undefined if the thing passed in is not a string', function () {
      var input = ['1', '2']
        , output = flip(input)
        ;
      assert.equal(output, undefined, 'Non-string inputs should return undefined.');
    });

    describe('When flipping a string with the flip guy', function () {
      var flippedGuy = '/( . 0 .\\)'
        ;

      it('flips the flip guy by himself', function () {
        var toFlip = '(╯°□°）╯'
          , output
          ;

        output = flip(toFlip);
        assert.equal(output, flippedGuy, 'Flip-guy should be flipped as well.');
      });

      it('flips the flip guy in a sentence', function () {
        var toFlip =  'A hill of beans (╯°□°）╯ is a wonderful thing.'
          , flipped = '˙ƃuıɥʇ ʃnɟɹǝpuoʍ ɐ sı ' + flippedGuy + ' suɐǝq ɟo ʃʃıɥ ∀'
          , output = flip(toFlip)
          ;
          assert.equal(flipped, output, 'Should work in a string');
      });
    });
  });
}());
