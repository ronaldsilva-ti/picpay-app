import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { colors } from "./utils/colors";
import PayButton from "./components/PayButton";

import HomeScreen from "./screens/Home/index";
import PayScreen from "./screens/Pay/index";
import WalletScreen from "./screens/Wallet/index";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Pay: {
    lib: AntDesign,
    name: "creditcard",
  },
  Wallet: {
    lib: AntDesign,
    name: "creditcard",
  },

  Notifications: {
    lib: Ionicons,
    name: "ios-notifications-outline",
  },
  Settings: {
    lib: AntDesign,
    name: "setting",
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Pay")
            return (
              <PayButton
                onPress={() => navigation.navigate("Pay")}
                focused={focused}
              />
            );
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: colors.secondary,
          borderTopColor: "rgba(255,255,255,0.2)",
        },
        activeTintColor: "#FFF",
        inactiveTintColor: "#92929c",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Inicio",
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: "Carteira",
        }}
      />
      <Tab.Screen
        name="Pay"
        component={PayScreen}
        options={{
          title: "",
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={WalletScreen}
        options={{
          title: "Notificações",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={WalletScreen}
        options={{
          title: "Ajustes",
        }}
      />
    </Tab.Navigator>
  );
}
