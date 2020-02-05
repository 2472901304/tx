import React, {useState, useEffect} from 'react'
import {getTrace} from '../services/index'

interface TraceType{
    time: string,
    create_time: string,
    source: string,
    desc: string,
    title: string
}

const Trace = ()=>{
    // 定义最新进展
    let [trace, setTrace] = useState<TraceType[]>([]);

    // 获取最新进展数据
    useEffect(()=>{
        getTrace().then((res:any)=>{
            let data = JSON.parse(res.data) as TraceType[];
            data.sort((a, b)=>{
                if (a.time > b.time){
                    return -1;
                }else{
                    return 1;
                }
            })
            setTrace(data);
        }).catch(e=>{
            console.log('e...', e);
        })
    }, []);
    
    console.log('trace...', trace);
    return <>
        <h3>最新进展</h3>
    </>
}


export default Trace
