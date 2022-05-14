<template>
  <div class="dashboard">
    <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
      <h3>News</h3>
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
      <v-btn
        color="primary"
        dark
        class="mb-2"
        @click.stop="dialogCreate = true"
      >
        Create News
      </v-btn>
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
                <v-icon>mdi-pencil</v-icon>
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
          <span class="text-h5">Create News</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Title*"
                  type="text"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Description*"
                  type="text"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Image*"
                  type="file"
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

    <!-- dialog create -->
    <v-dialog v-model="dialogUpdate" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit News</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Title*"
                  type="text"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Description*"
                  type="text"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Image*"
                  type="file"
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
        { text: "Title", value: "title" },
        { text: "Desctiption", value: "description" },
        { text: "Created At", value: "created" },
        { text: "Created By", value: "createdBy" },
        { text: "Actions", value: "action" },
      ],
      data: [
        {
          id: 1,
          title: "Covid 19 has spread...",
          description: "Covid 19 has spread...",
          created: "12-05-2022",
          createdBy: "Han Kimhak",
        },
        {
          id: 2,
          title: "Covid 19 has spread...",
          description: "Covid 19 has spread...",
          created: "12-05-2022",
          createdBy: "Han Kimhak",
        },
        {
          id: 3,
          title: "Covid 19 has spread...",
          description: "Covid 19 has spread...",
          created: "12-05-2022",
          createdBy: "Han Kimhak",
        },
        {
          id: 4,
          title: "Covid 19 has spread...",
          description: "Covid 19 has spread...",
          created: "12-05-2022",
          createdBy: "Han Kimhak",
        },
        {
          id: 5,
          title: "Covid 19 has spread...",
          description: "Covid 19 has spread...",
          created: "12-05-2022",
          createdBy: "Han Kimhak",
        },
        {
          id: 6,
          title: "Covid 19 has spread...",
          description: "Covid 19 has spread...",
          created: "12-05-2022",
          createdBy: "Han Kimhak",
        },
      ],
      dialogCreate: false,
      dialogUpdate: false,
      dialogDelete: false,
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
