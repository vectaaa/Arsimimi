import Reactotron, {networking} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

export const ReactotronConfig = Reactotron.configure({name: 'Arsimimi'})
  .useReactNative()
  .use(networking())
  .use(reactotronRedux())
  .connect();
