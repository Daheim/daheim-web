import 'babel-polyfill';
import SourceMapSupport from 'source-map-support';
SourceMapSupport.install();

process.on('unhandledRejection', function(reason) {
	console.error('Unhandled rejection:', reason.stack); // eslint-disable-line no-console
});
