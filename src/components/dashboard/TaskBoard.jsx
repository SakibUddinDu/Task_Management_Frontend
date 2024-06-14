import CompletedTodos from "./CompletedTodos";
import OnGoingTodos from "./OnGoingTodos";
import Todos from "./Todos";

function TaskBoard() {
  return (
    <div className="flex flex-col text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200"> 
      <div className="px-10 mt-6">
        <h1 className="text-2xl font-bold">Task Board</h1>
      </div>
      <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
        <Todos/>
        <OnGoingTodos/>
        <CompletedTodos/>
        
        {/* <div className="flex-shrink-0 w-6"></div> */}
      </div>
    </div>
  );
}

export default TaskBoard;
