<template>
  <q-page class="flex justify-center">
  	<div>
  	<div class="text-h2 text-center q-pa-lg">todos</div>
    <q-card flat bordered class="my-card" style="width:30rem;">
      <q-card-section style="padding-top:0;padding-bottom:0px;">
       		<q-input placeholder="What Needs To Be Done?" placeholder-color="red" style="width:100%;font-size:1.2rem;color:grey;" v-on:keyup.enter="addTodoHandler" :dense="dense" borderless />
      </q-card-section>
      <q-separator inset />

      <q-card-section class="q-pt-none" style="padding-top:0;padding-bottom:0px;">
	    <div class="flex">
	    	<div style="background:red;width:35px;"></div>	
	    	<img src="../icon/checkbox.svg" style="height:18px;margin:auto 10px auto 10px;"/>
			<div style="position:relative;flex:1;" class="items-center input">
				<q-input value="todoaaa" style="width:100%;" v-on:keyup.enter="addTodoHandler" :dense="denseTrue" borderless/>
				<q-btn round color="grey-7" icon="close" size="xs" style="position:absolute;right:0;top:50%;transform:translateY(-50%);" class="delete" @click="deleteHandler"/>
			</div>
		</div>
	    <div class="flex">
	    	<div style="background:red;width:35px;"></div>	
	    	<img src="../icon/checkbox.svg" style="height:18px;margin:auto 10px auto 10px;"/>
			<div style="position:relative;flex:1;" class="items-center input">
				<q-input value="todoaaa" style="width:100%;" v-on:keyup.enter="addTodoHandler" :dense="denseTrue" borderless/>
				<q-btn round color="grey-7" icon="close" size="xs" style="position:absolute;right:0;top:50%;transform:translateY(-50%);" class="delete" @click="deleteHandler"/>
			</div>
		</div>		
      </q-card-section>
      <q-separator inset />
      <q-card-section style="position:relative;margin:0 16px 16px 16px;font-size:12px;color:grey;">
        <span style="position:absolute;left:0; cursor:pointer;">2 Items Left</span>
        <div style="position:absolute;left:50%;transform:translateX(-50%);">
          <span style="border:1px solid grey;padding:1px 4px;border-radius:4px; cursor:pointer;">All</span>
          <span style="margin:0 16px;cursor:pointer;">Active</span>
          <span style="cursor:pointer;">Completed</span>
        </div>
        <span style="position:absolute;right:0;cursor:pointer;">Clear Completed</span>
      </q-card-section>
    </q-card>
    </div>
  </q-page>

</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      dense:false,
      denseTrue:true,
      checked:[]
    }
  },
  methods:{
  	openCategoryForm(){
  		console.log('clicked')
  	},
  	deleteHandler(){
  		console.log('delete')
  	},
  	addTodoHandler(e){
  		console.log(e.target.value)
  	},
  	checkboxHandler(){
  		console.log('clicked')
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
</style>
