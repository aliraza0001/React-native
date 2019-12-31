import React from 'react';
import { View, Text, ScrollView, Dimensions, ImageBackground, Image, SafeAreaView } from 'react-native';
import styles from "./styles";
const { height } = Dimensions.get("window")


export default (props) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.signedUp}>
                        <Text style={styles.signedUpText}>You are signed up</Text>
                    </View>
                    <ImageBackground source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB0nbWVGPfBNO6_59Mu-BwpTQBO4YWQ9t76frgHrE2PefJTWZ3" }} style={styles.backgroundImage}>
                        <View style={styles.imageOverlay}>
                            <View style={[styles.overlayContent, { width: 80 }]}>
                                <Text style={styles.overlayFont}>$ 10.00</Text>
                            </View>
                            <View style={[styles.overlayContent, { width: 130 }]}>
                                <Text style={styles.overlayFont}>14. Apr 15:00</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.headingContainer}>
                        <View style={styles.headerBox}>
                            <Text style={styles.header}>This is a header</Text>
                            <View style={styles.locationBox}>
                                <Image style={styles.locationIcon} source={{ uri: "https://image.flaticon.com/icons/png/512/64/64113.png" }} resizeMode="contain" />
                                <Text style={styles.location}>New York City</Text>
                            </View>
                        </View>
                        <View style={styles.imageBox}>
                            <Image style={styles.img} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRU6Gj5ycZa3NcXBH-Im9BilxnzI6PBWZyLCdMD7-ij5TQeP1c" }} />
                            <View><Image style={styles.rating} source={{ uri: "https://www.pinclipart.com/picdir/big/318-3183655_3000-x-700-0-5-star-rating-green.png" }} resizeMode="contain" /></View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                        <Text style={styles.paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                        <Text style={styles.paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                    </View>
                    <Text style={[styles.heading, { marginBottom: 10 }]}>People</Text>
                    <View style={styles.peopleBox}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.peopleImage} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRU6Gj5ycZa3NcXBH-Im9BilxnzI6PBWZyLCdMD7-ij5TQeP1c" }} />
                        </View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.peopleImage} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRU6Gj5ycZa3NcXBH-Im9BilxnzI6PBWZyLCdMD7-ij5TQeP1c" }} />
                        </View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.peopleImage} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRU6Gj5ycZa3NcXBH-Im9BilxnzI6PBWZyLCdMD7-ij5TQeP1c" }} />
                        </View>
                        <View style={styles.morePeople}>
                            <Text style={styles.morePeopleText}>+4</Text>
                        </View>
                    </View>
                    <Text style={styles.heading}>Location</Text>
                    <View style={styles.mapContainer}>
                        <Image source={{ uri: "https://miro.medium.com/max/5334/1*qYUvh-EtES8dtgKiBRiLsA.png" }} style={styles.map} />
                    </View>
                </View>
            </ScrollView >
        </SafeAreaView>
    )
}
