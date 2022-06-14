<template>
<div class="portfolio">
<v-container>
    <v-row>
        <v-col class="col-md-12">
            <PageTitleVue heading="My" span="portfolio" title="Working"></PageTitleVue>
        </v-col>
        <v-col class="col-md-12">
            <v-tabs centered background-color="accent" active-class="active">
                <v-tab v-for="tab in tabs" :key="tab.id" :ripple="false" >
                    <h5 class="text-uppercase white--text tab-title"> {{tab.title}} </h5>
                </v-tab>
                    <v-tab-item class="pt-8 tab-image-container" :style="accent" v-for="(tab, index) in tabContent" :key="index" >
                    <v-col class="col-md-4" v-for="item in tab" :key="item.id" >
                        <v-tabs-items>
                                <PortfolioCard :img="item.img" style="cursor: pointer" :url="item.url"></PortfolioCard>
                        </v-tabs-items>
                    </v-col>
                    </v-tab-item>
            </v-tabs>
        </v-col>
    </v-row>
</v-container>

</div>
</template>

<script>
import PageTitleVue from '../components/PageTitle.vue';
import PortfolioCard from '../components/PortfolioCard.vue';

export default {
    name: "portfolio",
    components: { PageTitleVue, PortfolioCard },
    data(){
        return {
            tabs: [{id: 0, title: 'all'}, {id: 1, title: 'React'}, {id: 2, title: 'vue'}, {id: 3, title: 'wordpress'}],
            tabContent: [
                [{ id: 0, img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', url: 'inshalayaz.site' }, { id: 1, img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', url: 'shoestore.inshalayaz.site'}, { id: 3, img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', url: 'inshalayaz.site' } ],
                [{ id: 0, img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', url: 'inshalayaz.site' }, { id: 1, img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', url: 'inshalayaz.site'}, { id: 3, img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', url: 'inshalayaz.site' } ],
                [{ id: 0, img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', url: 'inshalayaz.site' }, { id: 1, img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', url: 'inshalayaz.site'}, { id: 3, img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', url: 'inshalayaz.site' } ],
                [{ id: 0, img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', url: 'inshalayaz.site' }, { id: 1, img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', url: 'inshalayaz.site'}, { id: 3, img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', url: 'inshalayaz.site' } ]
            ]
        }
    }
}
</script>

<style>
    .tab-title{
        font-family: Poppins, serif;
        font-weight: 300;
        font-size: 14px;
    }
    .active{
        background: #ffb400;
    }
    .v-tabs-slider-wrapper{
        display: none;
    }
    .tab-image-container{
        display: flex;
    }
</style>