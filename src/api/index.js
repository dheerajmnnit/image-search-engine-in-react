import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4MA_rB14kp7r8oNk59wlUrx6Fyh64GU-abMFqANAOCo'
    }
});