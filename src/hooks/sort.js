/*eslint-disable*/
import { ref, computed } from "vue";

function useSort(availableData) {
  // sort logic
  const sorting = ref(null);
  const displayUser = computed(() => {
    if (!sorting.value) {
      return availableData.productsData;
    }
    return availableData.productsData.sort((a, b) => {
      if (sorting.value === "asc" && a.price.raw > b.price.raw) {
        return 1;
      } else if (sorting.value === "asc") {
        return -1;
      } else if (sorting.value === "desc" && a.price.raw > b.price.raw) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  function sort(mode) {
    sorting.value = mode.target.value;
  }

  return {
    sort,
    displayUser,
  };
}

export default useSort;
