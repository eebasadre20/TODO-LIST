import AddTodoForm from '../components/AddTodoForm';

import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActionCreators';

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: ( text ) => {
            dispatch(addTodo( text )) 
        }
    }
}

export default connect( null, mapDispatchToProps )(AddTodoForm)
