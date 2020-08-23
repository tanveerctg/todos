<template>
  <q-page class="flex justify-center">
  	<div>
  	<div class="text-h2 text-center q-pa-lg">todos</div>
    <q-card flat bordered class="my-card" style="width:30rem;">
      <q-card-section style="padding-top:0;padding-bottom:0px;">
       		<q-input placeholder="What Needs To Be Done?" placeholder-color="red" style="width:100%;font-size:1.2rem;color:grey;" v-on:keyup.enter="addTodoHandler" :dense="dense" borderless />
      </q-card-section>

      <div v-if="getTodos.length>0">
      <q-separator inset />
	      <q-card-section class="q-pt-none" style="padding-top:0;padding-bottom:0px;">
		    <div  v-for="todo in todos" :key="todo.id" class="flex">
		    	<div v-if="!todo.isCompleted" style="width:35px;" @click="toggleTodoHandler({id:todo.id,completed:todo.isCompleted})"></div>	
		    	<img v-else src="../icon/checkbox.svg" class="toggle"  @click="toggleTodoHandler({id:todo.id,completed:todo.isCompleted})"/>
				<div style="position:relative;flex:1;" class="items-center input">
					<q-input :value="todo.todo" style="width:100%;" v-on:keyup.enter="editTodoHandler($event,todo.id)" :dense="denseTrue" borderless
	 				:style="{ textDecoration: todo.isCompleted ? 'line-through' : 'inherit'}"
					/>
					<q-btn round color="grey-7" icon="close" style="position:absolute;right:0;top:50%;transform:translateY(-50%);font-size:.4rem;" class="delete" @click="deleteTodoHandler(todo.id)"/>
				</div>
			</div>		
	      </q-card-section>
      <q-separator inset />

      <q-card-section style="position:relative;margin:0 16px 16px 16px;font-size:12px;color:grey;">
        <span style="position:absolute;left:0; cursor:pointer;">{{getTodos.filter(todo=>todo.isCompleted==false).length}} Items Left</span>
        <div style="position:absolute;left:50%;transform:translateX(-50%);">
          <span style="border:1px solid grey;padding:1px 4px;border-radius:4px; cursor:pointer;" @click="searchUpdateHandler(all)">All</span>
          <span style="margin:0 16px;cursor:pointer;" @click="searchUpdateHandler(active)">Active</span>
          <span style="cursor:pointer;" @click="searchUpdateHandler(completed)">Completed</span>
        </div>
        <span style="position:absolute;right:0;cursor:pointer;"  @click="clearCompleteHandler()">Clear Completed</span>
      </q-card-section>

      </div>
    </q-card>
    </div>
  </q-page>

</template>

<script>

import { mapActions } from 'vuex'
import { mapGetters} from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import {STATUS_ALL,STATUS_ACTIVE,STATUS_COMPLETED} from '../store/module/todos.js'


function filteredTodos(allTodos,status){
	let todos;

	if(status==STATUS_ALL){
		todos=allTodos;
	}
    if(status==STATUS_ACTIVE){
		todos= allTodos.filter(todo=>todo.isCompleted==false);
	}
	if(status==STATUS_COMPLETED){
		todos= allTodos.filter(todo=>todo.isCompleted==true);

	}
	return todos;
}

export default {
  name: 'PageIndex',
  data () {
    return {
      dense:false,
      denseTrue:true,
      checked:[],
      all:STATUS_ALL,
	  active:STATUS_ACTIVE,
	  completed:STATUS_COMPLETED
    }
  },
  methods:{
  	...mapActions(['addTodo','toggleTodo','editTodo','deleteTodo','searchUpdate','clearComplete']),  
  	openCategoryForm(){
  		console.log('clicked')
  	},
  	addTodoHandler(e){
  		this.addTodo({id:uuidv4(),todo:e.target.value,isCompleted:false})
  		e.target.value=''
  	},
  	checkboxHandler(){
  		console.log('clicked')
  	},
  	toggleTodoHandler({id,completed}){
  		const toggleIsCompleted=!completed;
  		this.toggleTodo({id,toggleIsCompleted})
  	},
  	editTodoHandler(e,id){
  	  const newTodo=e.target.value;
  	  this.editTodo({newTodo,id})
  	  console.log(e.target.value)
  	},
  	deleteTodoHandler(id){
  		this.deleteTodo(id)
  	},
  	searchUpdateHandler(status){
  		this.searchUpdate(status)
  	},
  	clearCompleteHandler(){
  		this.clearComplete()
  	}
  },
  computed:{
    ...mapGetters([
      'getTodos','getSearch'
    ]),
    todos(){
    	return filteredTodos(this.getTodos,this.getSearch)
    }
   }
}
</script>
<style>
	.delete{
		display:none;
	}
	.input:hover .delete{
		display:block;
	}
	.toggle{
		height:18px;
		margin:auto 10px auto 10px;
		cursor:pointer;
	}
</style>
