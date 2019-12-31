import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        height: "100%",
        margin: 15
    },
    signedUp: {
        height: 45,
        width: "100%",
        backgroundColor: "#c9f3c4",
        borderWidth: 2,
        borderColor: "#74cf3c",
        display: "flex",
        justifyContent: "center"
    },
    signedUpText: {
        fontSize: 18,
        marginLeft: 10,
        color: "grey"
    },
    backgroundImage: {
        width: "100%",
        height: 300,
        marginTop: 24,
        display: "flex",
        justifyContent: "flex-end"
    },
    imageOverlay: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    overlayContent: {
        height: 50,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    overlayFont: {
        fontSize: 18,
        color: "#fff",
    },
    headingContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 24
    },
    headerBox: {
        display: "flex",
        alignItems: "center",
    },
    header: {
        fontSize: 24,
        color: "#666",
        fontStyle: "italic"
    },
    locationBox: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row"
    },
    locationIcon: {
        height: 18,
        width: 18,
        marginRight: 5,
        marginLeft: 5
    },
    location: {
        fontSize: 18,
        color: "grey"
    },
    imageBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    img: {
        height: width / 4.8,
        width: width / 4.8,
        borderRadius: width / 4.8
    },
    rating: {
        width: 55,
        height: 20,
        marginTop: 5
    },
    paragraph: {
        fontSize: 16,
        marginTop: 10,
        color: "grey"
    },
    heading: {
        fontSize: 26,
        color: "grey",
        marginTop: 16
    },
    peopleBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        height: width / 4.4,
        width: width / 4.4,
        borderRadius: width / 4.4,
        margin: 2.5
    },
    peopleImage: {
        height: width / 4.4,
        width: width / 4.4,
        borderRadius: width / 4.4,
    },
    morePeople: {
        backgroundColor: "#63c741",
        height: width / 4.4,
        width: width / 4.4,
        borderRadius: width / 4.4,
        display: "flex",
        margin: 2.5,
        justifyContent: "center",
        alignItems: "center"
    },
    morePeopleText: {
        color: "#fff",
        fontSize: 32
    },
    mapContainer: {
        width: "100%",
        height: 300,
        marginTop: 10,
        marginBottom: 80
    },
    map: {
        width: "100%",
        height: 300,
    },
});
