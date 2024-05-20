/**
 * 由 Immer 提供的 draft 是一种特殊类型的对象，被称为 Proxy，它会记录你用它所进行的操作。
 * 这就是你能够随心所欲地直接修改对象的原因所在！
 * 从原理上说，Immer 会弄清楚 draft 对象的哪些部分被改变了，并会依照你的修改创建出一个全新的对象。 
 * 为什么在 React 中不推荐直接修改 state？
 * 1.调试：如果你使用 console.log 并且不直接修改 state，你之前日志中的 state 的值就不会被新的 state 变化所影响。这样你就可以清楚地看到两次渲染之间 state 的值发生了什么变化
 * 2.优化：React 常见的 优化策略 依赖于如果之前的 props 或者 state 的值和下一次相同就跳过渲染。如果你从未直接修改 state ，那么你就可以很快看到 state 是否发生了变化。如果 prevObj === obj，那么你就可以肯定这个对象内部并没有发生改变。
 * 3.新功能：我们正在构建的 React 的新功能依赖于 state 被 像快照一样看待 的理念。如果你直接修改 state 的历史版本，可能会影响你使用这些新功能。
 * 4.需求变更：有些应用功能在不出现任何修改的情况下会更容易实现，比如实现撤销/恢复、展示修改历史，或是允许用户把表单重置成某个之前的值。这是因为你可以把 state 之前的拷贝保存到内存中，并适时对其进行再次使用。如果一开始就用了直接修改 state 的方式，那么后面要实现这样的功能就会变得非常困难。
 * 5.更简单的实现：React 并不依赖于 mutation ，所以你不需要对对象进行任何特殊操作。它不需要像很多“响应式”的解决方案一样去劫持对象的属性、总是用代理把对象包裹起来，或者在初始化时做其他工作。这也是为什么 React 允许你把任何对象存放在 state 中——不管对象有多大——而不会造成有任何额外的性能或正确性问题的原因。
 */
import type { ChangeEvent } from 'react'
import { useImmer } from 'use-immer'

export default function UseImmerPage() {
  const [person, setPerson] = useImmer({
    name: "HTF",
    introduce: {
      age: "19"
    }
  })
  const handleNamChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson(draft => {
      draft.name = e.target.value
    })
  }
  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson(draft => {
      draft.introduce.age = e.target.value
    })
  }
  return (
    <>
      <label>
        name：
        <input type="text" value={person.name} onChange={handleNamChange} />
      </label>
      <label>
        age：
        <input type="text" value={person.introduce.age} onChange={handleAgeChange} />
      </label>
    </>
  )
}