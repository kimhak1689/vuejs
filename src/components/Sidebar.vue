<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-img height="140" class="pa-4" src="@/assets/background.jpeg">
      <div class="text-center">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img aspect-ratio="30" src="@/assets/icon.png" />
        </v-avatar>
        <h5 class="white--text">COVID-19 Information</h5>
      </div>
    </v-img>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["drawer"],
  data: () => ({
    drawer: null,
    items: [
      { title: "Dashboard", icon: "mdi-microsoft-windows", link: "/" },
      { title: "News", icon: "mdi-email-newsletter", link: "/news" },
      { title: "User", icon: "mdi-account-multiple", link: "/user" },
      { title: "My Profile", icon: "mdi-account", link: "/my-profile" },
      { title: "System Setting", icon: "mdi-cog", link: "/about" },
    ],
  }),
};
</script>

<style scoped></style>
