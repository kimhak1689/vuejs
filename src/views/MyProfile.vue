<template>
  <div class="dashboard">
    <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
      <h3>My Profile</h3>
    </v-subheader>
    <br />
    <v-row>
      <v-col>
        <v-card>
          <v-tabs>
            <v-tab>Personal Info</v-tab>
            <v-tab>Change Password</v-tab>

            <v-tabs-items v-model="model">
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :value="`tab-${i}`"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      headers: [
        {
          text: "No.",
          align: "start",
          sortable: true,
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "Role", value: "role" },
        { text: "Joined At", value: "joinAt" },
        { text: "Actions", value: "action" },
      ],
      data: [
        {
          id: 1,
          name: "Han Kimhak",
          role: "Sub-Admin",
          joinAt: "12-05-2022",
        },
        {
          id: 2,
          name: "Han Kimhak",
          role: "User",
          joinAt: "12-05-2022",
        },
        {
          id: 3,
          name: "Han Kimhak",
          role: "User",
          joinAt: "12-05-2022",
        },
        {
          id: 4,
          name: "Han Kimhak",
          role: "User",
          joinAt: "12-05-2022",
        },
        {
          id: 4,
          name: "Han Kimhak",
          role: "User",
          joinAt: "12-05-2022",
        },
      ],
    };
  },
  methods: {
    onButtonClick(item) {
      console.log("click on " + item.no);
    },
  },
};
</script>

<style scoped>
.overlap-icon {
  position: absolute;
  top: -33px;
  text-align: center;
  padding-top: 12px;
}
</style>
