```vue
<script setup>
import {reactive, onMounted} from 'vue'
import {MyButton} from '../../wc/lit/my-button.js';


const state = reactive({
  users : []
})

const url = "https://jsonplaceholder.typicode.com/users/";

const loadUsers = async () => {
  if(state.users.length === 0){
    const response = await fetch(url);
    const jsonData = await response.json();
    state.users = [...jsonData]
  } 
}
</script>

<template>
  <div class="app">
      <div class="content">
        
        Vue component + webcomponent button 
       
        <my-button 
          text="load users" 
          @click="loadUsers"
        >
        </my-button>
        
        <ul>
          <li v-for="user in state.users" :key="user.id">
            <span>{{ user.name }}</span>
            -
            <span>{{ user.website }}</span>
            <hr>
          </li>
        </ul> 
      </div>
      
    </div>
</template>

<style scoped>

.content{
  flex-grow: 1;
  padding: 1em;
}
.aside{
  margin-left: 1em;
}
span{
  padding: .5em;
}

</style>
```