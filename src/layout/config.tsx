import { Dashboard, ShoppingBag } from "@mui/icons-material";

export const navConfig = [
  {
    subheader: "general",
    items: [
      {
        title: "Dashboard",
        path: "/dashboard/app",
        icon: <Dashboard />,
      },
      {
        title: "E-Commerce",
        path: "/dashboard/ecommerce",
        icon: <ShoppingBag />,
        children: [
          { title: "Shop", path: "/dashboard/ecommerce/shop" },
          { title: "Product", path: "/dashboard/ecommerce/product" },
          { title: "List", path: "/dashboard/ecommerce/list" },
          { title: "Create", path: "/dashboard/ecommerce/create" },
          { title: "Edit", path: "/dashboard/ecommerce/edit" },
          { title: "Checkout", path: "/dashboard/ecommerce/checkout" },
        ],
      },
    ],
  },
  // ... more navigation sections
];
