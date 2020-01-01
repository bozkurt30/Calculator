<template>
<div class="container">
    <div class="left">
 <div id="icon">
                   <li class="nav-item">
                            <a href="#" class="nav-link text-uppercase nav-icon">
                                <i class="fas fa-align-justify"></i>
                            </a> 
                        </li>
                        <h3>Bilimsel</h3>
                </div>
                <div class="row"><span>{{current || '0'}}</span></div>
         
        
<div class="small-container">
      <div class="display">{{current || '0' }}</div>
      <div class="btnBellek btnDHF">
        <div class="btnM">DEG</div>
        <div class="btnM">HYP</div>
        <div class="btnM">F-E+</div>
        </div>
      <div class="btnBellek">
        <div class="btnM">MC</div>
        <div class="btnM">MR</div>
        <div class="btnM">M+</div>
        <div class="btnM">M-</div>
        <div class="btnM">MS</div>
        </div>
    <div class="calculator">
        <div @click="karesi" class="btn">x²</div>
        <div @click="xy" class="btn">xʸ</div>
        <div @click="sin" class="btn">sin</div>
        <div @click="cos" class="btn">cos</div>
        <div @click="tan" class="btn">tan</div>
        <div @click="clear" class="btn">CE</div>
        <div @click="clear" class="btn">C</div>
        <div @click="del" class="btn" style="color:red">sil</div>
        <div @click="divide" class="btn">/</div>
        <div @click="kup" class="btn">x³</div>
        <div @click="karekok" class="btn">y√x</div>
        <div @click="sin" class="btn">sin­-1</div>
        <div @click="cos" class="btn">cos-1</div>
        <div @click="tan" class="btn">tan-1</div>
        <div @click="append('7')" class="btn operator">7</div>
        <div @click="append('8')" class="btn operator">8</div>
        <div @click="append('9')" class="btn operator">9</div>
        <div @click="times" class="btn">x</div>
        <div @click="karekok" class="btn">2√x</div>
        <div @click="xy" class="btn">10ʸ</div>
        <div @click="log" class="btn">log</div>
        <div @click="add" class="btn">Exp</div>
        <div @click="add" class="btn">Mod</div>
        <div @click="append('4')" class="btn operator">4</div>
        <div @click="append('5')" class="btn operator">5</div>
        <div @click="append('6')" class="btn operator">6</div>
        <div @click="minus" class="btn">-</div>
        <div @click="payda" class="btn">1/x</div>
        <div @click="ex" class="btn">eʸ</div>
        <div @click="ln" class="btn">ln</div>
        <div @click="shift" class="btn">dms</div>
        <div @click="shift" class="btn">deg</div>
        <div @click="append('1')" class="btn operator">1</div>
        <div @click="append('2')" class="btn operator">2</div>
        <div @click="append('3')" class="btn operator">3</div>
        <div @click="add" class="btn">+</div>
        <div @click="add" class="btn">2nd</div>
        <div @click="pi" class="btn">π</div>
        <div @click="faktoriyel" class="btn">n!</div>
        <div @click="parantez" class="btn">(</div>
        <div @click="parantez" class="btn">)</div>
        <div @click="sign" class="btn">+/-</div>
        <div @click="append('0')" class="btn operator">0</div>
        <div @click="dot" class="btn">,</div>
        <div @click="equal" class="btn equal">=</div>

    </div>
    </div>
    </div>
    <div class="right">
         
    </div>
    </div>
