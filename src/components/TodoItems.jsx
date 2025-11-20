import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function TodoItems({ id, isDone, content, handleDelete, handleIsDone }) {
  const [checked, setChecked] = useState(false);
  const isMountOver = useRef(false);

  useEffect(() => {
    if (!isMountOver.current) {
      isMountOver.current = true;
      return;
    } else {
      handleIsDone(id, checked);
    }
  }, [checked]);

  function onCheck() {
    setChecked(checked == false ? true : false);
  }
  function onDelete() {
    handleDelete(id);
  }
  return (
    <div>
      <input checked={checked} onChange={onCheck} type="checkbox" />
      <div>{content}</div>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
}

export default TodoItems;
