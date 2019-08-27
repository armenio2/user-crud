

const getList = () => {
    const data = {
        data: localStorage.getItem("listStorage"),
        sucess: true
    }
    return data
}

const postList = (data) => {
    const haveInList = getList().find((el) => el.cpf = data.cpf)
    if (haveInList) {
        return 'error'
    } else {
        const list = {
            ...getList(),
            data
        }
        localStorage.setItem("listStorage", list)
        return 'sucess'
    }
}

/**
 *  Func(type, data)
 *  type  = get, post , update, delete
 */
const LocalList = (type, data) => {
    switch (type) {
        case 'get':
            return getList()
        case 'post':
            return postList(data)
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

export default LocalList;