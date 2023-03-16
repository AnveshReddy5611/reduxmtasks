import { StyleSheet, Text, Button, View } from "react-native";
import { connect } from "react-redux";
import React from "react";
import { multiplyFive } from "../src/redux";
import { useSelector, useDispatch } from "react-redux";
const FiveContainer = (props) => {
  const dispatch = useDispatch();
  //const val_five = useSelector((state) => state.five.val_five);
  return (
    <View>
      <Text>FiveContainer</Text>
      <Text>{props.val_five}</Text>
      <Button onPress={props.multiplyFive}>
        <Text>Multiply by 5</Text>
      </Button>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    val_five: state.five.val_five,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    multiplyFive: () => dispatch(multiplyFive()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiveContainer);

const styles = StyleSheet.create({});
