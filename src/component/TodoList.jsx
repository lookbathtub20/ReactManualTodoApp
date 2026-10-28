import Button from './Button'
import InputField from './InputField'

function TodoList({
	ariaLabel,
	todoList,
	editingTodoId,
	editedTitle,
	onEdit,
	onEditedTitleChange,
	onSaveEdit,
	onCancelEdit,
	onMarkAsCompleted,
	onDelete,
}) {
	return (
		<table border={1} aria-label={ariaLabel}>
			<thead>
				<tr>
					<th>Sl No.</th>
					<th>Todo Title</th>
					<th>Is Completed</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{todoList.map((todoItem, index) => (
					<tr key={todoItem.id}>
						<td>{index + 1}</td>
						<td>
							{editingTodoId === todoItem.id
								? <input type="text" aria-label={`Edit ${todoItem.title}`} value={editedTitle} onChange={onEditedTitleChange} />
								: todoItem.title}
						</td>
						<td>{todoItem.isCompleted ? 'Yes' : 'No'}</td>
						<td>
							{editingTodoId === todoItem.id
								? <>
										<Button label="Save" disabled={!editedTitle.trim()} onClick={onSaveEdit} />
										<Button label="Cancel" onClick={onCancelEdit} />
									</>
								: <>
										<Button label="Edit" onClick={() => onEdit(todoItem)} />
										{!todoItem.isCompleted && (
											<Button label="Mark as completed" type="success" onClick={() => onMarkAsCompleted(todoItem.id)} />
										)}
										<Button label="Delete" type="danger" onClick={() => onDelete(todoItem.id)} />
									</>}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default TodoList
