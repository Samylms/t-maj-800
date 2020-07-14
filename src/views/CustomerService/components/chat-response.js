import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';

export default class ChatResponse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      message: '',
      trigger: false,
    };

    this.triggetNext = this.triggetNext.bind(this);
  }

  componentWillMount() {
    const self = this;
    const { steps } = this.props;
    const question = encodeURI(steps.ask.value);

    const queryUrl = 'http://' + (process.env.AI_HOST || 'localhost') + ':' + (process.env.AI_PORT || '5000') + '/chat?message=' + question;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', readyStateChange);

    function readyStateChange() {
      if (this.readyState === 4) {
        const data = this.responseText;
        self.setState({ loading: false, message: data });
		triggerNext();
      }
    }

    xhr.open('GET', queryUrl);
    xhr.send();
  }

  triggerNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render() {
    const { trigger, loading, message } = this.state;

    return (
      <div className="ChatResponse">
        { loading ? <Loading /> : message }
      </div>
    );
  }
}

ChatResponse.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

ChatResponse.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};
