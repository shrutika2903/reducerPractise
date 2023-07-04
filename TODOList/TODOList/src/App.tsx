import {useState} from "react";
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {
 const [todo, setTodo] = useState<string>("");
 const [task, setTask] = useState<Todo[]>([]);
 
 const handleAdd = (e: React.FormEvent) => {
  e.preventDefault();
  if (todo) {
    setTask([...task, {id: Date.now(), todo, isDone: false}]);
    setTodo("");
  }

 }
  return (
    <>
      <div className='App'>
        <span className='heading'>Task</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      </div>
    </>
  )
}

export default App
