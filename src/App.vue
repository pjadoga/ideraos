<template>
  <v-app >
    <v-navigation-drawer
      class="blue lighten-3"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
    >
      <v-list 
        dense  
      >
        <v-list-tile
          v-for= "item in menus" 
          :key= "item.tag"
          router
          :to= "item.url"
          class=" white--text"
        >
          <v-list-tile-action>
            <v-icon >
              {{ item.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
              {{ item.tag }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="white darken-3"
      dark
      app
      fixed
      flat
      class=" blue--text"
    >
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
        <v-card 
          flat
          round
          class="hidden-sm-and-down white" >
          <v-img :src = "require('@/assets/logo.svg')" style=" width: 50%"/>
        </v-card>
      </v-toolbar-title>
      <label>Search:</label>
      <v-text-field
        solo-inverted
        round
        append-inner-icon="search"
        label="Search"
        class=" blue--text darken-5"
      ></v-text-field>
      <v-spacer></v-spacer>
      <!-- <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn> -->
      <v-btn icon class=" blue darken-3">
        <v-icon>notifications</v-icon>
      </v-btn>
      <span > Username</span>
      <v-btn icon large>
        <!-- <v-avatar size="32px" tile> -->
          <v-icon>account_circle</v-icon>
        <!-- </v-avatar> -->
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        // dialog: false,
        drawer: true,
        menus:[
          { icon: 'apps',     tag: 'Dashboard', url:'/' },
          { icon: 'shopping_cart',    tag: 'Products',  url:'/products' },
          { icon: 'description',    tag: 'Orders',    url:'/orders' },
          { icon: 'assessment',  tag: 'Insights',  url:'/insights', },
          { icon: 'settings', tag: 'Settings',  url:'/settings'},
        ]
      }
    },
  }
  </script>