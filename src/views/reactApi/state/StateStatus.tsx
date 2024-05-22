/**
 * 尽管这些代码相对与最初的命令式的例子来说更长，但是却更加健壮。
 * 将所有的交互变为 state 的改变，可以让你避免之后引入新的视图状态后导致现有 state 被破坏。
 * 同时也使你在不必改变交互逻辑的情况下，更改每个状态对应的 UI。
 * ==============
 * 选择 State 结构：
 * 构建 state 的原则：
 * 当你编写一个存有 state 的组件时，你需要选择使用多少个 state 变量以及它们都是怎样的数据格式。尽管选择次优的 state 结构下也可以编写正确的程序，但有几个原则可以指导您做出更好的决策：
 * 1.合并关联的 state。如果你总是同时更新两个或更多的 state 变量，请考虑将它们合并为一个单独的 state 变量。
 * 2.避免互相矛盾的 state。当 state 结构中存在多个相互矛盾或“不一致”的 state 时，你就可能为此会留下隐患。应尽量避免这种情况。
 * 3.避免冗余的 state。如果你能在渲染期间从组件的 props 或其现有的 state 变量中计算出一些信息，则不应将这些信息放入该组件的 state 中。
 * 4.避免重复的 state。当同一数据在多个 state 变量之间或在多个嵌套对象中重复时，这会很难保持它们同步。应尽可能减少重复。
 * 5.避免深度嵌套的 state。深度分层的 state 更新起来不是很方便。如果可能的话，最好以扁平化方式构建 state。
 * 这些原则背后的目标是 使 state 易于更新而不引入错误。从 state 中删除冗余和重复数据有助于确保所有部分保持同步。这类似于数据库工程师想要 “规范化”数据库结构，以减少出现错误的机会。用爱因斯坦的话说，“让你的状态尽可能简单，但不要过于简单。”
 */
import { useState } from 'react';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  const handleSubmit:React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err instanceof Error ? err : { message: '请求失败', name: "-1" });
    }
  }

  const handleTextareaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}
type SubmitFormHandler =  (answer: string) => Promise<string | never>
const submitForm: SubmitFormHandler = (answer: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve("success");
      }
    }, 1500);
  });
}
