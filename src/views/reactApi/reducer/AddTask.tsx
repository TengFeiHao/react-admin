import { useState } from 'react';
import { useTasksDispatch } from './TasksDispatchContext';
let nextId = 3;

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch()!;
  return (
    <>
      <input
        placeholder="添加任务"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          task: {
            id: nextId++,
            text: text,
            done: false
          }
        });
      }}>添加</button>
      <table border="{1}">
        <thead>
          <tr>
            <th></th>
            <th>避免使用 (会改变原始数组)</th>
            <th>推荐使用 (会返回一个新数组）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>添加元素</td>
            <td>push，unshift</td>
            <td>concat，[...arr] 展开语法</td>
          </tr>
          <tr>
            <td>删除元素</td>
            <td>pop，shift，splice</td>
            <td>filter，slice</td>
          </tr>
          <tr>
            <td>替换元素</td>
            <td>splice，arr[i] = ... 赋值</td>
            <td>map</td>
          </tr>
          <tr>
            <td>排序</td>
            <td>reverse，sort</td>
            <td>先将数组复制一份</td>
          </tr>
          <tr>或者，你可以使用 Immer ，这样你便可以使用表格中的所有方法了。</tr>
        </tbody>
      </table>
    </>
  );
}
