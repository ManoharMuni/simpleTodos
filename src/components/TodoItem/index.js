// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoObject, deleteItem} = props
  const {title, id} = todoObject
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="listItem">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
