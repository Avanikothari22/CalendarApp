import React, { Component } from 'react';
import { View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { Calendar } from 'react-native-calendars';
import Modal from '@components/Modal';
import { add_icon } from '@constants/assets';
const _today = new Date().toISOString().substring(0, 10);

class CalendarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: '',
            markedDates: {
                [_today]: { selected: true, selectedColor: 'red' }
            }
        }
    }
    onDaySelect = (day) => {
        const selectedDay = day.dateString;
        const updatedMarkedDates = { [selectedDay]: { selected: true, selectedColor: 'red' } }

        // Triggers component to render again, picking up the new state
        this.setState({ markedDates: updatedMarkedDates });
    }

    renderCalendarView() {
        return (
            <Calendar
                markedDates={this.state.markedDates}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => this.onDaySelect(day)}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={(day) => { console.log('selected day', day) }}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'MMM yyyy'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={(month) => { console.log('month changed', month) }}
                // Hide month navigation arrows. Default = false
                hideArrows={false}
                // Replace default arrows with custom ones (drenderArrow={(direction) => (<Arrow />)}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={true}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}
                // Hide day names. Default = false
                hideDayNames={false}
                // Show week numbers to the left. Default = false
                showWeekNumbers={true}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={substractMonth => substractMonth()}
                // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
                theme={{
                    selectedDayBackgroundColor: 'red',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: 'red',
                    monthTextColor: 'red',
                    arrowColor: 'red',
                }}
            />
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    {this.renderCalendarView()}
                    <TouchableOpacity style={styles.addIconContainer} onPress={() => this.setState({ showModal: true })}>
                        <Image source={add_icon} style={{ width: 50, height: 50 }} />
                    </TouchableOpacity>
                </View>
                {this.state.showModal && <Modal modalTitle={'Add a Task'} cancelModal={()=>this.setState({showModal:false})}/>}
            </SafeAreaView>
        )
    }
}
export default CalendarComponent;