<template>
<div>
    <div class="header">
        <div class="theme-switch">
            <v-btn>
                <v-icon> {{lightBulb}} </v-icon>
            </v-btn>
        </div>
        <ul class="icon-menu">
            <li class="icon-box" v-for="item in navItems" :key="item.id" ref="listRef"  @mouseover="handleHover(item)" @mouseout="handleMouseOut(item)">
            <router-link :to="item.route">
                <h4 :class=" { 'show-name': item.isHovered } " > {{item.name}} </h4>
                <v-icon class="menu-icon" color="#fff"> {{ item.icon }} </v-icon>
            </router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>

    import { mdiHome, mdiAccount, mdiBriefcase, mdiEmailNewsletter, mdiLightbulbOnOutline } from '@mdi/js'
    
export default {
    name: "Header",
    data(){
        return {
            navItems: [
                {id: 0, name: 'Home', icon: mdiHome, route:'/' ,isHovered: false}, 
                {id: 1, name: 'About', icon: mdiAccount, route:'/about' ,isHovered: false},
                {id: 2, name: 'Portfolio', icon: mdiBriefcase, route:'/portfolio' ,isHovered: false},
                {id: 3, name: 'Contact', icon: mdiEmailNewsletter, route:'/contact' ,isHovered: false},    
                ],
                lightBulb: mdiLightbulbOnOutline
                
        }
    },
    methods: {
        handleHover(item){
            item.isHovered = true
        },
        handleMouseOut(item){
            item.isHovered = false
        }
    }
    
   
}
</script>

<style>



    .header{
        right: 30px;
        display: flex;
        position: fixed;
        top: 50%;
        align-items: center;
        z-index: 10;
        transform: translateY(-50%);
        flex-direction: column;
    }

    .icon-menu:hover {
        transition: all 0.3s ease-in-out;
    }
    .icon-menu {
        transition: all 0.3s ease-in-out;
    }

    .header ul.icon-menu li.icon-box{
        width: 50px;
        height: 50px;
        list-style: none;
        position: relative;
        display: flex;
        align-items: center;
        transition: all .3s ease-in-out ;
        margin: 20px 0;
        border-radius: 50%;
        background: #2b2a2a;
        cursor: pointer;
        justify-content: center;
    }

    

    .header ul.icon-menu li.icon-box:hover{
        background-color: #ffb400;
        transition: 0.3s;
        
    }


    .theme-switch{
        position: fixed;
        top: -150px;
    }


    .icon-menu h4{
        display: none;
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        line-height: 50px;
        font-weight: 500;
        transition: all .3s ease-in-out;
        border-radius: 30px;
        text-transform: uppercase;
        padding: 0 60px 0 30px;
        height: 50px;
        margin: 0;
         background:#ffb400;
            color: #fff;
    }
    .icon-menu h4:hover{
        transition: all .3s ease-in-out;
    }
    .show-name{
        display: block!important;
    }

</style>