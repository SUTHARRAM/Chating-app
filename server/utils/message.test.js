var expect = require('expect'); 
var {generateMessage} = require('./message');

describe('generateMessage', ()=>{
    it('should generate correct message object', ()=>{
        var from = 'jen'; 
        var text = 'some messages'; 

        var res = generateMessage(from, text); 

        expect(res.createdAt).toBeA('number'); 
        expect(res).toInclude({
            from: 'jen', 
            text: 'some messages'
        }); 
    }); 
}); 