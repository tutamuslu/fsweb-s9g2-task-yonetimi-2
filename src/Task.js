import {formatDistanceToNow, differenceInDays} from "date-fns" 
import { tr } from "date-fns/locale";
import React from "react";

const Task = ({ taskObj, onComplete }) => {
  
  const distance = formatDistanceToNow(
    new Date(taskObj.deadline), {
      addSudffix: true,
      locale:tr
    }
  ) 

  const isDeadlineClose = differenceInDays(
    new Date(taskObj.deadline),
    new Date ()
  ) <=3;

  return (
    <div className="p-6 bg-[#fff] rounded leading-normal m-4 shadow-md">
      <h3 className="text-lg text-[#c8771a]">{taskObj.title}</h3>
      <div className="text-xs pt-1">son teslim: <span className={isDeadlineClose ? "bg-[#ffd9d4]" : "bg-[#d4d7ff]"}>{distance}</span></div>
      <p className="text-sm pt-2 py-0 pb-3 text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block py-1 px-3 text-sm mr-1 mb-2 rounded-3xl border border-solid border-[#ccc]  " key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
