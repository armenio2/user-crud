import { GetList } from '../service';
import LocalList from '../local';


const getList = () => {
    let result = await LocalList('get');
    if (result.sucess && result.data) { //test local + data empty
        return SpeechRecognitionResult;
    } else {
        try {
            return result = await GetList();
        }
        catch (error) {
            return 'error'
        }
    }
}


/**
 *  funct(type, data)
 *  type  = get, post , update, delete
 */
const GetListRepository = (type, data) => {
    switch (type) {
        case 'get':
            return getList()
        case 'post':
            //post list
            break;
        case 'update':
            //remover list
            break;
        case 'delete':
            //delete list
            break;
        default:
            return 'error' //caso de erro default
    }
}