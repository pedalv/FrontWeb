import {setEntries, next, restart, vote, INITIAL_STATE} from './core';



/*
What is interesting about the way this reducer 
works is how it can be generically used to take 
the application from one state to the next, 
given any type of action. Actually, given 
a collection of past actions, you can actually 
just reduce that collection into the current state. 
That's why the function is called a reducer: It 
fulfills the contract of a reduce callback function.

This ability to batch and/or replay a collection 
of actions is a major benefit of the action/reducer 
model of state transitions, when compared 
to calling the core functions directly. 

For example, given that actions are just 
objects that you can also serialize to JSON, 
you could easily send them over 
to a Web Worker and run your reducer logic there.

Note that we are using plain objects as actions 
instead of Immutable data structures. 
This is something Redux actually requires us to do.
*/

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_ENTRIES':
        return setEntries(state, action.entries);
    case 'NEXT':
        return next(state);
    case 'RESTART':
        return restart(state);
    case 'VOTE':
        return state.update('vote',
                            voteState => vote(voteState, action.entry, action.clientId));
  }
  return state;
}