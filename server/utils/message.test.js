var expect = require('expect'); 
var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', ()=>{
    it('should generate correct location object', ()=>{
        var from = 'me'; 
        var res = generateLocationMessage(from, 1, 1); 
        
        expect(res).toInclude({
            url: 'https://www.google.com/maps?q=1,1'
        }); 
    }); 
}); 