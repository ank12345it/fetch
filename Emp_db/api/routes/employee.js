const express =require('express')
const Employee=require('../../models/employee')

module.exports=function(router){
    //GET:the 12 newest stand-up meeting notes
    router.get('/employee',function(req,res){res.send("Heelllooooooooo")})
    
router.get('/employee/:name',function(req,res){
 
    let name1=req.params.name;
    Employee.find({"name":name1},function(err,data){
        if(err)return console.log(err);
        match=data;
        if(data.length==0)
        {
            res.send("employee not found");
        }
        else
        {console.log(data);
            res.json(data);
         }
        
    })
    
})

router.post('/employee',function(req,res){
    let note = new Employee(req.body)
    note.save(function(err,note){
        if(err){
            return res.status(400).json(err)
        }
        res.status(200).json(note)
    })

})
}




