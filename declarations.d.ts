declare module '*.svg'{
    import React from 'react';
    import { Svgprops } from 'react-native-svg';

    const content: React.FC<Svgprops>;
    export default content;
}