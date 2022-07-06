import calculate from '../logic/calculate';

test ('Testing Calculate function', () => {
  expect (calculate ({total: '2', next: '5', operation: '+'}, 'AC')).toEqual ({
    total: null,
    next: null,
    operation: null,
  });
});
