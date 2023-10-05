import React, { Component, useState } from "react";
import { Button, TextInput, Text, View } from "react-native";

class ClassComponent extends Component {
    render() {
        return (
            <View>
                <Text style={{ color: "red", fontSize: 30 }}>Class Component</Text>
                <Text style={{ color: "red", fontSize: 30 }}>Welcome {this.props.name} {this.props.item} </Text>
                <Button title="Click here" onPress={ this.props.name} />
            </View>
        )
    }
}

export default ClassComponent;