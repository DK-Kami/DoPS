import services from './services';
import WebClient from './WebClient';
import injectServices from './injectServices';

export default injectServices(services, WebClient);
