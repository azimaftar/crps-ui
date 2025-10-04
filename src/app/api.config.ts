
import { environment } from '../environments/environment';

export const apiConfig = {
  apiUrlBkp : environment.production
    ? '/bkp-services/v1/BKP'
    : 'http://localhost:8080/BKP',
  apiUrlSec : environment.production
    ? '/sec-services/v1/SEC'
    : 'http://localhost:9091/SEC',
  apiUrlBioHub : environment.production
    ? '/niise-abis-service/v1/abis'
    : 'http://localhost:8081/api/v1/abis'
    // : 'http://localhost:9092/biohub'
};
