import {expectType} from 'tsd-check';
import supportsWebP from '.';

expectType<boolean>(await supportsWebP);
