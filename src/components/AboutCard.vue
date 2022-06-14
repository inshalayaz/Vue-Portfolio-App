<template>
    <v-col class="col-md-12 text-left about-card">
        <h3 class="about-heading font-weight-bold secondary--text" >{{number}}+</h3>
        
        <p class="m-0 text-uppercase">
            {{text}}
        </p>
        
    </v-col>

</template>

<script>
export default {
    name: 'AboutCard',
    props: {
        number: Number,
        text: String
    }
}
</script>


<style>
   .about-heading{
    font-family: Poppins, sans-serif;
    font-size: 50px;
   }
   .about-card{
    border: 1px solid #252525;
    border-radius: 5px;
    margin-bottom: 30px;
    padding: 25px 0 0 30px;
  }
  .about-card p{
    position: relative;
    padding-left: 45px;
  }
  .about-card p::before{
    content: '';
    position: absolute;
    height: 1px;
    width: 30px;
    background: #777;
    top: 13px;
    left: 0;
  }
</style>