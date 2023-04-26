/*
 * @Description 设备数据
 * created by cuijie on 2023/4/13
*/

import {useCallback, useEffect, useState} from "react";
import taiShanApi from "@/services/tai-shan-api";

export default () => {
  const [counter, setCounter] = useState<number>(0)

  const increment = useCallback(() => setCounter(c => c + 1), [])
  const decrement = useCallback(() => setCounter(c => c - 1), [])

  useEffect(()=>{
    taiShanApi.equipCenterApi.queryEquipList({pageSize:10,current:1}).then(({code,data})=>{
    console.log("-> data", data);
    })
  },[])

  return {counter, increment, decrement}
}
