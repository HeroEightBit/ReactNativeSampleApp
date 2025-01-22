module.exports = {
    react : {
        debug : true,

        lifecycle : {
            /**
             * Decide if you want to see Update Cycles as well
             */
            includeUpdate: false,

            /**
             * Filter for Instrumenting Lifecycle of Components / True = Will be instrumented
             */
            instrument: (filename) => {
                return false;
            }
        },

        input : {
            /**
             * Allows you to filter the instrumentation for touch events, refresh events and picker events in certain files
             * True = Will be instrumented
             */
            instrument: (filename) => {
                return true;
            }
        }
    },
    android : {
        // Those configs are copied 1:1
        config : `
        dynatrace {
            configurations {
                defaultConfig {
                    autoStart {
                        applicationId '99104456-8f2e-4975-b917-353c629ee34e'
                        beaconUrl 'https://bf96366zqj.bf-dev.dynatracelabs.com/mbeacon'
                    }
                    userOptIn false
                    agentBehavior.startupLoadBalancing true
                }
            }
        }
        `
    },
    ios : {
        // Those configs are copied 1:1
        config : `
        <key>DTXApplicationID</key>
        <string>99104456-8f2e-4975-b917-353c629ee34e</string>
        <key>DTXBeaconURL</key>
        <string>https://bf96366zqj.bf-dev.dynatracelabs.com/mbeacon</string>
        <key>DTXLogLevel</key>
        <string>ALL</string>
        <key>DTXUserOptIn</key>
        <false/>
        <key>DTXStartupLoadBalancing</key>
        <true/>
        `
    }
}
