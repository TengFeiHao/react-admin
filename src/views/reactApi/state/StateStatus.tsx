/**
 * 尽管这些代码相对与最初的命令式的例子来说更长，但是却更加健壮。
 * 将所有的交互变为 state 的改变，可以让你避免之后引入新的视图状态后导致现有 state 被破坏。
 * 同时也使你在不必改变交互逻辑的情况下，更改每个状态对应的 UI。
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
