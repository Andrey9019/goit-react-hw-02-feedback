import React from "react";
import Section from "components/Section/Section";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOption";
import Statistics from "components/Statistics/Statistics";
import Notification from "components/Notification/Notification";

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };



  countTotalFeedback() {
      const values = Object.values(this.state);
    return values.reduce((acc, item) => (acc += item), 0);
  }

  countPositiveFeedback() {
      const { good } = this.state;
    return ((good / this.countTotalFeedback()) * 100).toFixed(0);
  }



  handleFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    const totalFeedback = this.countTotalFeedback();

    return (
      <React.Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)} 
            handleFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics:">
          {totalFeedback > 0 ? (
            <Statistics
              state={this.state}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedback={this.countPositiveFeedback()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </React.Fragment>
    );
  }
}


