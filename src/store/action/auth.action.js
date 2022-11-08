import {Http} from '../../config/Http'
import {changeLoading} from './loading.action'
import {changeNotify} from './notify.action'


export const actionTypes = {
CHANGE: 'AUTH_CHANGE',
SUCCESS: 'AUTH_SUCCESS'

}

export const change = (payload) => ({
  type: actionTypes.CHANGE,
  payload
})

export const success = (payload) => ({
  type: actionTypes.SUCCESS,
  payload
})

export const setUserToken = token => dispatch => {
    localStorage.setItem('access_token', token); // seta access_token no local storage
    dispatch(change({
        email: '',
        password: ''
    })) // limpa os campos 
    dispatch(success(true)) // após setar access_token no local storage  muda o success para true
}

export const login = credentials => dispatch => {
    dispatch(changeLoading({
        open: true,
        msg: 'Autenticando usuário...'
    }))

    return Http.post('oauth/token', {
        grant_type: 'password',
        client_id: 2,
        client_secret: '5qNA165OqQjAaXBcPeO2Wa38JfZarq2flyec5pWm',
        username: credentials.email,
        password: credentials.password
    })
    .then( res => {
        dispatch(changeLoading({ open: false}));
    
        if(typeof res !== 'undefined'){
            if(res.data.access_token){
                dispatch( setUserToken(res.data.access_token));
            }
        }
    })
    .catch(error=> {
        dispatch(changeLoading({ open: false}));

        if(typeof error.response !== 'undefined'){
            if(error.response.status === 401 || error.response.status === 400){
                dispatch(changeNotify({
                    open: true,
                    class: 'error',
                    msg: 'E-mail ou senha incorretos'
                }))
            }
        } else {
            dispatch(changeNotify({
                open: true,
                class: 'error',
                msg: 'Erro ao se conectar ao servidor'
            }))
        }
    })

   
}