/* eslint-disable */
import { reactive } from "vue";
import {
  headsetOutline,
  womanOutline,
  laptopOutline,
  phonePortraitOutline,
  bookOutline,
} from "ionicons/icons";
function useNavigation() {
  const menuItems = reactive([
    { id: 1, title: "Headphones", icon: headsetOutline, path: "/headphones", name: "headphones" },
    {
      id: 2,
      title: "Laptop",
      icon: laptopOutline,
      path: "/laptops",
      name: "laptops",
    },
    {
      id: 3,
      title: "Mobile",
      icon: phonePortraitOutline,
      path: "/mobiles",
      name: "mobiles",
    },
    { id: 4, title: "Book", icon: bookOutline, path: "/books", name: "books" },
  ]);

  return {
    menuItems,
    headsetOutline,
    womanOutline,
    laptopOutline,
    phonePortraitOutline,
    bookOutline,
  };
}

export default useNavigation;
