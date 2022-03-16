/* eslint-disable */
import { reactive } from "vue";
import {
  personOutline,
  womanOutline,
  laptopOutline,
  phonePortraitOutline,
  bookOutline,
} from "ionicons/icons";
function useNavigation() {
  const menuItems = reactive([
    { id: 1, title: "Men", icon: personOutline, path: "/mens", name: "mens" },
    {
      id: 2,
      title: "Woman",
      icon: womanOutline,
      path: "/womans",
      name: "womans",
    },
    {
      id: 3,
      title: "Laptop",
      icon: laptopOutline,
      path: "/laptops",
      name: "laptops",
    },
    {
      id: 4,
      title: "Mobile",
      icon: phonePortraitOutline,
      path: "/mobiles",
      name: "mobiles",
    },
    { id: 5, title: "Book", icon: bookOutline, path: "/books", name: "books" },
  ]);

  return {
    menuItems,
    personOutline,
    womanOutline,
    laptopOutline,
    phonePortraitOutline,
    bookOutline,
  };
}

export default useNavigation;
