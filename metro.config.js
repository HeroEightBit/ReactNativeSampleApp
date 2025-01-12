const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    transformer: {
        babelTransformerPath: require.resolve('@dynatrace/react-native-plugin/lib/dynatrace-transformer')
      },
    
      reporter: require("@dynatrace/react-native-plugin/lib/dynatrace-reporter")
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
