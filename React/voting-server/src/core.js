import {List, Map} from 'immutable';

export const INITIAL_STATE = Map();

/*
export function setEntries(state, entries) {
  const list = List(entries);
  return state.set('entries', list)
              .set('initialEntries', list);
}
*/
/*
export function setEntries(state, entries) {
    return state.set('entries', entries);
  }
*/
export function setEntries(state, entries) {
    return state.set('entries', List(entries));
  }


function getWinners(vote) {
  if (!vote) return [];
  const [one, two] = vote.get('pair');
  const oneVotes = vote.getIn(['tally', one], 0);
  const twoVotes = vote.getIn(['tally', two], 0);
  if      (oneVotes > twoVotes)  return [one];
  else if (oneVotes < twoVotes)  return [two];
  else                           return [one, two];
}

/*
export function next(state, round = state.getIn(['vote', 'round'], 0)) {
  const entries = state.get('entries')
                       .concat(getWinners(state.get('vote')));
  if (entries.size === 1) {
    return state.remove('vote')
                .remove('entries')
                .set('winner', entries.first());
  } else {
    return state.merge({
      vote: Map({
        round: round + 1,
        pair: entries.take(2)
      }),
      entries: entries.skip(2)
    });
  }
}
*/
/*
export function next(state) {
    const entries = state.get('entries');
    return state.merge({
      vote: Map({pair: entries.take(2)}),
      entries: entries.skip(2)
    });
  }
*/
/*
export function next(state) {
    const entries = state.get('entries')
                         .concat(getWinners(state.get('vote')));
    return state.merge({
      vote: Map({pair: entries.take(2)}),
      entries: entries.skip(2)
    });
  }
*/
export function next(state) {
    const entries = state.get('entries')
                         .concat(getWinners(state.get('vote')));
    if (entries.size === 1) {
      
      return state.remove('vote')
                  .remove('entries')
                  .set('winner', entries.first());
      
       /*
       We could have just returned Map({winner: entries.first()}) here. 
       But instead we still take the old state as the starting point 
       and explicitly remove 'vote' and 'entries' keys from it. 
       The reason for this is future-proofing: At some point 
       we might have some unrelated data in the state, 
       and it should pass through this function unchanged. 
       It is generally a good idea in these state 
       transformation functions to always morph 
       the old state into the new one instead of building 
       the new state completely from scratch.
       */           
       /*
       return Map({winner: entries.first()});
       */
    } else {
      return state.merge({
        vote: Map({pair: entries.take(2)}),
        entries: entries.skip(2)
      });
    }
  }

export function restart(state) {
  const round = state.getIn(['vote', 'round'], 0);
  return next(
    state.set('entries', state.get('initialEntries'))
         .remove('vote')
         .remove('winner'),
    round
  );
}

function removePreviousVote(voteState, voter) {
  const previousVote = voteState.getIn(['votes', voter]);
  if (previousVote) {
    return voteState.updateIn(['tally', previousVote], t => t - 1)
                    .removeIn(['votes', voter]);
  } else {
    return voteState;
  }
}

function addVote(voteState, entry, voter) {
  if (voteState.get('pair').includes(entry)) {
    return voteState.updateIn(['tally', entry], 0, t => t + 1)
                    .setIn(['votes', voter], entry);
  } else {
    return voteState;
  }
}

/*
export function vote(voteState, entry, voter) {
  return addVote(
    removePreviousVote(voteState, voter),
    entry,
    voter
  );
}
*/
/*
export function vote(state, entry) {
    return state.updateIn(
      ['vote', 'tally', entry],
      0,
      tally => tally + 1
    );
  }
*/
  export function vote(voteState, entry) {
    return voteState.updateIn(
      ['tally', entry],
      0,
      tally => tally + 1
    );
  }