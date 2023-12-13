const express = require("express");
const cors = require("cors");
const app = express();



// 解析表单请求体 application/json
app.use(express.json());
// 解析表单请求体 application/x-www-form-urlencoded，extended: true 允许包含任何数据类型
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const datas = [
    { username: 'xiaobai', password: '123456' },
    { username: 'xiaohei', password: '234567' },
];

app.post("/login", (req, res) => {
    let resData;
    let { username, password } = req.body;
    // if(!username || !password){
    //     resData = {message:"用户名或密码为空，请检查",code:202}
    //     res.json(resData)
    //     return;
    // }
    let result = datas.find((item) => {
        return item.username === username && item.password === password;
    })
    if(result){
        resData = ({message:"登录成功",code:200})
    }else{
        resData = ({message:"用户名与密码不匹配，请重新输入",code:201})
    }
    res.json(resData)
})
app.listen(3000,()=>{
    console.log("服务器已启动，端口3000");
})