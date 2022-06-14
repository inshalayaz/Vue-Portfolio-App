<template>
     <div class="contact-heading">
        <h1>{{heading}} <span class="secondary--text">{{span}}</span></h1>
        <span class="title-big">{{title}}</span>
    </div>
</template>


<script>
export default {
    name: 'pageTitle',
    props: ['heading', 'span', 'title']
}
</script>


<style>
 .contact-heading{
        padding: 80px 0;
        text-align: center;
    }
    .contact-heading h1{
        text-transform: uppercase;
        font-family: 'Poppins', sans-serif;
        font-size: 51px;
    }
    .title-big{
        font-size: 110px;
        left: 0;
        letter-spacing: 10px;
        line-height: .7;
        position: relative;
        right: 0;
        top: 5%;
        text-transform: uppercase;
        font-weight: 800;
        transform: translateY(-50%);
        color: hsla(0,0%,100%,.07);
    }
    </style>