import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput, } from 'react-native';
import styles from './style';

export default class Modal extends Component {
    constructor(props){
        super(props);
        this.state={
            title: '',
            desc: ''
        }
    }

    addTask() {
        const { title, desc } = this.state;
        if (title === '' || desc === '') {
            alert('Please add title and description.')
            return;
        }
        this.setState({
            title: '',
            desc: ''
        }, () => {
            alert('Task added!');
            this.props.cancelModal();
        });
    }

    render(){
        const {modalTitle, cancelModal } = this.props;
        return (
            <View style={styles.modalContainer} onPress={() => cancelModal()}>
                <View style={styles.modalBoxContainer}>
                    <View style={styles.modalHeadingContainer}>
                        <Text>{modalTitle}</Text>
                    </View>
                    <View style={styles.modalContentContainer}>
                        <TextInput style={styles.textInput}
                            placeholder={'Title'}
                            autoCapitalize={false}
                            value={this.state.text}
                            onChangeText={(text) => this.setState({
                                title: text,
                            })} />
                        <TextInput style={styles.textInput}
                            placeholder={'Description'}
                            autoCapitalize={false}
                            value={this.state.desc}
                            onChangeText={(text) => this.setState({
                                desc: text,
                            })} />
                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity style={styles.loginButton} onPress={() => cancelModal()}>
                                <Text style={styles.loginButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginButton} onPress={() => this.addTask()}>
                                <Text style={styles.loginButtonText}>Add task</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}