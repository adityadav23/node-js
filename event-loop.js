const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async()=>{
    try{
        const first = await readFile('./content/first.txt','utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result.txt', `This is ${first},,, ${second}`, {flag:'a'})
        console.log(first, second)
    }
    catch(error){
        console.log(error)
    }
}
start()

/*
Approach 1 using promises
*/
// getText('./content/first.txt')
// .then((result)=> console.log(result))
// .catch((err)=>console.log(err))

/*
Approach 2
// */
// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{

//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                     reject(err)
//             }else{
//                     resolve(data)
//             }
//         })
//     })
// }