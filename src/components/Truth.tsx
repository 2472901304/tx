import React, {useState, useEffect} from 'react'
import {getTruth} from '../services/index'
import styles from './Truth.module.scss'

interface ProType {
    provinceName: string
    citys: any[],
    cityCnt: number
}

const Truth = ()=>{
    // 定义全国医院数据
    let [truth, setTruth] = useState([]);

    // 获取全国医院数据
    useEffect(()=>{
        getTruth().then((res:any)=>{
            console.log('res...', res);
            // res = res.data;
            // if(res.code == 0){
            //     setProvinces(res.args.rsp.provinces);
            // }
        })
    }, []);
    
    return <div className={styles.title}>
            <div className={styles.sectionTitle}>辟谣信息
                <div className={styles.hotzhuizhong}>
                    <div>
                        <span className={styles.timelineMore}>查看更多内容</span>
                    </div>
                </div>    
            </div>
    </div>
}


export default Truth
