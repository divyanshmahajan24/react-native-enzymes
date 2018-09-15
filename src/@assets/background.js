// const init = () => {
//   chrome.runtime.onConnect.addListener(function(port) {
//     if (port.name === 'qtPopup') {
//       consele.log('popup opened!');
//       popupMessagePort = port;

//       popupMessagePort.onDisconnect.addListener(function(msg) {
//         console.log('popup closed!', msg);
//         popupMessagePort = null;
//       });
//     }
//   });
// };

// init();
