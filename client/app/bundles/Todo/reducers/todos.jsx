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
        case 'TOGGLE_TODO':
            console.log( 'YOU TOGGLE ME!');
            return state.map( ( todo, index ) => {
                debugger;
                if( index === action.id ) {
                    return Object.assign( {}, todo, {
                        completed: !todo.completed 
                    }) 
                }

                return todo;
             });
        default:
        return state;
  }
};

export default todos;
