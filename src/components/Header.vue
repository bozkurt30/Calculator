<template>
    
    <header>
        <div class="container">
            <nav class="navbar clearfix">
               
                <div id="nav-links">
                    <ul>
                        <li class="nav-item" @click="selectedPage='appGecmis'">
                            <a href="#" class="nav-link active">Geçmiş</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" @click="selectedPage='appBellek'">Bellek</a>
                        </li>
                    </ul>
                    <hr>
                    <component :is="selectedPage">

                    </component>
                </div>
            </nav>

        </div>
    </header>

</template>
<script>
import Gecmis from './Gecmis'
import Bellek from './Bellek'
export default {
    components:{
        appGecmis:Gecmis,
        appBellek:Bellek
    },
    data(){
        return{
            selectedPage:''
        }
    }
}
</script>
<style scoped>

nav {
  width: 100%;
  padding-top: 2.3rem;
  padding-bottom: 2.3rem;
}

#nav-links {
      float: right;
    margin-top: -3rem;
}

.nav-item:active {
    border-bottom: 2px solid black;
}

#nav-links .nav-link {
  float: left;
  margin: .4rem;
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  line-height: 2;
  font-weight: 800;
}

#nav-links .nav-item {
  display: inline-block;
  letter-spacing: .1rem;
}
</style>