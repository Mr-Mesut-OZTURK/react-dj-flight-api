
const isLogin =  localStorage.getItem('isLogin')?localStorage.getItem('isLogin'):""

const initialState = {
    isLogin : isLogin,
    flights : []
}

export default initialState