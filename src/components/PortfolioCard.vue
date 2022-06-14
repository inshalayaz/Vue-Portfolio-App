

<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
            <div class="portfolioCard"  v-bind="attrs" v-on="on">
                <v-card class="mx-auto" max-width="400">
                    <v-img class="white--text align-end" height="200px" :src="img"></v-img>
                </v-card>
            </div>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >{{url}}</v-toolbar>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>


<script>
export default {
    name: 'PortfolioCard',
    props: ['img', 'url'],
}
</script>

<style></style>