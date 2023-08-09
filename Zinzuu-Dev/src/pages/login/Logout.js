const Logout = () => { 
    sessionStorage.removeItem('token');
    window.location.href = '/partner';

}
export default Logout;