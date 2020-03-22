import _ from 'lodash';
import { READ_EVENTS } from '../actions';

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id');
    // console.log(action.response.data);
    // console.log(_.mapKeys(action.response.data, 'id'));
    // [
    //   {
    //       id: 1,
    //       title: "Let's have an event 1!",
    //       body: 'This is the body for event 1.'
    //   },
    //   {
    //     id: 2,
    //     title: "Let's have an event 2!",
    //     body: 'This is the body for event 2.'
    //   }
    // ];
    //  ↓ 番号をつけて取り出しやすくlodashを用いる
    // [
    //   {
    //     1: {
    //       id: 1,
    //       title: "Let's have an event 1!",
    //       body: 'This is the body for event 1.'
    //     }
    //   },
    //   {
    //     2: {
    //       id: 2,
    //       title: "Let's have an event 2!",
    //       body: 'This is the body for event 2.'
    //     }
    //   }
    // ];
    default:
      return events;
  }
};
