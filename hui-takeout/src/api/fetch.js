import axios from 'axios'
import querystring from 'querystring'

export default function fetch(url,data={},type='GET'){
    return new Promise((resolve,reject)=>{
        let promise
        if(type==='GET'){
            let dataStr=querystring.stringify(data)
            if (dataStr !== ''){
                url=url+'?'+dataStr
            }
            promise=axios.get(url)
        }else if(type==='POST'){
            promise=axios.post(url,data)
        }
            
        promise.then((res)=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}