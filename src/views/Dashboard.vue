<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3>Dashboard</h3>
            <!-- <v-btn color="success">
                View Activity
            </v-btn> -->
        </v-subheader>
        <br>
        <v-row>
            <v-col lg="7" cols="12">
                <v-alert dense text type="success">
                    Login Successfully! Welcome to <strong>COVID-19 Information</strong>
                </v-alert>
                <v-row>
                    <v-col lg="6" cols="12" v-for="(item,index) in activityLog" :key="index">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>{{ item.title }}</strong> <br>
                                    <span>Last 3 weeks</span>
                                </div>
                                <v-avatar size="60" :color="item.color" style="border: 3px solid #444">
                                    <span style="color: white">{{item.amount}} +</span>
                                </v-avatar>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-space-between">


                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" lg="5">
                <v-card>
                    <!-- <v-card-title>Activities</v-card-title>
                    <v-card-text class="py-0">
                        <v-timeline align-top dense>
                            <v-timeline-item color="indigo" small>
                                <strong>5 Minuts ago</strong>
                                <div class="text-caption">
                                   You have new order please check this out
                                </div>
                            </v-timeline-item>
                            <v-timeline-item color="green" small>
                                <strong>35 Minuts ago</strong>
                                <div class="text-caption mb-2">
                                    A Product has delivered!
                                </div>
                            </v-timeline-item>

                            <v-timeline-item color="indigo" small>
                                <strong>44 Minuts ago</strong>
                                <div class="text-caption">
                                    You have new order please check this out
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text> -->
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-data-table
                            caption="Recent Users Join"
                            :headers="headers"
                            :items="data"
                            :items-per-page="5"
                            class="elevation-1"
                    >
                        <template v-slot:item.action="">
                            <v-btn color="success" outlined small shaped >View</v-btn>
                        </template>
                    </v-data-table>
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
                activityLog: [
                    {title: 'Total Cases', amount: 50, icon: 'mdi-account', color: 'cyan lighten-3'},
                    {title: 'Treatments', amount: 3433, icon: 'mdi-account-group-outline', color: 'green darken-2'},
                    {title: 'Death', amount: 3433, icon: 'mdi-account-group-outline', color: 'blue-grey darken-1'},
                    {
                        title: 'Community Cases',
                        amount: 3433,
                        icon: 'mdi-account-group-outline',
                        color: 'deep-orange darken-1'
                    },
                    {
                        title: 'Vacinnation',
                        amount: 3433,
                        icon: 'mdi-account-group-outline',
                        color: 'purple darken-1'
                    },
                ],

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
            
                
            }
        },
        methods: {
            onButtonClick(item) {
                console.log('click on ' + item.no)
            }
        }

    }
</script>

<style scoped>
    .overlap-icon {
        position: absolute;
        top: -33px;
        text-align: center;
        padding-top: 12px;
    }
</style>