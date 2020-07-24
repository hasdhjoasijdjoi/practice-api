const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');



const { UserModel } = require('./User.js');


// 생성
router.post('/', (req, res) => {
    UserModel.create({
        name: req.body.name,
        age: req.body.age
    }, (err, user) => {
        if(err) {
            console.log(err);
            return res.status(500).send("User 생서 실패");  
        } 
        console.log(req.body);
        res.status(200).send(user);
    })
})


// 전체 조회
router.get('/', (req, res) => {
    UserModel.find({}, (err, users) => {
        if(err) return res.status(500).send("User 전체 조회 실패");
        res.status(200).send(users);
        console.log(users);
    })
})

// 부분 조회
router.get('/:id', (req, res) => {
    UserModel.findById(req.params.id, (err, user) => {
        if (err) return res.status(500).send("User 조회 실패");
        if (!user) return res.status(404).send("User 없음");
        res.status(200).send(user);
        console.log(req.params);
    })
})

// 삭제
router.delete('/:id', (req,res) => {
    UserModel.findByIdAndRemove(req.params.id, (err,user) => {
        if(err) return res.status(500).send("User 삭제 실패");
        res.status(200).send("User" + user.name + "삭제됨.");
    });
});

// 수정
router.put('/:id', (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) =>{
        if (err) return res.status(500).send("User 수정 실패");
        res.status(200).send(user);
    }) 
})

module.exports = router;

