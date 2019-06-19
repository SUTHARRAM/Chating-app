

const expect  = require('expect'); 

const {Users} = require('./users'); 

describe('Users', ()=>{

    var users; 

    beforeEach (()=>{
        users = new Users(); 
        users.users = [{
            id: '1', 
            name: 'vikas', 
            room: 'node course'
        },
        {
            id: '2', 
            name: 'roshan', 
            room: 'React course'
        },
        {
            id: '3', 
            name: 'guddu', 
            room: 'node course'
        }]; 
    }); 
    it('should add new user', ()=>{
        var users = new Users(); 
        var user = {
            id: '123', 
            name: 'Ram',
            room: 'The Office fans'
        }; 
        var resUser = users.addUser(user.id, user.name, user.room); 

        expect(users.users).toEqual([user]); 
        expect(resUser).toEqual(user); 
    });

    it('should return names for node course', ()=>{
        var userList = users.getUserList('node course'); 

        expect(userList).toEqual(['vikas','guddu']); 
    }); 

    it('should return names for react course', ()=>{
        var userList = users.getUserList('React course'); 

        expect(userList).toEqual(['roshan']); 
    }); 



    it('should find user', ()=>{

        let res = users.getUser('1');
        expect(res).toInclude({
            id: '1', 
            name: 'vikas', 
            room: 'node course'
        });  

    });  
    
    it('should not find a user', ()=>{
        var userId = '99'; 
        var user = users.getUser(userId); 
        expect(user).toNotExist();  
    }); 

    it('should remove a user', ()=>{
       
        var userId = '1'; 
        var user = users.removeUser(userId); 

        expect(user.id).toBe(userId); 
        expect(users.users.length).toBe(2);
    }); 

    it('should not remove user', ()=>{
        var userId = '99'; 
        var user = users.removeUser(userId); 

        expect(user).toNotExist(); 
        expect(users.users.length).toBe(3);
    }); 
}); 