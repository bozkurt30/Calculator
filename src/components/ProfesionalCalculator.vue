<template>
    <div class="calculator container">
        <div class="display">{{current || '0' }}</div>
        <div @click="shift" class="btn">Shift</div>
        <div @click="sin" class="btn">sin</div>
        <div @click="cos" class="btn">cos</div>
        <div @click="tan" class="btn">tan</div>
        <div @click="log" class="btn">log</div> 
        <div @click="karesi" class="btn">x2</div>
        <div @click="kup" class="btn">x3</div>
        <div @click="xy" class="btn">xʸ</div>
        <div @click="ex" class="btn">ex</div>
        <div @click="ln" class="btn">ln2</div>
        <div @click="payda" class="btn">1/x</div>
        <div @click="faktoriyel" class="btn">x!</div>
        <div @click="xpoli" class="btn">xPy</div>
        <div @click="sign" class="btn">+/-</div>
          <div @click="xC" class="btn">xCy</div>
        <div @click="clear" class="btn">C</div>     
        <div @click="divide" class="btn operator">/</div>
        <div @click="times" class="btn operator">x</div>
        <div @click="pi" class="btn operator">pi</div>
        <div @click="del" class="btn" style="color:red">sil</div>
        <div @click="append('7')" class="btn">7</div>
        <div @click="append('8')" class="btn">8</div>
        <div @click="append('9')" class="btn">9</div>
        <div @click="karekok" class="btn operator">Kök</div> 
        <div @click="minus" class="btn operator">-</div>
        <div @click="append('4')" class="btn">4</div>
        <div @click="append('5')" class="btn">5</div>
        <div @click="append('6')" class="btn">6</div>
        <div @click="add" class="btn operator">+</div>
        <div @click="percent" class="btn operator">%</div>
        <div @click="append('1')" class="btn">1</div>
        <div @click="append('2')" class="btn">2</div>
        <div @click="append('3')" class="btn">3</div>
        <div @click="add" class="btn operator">+</div>
        <div @click="mutlak" class="btn operator">| x |</div>
        <div @click="append('0')" class="btn zero">0</div>
        <div @click="dot" class="btn">.</div>
        <div @click="parantez" class="btn operator">( )</div>
        <div @click="equal" class="btn operator">=</div>
    </div>
</template>
<script> 
export default {
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
        xpoli(){

        },
        xC(){

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
                this.current='';
                this.operatorClicked=false
            }
            this.current= `${this.current}${number}`;
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
            this.operator=(a,b)=>a/b;
            this.setProvious();
        },
        times(){
            this.operator=(a,b)=>a*b;
           this.setProvious();
        },
        minus(){
            this.operator=(a,b)=>b-a;
           this.setProvious();
        },
        add(){
            this.operator=(a,b)=>a+b;
           this.setProvious();
        },
        equal(){
            this.current=this.operator(parseFloat(this.current),parseFloat(this.previous));
            this.previous=null;
        }
       

    }
}
</script>
<style scoped>
.container{
    text-align: center
}
.calculator{
    margin: 0 auto;
    width: 400px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: minmax(50px,auto);
    cursor: pointer;
}
.display{
    padding: 5px;
    font-size: 40px;
    grid-column: 1/6;
    background-color: #333;
    color: white;
    cursor:cell;
}
.zero{
    grid-column: 1/3;
}
.btn{
    background-color: #f2f2f2;
    border: 1px solid #999;
    padding: 19px;
}
.btn:hover{
    background-color:lightgray
}
.operator{
    background-color: orange;
    color: white;
}
.operator:hover{
    background-color: darkgoldenrod
}
</style>