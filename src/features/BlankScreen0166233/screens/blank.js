import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {}
  render = () => (
    <View>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen1166234")}
      >
        <Image
          source={{
            uri:
              "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/The-Circuit-Complete-Logo_qAt3ibE.png"
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },
  View_1: {},
  Image_2: {}
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
