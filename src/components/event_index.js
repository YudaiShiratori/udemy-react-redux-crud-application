import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { readEvents } from '../actions';

class EventsIndex extends Component {
  componentDidMount() {
    console.log('Didmount');
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>{console.log(props.events)}</div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Tbody</th>
            </tr>
          </thead>

          <tbody>{this.renderEvents()}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ state: state.events });

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

const mapDispatchToProps = { readEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
