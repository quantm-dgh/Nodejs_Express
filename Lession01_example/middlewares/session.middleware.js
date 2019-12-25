var shortid =require('shortid'); 
module.exports= function(req, res, next){
    if(!req.cookies.sessionId){
        var sessionId = shortid.generate();
        res.cookie('sessionId',sessionId );
        db.get('sessions').push({
            id: sessionId   
        }).write();    
    }
    next(); 
};