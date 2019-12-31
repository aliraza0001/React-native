import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";



const TabBar = props => {
  const {
    renderIcon,
    onTabPress,
    onTabLongPress,
    navigation
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;

  return (
    
    <View style={S.container}>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;

        return (
          <TouchableOpacity
            key={routeIndex}
            style={S.tabButton}
            onPress={() => {
              onTabPress({ route });
            }}
            onLongPress={() => {
              onTabLongPress({ route });
            }}
          >
            <View style={{borderBottomWidth:4,borderBottomColor:isRouteActive?"black":'transparent'}}>
            {renderIcon({ route, focused: isRouteActive})}
            </View>

          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const S = StyleSheet.create({
  container: { flexDirection: "row", height: 52,borderTopWidth:1,borderTopColor:'lightgrey' },
  tabButton: { flex: 1, justifyContent: "center", alignItems: "center"  }
});

export default TabBar;