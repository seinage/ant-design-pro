import {request} from '@umijs/max';

type Res<T = null> = {
  code: number
  data: T
  message: string | null
}
type ResList<T> = Res<{ records: T, total: number }>
export async function queryEquipList(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
    unbound?: boolean[];
  },
  options?: { [key: string]: any }
) {
  return request<ResList<API.EquipCenter>>('api', {
    method: 'GET',
    ...(options || {})
  })
}

