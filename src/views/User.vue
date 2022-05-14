<template>
  <div class="dashboard">
    <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
      <h3>User</h3>
      <v-col lg="6" cols="12">
        <v-form>
          <v-text-field
            class="p-0 m-0 mt-6"
            full-width
            dense
            append-icon="mdi-magnify"
            outlined
            rounded
            placeholder="Search"
          />
        </v-form>
      </v-col>
      <!-- <template v-slot:item.action=""> -->
      <v-btn
        color="primary"
        dark
        class="mb-2"
        @click.stop="dialogCreate = true"
      >
        New User
      </v-btn>
      <!-- </template> -->
    </v-subheader>
    <br />
    <v-row>
      <v-col>
        <v-card>
          <v-data-table
            :headers="headers"
            :items="data"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:item.action="">
              <v-btn icon color="blue" @click.stop="dialogUpdate = true">
                <v-icon>mdi-key</v-icon>
              </v-btn>
              <v-btn icon color="error" @click.stop="dialogDelete = true">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- dialog create -->
    <v-dialog v-model="dialogCreate" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Create User</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  label="First Name*"
                  type="text"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Last Name*"
                  type="text"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Admin', 'User', 'Sub-Admin']"
                  label="Role"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Phone Number*"
                  type="text"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Repeat Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogCreate = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialogCreate = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- dialog update -->
    <v-dialog v-model="dialogUpdate" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">User Update</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Admin', 'User', 'Sub-Admin']"
                  label="Role"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Repeat Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogUpdate = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialogUpdate = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- dialog delete -->
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5"
          >Are you sure you want to delete this item?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogDelete = false"
            >Cancel</v-btn
          >
          <v-btn color="blue darken-1" text @click="deleteItemConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        { text: "Email", value: "email" },
        { text: "Role", value: "role" },
        { text: "Phone", value: "phone" },
        { text: "Joined At", value: "joinAt" },
        { text: "Actions", value: "action" },
      ],
      data: [
        {
          id: 1,
          name: "Han Kimhak",
          role: "Sub-Admin",
          email: "hankimhak@gmail.com",
          phone: "081707981",
          joinAt: "12-05-2022",
        },
        {
          id: 2,
          name: "Han Kimhak",
          role: "User",
          email: "hankimhak@gmail.com",
          phone: "081707981",
          joinAt: "12-05-2022",
        },
        {
          id: 3,
          name: "Han Kimhak",
          role: "User",
          email: "hankimhak@gmail.com",
          phone: "081707981",
          joinAt: "12-05-2022",
        },
        {
          id: 4,
          name: "Han Kimhak",
          role: "User",
          email: "hankimhak@gmail.com",
          phone: "081707981",
          joinAt: "12-05-2022",
        },
        {
          id: 4,
          name: "Han Kimhak",
          role: "User",
          email: "hankimhak@gmail.com",
          phone: "081707981",
          joinAt: "12-05-2022",
        },
      ],
      dialogCreate: false,
      dialogDelete: false,
      dialogUpdate: false,
    };
  },
  methods: {
    onButtonClick(item) {
      console.log("click on " + item.no);
    },

    deleteItemConfirm() {
      this.data.splice(this.editedIndex, 1);
      this.dialogDelete = false;
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
