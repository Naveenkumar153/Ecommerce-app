<template>
  <!-- eslint-disable -->
  <ion-page>
    <ion-content>
      <ion-button @click="sort('asc')">sort: Accending </ion-button>
      <ion-button @click="sort('desc')">sort: Desending</ion-button>
      <ion-list>
        <ion-item>
          <ion-select
            placeholder="sort by"
            interface="popover"
            @ionChange="sort($event)"
          >
            <ion-select-option value="">Clear Filter</ion-select-option>
            <ion-select-option value="asc"
              >Price: High to Low
            </ion-select-option>
            <ion-select-option value="desc"
              >Price: Low to High</ion-select-option
            >
          </ion-select>
        </ion-item>
      </ion-list>
      <ul>
        <li v-for="product of displayUser" :key="product.id">
          {{ product.value }}
        </li>
      </ul>
    </ion-content>
  </ion-page>
</template>

<script>
/* eslint-disable */
import {
  IonButton,
  IonList,
  IonItem,
  IonSelectOption,
  IonSelect,
} from "@ionic/vue";
import { computed, reactive, ref } from "vue";
export default {
  components: { IonButton, IonList, IonItem, IonSelectOption, IonSelect },
  setup() {
    let arr = reactive({
      productData: [
        { id: 1, value: "1" },
        { id: 2, value: "2" },
        { id: 3, value: "3" },
      ],
    });
    console.log(arr);
    console.log(arr.productData);
    const sorting = ref(null);

    let displayUser = computed(() => {
      if (!sorting.value) {
        return arr.productData;
      }
      return arr.productData.sort((a, b) => {
        if (sorting.value === "asc" && a.id > b.id) {
          return 1;
        } else if (sorting.value === "asc") {
          return -1;
        } else if (sorting.value === "desc" && a.id > b.id) {
          return -1;
        } else {
          return 1;
        }
      });
    });
    console.log(displayUser.value);
    function sort(mode) {
      sorting.value = mode.target.value;
      console.log(mode);
      console.log(mode.target.value);
      console.log(sorting.value);
    }
    return { displayUser, sort, sorting };
  },
};
</script>
