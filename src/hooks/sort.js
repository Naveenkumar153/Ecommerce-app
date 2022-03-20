/*eslint-disable*/
import { ref } from "vue";

function useSort(availableData) {
  const sorting = ref(null);
  //    const displayUser = computed(() => {
  //        if(!sorting.value){
  //            return availableData
  //        }
  //        return availableData.value
  //    })

  console.log(availableData.value);
  function sort(mode) {
    console.log(availableData);
    sorting.value = mode;
    console.log(sorting.value);
  }

  return {
    sort,
  };
}

export default useSort;
