


 export const STATUS_ALL='all'
 export const STATUS_ACTIVE='active'
 export const STATUS_COMPLETED='completed'

const state = {
  todos:[],
  status:'all'
}
const getters = {
	getTodos:state=>state.todos,
	getSearch:state=>state.status
}
const actions = {
   addTodo({commit},todo){
   	commit('addTodo',todo)
   },
   toggleTodo({commit},{id,toggleIsCompleted}){
   	commit('toggleTodo',{id,toggleIsCompleted})
   },
   editTodo({commit},{newTodo,id}){
   	commit('editTodo',{newTodo,id})
   },
   deleteTodo({commit},id){
   	commit('deleteTodo',id)
   },
   searchUpdate({commit},status){
   	commit('searchUpdate',status)
   },
   clearComplete({commit}){
   	commit('clearComplete')
   }
}
const mutations = {
   addTodo: (state, todo) => {state.todos.push(todo)},
   toggleTodo:(state,{id,toggleIsCompleted}) => state.todos.find(todo=>todo.id==id).isCompleted=toggleIsCompleted,
   editTodo:(state,{newTodo,id})=>state.todos.find(todo=>todo.id==id).todo=newTodo,
   deleteTodo:(state,id)=>state.todos=state.todos.filter(todo=>todo.id!==id),
   searchUpdate:(state,status)=>state.status=status,
   clearComplete:(state)=>{
   	const todos=state.todos.filter(todo=>!todo.isCompleted ? todo :false)
   	state.todos=todos
   }
}

export default { state, getters, actions, mutations }
