import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';

function TodosActions({ resetTodos, deleteCompletedTodos }) {
  return (
    <>
      <Button title="Reset ToDo's" onCLick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title="Clear completed Todo's" onCLick={deleteCompletedTodos}>
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodosActions;
