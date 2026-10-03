
import ToDoList from './components/to-do-list';
import UserGuide from "./components/userguide";

function App() {
  return (
    <div className="min-h-screen p-3 sm:p-6 bg-gray-100 flex justify-center bg-linear-to-br from-slate-600 to-slate-950">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 md:gap-6 items-start">
        <ToDoList />
        <UserGuide />
      </div>
    </div>
  );
}

export default App;
