import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 100,
    duration: '30s',

    thresholds: {
        http_req_duration: ['p(95)<341'],
        http_req_failed: ['rate<0.01'],

    },
};

export default function () {
    const response = http.get('https://test.k6.io/');

    check(response, {
        'status is 200': (r) => r.status === 200,
    });
}
