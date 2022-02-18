import React from 'react';
import { connect } from 'react-redux';
import { Todo } from '../actions';
import { fetchTodos } from '../actions/index';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}
export class _App extends React.Component<AppProps> {
  render() {
    return <div>Hello</div>;
  }
}

const mapStatoToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStatoToProps, {fetchTodos})(_App)
