<template>
<div class="gecmis">
    <p v-for="list in currentList" :key="list">{{list}}</p>
<p>{{mesaj}}</p>
    </div>
</template>
<script>

import {eventBus} from '../main'
export default {
    data(){
        return{
            currentList:[],
            mesaj:"Henüz içerik yok.."
        }
    },
    created(){
        eventBus.$on("currentAdded",(current)=>{
            this.currentList.push(current);
            this.mesaj=''
        });
        
    }
}
</script>