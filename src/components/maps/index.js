import React from 'react';
// import { StyleSheet, View } from 'react-native';
import { Alert, StyleSheet, Text, View, TouchableOpacity,PermissionsAndroid,Image } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView,{ PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';

class Map extends React.Component{
  state={location: null,permission:false,
    region: {
      latitude: 24.8585882,
      longitude: 67.0647906,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  }

  componentDidMount(){
    this.requestPermission()
  }

  onRegionChange(region) {
    console.log(region)
    
  }



  requestPermission = async() => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Your Location',
          message:
            'We can Use Your Location  ' +
            'so you can Use Map Correctly.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
        this.setState({permission:true})
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }


  


  
  findCoordinates = () => {
 const has=  this.state.permission
    if(has) {
      Geolocation.getCurrentPosition(
        position => {
            const location = JSON.stringify(position);
            const updateRegien = {
              latitude:position.coords.latitude,
              longitude:position.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }
            this.setState({ location,region:updateRegien});
            this.Map.animateToRegion(updateRegien,1000)


        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    }
    
};


  render() {
    const {latitude,longitude} = this.state.region;
    return (
      <View style={styles.MainContainer}>

        <MapView
        provider={PROVIDER_GOOGLE}
        ref={ref=>{this.Map = ref}}
          style={styles.mapStyle}
          showsUserLocation={true}
          zoomEnabled={true}
          zoomControlEnabled={true}
          showsCompass={true}
          showsMyLocationButton={true}
          moveOnMarkerPress={true}
          showsBuildings={true}
          toolbarEnabled={true}
          initialRegion={this.state.region}
          >

          <Marker
          tracksViewChanges={true}
          draggable
            coordinate={{ latitude: latitude, longitude: longitude }}
            title={"Marker Title"}
            description={"Marker Description Text"}
            
          />

        </MapView>

        <TouchableOpacity onPress={this.findCoordinates}>
                    <Image style={{width:50,height:50,marginBottom:30,marginRight:300}}  source={require('../assets/map-location.png')} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    MainContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    mapStyle: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });

  export default Map;