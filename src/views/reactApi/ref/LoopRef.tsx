import { useRef, useState, forwardRef, useImperativeHandle, InputHTMLAttributes } from "react";

/**
 * forwardRef 对于组件上绑定ref获取不到DOM，react是不允许组件间，包括组件内部获取DOM的，不续组件允许获取才可以获取
 * useImperativeHandle 命令句柄 只暴露DOM上的一部分API，其余不生效
 * 
 * 在 React 中，state 更新是排队进行的。通常，这就是你想要的。但是，在这个示例中会导致问题，因为 setTodos 不会立即更新 DOM。因此，当你将列表滚动到最后一个元素时，尚未添加待办事项。这就是为什么滚动总是“落后”一项的原因。
 * 要解决此问题，你可以强制 React 同步更新（“刷新”）DOM。 为此，从 react-dom 导入 flushSync 并将 state 更新包裹 到 flushSync 调用中：
 * example:
  flushSync(() => {
    setTodos([ ...todos, newTodo]);
  });
  listRef.current.lastChild.scrollIntoView();
 *
 * Refs 是一种脱围机制。你应该只在你必须“跳出 React”时使用它们。这方面的常见示例包括管理焦点、滚动位置或调用 React 未暴露的浏览器 API。
 */

interface MyInputHandle {
  focus: () => void;
}

const MyInput = forwardRef<MyInputHandle, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  const realInputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => ({
      // 只暴露 focus，没有别的
      focus() {
        realInputRef.current?.focus();
      },
    }));
  return <input {...props} ref={realInputRef} />;
});

type Cat = string;
interface CatListProps {
  catList: Cat[];
}

export default function CatFriends() {
  const itemsRef = useRef<Map<Cat, HTMLLIElement>>(new Map());
  const [catList] = useState<Cat[]>(setupCatList);
  const myInputRef = useRef<MyInputHandle>(null)

  function onFocus() {
    myInputRef.current?.focus()
  }

  function scrollToCat(cat: Cat) {
    const node = itemsRef.current.get(cat);
    node?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <MyInput ref={myInputRef} />
      <button onClick={onFocus}>获取焦点</button>
      <nav>
        <button onClick={() => scrollToCat(catList[0])}>Tom</button>
        <button onClick={() => scrollToCat(catList[5])}>Maru</button>
        <button onClick={() => scrollToCat(catList[9])}>Jellylorum</button>
      </nav>
      <div>
        <ul
          style={{
            width: "200px",
            display: "flex",
            overflowX: "auto",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {catList.map((cat) => (
            <li
              key={cat}
              ref={(node) => {
                if (node) {
                  itemsRef.current.set(cat, node);
                } else {
                  itemsRef.current.delete(cat);
                }
              }}
            >
              <img src={cat} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function setupCatList(): CatListProps["catList"] {
  const catList = [];
  for (let i = 0; i < 10; i++) {
    catList.push("https://loremflickr.com/320/240/cat?lock=" + i);
  }

  return catList;
}
