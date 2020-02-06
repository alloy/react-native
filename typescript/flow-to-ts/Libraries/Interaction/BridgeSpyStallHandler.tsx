'use strict';;
import JSEventLoopWatchdog from './JSEventLoopWatchdog';
import MessageQueue from '../BatchedBridge/MessageQueue';
import infoLog from '../Utilities/infoLog';

const BridgeSpyStallHandler = {
  register: function () {
    let spyBuffer = [];
    MessageQueue.spy(data => {
      spyBuffer.push(data);
    });
    const TO_JS = 0;
    JSEventLoopWatchdog.addHandler({
      onStall: () => {
        infoLog(spyBuffer.length + ' bridge messages during stall: ', spyBuffer.map(info => {
          let args = '<args>';
          try {
            args = JSON.stringify(info.args);
          } catch (e1) {
            if (Array.isArray(info.args)) {
              args = info.args.map(arg => {
                try {
                  return JSON.stringify(arg);
                } catch (e2) {
                  return '?';
                }
              });
            } else {
              args = 'keys:' + JSON.stringify(Object.keys(info.args));
            }
          }
          return `${info.type === TO_JS ? 'N->JS' : 'JS->N'} : ` + `${info.module ? info.module + '.' : ''}${info.method}(${JSON.stringify(args)})`;
        }));
      },
      onIterate: () => {
        spyBuffer = [];
      }
    });
  }
};

export default BridgeSpyStallHandler;
