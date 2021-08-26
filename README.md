This project contains a failing example for https://github.com/facebook/react/issues/20417#issuecomment-906545335

- Run `yarn`, followed by `yarn serve`.
- Observe the issue when removing the comment in `Component`
- The issue does not occur if `observe` is left out

I think the exact workings of Mobx are irrelevant, but it is probably interesting to see what the decorator does: https://github.com/mobxjs/mobx/blob/main/packages/mobx-react-lite/src/observer.ts