</template>
<script> 
import Header from'./Header'
import GEcmis from './Gecmis'
import {eventBus} from '../main'
export default {
    components:{
        appHeader:Header,
        appGecmis:GEcmis
    },
    data(){
        return{
            current:'',
            previous:null,
            operator:null,
            operatorClicked:false,
            piSayisi:Math.PI
        }
    },
    methods:{
        shift(){

        },
        sin(){
            this.operator=(a)=>Math.sin(a);
            this.setProvious();
        },
        cos(){
            this.operator=(a)=>Math.cos(a);
            this.setProvious();
        },
        tan(){
            this.operator=(a)=>Math.tan(a);
            this.setProvious();
        },
        log(){
             this.operator=(a)=>Math.log10(a);
            this.setProvious();
        },
        karesi(){
            this.operator=(a)=>a*a;
            this.setProvious();
        },
        kup(){
            this.operator=(a)=>a*a*a;
            this.setProvious();
        },
        xy(){
            this.operator=(a,b)=> Math.pow(b,a)
            this.setProvious();
        },
        ex(){
             this.operator=(a)=>Math.exp(a);
            this.setProvious();
        },
        ln(){
             this.operator=(a)=>Math.LN2;
            this.setProvious();
        },
        payda(){
            this.operator=(a)=>1/a;
            this.setProvious();
        },
        faktoriyel(){
          
        },
        pi(){
            this.current=this.piSayisi;
             this.operator=(a)=>Math.PI*a;
             this.setProvious();
        },
        del(){
            this.current=this.current.substring(0,this.current.length - 1);
            this.setProvious();
        },
        karekok(){
            this.operator=(a)=>Math.sqrt(a);
            this.setProvious();
        },
        mutlak(){
            this.operator=(a)=>Math.abs(a);
            this.setProvious();
        },
        parantez(){
         scrip
        },
        clear(){
            this.current=''
        },
        sign(){//eksi artı yapmak içn -12 yada +12 gibi
            this.current=this.current.charAt(0)==='-' ? this.current.slice(1) : `-${this.current}`
        },
        percent(){
            this.current = `${parseFloat(this.current)/100}`
        },
        append(number){
            if(this.operatorClicked){
                this.current;
                this.operatorClicked=false
            }
            this.current= `${this.current}${number}`;
            eventBus.$emit("added",this.append);
        },
        dot(){
            if(this.current.indexOf('.')===-1){
                this.append('.');
            }
        },
        setProvious(){
             this.previous=this.current;
             this.operatorClicked=true;
        },
        divide(){
            this.append('/');
            this.operator=(a,b)=>a/b;
            this.setProvious();
        },
        times(){
            this.append('*');
            this.operator=(a,b)=>a*b;
           this.setProvious();
        },
        minus(){
            this.append('-');
            this.operator=(a,b)=>a-b;
           this.setProvious();
        },
        add(){
            this.append('+');
              this.operator=(a,b)=>a+b;
              this.setProvious();
        },
        equal(){
            this.current=this.operator(parseFloat(this.current),parseFloat(this.previous));
            this.previous=null;
            eventBus.$emit("currentAdded",this.current);
        }
       

    }
}
</script>
<style scoped>
.small-container{
    width: 900px;
}
#icon{
    float: left;
    padding-left: 20px
}
#icon li{
    float: left;
    display: grid;
    padding-top: 20px
}
#icon h3{
    float: left;
    padding: 10px;
    padding-top: 0
}
.container {
  width: 1166px;
  margin-left: auto;
  margin-right: auto;
  padding-left: .4rem;
  padding-right: .4rem;
}
html{
    font-size: 10px;
}
.btnDHF{
    padding-right: 20px
}
.btnBellek .btnM{
    float: left;
    padding: 7px 34px;
}
.btnBellek .btnM:hover{
    background-color:lightgray;
    border: 0.1px solid #555;
    transition: background-color 2s;
    cursor: pointer;
}
.btnBellek{
    display: table
}
.left{
    width: 70%;
    float: left;
}
.right{
    width: 29%;
    float: right;
}
.row{
    float: right;
    margin-right: -50px;
}
.calculator{
    width: 4rem;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: minmax(50px,auto);
    cursor: pointer;
}
.display{
    font-size: 40px;
    grid-column: 1/6;
    color: black;
    font-weight: bold;
    border: none;
    cursor: cell;
    padding: 2rem;
    text-align: end;
}
.btn{
    background-color: #f2f2f2;
    opacity: 0.9;
    padding: 1.1rem;
    width: 60px;
    margin: 0.8px
}
.btn:hover,.operator:hover{
    background-color:lightgray;
    background-image:linear-gradient(lightgray,white) ;
    border: 0.2px solid #555;
    transition: background-color 2s;
}
.operator{
    background-color: white;
    color: black;
    font-weight: bold;
    font-size: 18px
}
</style>