import React,{useState, useEffect} from 'react';
import './App.css';
// 引入模块
import Trace from '../components/Trace'
import Hospital from '../components/Hospital';
import Truth from '../components/Truth';
import Tip from '../components/Tip';

const App = () => {
  return (
    <div className="App">
      {/* 疫情的最新进展 */}
      <Trace/>
      {/* 辟谣信息 */}
      <Truth/>
      {/* 医疗救治医院查询 */}
      <Hospital/>
      {/* 防护须知 */}
      <Tip/>
    </div>
  );
}

export default App;
