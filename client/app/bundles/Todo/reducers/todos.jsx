const todos = (state = [], action) => {
    switch (action.type) { 
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'ADD_TODO_SUCCESS':
            console.log( 'SUCCESS TODO!' );
            return state;
        default:
        return state;
  }
};

export default todos;
